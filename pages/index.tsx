import React from 'react';
import Head from 'next/head';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import FinancialImpactSection from '@/components/sections/FinancialImpactSection';
import CTASection from '@/components/sections/CTASection';
import FAQSection from '@/components/sections/FAQSection';
import FooterSection from '@/components/sections/FooterSection';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zenith Pay - Dinheiro Instantâneo para Infoprodutores</title>
        <meta name="description" content="O único gateway integrado ao banco digital que libera o valor das suas vendas instantaneamente, cobra até 60% menos em taxas e aprova 25% mais transações." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zenithpay.com.br/" />
        <meta property="og:title" content="Zenith Pay - Dinheiro Instantâneo para Infoprodutores" />
        <meta property="og:description" content="O único gateway integrado ao banco digital que libera o valor das suas vendas instantaneamente." />
        <meta property="og:image" content="https://zenithpay.com.br/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://zenithpay.com.br/" />
        <meta property="twitter:title" content="Zenith Pay - Dinheiro Instantâneo para Infoprodutores" />
        <meta property="twitter:description" content="O único gateway integrado ao banco digital que libera o valor das suas vendas instantaneamente." />
        <meta property="twitter:image" content="https://zenithpay.com.br/twitter-image.jpg" />
      </Head>
      
      <main className="bg-zenith-primary text-zenith-secondary overflow-hidden">
        {/* Overlay Grid de fundo - para estética */}
        <div className="fixed inset-0 pointer-events-none z-0" style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(181, 164, 114, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(181, 164, 114, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Partículas de ouro flutuantes no fundo */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 rounded-full bg-zenith-gold/30"
              style={{ 
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <ComparisonSection />
        <FinancialImpactSection />
        <CTASection />
        <FAQSection />
        <FooterSection />
      </main>
      
      {/* Estilos específicos para animações */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0.5;
          }
          100% {
            transform: translateY(-200px) translateX(0);
            opacity: 0.1;
          }
        }
        
        body {
          background-color: #101010;
        }
      `}</style>
    </>
  );
} 