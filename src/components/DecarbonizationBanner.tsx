import React, { useState } from 'react';
import { FileText, Award, Users2, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function DecarbonizationBanner() {
  const { language: lang } = useLanguage();
  const [showToast, setShowToast] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4500);
  };

  return (
    <section id="realizadores" className="relative w-full py-24 md:py-32 min-h-screen flex flex-col justify-center bg-eneva-teal-deep overflow-hidden text-white">
      
      {/* Background soft glowing lights mapping the Natural Tones mood */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-eneva-teal-light/20 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute left-[-10%] top-[-10%] w-[300px] h-[300px] bg-eneva-lime/10 rounded-full filter blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Realizadores Column */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between space-y-8 backdrop-blur-md">
            <div>
              <span className="inline-flex items-center gap-1.5 text-2xs uppercase tracking-widest font-extrabold text-eneva-lime mb-3">
                <Users2 className="w-3.5 h-3.5" />
                {lang === 'PT' ? 'PARCEIROS DO DESAFIO' : 'CHALLENGE PARTNERS'}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                {lang === 'PT' ? 'Realizadores' : 'Organizing Team'}
              </h3>
              <p className="text-sm text-gray-300 font-semibold mt-2 leading-relaxed">
                {lang === 'PT'
                  ? 'O programa é uma iniciativa desenhada a quatro mãos para assegurar a excelência na conexão corporativa:'
                  : 'The program is a joint initiative co-designed to guarantee absolute corporate relationship excellence:'
                }
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-black tracking-wider text-gray-400">
                  {lang === 'PT' ? 'Idealização' : 'Concept'}
                </span>
                <div className="flex items-center">
                  <img
                    src="https://www.eneva.com.br/static/images/logo.ac5f7806cefa.svg"
                    alt="Eneva"
                    className="h-9 w-auto brightness-0 invert"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] uppercase font-black tracking-wider text-gray-400">
                  {lang === 'PT' ? 'Organização' : 'Organization'}
                </span>
                <div className="flex items-center">
                  <a
                    href="https://www.saidopapel.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:opacity-85 transition-opacity"
                  >
                    <img
                      src="https://saidopapel.com.br/wp-content/webp-express/webp-images/uploads/2021/03/cropped-Logo-SdP-fundos-escuros.png.webp"
                      alt="Sai do Papel"
                      className="h-10 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Regulamento Column */}
          <div id="regulamento-faq" className="bg-eneva-brown/50 border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between space-y-8 backdrop-blur-md relative">
            <div>
              <span className="inline-flex items-center gap-1.5 text-2xs uppercase tracking-widest font-extrabold text-eneva-lime mb-3">
                <FileText className="w-3.5 h-3.5" />
                {lang === 'PT' ? 'REGRAS E ADMISSÃO' : 'RULES & ELIGIBILITY'}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                {lang === 'PT' ? 'Regulamento' : 'Guidelines'}
              </h3>
              <p className="text-sm text-gray-300 font-semibold mt-2 leading-relaxed">
                {lang === 'PT'
                  ? 'Confira todas as diretrizes, prazos de elegibilidade, termos de compliance governamental corporativa e o processo detalhado de avaliação técnica de pitchs.'
                  : 'Check all guidelines, eligibility deadlines, corporate government compliance terms, and the detailed technical pitch evaluation framework.'
                }
              </p>
            </div>

            <div className="pt-4 border-t border-white/5">
              <button
                onClick={handleDownload}
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-eneva-lime hover:bg-white text-white hover:text-eneva-teal-deep font-extrabold tracking-widest text-xs uppercase rounded-full transition-all duration-300 shadow-md cursor-pointer"
              >
                {lang === 'PT' ? 'ACESSE NOSSO REGULAMENTO' : 'ACCESS THE RULES'}
              </button>
            </div>
          </div>

        </div>

        {/* Elegant inline notification instead of alert() */}
        {showToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#0a585c] text-white border border-white/20 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in max-w-sm">
            <CheckCircle2 className="w-6 h-6 text-eneva-lime flex-shrink-0" />
            <div className="text-xs">
              <strong className="block text-sm font-bold text-white">
                {lang === 'PT' ? 'Download Iniciado!' : 'Download Started!'}
              </strong>
              <span className="text-white/80 font-medium">
                {lang === 'PT' 
                  ? 'O PDF do Regulamento Inova Eneva está sendo preparado.' 
                  : 'The Inova Eneva Guidelines PDF file is being prepared.'
                }
              </span>
            </div>
          </div>
        )}

      </div>

    </section>
  );
}
