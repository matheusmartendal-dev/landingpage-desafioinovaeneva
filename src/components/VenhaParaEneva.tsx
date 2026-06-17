import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  Shield, 
  Cpu, 
  Users, 
  Layers, 
  LineChart, 
  Landmark, 
  ArrowUpRight,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { StartupLogo } from './StartupLogos';

interface BenefitItem {
  icon: React.ReactNode;
  label: string;
  description: string;
  bgClass: string;
  textClass: string;
  badgeBg: string;
}

const BENEFITS_PT: BenefitItem[] = [
  {
    icon: <Users className="w-5 h-5" />,
    label: 'Ecossistema Eneva',
    description: 'Conexão direta e facilitada com tomadores de decisão e os principais parceiros estratégicos de nossa rede nacional.',
    bgClass: 'bg-[#0a585c]',
    textClass: 'text-white',
    badgeBg: 'bg-white/10'
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    label: 'Expertise Setorial',
    description: 'Orientação técnica altamente qualificada com engenheiros e especialistas seniores que dominam a cadeia de ponta a ponta.',
    bgClass: 'bg-[#cb4f33]',
    textClass: 'text-white',
    badgeBg: 'bg-white/10'
  }
];

const BENEFITS_ADD_PT: BenefitItem[] = [
  {
    icon: <Layers className="w-5 h-5" />,
    label: 'Acesso a Ativos',
    description: 'Oportunidade única de alinhar testes ou pilotos diretamente aos nossos ativos reais de exploração, produção e geração.',
    bgClass: 'bg-[#1b3b3a]',
    textClass: 'text-white',
    badgeBg: 'bg-[#e28743]/15'
  },
  {
    icon: <Star className="w-5 h-5" />,
    label: 'Mentoria Executiva',
    description: 'Sessões exclusivas com diretores e comitê técnico da Eneva focadas em aceleração, escala e novos negócios.',
    bgClass: 'bg-[#4f200c]',
    textClass: 'text-white',
    badgeBg: 'bg-white/10'
  },
  {
    icon: <Shield className="w-5 h-5" />,
    label: 'Associação de Marca',
    description: 'Ganho imediato de reputação e a potente chancela corporativa de um dos maiores players integrados de energia do país.',
    bgClass: 'bg-[#111827]',
    textClass: 'text-white',
    badgeBg: 'bg-white/10'
  },
  {
    icon: <LineChart className="w-5 h-5" />,
    label: 'Analytics & BI',
    description: 'Abordagem avançada de Business Intelligence compartilhada para monitorar e alavancar métricas de desempenho energético.',
    bgClass: 'bg-[#0e7675]',
    textClass: 'text-white',
    badgeBg: 'bg-white/10'
  },
  {
    icon: <Landmark className="w-5 h-5" />,
    label: 'Captação & Sinergia',
    description: 'Canal prioritário para avaliações reais de coinvestimentos, M&A ou parcerias comerciais permanentes.',
    bgClass: 'bg-[#e28743]',
    textClass: 'text-neutral-900',
    badgeBg: 'bg-black/10'
  }
];

const BENEFITS_EN: BenefitItem[] = [
  {
    icon: <Users className="w-5 h-5" />,
    label: 'Eneva Ecosystem',
    description: 'Direct and facilitated connection with decision-makers and key strategic partners in our national network.',
    bgClass: 'bg-[#0a585c]',
    textClass: 'text-white',
    badgeBg: 'bg-white/10'
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    label: 'Industry Expertise',
    description: 'Highly qualified technical guidance with senior engineers and specialists mastering the end-to-end chain.',
    bgClass: 'bg-[#cb4f33]',
    textClass: 'text-white',
    badgeBg: 'bg-white/10'
  }
];

const BENEFITS_ADD_EN: BenefitItem[] = [
  {
    icon: <Layers className="w-5 h-5" />,
    label: 'Access to Assets',
    description: 'Unique opportunity to align tests or pilots directly with our real exploration, production, and generation assets.',
    bgClass: 'bg-[#1b3b3a]',
    textClass: 'text-white',
    badgeBg: 'bg-[#e28743]/15'
  },
  {
    icon: <Star className="w-5 h-5" />,
    label: 'Executive Mentorship',
    description: 'Exclusive sessions with directors and the Eneva technical committee focused on acceleration, scale, and new business.',
    bgClass: 'bg-[#4f200c]',
    textClass: 'text-white',
    badgeBg: 'bg-white/10'
  },
  {
    icon: <Shield className="w-5 h-5" />,
    label: 'Brand Association',
    description: 'Immediate gain in reputation and the powerful corporate stamp of one of the largest integrated energy players in the country.',
    bgClass: 'bg-[#111827]',
    textClass: 'text-white',
    badgeBg: 'bg-white/10'
  },
  {
    icon: <LineChart className="w-5 h-5" />,
    label: 'Analytics & BI',
    description: 'Advanced shared Business Intelligence approach to monitor and leverage energy performance metrics.',
    bgClass: 'bg-[#0e7675]',
    textClass: 'text-white',
    badgeBg: 'bg-white/10'
  },
  {
    icon: <Landmark className="w-5 h-5" />,
    label: 'Fundraising & Synergy',
    description: 'Priority channel for real evaluations of co-investments, M&A, or permanent commercial partnerships.',
    bgClass: 'bg-[#e28743]',
    textClass: 'text-neutral-900',
    badgeBg: 'bg-black/10'
  }
];

const PORTFOLIO_COMPANIES_PT = [
  { 
    name: 'Beenx', 
    type: 'Fintech e Enertech', 
    desc: 'Soluções inteligentes de micro-pagamentos e comercialização estruturada de energia.' 
  },
  { 
    name: 'Sunne', 
    type: 'Varejo de Energia Solar', 
    desc: 'Geração compartilhada inteligente para empoderar pequenos comércios e varejos.' 
  },
  { 
    name: 'Voltta', 
    type: 'Eletromobilidade Inteligente', 
    desc: 'Sistemas inteligentes de gestão de frotas industriais de veículos elétricos.' 
  },
  { 
    name: 'Pix Force', 
    type: 'IA & Visão Computacional', 
    desc: 'Inspeção e monitoramento automático de ativos de geração de energia por visão computacional.' 
  }
];

const PORTFOLIO_COMPANIES_EN = [
  { 
    name: 'Beenx', 
    type: 'Fintech and Enertech', 
    desc: 'Smart micro-payment solutions and structured energy commercialization.' 
  },
  { 
    name: 'Sunne', 
    type: 'Solar Energy Retail', 
    desc: 'Smart shared solar generation to empower small businesses and retailers.' 
  },
  { 
    name: 'Voltta', 
    type: 'Smart Electromobility', 
    desc: 'Smart fleet management systems for industrial electric vehicles.' 
  },
  { 
    name: 'Pix Force', 
    type: 'AI & Computer Vision', 
    desc: 'Automatic inspection and monitoring of energy generation assets using computer vision.' 
  }
];

export default function VenhaParaEneva() {
  const { language: lang } = useLanguage();
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  const BENEFITS = lang === 'PT' 
    ? [...BENEFITS_PT, ...BENEFITS_ADD_PT] 
    : [...BENEFITS_EN, ...BENEFITS_ADD_EN];

  const PORTFOLIO_COMPANIES = lang === 'PT' ? PORTFOLIO_COMPANIES_PT : PORTFOLIO_COMPANIES_EN;

  // Double the portfolio items for seamless continuous looping marquee
  const extendedPortfolio = [...PORTFOLIO_COMPANIES, ...PORTFOLIO_COMPANIES, ...PORTFOLIO_COMPANIES];

  return (
    <section id="por-que-participar" className="bg-[#f0f4f5] py-24 md:py-32 min-h-screen flex flex-col justify-center text-eneva-slate relative overflow-hidden">
      
      {/* Absolute backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-eneva-teal-light/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute -left-48 bottom-0 w-[600px] h-[600px] bg-[#cb4f33]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full font-sans">
        
        {/* Title panel */}
        <div className="space-y-4 mb-16 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 text-[#0a585c] rounded-full text-2xs font-extrabold uppercase tracking-widest shadow-xs">
            {lang === 'PT' ? 'Vantagens Competitivas' : 'Competitive Advantages'}
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight font-display text-eneva-teal-deep leading-tight">
            {lang === 'PT' ? 'Por que participar?' : 'Why participate?'}
          </h2>
          <p className="text-neutral-600 font-medium text-sm md:text-base leading-relaxed">
            {lang === 'PT'
              ? 'O Desafio Inova Eneva é uma jornada de impacto real que integra sua tecnologia ao core business de um dos maiores ecossistemas de energia integrados do Brasil.'
              : 'The Inova Eneva Challenge is a journey of real impact that integrates your technology into the core business of one of the largest integrated energy ecosystems in Brazil.'
            }
          </p>
        </div>

        {/* Dynamic Horizontal Columns layout for Desktop & Vertically Stacked for Mobile */}
        <div className="mb-20">
          
          {/* Desktop view Accordion (lg:flex, hidden below lg) */}
          <div className="hidden lg:flex flex-row gap-3 h-[420px] w-full items-stretch">
            {BENEFITS.map((benefit, idx) => {
              const isOpen = activeIdx === idx;
              return (
                <motion.div
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`relative rounded-3xl cursor-pointer overflow-hidden p-6 flex flex-col justify-between transition-all duration-500 shadow-md ${benefit.bgClass} ${benefit.textClass}`}
                  animate={{
                    width: isOpen ? '42%' : '8.5%',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                >
                  {/* Glowing orange/colored visual indicator bar at the top on hover/active */}
                  <div className={`absolute top-0 inset-x-0 h-1.5 bg-[#cb4f33] transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`} />

                  {/* Header circle icon & index */}
                  <div className="flex items-center justify-between w-full">
                    <div className={`p-3 rounded-2xl ${benefit.badgeBg} flex items-center justify-center`}>
                      {benefit.icon}
                    </div>
                    {isOpen && (
                      <span className="font-mono text-xs font-black tracking-widest opacity-60">
                        0{idx + 1}
                      </span>
                    )}
                  </div>

                  {/* Mid area: Rotated title if collapsed, horizontal header if expanded */}
                  <div className="flex-1 flex items-center justify-center my-4 overflow-hidden">
                    <AnimatePresence mode="wait">
                      {!isOpen ? (
                        <motion.div
                          key="collapsed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="rotate-270 origin-center whitespace-nowrap"
                        >
                          <span className="text-sm font-black uppercase tracking-widest">
                            {benefit.label}
                          </span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="expanded"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          className="w-full space-y-3 px-2 text-left"
                        >
                          <span className="font-mono text-2xs font-extrabold uppercase tracking-widest opacity-60 block">
                            {lang === 'PT' ? `BENEFÍCIO COMPLETO 0${idx + 1}` : `COMPLETE BENEFIT 0${idx + 1}`}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">
                            {benefit.label}
                          </h3>
                          <p className="text-sm opacity-90 leading-relaxed max-w-md font-medium">
                            {benefit.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer item: Arrow or chevron */}
                  <div className="flex items-center justify-between w-full">
                    {!isOpen ? (
                      <span className="font-mono text-xs font-black tracking-widest opacity-35 mx-auto">
                        0{idx + 1}
                      </span>
                    ) : (
                      <div className="ml-2 flex items-center gap-1.5 text-xs font-black uppercase tracking-widest opacity-80">
                        <span>{lang === 'PT' ? 'EXPLORADO' : 'EXPLORED'}</span>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                        </motion.div>
                      </div>
                    )}
                    
                    <div className={`p-2 rounded-full ${benefit.badgeBg} flex items-center justify-center`}>
                      <ArrowUpRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile view Accordion (hidden on lg, vertical stack) */}
          <div className="lg:hidden flex flex-col gap-3">
            {BENEFITS.map((benefit, idx) => {
              const isOpen = activeIdx === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shadow-sm border border-neutral-200/50 ${benefit.bgClass} ${benefit.textClass}`}
                >
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl ${benefit.badgeBg}`}>
                        {benefit.icon}
                      </div>
                      <span className="text-sm font-bold tracking-tight uppercase">
                        {benefit.label}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-black tracking-widest opacity-50">
                      0{idx + 1}
                    </span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 pb-5 border-t border-white/10"
                      >
                        <p className="text-xs opacity-90 leading-relaxed font-semibold pt-3">
                          {benefit.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel / Infinite Scroll Reel for Ecosystem Startups in Grayscale */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-neutral-200/60 shadow-lg relative overflow-hidden">
          
          <div className="max-w-2xl text-left space-y-2 mb-8 border-b border-neutral-100 pb-5">
            <span className="text-2xs font-extrabold uppercase tracking-widest text-[#cb4f33] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#cb4f33]" />
              {lang === 'PT' ? 'ECOSSISTEMA EM EXPANSÃO' : 'EXPANDING ECOSYSTEM'}
            </span>
            <h3 className="text-2xl font-extrabold text-[#0a585c] tracking-tight">
              {lang === 'PT' ? 'Startups do Nosso Portfólio' : 'Our Portfolio Startups'}
            </h3>
            <p className="text-xs text-neutral-500 font-medium leading-relaxed">
              {lang === 'PT' 
                ? 'Explore as empresas investidas e parceiras comerciais que já conectaram suas inovações diretamente ao grupo Eneva. Passe o mouse ou clique sobre elas para travar a animação e ver detalhes:'
                : 'Explore the portfolio companies and commercial partners that have already connected their innovations directly to the Eneva group. Hover or click to pause and see details:'
              }
            </p>
          </div>

          {/* Scrolling Container */}
          <div className="relative w-full overflow-hidden py-4">
            
            {/* Ambient gradients left/right to blend scrolling */}
            <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Seamless Moving Tape container */}
            <div className="w-full overflow-hidden relative">
              <motion.div 
                className="flex gap-6 w-max"
                animate={{
                  x: [0, -1200],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop" as const,
                    duration: 35,
                    ease: "linear",
                  },
                }}
                whileHover={{ animationPlayState: 'paused' }}
              >
                {extendedPortfolio.map((company, index) => {
                  const isHovered = hoveredLogo === `${company.name}-${index}`;
                  return (
                    <motion.div
                      key={index}
                      onMouseEnter={() => setHoveredLogo(`${company.name}-${index}`)}
                      onMouseLeave={() => setHoveredLogo(null)}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="w-80 flex-shrink-0 cursor-pointer text-left bg-neutral-50/70 p-5 rounded-2xl border border-neutral-200/60 transition-all duration-300 hover:bg-white hover:border-[#cb4f33] hover:shadow-md relative overflow-hidden group"
                    >
                      {/* Interactive visual layout in details */}
                      <div className="flex items-center justify-between gap-4 mb-3">
                        {/* Logo Wrapper in Grayscale by default, color on Hover */}
                        <div 
                          className="bg-white p-2 px-4 rounded-xl border border-neutral-200/50 flex items-center justify-center min-w-[120px] h-10 shadow-3xs transition-all duration-300"
                        >
                          {/* Saturated and colored / gray toggle using CSS class filter */}
                          <div className={`transition-all duration-300 ${isHovered ? 'filter-none' : 'grayscale opacity-50'}`}>
                            <StartupLogo name={company.name} className="h-6 w-auto object-contain" />
                          </div>
                        </div>

                        <span className={`text-[9.5px] font-black uppercase tracking-wider px-2 py-1 rounded-md transition-colors ${
                          isHovered ? 'bg-[#cb4f33]/15 text-[#cb4f33]' : 'bg-neutral-200/70 text-neutral-500'
                        }`}>
                          {company.type}
                        </span>
                      </div>

                      {/* Content panel */}
                      <div className="space-y-1">
                        <h4 className="text-sm font-black text-neutral-800 tracking-tight group-hover:text-[#0a585c] transition-colors">
                          {company.name}
                        </h4>
                        <p className="text-2xs text-neutral-500 font-medium leading-relaxed group-hover:text-neutral-600 transition-colors">
                          {company.desc}
                        </p>
                      </div>

                      {/* Small Orange accent tag revealing on hover */}
                      <div className="absolute right-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#cb4f33]">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
