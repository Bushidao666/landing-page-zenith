/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Cores personalizadas Zenith Pay - acesso direto simplificado
        'zenith-primary': '#101010', // preto principal
        'zenith-secondary': '#F1F1F1', // branco/off-white
        'zenith-text': 'rgba(241, 241, 241, 0.63)', // branco com opacidade
        'zenith-gold': '#b5a472', // dourado principal
        'zenith-gold-light': '#F0DAAC', // dourado claro
        'zenith-gold-dark': '#8a7b50', // dourado escuro
        'zenith-success': '#76D7C4', // verde de sucesso
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse-gold": {
          '0%, 100%': { 
            boxShadow: '0 0 0 0 rgba(181, 164, 114, 0.5)'
          },
          '50%': { 
            boxShadow: '0 0 0 10px rgba(181, 164, 114, 0)'
          },
        },
        "shimmer": {
          '0%': { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin-slow 15s linear infinite",
        "pulse-gold": "pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s infinite linear"
      },
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        gold: 'var(--shadow-gold)',
      },
      backgroundImage: {
        'zenith-gradient': 'var(--color-gradient)',
        'gold-shimmer': 'linear-gradient(90deg, rgba(181, 164, 114, 0) 0%, rgba(240, 218, 172, 0.8) 50%, rgba(181, 164, 114, 0) 100%)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} 