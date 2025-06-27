// Adiciona a tipagem para a função fbq do Facebook Pixel no objeto window
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

// ==============================================
// UTILITÁRIOS BASE PARA FACEBOOK CONVERSIONS API
// Documento de referência: FRONTEND_INTEGRATION.md
// ==============================================

// --- UTILITIES ---

function getCookie(name: string): string | undefined {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return undefined;
}

function setCookie(name: string, value: string, days = 365): void {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

function generateUUID(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function getExternalId(): string {
  let externalId = getCookie('fb_external_id');
  if (!externalId) {
    externalId = generateUUID();
    setCookie('fb_external_id', externalId, 365);
  }
  return externalId;
}

function getUrlParameters(): { [key: string]: string } {
  const params: { [key: string]: string } = {};
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.forEach((value, key) => {
      params[key] = value;
    });
  }
  return params;
}

function getFbclid(): string | undefined {
  const urlParams = getUrlParameters();
  return urlParams.fbclid || undefined;
}


// --- CONFIGURATION & STATE ---

const API_BASE_URL = 'https://zenith-api-conversions-production.up.railway.app';
const CONFIG = {
  currency: 'BRL',
  debugMode: process.env.NODE_ENV === 'development', // Ativo em desenvolvimento
};

interface UserData {
  external_id?: string;
  fbp?: string;
  fbc?: string;
  em?: string;
  ph?: string;
  fn?: string;
  ln?: string;
}

let globalUserData: UserData = {};

function debugLog(message: string, data: any): void {
  if (CONFIG.debugMode) {
    console.log(`[FB CAPI] ${message}`, data);
  }
}

function updateUserData(newData: Partial<UserData>): void {
  Object.assign(globalUserData, newData);
  if (typeof window !== 'undefined') {
    localStorage.setItem('fb_user_data', JSON.stringify(globalUserData));
  }
  debugLog('Global user data updated', globalUserData);
}

function loadUserData(): void {
  if (typeof window === 'undefined') return;
  try {
    const stored = localStorage.getItem('fb_user_data');
    if (stored) {
      const data: UserData = JSON.parse(stored);
      Object.assign(globalUserData, data);
    }
  } catch (error) {
    console.error('Erro ao carregar dados do usuário:', error);
  }
}

// --- CORE API CALL FUNCTION ---
async function sendEvent(eventName: string, customData: object = {}) {
  const eventId = generateUUID();
  const urlParameters = getUrlParameters();
  const eventSourceUrl = typeof window !== 'undefined' ? window.location.href : '';

  // 1. Enviar para o Facebook Pixel (client-side) se disponível
  if (typeof window.fbq === 'function') {
    window.fbq('track', eventName, customData, { eventID: eventId });
    debugLog(`Pixel ${eventName} enviado`, { eventId, ...customData });
  }

  // 2. Enviar para a API de Conversões (server-side)
  const payload = {
    eventId,
    userData: {
      external_id: globalUserData.external_id ? [globalUserData.external_id] : undefined,
      em: globalUserData.em ? [globalUserData.em] : undefined,
      ph: globalUserData.ph ? [globalUserData.ph] : undefined,
      fn: globalUserData.fn ? [globalUserData.fn] : undefined,
      ln: globalUserData.ln ? [globalUserData.ln] : undefined,
      fbc: globalUserData.fbc || undefined,
      fbp: globalUserData.fbp || undefined,
    },
    customData,
    eventSourceUrl,
    urlParameters,
    actionSource: 'website'
  };

  // Remove campos undefined do payload final para evitar erros
  Object.keys(payload.userData).forEach(key => {
    const K = key as keyof typeof payload.userData;
    if (payload.userData[K] === undefined || payload.userData[K] === null) {
      delete payload.userData[K];
    }
  });

  try {
    debugLog(`Enviando evento: ${eventName}`, payload);
    const response = await fetch(`${API_BASE_URL}/api/track/${eventName.toLowerCase()}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    if (response.ok && result.success) {
      debugLog(`Evento ${eventName} enviado com sucesso`, { eventId, fbtrace_id: result.fbtrace_id, diagnostics: result.diagnostics });
    } else {
      console.error(`Erro no evento ${eventName}:`, result);
    }
  } catch (error) {
    console.error(`Erro ao enviar evento ${eventName}:`, error);
  }
}

// --- PUBLIC FUNCTIONS ---

export function initializeFixel(): void {
  if (typeof window === 'undefined') return;
  
  loadUserData();
  
  const initialData: UserData = {
    external_id: getExternalId(),
    fbp: getCookie('_fbp'),
    fbc: getCookie('_fbc') || getFbclid(),
  };

  // Atualiza fbc se um novo fbclid estiver na URL
  const fbclidFromUrl = getFbclid();
  if (fbclidFromUrl) {
    initialData.fbc = fbclidFromUrl;
  }
  
  updateUserData(initialData);

  sendEvent('PageView');
  debugLog('Facebook CAPI sistema inicializado.', globalUserData);
}

export function trackViewContent(customData: object): void {
  sendEvent('ViewContent', {
    ...customData,
    currency: CONFIG.currency,
  });
}

export async function processAndTrackLead(formData: { [key: string]: string }): Promise<void> {
  const fullName = formData.nomeCompleto?.trim() || '';
  const nameParts = fullName.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ') || firstName;

  const piiData: UserData = {
    em: formData.email?.trim().toLowerCase(),
    ph: formData.whatsapp?.replace(/\D/g, ''),
    fn: firstName,
    ln: lastName
  };
  
  updateUserData(piiData);
  
  await sendEvent('Lead', {
    content_name: 'Lead - Zenith Landing Page',
    content_category: 'Formulário de Contato',
    faturamento_mensal: formData.faturamentoMensal,
    principal_produto: formData.principalProduto,
    maior_dificuldade: formData.maiorDificuldade,
    value: 1, // Valor simbólico para leads
    currency: CONFIG.currency,
  });
} 