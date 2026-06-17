import React from 'react';
import { motion } from 'motion/react';
import {
  Rocket,
  Laptop,
  CalendarX,
  Users,
  Zap,
  ClipboardCheck,
  Award,
  ShieldCheck,
  Trophy,
  Check,
  Calendar
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface CronogramaStep {
  date: string;
  title: string;
  stepNumber: string;
  desc: string;
  icon: React.ReactNode;
  isCompleted: boolean;
}

const CRONOGRAMA_STEPS_PT: CronogramaStep[] = [
  {
    date: '02/05',
    title: 'Abertura das inscrições',
    stepNumber: '01',
    desc: 'Lançamento oficial da chamada para startups e abertura do canal para propostas.',
    icon: <Rocket className="w-5 h-5 text-white" />,
    isCompleted: false
  },
  {
    date: '15/05',
    title: 'Webinar do desafio',
    stepNumber: '02',
    desc: 'Bate-papo online com especialistas e executivos da Eneva para dúvidas e imersão nos temas.',
    icon: <Laptop className="w-5 h-5 text-white" />,
    isCompleted: false
  },
  {
    date: '13/06',
    title: 'Fim das inscrições',
    stepNumber: '03',
    desc: 'Prazo limite para a submissão de ideias, soluções inovadoras e tecnologias na plataforma.',
    icon: <CalendarX className="w-5 h-5 text-white" />,
    isCompleted: false
  },
  {
    date: '06/07',
    title: 'Workshop de Pitch',
    stepNumber: '04',
    desc: 'Treinamento prático exclusivo para alinhar a apresentação com as dores do setor.',
    icon: <Users className="w-5 h-5 text-white" />,
    isCompleted: false
  },
  {
    date: '06/07 a 13/07',
    title: 'Energy Pitch',
    stepNumber: '05',
    desc: 'Apresentação das startups selecionadas diretamente para a banca de gerentes técnicos da Eneva.',
    icon: <Zap className="w-5 h-5 text-white" />,
    isCompleted: false
  },
  {
    date: '07/07 a 14/07',
    title: 'Avaliação de Pitchs',
    stepNumber: '06',
    desc: 'Análise aprofundada da aderência técnica, escalabilidade e potencial de impacto operacional.',
    icon: <ClipboardCheck className="w-5 h-5 text-white" />,
    isCompleted: false
  },
  {
    date: '19/07 a 25/07',
    title: 'Avaliação final e seleção',
    stepNumber: '07',
    desc: 'Alinhamento corporativo decisivo para determinar as propostas mais viáveis e estratégicas.',
    icon: <Award className="w-5 h-5 text-white" />,
    isCompleted: false
  },
  {
    date: '28/08',
    title: 'Energy Evaluation Committee',
    stepNumber: '08',
    desc: 'Comitê de avaliação final para validação dos acordos de co-desenvolvimento.',
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
    isCompleted: false
  },
  {
    date: '09/10',
    title: 'Startups selecionadas',
    stepNumber: '09',
    desc: 'Divulgação oficial das startups vencedoras para início da jornada de mentoria e investimento.',
    icon: <Trophy className="w-5 h-5 text-white" />,
    isCompleted: false
  }
];

const CRONOGRAMA_STEPS_EN: CronogramaStep[] = [
  {
    date: 'May 2nd',
    title: 'Applications Launch',
    stepNumber: '01',
    desc: 'Official launch of the call for startups and opening of the proposal submission canal.',
    icon: <Rocket className="w-5 h-5 text-white" />,
    isCompleted: false
  },
  {
    date: 'May 15th',
    title: 'Challenge Webinar',
    stepNumber: '02',
    desc: 'Interactive online session with Eneva specialists and executives for Q&A and theme depth.',
    icon: <Laptop className="w-5 h-5 text-white" />,
    isCompleted: false
  },
  {
    date: 'June 13th',
    title: 'Applications Deadline',
    stepNumber: '03',
    desc: 'Final deadline for submissions of proposals, digital ideas, and technologies in the workspace.',
    icon: <CalendarX className="w-5 h-5 text-white" />,
    isCompleted: false
  },
  {
    date: 'July 6th',
    title: 'Pitch Workshop',
    stepNumber: '04',
    desc: 'Exclusive practical training to align the startup pitch deck with deep energy sector pain points.',
    icon: <Users className="w-5 h-5 text-white" />,
    isCompleted: false
  },
  {
    date: 'July 6th to 13th',
    title: 'Energy Pitch',
    stepNumber: '05',
    desc: 'Presentation of short-listed startups directly to the committee of technical managers of Eneva.',
    icon: <Zap className="w-5 h-5 text-white" />,
    isCompleted: false
  },
  {
    date: 'July 7th to 14th',
    title: 'Pitch Assessments',
    stepNumber: '06',
    desc: 'Deep evaluations of technical fit, project scalability, and actual operational impact index.',
    icon: <ClipboardCheck className="w-5 h-5 text-white" />,
    isCompleted: false
  },
  {
    date: 'July 19th to 25th',
    title: 'Final Selection',
    stepNumber: '07',
    desc: 'Decisive executive alignment to select the most strategic and feasible business partnerships.',
    icon: <Award className="w-5 h-5 text-white" />,
    isCompleted: false
  },
  {
    date: 'Aug 28th',
    title: 'Energy Evaluation Committee',
    stepNumber: '08',
    desc: 'Final board validation to inspect and declare co-development sandbox arrangements.',
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
    isCompleted: false
  },
  {
    date: 'Oct 9th',
    title: 'Winners Announcement',
    stepNumber: '09',
    desc: 'Official announcement of the award-winning startups to begin the joint incubation & testing cycle.',
    icon: <Trophy className="w-5 h-5 text-white" />,
    isCompleted: false
  }
];

export default function NewsSlider() {
  const { language: lang } = useLanguage();
  const CRONOGRAMA_STEPS = lang === 'PT' ? CRONOGRAMA_STEPS_PT : CRONOGRAMA_STEPS_EN;

  return (
    <section id="cronograma" className="relative bg-[#cb4f33] py-24 md:py-32 min-h-screen flex flex-col justify-center overflow-hidden text-neutral-800 w-full">
      {/* Premium background effects */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/15 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
      <div className="absolute -left-64 -top-64 w-[600px] h-[600px] bg-white/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute -right-64 -bottom-64 w-[600px] h-[600px] bg-black/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 w-full">
        
        {/* Title Section */}
        <div className="text-center space-y-4 mb-20 max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest bg-white/15 text-white border border-white/15 px-4 py-1.5 rounded-full">
            {lang === 'PT' ? 'PLANEJAMENTO E DATA LIMITES' : 'PLANNING & KEY DEADLINES'}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white mt-1">
            {lang === 'PT' ? 'Cronograma do desafio' : 'Challenge Timeline'}
          </h2>
          <p className="text-sm text-white/90 font-medium">
            {lang === 'PT'
              ? 'Confira as principais datas de participação e acompanhe o andamento estruturado de cada uma das etapas do processo.'
              : 'Keep track of the key program milestones and follow the structured progress of each process phase.'
            }
          </p>
        </div>

        {/* Outer vertical timeline layout */}
        <div className="relative w-full">
          
          {/* Central Vertical Line - Styled with premium semi-transparent Eneva Deep Teal */}
          <div className="absolute left-6 md:left-1/2 top-10 bottom-10 w-1 bg-[#0a585c]/40 -translate-x-1/2 z-0" />

          <div className="space-y-12 md:space-y-16 relative w-full">
            {CRONOGRAMA_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 1;
              
              return (
                <div
                  key={step.stepNumber}
                  className={`flex flex-col md:flex-row items-start md:items-center relative z-10 w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Left (Or right, depending on layout indices) responsive white/gray cards slot */}
                  <div className="w-full md:w-[calc(50%-40px)] pl-16 md:pl-0">
                    <motion.div
                      whileHover={{ scale: 1.015, y: -2 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      className="bg-white p-5 md:p-6 rounded-2xl border border-neutral-100 hover:border-eneva-teal-medium/35 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-between gap-5 relative text-neutral-800"
                    >
                      
                      {/* Contents */}
                      <div className="space-y-2.5 flex-grow pr-2">
                        
                        {/* Interactive anim dates with beautiful floating effect */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <motion.div
                            animate={{ 
                              y: [0, -3, 0],
                              boxShadow: [
                                "0 2px 4px rgba(14,110,114,0.1)", 
                                "0 6px 12px rgba(14,110,114,0.18)", 
                                "0 2px 4px rgba(14,110,114,0.1)"
                              ] 
                            }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 3, 
                              ease: 'easeInOut', 
                              delay: idx * 0.25 
                            }}
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-black tracking-tight border ${
                              step.isCompleted 
                                ? 'bg-eneva-teal-medium/10 text-eneva-teal-medium border-eneva-teal-medium/25' 
                                : 'bg-neutral-100 text-neutral-700 border-neutral-200'
                            }`}
                          >
                            <Calendar className="w-3.5 h-3.5" />
                            {step.date}
                          </motion.div>
                          
                          <span className="text-[10px] font-black uppercase tracking-wider text-neutral-400">
                            {lang === 'PT' ? `Fase ${step.stepNumber}` : `Phase ${step.stepNumber}`}
                          </span>
                        </div>

                        <h3 className="text-lg md:text-xl font-bold font-display tracking-tight text-eneva-teal-deep leading-tight">
                          {step.title}
                        </h3>
                        
                        <p className="text-xs text-neutral-500 font-medium leading-relaxed max-w-sm">
                          {step.desc}
                        </p>
                      </div>

                      {/* Side Checkbox Indicator */}
                      <div className="flex-shrink-0">
                        {step.isCompleted ? (
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center transition-all bg-eneva-teal-medium border border-eneva-teal-deep text-white shadow-inner"
                            style={{ boxShadow: '0 0 12px rgba(14,110,114,0.25)' }}
                          >
                            <Check className="w-5 h-5 stroke-[3px]" />
                          </div>
                        ) : (
                          <div className="w-7 h-7 rounded-lg border-2 border-neutral-300 bg-neutral-50 hover:border-eneva-teal-medium transition-all" />
                        )}
                      </div>

                      {/* Micro connecting pointer on card desktop sides - Styled to match white card bg */}
                      <div
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-neutral-100 ${
                          isEven
                            ? 'left-full -translate-x-2 border-r border-t'
                            : 'right-full translate-x-2 border-l border-b'
                        }`}
                      />
                    </motion.div>
                  </div>

                  {/* Central Green Pill Ring Indicator (over timeline) */}
                  <div className="absolute left-6 md:left-1/2 top-1.5 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20">
                    <motion.div
                      whileHover={{ scale: 1.12 }}
                      className="w-10 h-16 md:w-11 md:h-20 rounded-full flex flex-col justify-center items-center gap-1 text-white shadow-xl bg-eneva-teal-medium border-[3px] border-white"
                    >
                      <div className="flex-shrink-0">
                        {step.icon}
                      </div>
                      <span className="text-[9px] font-black tracking-widest text-white/80 leading-none font-mono">
                        F{step.stepNumber}
                      </span>
                    </motion.div>
                  </div>

                  {/* Empty balanced layout slot for wide screens */}
                  <div className="hidden md:block w-[calc(50%-40px)]" />
                  
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
