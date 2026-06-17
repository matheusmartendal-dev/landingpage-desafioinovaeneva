import React from 'react';
import { Youtube, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface FooterColumn {
  title: string;
  links: { label: string; link: string }[];
}

export default function Footer() {
  const { language: lang } = useLanguage();

  const FOOTER_COLUMNS: FooterColumn[] = lang === 'PT' ? [
    {
      title: 'O DESAFIO',
      links: [
        { label: 'O que é', link: '#sobre' },
        { label: 'Quem pode participar', link: '#participar' },
        { label: 'Temas de interesse', link: '#temas' }
      ]
    },
    {
      title: 'VANTAGENS',
      links: [
        { label: 'Por que participar', link: '#por-que-participar' },
        { label: 'Startups no portfólio', link: '#por-que-participar' },
        { label: 'Realizadores', link: '#realizadores' }
      ]
    },
    {
      title: 'SUPORTE',
      links: [
        { label: 'Regulamento', link: '#regulamento-faq' },
        { label: 'Perguntas Frequentes (FAQ)', link: '#faq' }
      ]
    }
  ] : [
    {
      title: 'THE CHALLENGE',
      links: [
        { label: 'Overview', link: '#sobre' },
        { label: 'Who can participate', link: '#participar' },
        { label: 'Themes of interest', link: '#temas' }
      ]
    },
    {
      title: 'BENEFITS',
      links: [
        { label: 'Why participate', link: '#por-que-participar' },
        { label: 'Portfolio startups', link: '#por-que-participar' },
        { label: 'Organizers', link: '#realizadores' }
      ]
    },
    {
      title: 'SUPPORT',
      links: [
        { label: 'Guidelines', link: '#regulamento-faq' },
        { label: 'Frequently Asked Questions', link: '#faq' }
      ]
    }
  ];

  return (
    <footer className="bg-eneva-teal-deep text-white pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      
      {/* Footer subtle pattern overlay */}
      <div className="absolute left-[-10%] top-[-10%] w-[40%] h-[40%] bg-eneva-lime/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        
        {/* Top visual row: Column maps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-12 border-b border-white/10">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="space-y-4">
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-white/50 pb-1 border-b border-white/5">
                {column.title}
              </h4>
              <ul className="space-y-3.5 text-xs text-white/70 font-semibold">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.link}
                      className="hover:text-eneva-lime transition-all duration-250 block py-0.5"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Center: Social handles, copyright, and lower logos */}
        <div className="pt-12 pb-6 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo brand and copyrights */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <img
              src="https://www.eneva.com.br/static/images/eneva-footer.70aacddc4d99.svg"
              alt="Eneva"
              className="h-10 w-auto"
            />
            <div className="space-y-1">
              <p className="text-xs text-white/40 font-bold">
                {lang === 'PT' 
                  ? '© Copyright 2023 - Todos os direitos reservados à Eneva' 
                  : '© Copyright 2023 - All rights reserved to Eneva'
                }
              </p>
              <p className="text-2xs text-white/35 font-semibold">
                {lang === 'PT'
                  ? 'Integridade, segurança e responsabilidade energética.'
                  : 'Integrity, safety, and energy responsibility.'
                }
              </p>
            </div>
          </div>

          {/* Social circular icons list using Eneva's live assets */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-2xs font-extrabold uppercase tracking-widest text-[#9ca3af]">
              {lang === 'PT' ? 'SIGA A ENEVA' : 'FOLLOW ENEVA'}
            </span>
            <div className="flex space-x-3.5">
              <a
                href="https://www.youtube.com/channel/UCoKGozwYQBgiiI7uR-bNC-w"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 active:scale-95 transition-transform"
                title="Siga no YouTube"
              >
                <img
                  src="https://fd-siteeneva-prd-ajembshudubpg5et.a03.azurefd.net/media/images/youtube.original.webp"
                  alt="YouTube"
                  className="w-9 h-9 rounded-full bg-transparent hover:brightness-110"
                />
              </a>
              <a
                href="https://www.facebook.com/enevabrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 active:scale-95 transition-transform"
                title="Siga no Facebook"
              >
                <img
                  src="https://fd-siteeneva-prd-ajembshudubpg5et.a03.azurefd.net/media/images/facebook.original.webp"
                  alt="Facebook"
                  className="w-9 h-9 rounded-full bg-transparent hover:brightness-110"
                />
              </a>
              <a
                href="https://www.instagram.com/enevabrasil/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 active:scale-95 transition-transform"
                title="Siga no Instagram"
              >
                <img
                  src="https://fd-siteeneva-prd-ajembshudubpg5et.a03.azurefd.net/media/images/instagram.original.webp"
                  alt="Instagram"
                  className="w-9 h-9 rounded-full bg-transparent hover:brightness-110"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/eneva"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 active:scale-95 transition-transform"
                title="Siga no LinkedIn"
              >
                <img
                  src="https://fd-siteeneva-prd-ajembshudubpg5et.a03.azurefd.net/media/images/linkedin.original.webp"
                  alt="LinkedIn"
                  className="w-9 h-9 rounded-full bg-transparent hover:brightness-110"
                />
              </a>
              <a
                href="https://x.com/enevabrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 active:scale-95 transition-transform"
                title="Siga no X"
              >
                <img
                  src="https://fd-siteeneva-prd-ajembshudubpg5et.a03.azurefd.net/media/images/x.original.webp"
                  alt="X (Twitter)"
                  className="w-9 h-9 rounded-full bg-transparent hover:brightness-110"
                />
              </a>
            </div>
          </div>

        </div>

        {/* Lower layout element: Finep and Privacy legal statement */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-4 text-xs text-white/55 font-semibold">
            <a href="#aviso-privacidade" className="hover:text-white hover:underline transition-all">
              {lang === 'PT' ? 'Aviso de Privacidade' : 'Privacy Notice'}
            </a>
            <span className="text-white/20">|</span>
            <a href="#termos-uso" className="hover:text-white hover:underline transition-all">
              {lang === 'PT' ? 'Termos de Uso' : 'Terms of Use'}
            </a>
          </div>

          {/* Partners and supporters */}
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
            {/* Sai do Papel Developer Logo anchor link */}
            <div className="flex items-center gap-3">
              <span className="text-2xs text-white/40 font-bold uppercase tracking-wider">
                {lang === 'PT' ? 'Desenvolvido por:' : 'Developed by:'}
              </span>
              <a
                href="https://www.saidopapel.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-85 transition-opacity"
                aria-label="Logo da Sai do Papel"
              >
                <img
                  src="https://saidopapel.com.br/wp-content/webp-express/webp-images/uploads/2021/03/cropped-Logo-SdP-fundos-escuros.png.webp"
                  alt="Logo da Sai do Papel"
                  className="h-7 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
