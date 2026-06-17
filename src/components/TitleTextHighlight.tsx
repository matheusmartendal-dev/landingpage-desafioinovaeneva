import React from 'react';
import { useLanguage } from '../LanguageContext';

export default function TitleTextHighlight() {
  const { language: lang } = useLanguage();

  return (
    <section id="sobre" className="relative bg-[#cb4f33] text-white py-20 md:py-28 min-h-screen flex flex-col justify-center overflow-hidden">
      
      {/* Premium background effects and decorations matching Natural Tones style */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute left-10 bottom-0 w-72 h-72 bg-white/5 rounded-full filter blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Big display left heading */}
          <div className="lg:col-span-5">
            <span className="block text-2xs uppercase tracking-widest font-extrabold text-white/80 mb-2">
              {lang === 'PT' ? 'APRESENTAÇÃO DO PROGRAMA' : 'PROGRAM OVERVIEW'}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-display leading-[1.15] text-white">
              {lang === 'PT' ? 'O que é o Desafio Inova Eneva?' : 'What is the Inova Eneva Challenge?'}
            </h2>
          </div>

          {/* Right text box */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-base md:text-lg text-white/95 leading-relaxed font-sans font-medium">
              {lang === 'PT'
                ? 'Promovido pela Eneva, uma das maiores operadoras integradas de energia com atuação da exploração e produção (E&P) do gás natural até o fornecimento de soluções em energia, o desafio busca startups com soluções inovadoras relacionadas à comercialização e monetização de gás e energia.'
                : 'Promoted by Eneva, one of the largest integrated energy operators with activities ranging from exploration and production (E&P) of natural gas to providing energy solutions, the challenge seeks startups with innovative solutions related to the marketing and monetization of gas and energy.'
              }
            </p>

            <div className="pt-2">
              <a
                href="https://www.eneva.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-[#cb4f33] text-sm font-black tracking-widest rounded-full transition-all duration-300 shadow-lg"
              >
                {lang === 'PT' ? 'CONHEÇA MAIS SOBRE A ENEVA' : 'LEARN MORE ABOUT ENEVA'}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
