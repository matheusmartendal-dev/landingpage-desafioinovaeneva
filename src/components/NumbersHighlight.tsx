import React from 'react';
import { Target, BarChart2, ShieldAlert, Award, Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface ParticipantTarget {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const TARGETS_PT: ParticipantTarget[] = [
  {
    icon: <Target className="w-5 h-5 text-white" />,
    title: 'Prospecção Comercial de Alta Tensão',
    description: 'Prospecção comercial de clientes de alta tensão para atração e conversão qualificada ao mercado livre.',
    image: 'https://images.pexels.com/photos/12157172/pexels-photo-12157172.jpeg'
  },
  {
    icon: <BarChart2 className="w-5 h-5 text-white" />,
    title: 'Análise Avançada de Dados',
    description: 'Análise profunda e modelagem preditiva de dados do cliente para atingir a melhor eficiência possível.',
    image: 'https://images.pexels.com/photos/9304917/pexels-photo-9304917.jpeg'
  },
  {
    icon: <Award className="w-5 h-5 text-white" />,
    title: 'Elevação de Venda de Energia',
    description: 'Novas abordagens, impressões e propostas de valor para alavancar e elevar a venda direta de energia.',
    image: 'https://images.pexels.com/photos/5537209/pexels-photo-5537209.jpeg'
  },
  {
    icon: <ShieldAlert className="w-5 h-5 text-white relative z-10" />,
    title: 'Operacionalização Financeira',
    description: 'Simplificação e otimização financeira e regulatória dos processos de cobrança e venda de energia.',
    image: 'https://images.pexels.com/photos/34518920/pexels-photo-34518920.jpeg'
  },
  {
    icon: <Sparkles className="w-5 h-5 text-white" />,
    title: 'Retenção via Serviços Digitais',
    description: 'Fidelização robusta e experiência do cliente aprimorada através de novos aplicativos e serviços digitais.',
    image: 'https://images.pexels.com/photos/6779410/pexels-photo-6779410.jpeg'
  }
];

const TARGETS_EN: ParticipantTarget[] = [
  {
    icon: <Target className="w-5 h-5 text-white" />,
    title: 'High Voltage Commercial Prospecting',
    description: 'Commercial prospecting of high voltage customers for qualified attraction and conversion to the free market.',
    image: 'https://images.pexels.com/photos/12157172/pexels-photo-12157172.jpeg'
  },
  {
    icon: <BarChart2 className="w-5 h-5 text-white" />,
    title: 'Advanced Data Analytics',
    description: 'In-depth analysis and predictive modeling of customer data to achieve the best possible efficiency.',
    image: 'https://images.pexels.com/photos/9304917/pexels-photo-9304917.jpeg'
  },
  {
    icon: <Award className="w-5 h-5 text-white" />,
    title: 'Energy Sales Optimization',
    description: 'New approaches, templates, and value proposals to leverage and increase direct sales of energy.',
    image: 'https://images.pexels.com/photos/5537209/pexels-photo-5537209.jpeg'
  },
  {
    icon: <ShieldAlert className="w-5 h-5 text-white relative z-10" />,
    title: 'Financial Scaling & Operations',
    description: 'Simplification and financial/regulatory optimization of billing and energy sales processes.',
    image: 'https://images.pexels.com/photos/34518920/pexels-photo-34518920.jpeg'
  },
  {
    icon: <Sparkles className="w-5 h-5 text-white" />,
    title: 'Retention via Digital Services',
    description: 'Robust customer loyalty and enhanced digital experience through new apps and digital products.',
    image: 'https://images.pexels.com/photos/6779410/pexels-photo-6779410.jpeg'
  }
];

export default function NumbersHighlight() {
  const { language: lang } = useLanguage();
  const TARGETS = lang === 'PT' ? TARGETS_PT : TARGETS_EN;

  return (
    <section id="participar" className="bg-[#EDF1F2] py-24 md:py-32 min-h-screen flex flex-col justify-center text-eneva-slate">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-[#cb4f33]">
            {lang === 'PT' ? 'PERFIL BUSCADO' : 'TARGET PROFILE'}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-eneva-teal-deep animate-fade-in">
            {lang === 'PT' ? 'Quem pode participar?' : 'Who can participate?'}
          </h2>
          <p className="text-gray-650 font-semibold text-sm md:text-base">
            {lang === 'PT'
              ? 'Estamos em busca de startups de tecnologia e inovação que ofereçam soluções de alto valor agregado nos seguintes segmentos de interesse comercial:'
              : 'We are looking for technology and innovation startups that offer high value-added solutions in the following business segments of interest:'
            }
          </p>
        </div>

        {/* 5 columns layout with beautiful dynamic zoom structures */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {TARGETS.map((target, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-5 border border-gray-200/60 shadow-xs hover:shadow-2xl transition-all duration-500 ease-out flex flex-col justify-between group transform hover:scale-105 hover:-translate-y-3 cursor-pointer"
            >
              <div className="space-y-4">
                {/* Zoomable Image Container with Floating Icon */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-2 bg-neutral-100">
                  <img
                    src={target.image}
                    alt={target.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Glowing absolute overlay matching the selected card style */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Custom Glassmorphism floating Icon wrapper */}
                  <div className="absolute top-3 left-3 w-10 h-10 bg-black/40 hover:bg-[#cb4f33] text-white rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/10 shadow-md">
                    {target.icon}
                  </div>
                </div>

                <h3 className="text-sm md:text-base font-black tracking-tight text-eneva-teal-deep line-clamp-2 transition-colors duration-300 group-hover:text-eneva-lime">
                  {target.title}
                </h3>
              </div>

              <p className="text-xs text-gray-500 font-bold leading-relaxed mt-4">
                {target.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
