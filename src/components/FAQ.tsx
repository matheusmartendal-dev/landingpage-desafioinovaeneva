import React, { useState } from 'react';
import { Mail, HelpCircle, ChevronDown, ChevronUp, FileQuestion, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS_PT: FAQItem[] = [
  {
    question: 'Até quando vão as inscrições do Desafio Inova Eneva?',
    answer: 'As inscrições oficiais do Desafio estão encerradas. Acompanhe nosso cronograma para ver as próximas etapas de avaliação e apresentações do Energy Pitch.'
  },
  {
    question: 'Quem pode participar do programa de inovação?',
    answer: 'Startups de base tecnológica que já oferecem soluções comerciais de alta tensão, análise de inteligência de dados de eficiência energética, ferramentas de elevação de vendas, faturamento financeiro ou retenção através de canais digitais.'
  },
  {
    question: 'Quais são os principais benefícios para as startups selecionadas?',
    answer: 'As empresas selecionadas terão chance única de mentoria com especialistas e diretores executivos da Eneva, conexões diretas no ecossistema, teste em ativos reais e possibilidade de investimento corporativo.'
  },
  {
    question: 'Como funciona a avaliação dos Pitchs?',
    answer: 'Nossa comissão avaliadora selecionará as melhores ideias e projetos com base em aplicabilidade técnica, maturidade operacional, nível de inovação e aderência aos temas propostos.'
  }
];

const FAQS_EN: FAQItem[] = [
  {
    question: 'When does the registration for the Inova Eneva Challenge close?',
    answer: 'Official registrations for the Challenge are now closed. Follow our timeline to check subsequent assessment phases and Energy Pitch presentations.'
  },
  {
    question: 'Who can participate in the innovation program?',
    answer: 'Technology-based startups with solutions in high-voltage commercialization, energy efficiency data intelligence, sales growth tools, billing operations, or digital channel customer retention.'
  },
  {
    question: 'What are the main benefits for selected startups?',
    answer: 'Selected companies will have a unique mentoring opportunity with Eneva specialists and executive directors, ecosystem access, sandbox testing on real assets, and corporate venture potential.'
  },
  {
    question: 'How does the Pitch assessment work?',
    answer: 'Our evaluation committee selects the leading ideas and startups based on technical feasibility, operational maturity, innovation index, and match with interest themes.'
  }
];

export default function FAQ() {
  const { language: lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showToast, setShowToast] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleFAQDoc = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4500);
  };

  const FAQS = lang === 'PT' ? FAQS_PT : FAQS_EN;

  return (
    <section id="faq" className="bg-[#EDF1F2] py-24 md:py-32 min-h-screen flex flex-col justify-center text-eneva-slate relative overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute right-[-10%] top-0 w-96 h-96 bg-eneva-lime/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10 w-full">
        
        {/* Header content */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 text-2xs uppercase tracking-widest font-extrabold text-eneva-lime">
            <HelpCircle className="w-3.5 h-3.5" />
            {lang === 'PT' ? 'DÚVIDAS FREQUENTES' : 'FREQUENTLY ASKED QUESTIONS'}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-eneva-teal-deep">
            {lang === 'PT' ? 'Perguntas Frequentes (FAQ)' : 'FAQ / Support'}
          </h2>
          <p className="text-gray-500 font-medium text-sm md:text-base max-w-xl mx-auto font-sans">
            {lang === 'PT'
              ? 'Tem alguma pergunta sobre o Desafio Inova Eneva? Veja as principais respostas abaixo:'
              : 'Have any questions about the Inova Eneva Challenge? View the answers below:'
            }
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 mb-12">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-150/60 shadow-xs overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center font-bold text-sm md:text-base text-eneva-teal-deep hover:text-eneva-lime transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-eneva-lime flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                  )}
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-gray-100 p-6 bg-gray-50/50' : 'max-h-0'
                  }`}
                >
                  <p className="text-xs md:text-sm text-gray-600 font-bold leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Master CTA visual button */}
        <div className="text-center space-y-8 bg-white rounded-3xl p-8 md:p-10 border border-gray-150/60 shadow-sm relative">
          <div className="max-w-md mx-auto space-y-3">
            <h3 className="text-base font-extrabold text-eneva-teal-deep">
              {lang === 'PT' ? 'Quer ver todas as perguntas respondidas no FAQ?' : 'Want to see all answered questions in the FAQ?'}
            </h3>
            <p className="text-2xs text-gray-400 font-bold uppercase tracking-wider">
              {lang === 'PT' ? 'Acesse o documento unificado de regras' : 'Access the unified guidelines document'}
            </p>
          </div>

          <div>
            <button
              onClick={handleFAQDoc}
              className="inline-flex items-center gap-2 px-10 py-4 bg-eneva-teal-deep hover:bg-eneva-lime text-white font-black tracking-widest text-xs uppercase rounded-full transition-all duration-300 shadow-md cursor-pointer"
            >
              <FileQuestion className="w-4 h-4" />
              {lang === 'PT' ? 'ACESSE AS PERGUNTAS MAIS FREQUENTES' : 'ACCESS UNIFIED FAQ CENTER'}
            </button>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col md:flex-row items-center justify-center gap-3">
            <span className="text-xs text-gray-500 font-semibold text-center">
              {lang === 'PT'
                ? 'Caso não tenha encontrado a resposta da dúvida no link acima de FAQ, envie um email:'
                : 'If you did not find your answer in the links above, please send an email to:'
              }
            </span>
            <a
              href="mailto:contato@desafioinovaeneva.com.br"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-100 hover:bg-eneva-lime/20 hover:text-eneva-brown text-eneva-teal-deep text-xs font-bold rounded-xl transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              contato@desafioinovaeneva.com.br
            </a>
          </div>
        </div>

        {/* Informative toast */}
        {showToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#0a585c] text-white border border-white/20 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in max-w-sm">
            <CheckCircle2 className="w-6 h-6 text-eneva-lime flex-shrink-0" />
            <div className="text-xs">
              <strong className="block text-sm font-bold text-white">
                {lang === 'PT' ? 'Central de Ajuda' : 'Unified FAQ Hub'}
              </strong>
              <span className="text-white/80 font-medium">
                {lang === 'PT' 
                  ? 'A central unificada de perguntas e respostas está sendo gerada para você.' 
                  : 'Preparing the full knowledge base questions catalog in PDF.'
                }
              </span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
