import React, { useState } from 'react';
import { ArrowRight, Flame, Lightbulb, Zap } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface ThemeItem {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  description: string;
  icon: React.ReactNode;
}

const THEME_ITEMS_PT: ThemeItem[] = [
  {
    id: 1,
    title: 'Abertura do mercado livre (Varejo)',
    subtitle: 'VAREJO DE ENERGIA',
    imageUrl: 'https://fd-siteeneva-prd-ajembshudubpg5et.a03.azurefd.net/media/images/sanfona-solucoes-energia.2.2e16d0ba.fill-479x530.webp',
    description: 'Novas soluções para apoiar a Eneva na abertura do mercado livre e soluções de inteligência de serviços ao cliente de varejo.',
    icon: <Lightbulb className="w-6 h-6" />
  },
  {
    id: 2,
    title: 'Mercado livre de energia (Atacado)',
    subtitle: 'ATACADO DE ENERGIA',
    imageUrl: 'https://fd-siteeneva-prd-ajembshudubpg5et.a03.azurefd.net/media/images/sanfona-geracao-energia.2e16d0ba.fill-479x530.webp',
    description: 'Novas soluções estratégicas e de análise de dados quantitativos para suportar a comercialização no mercado atacadista.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 3,
    title: 'Comercialização de gás',
    subtitle: 'GÁS NATURAL & GNL',
    imageUrl: 'https://fd-siteeneva-prd-ajembshudubpg5et.a03.azurefd.net/media/images/sonda-exploracao-producao_22.2e16d0ba.fill-479x530.webp',
    description: 'Novas soluções para apoiar a comercialização, distribuição inteligente e venda ágil de gás.',
    icon: <Flame className="w-6 h-6" />
  }
];

const THEME_ITEMS_EN: ThemeItem[] = [
  {
    id: 1,
    title: 'Free Market Opening (Retail)',
    subtitle: 'ENERGY RETAIL',
    imageUrl: 'https://fd-siteeneva-prd-ajembshudubpg5et.a03.azurefd.net/media/images/sanfona-solucoes-energia.2.2e16d0ba.fill-479x530.webp',
    description: 'New solutions to support Eneva during the free market opening and intelligence customer service services.',
    icon: <Lightbulb className="w-6 h-6" />
  },
  {
    id: 2,
    title: 'Free Energy Market (Wholesale)',
    subtitle: 'ENERGY WHOLESALE',
    imageUrl: 'https://fd-siteeneva-prd-ajembshudubpg5et.a03.azurefd.net/media/images/sanfona-geracao-energia.2e16d0ba.fill-479x530.webp',
    description: 'New strategic solutions and quantitative data analysis to support energy trading in the wholesale market.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 3,
    title: 'Natural Gas Marketing',
    subtitle: 'NATURAL GAS & LNG',
    imageUrl: 'https://fd-siteeneva-prd-ajembshudubpg5et.a03.azurefd.net/media/images/sonda-exploracao-producao_22.2e16d0ba.fill-479x530.webp',
    description: 'Innovative solutions to support gas marketing, smart retailing, and dynamic gas distribution.',
    icon: <Flame className="w-6 h-6" />
  }
];

export default function NossaAtuacao() {
  const { language: lang } = useLanguage();
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);
  const [activeMobileIdx, setActiveMobileIdx] = useState<number>(0);

  const THEME_ITEMS = lang === 'PT' ? THEME_ITEMS_PT : THEME_ITEMS_EN;

  return (
    <section id="temas" className="bg-[#4f200c] py-24 md:py-32 min-h-screen flex flex-col justify-center overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section header panel */}
        <div className="space-y-4 mb-12 md:mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-eneva-lime">
            {lang === 'PT' ? 'O QUE PROCURAMOS?' : 'WHAT WE LOOK FOR?'}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white">
            {lang === 'PT' ? 'Temas de interesse' : 'Themes of interest'}
          </h2>
        </div>

        {/* DESKTOP VIEW: Sliding vertical-folding cards */}
        <div className="hidden md:flex items-stretch h-[550px] w-full rounded-3xl overflow-hidden bg-eneva-teal-deep shadow-xl border border-gray-150">
          
          {THEME_ITEMS.map((item, idx) => {
            const isExpanded = hoveredIdx === idx;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`relative flex flex-col justify-between transition-all duration-700 ease-out p-10 text-white ${
                  isExpanded ? 'flex-grow-[5] bg-neutral-900 border-x-0' : 'flex-grow-[1.5] bg-eneva-teal-deep hover:bg-eneva-teal-medium border-r border-white/10'
                }`}
                style={{
                  minWidth: isExpanded ? '50%' : '15%'
                }}
              >
                {/* Image layer backdrop with custom overlay vignette */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 z-10" />
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover select-none pointer-events-none opacity-80"
                  />
                </div>

                {/* Contents Box overlay */}
                <div className="relative z-20 h-full flex flex-col justify-between">
                  
                  {/* Top: Item metadata */}
                  <div className="flex justify-between items-center">
                    <span className="text-2xs font-extrabold tracking-widest text-white/50">
                      {`TEMA 0${idx + 1}`}
                    </span>
                    
                    {isExpanded && (
                      <span className="text-2xs font-bold px-3 py-1 bg-eneva-lime text-white rounded-full uppercase tracking-widest border border-white/20">
                        {item.subtitle}
                      </span>
                    )}
                  </div>

                  {/* Bottom: Item content details */}
                  <div className="space-y-4 mt-auto">
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                        {item.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-black font-display tracking-tight text-white animate-fade-in">
                        {item.title}
                      </h3>
                    </div>

                    {/* Collapsible paragraph detail wrapper */}
                    <div className={`overflow-hidden transition-all duration-500 ease-out ${
                      isExpanded ? 'max-h-[160px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-sm text-white/85 leading-relaxed font-sans max-w-lg pb-4 font-medium">
                        {item.description}
                      </p>

                      <a
                        href="#regulamento-faq"
                        className="inline-flex items-center gap-1 text-xs font-black text-eneva-lime hover:text-white uppercase tracking-wider group/link transition-colors duration-200"
                      >
                        {lang === 'PT' ? 'Consulte o regulamento' : 'Consult Regulations'}
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                      </a>
                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* MOBILE VIEW: Compact collapsible cards */}
        <div className="md:hidden space-y-4">
          {THEME_ITEMS.map((item, idx) => {
            const isExpanded = activeMobileIdx === idx;
            return (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden border border-gray-150 shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => setActiveMobileIdx(isExpanded ? -1 : idx)}
                  className={`w-full text-left p-5 flex justify-between items-center font-bold tracking-tight text-base transition-colors ${
                    isExpanded ? 'bg-[#0a585c] text-white' : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-eneva-lime font-black">0{idx + 1}.</span>
                    {item.title}
                  </span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded transition-all ${
                    isExpanded ? 'bg-white/20 text-eneva-lime' : 'bg-white/5 text-white/70'
                  }`}>
                    {isExpanded ? (lang === 'PT' ? 'FECHAR' : 'CLOSE') : (lang === 'PT' ? 'ABRIR' : 'OPEN')}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-[450px] opacity-100 p-5 bg-white' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="space-y-4">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-44 object-cover rounded-xl shadow-inner"
                      loading="lazy"
                    />
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                      {item.description}
                    </p>
                    <a
                      href="#regulamento-faq"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-eneva-teal-medium text-white hover:bg-eneva-lime text-xs font-bold rounded-lg transition-colors"
                    >
                      {lang === 'PT' ? 'Regulamento' : 'Regulations'}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
