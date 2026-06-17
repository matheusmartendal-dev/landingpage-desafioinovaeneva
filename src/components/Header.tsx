import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ExternalLink, ChevronDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface SubMenuItem {
  label: string;
  link: string;
}

interface NavItem {
  title: string;
  link: string;
  submenu: SubMenuItem[];
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { language: lang, setLanguage: setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navMenuItems: NavItem[] = lang === 'PT' ? [
    {
      title: 'O Desafio',
      link: '#sobre',
      submenu: [
        { label: 'O que é', link: '#sobre' },
        { label: 'Quem pode participar', link: '#participar' }
      ]
    },
    {
      title: 'Temas',
      link: '#temas',
      submenu: [
        { label: 'Temas de interesse', link: '#temas' }
      ]
    },
    {
      title: 'Vantagens',
      link: '#por-que-participar',
      submenu: [
        { label: 'Por que participar?', link: '#por-que-participar' },
        { label: 'Empresas do Portfólio', link: '#por-que-participar' }
      ]
    },
    {
      title: 'Cronograma',
      link: '#cronograma',
      submenu: [
        { label: 'Etapas de Seleção', link: '#cronograma' }
      ]
    },
    {
      title: 'Realizadores',
      link: '#realizadores',
      submenu: [
        { label: 'Quem realiza', link: '#realizadores' }
      ]
    },
    {
      title: 'Suporte',
      link: '#faq',
      submenu: [
        { label: 'Dúvidas Frequentes', link: '#faq' }
      ]
    }
  ] : [
    {
      title: 'The Challenge',
      link: '#sobre',
      submenu: [
        { label: 'What is it', link: '#sobre' },
        { label: 'Who can participate', link: '#participar' }
      ]
    },
    {
      title: 'Themes',
      link: '#temas',
      submenu: [
        { label: 'Themes of interest', link: '#temas' }
      ]
    },
    {
      title: 'Benefits',
      link: '#por-que-participar',
      submenu: [
        { label: 'Why participate?', link: '#por-que-participar' },
        { label: 'Portfolio Companies', link: '#por-que-participar' }
      ]
    },
    {
      title: 'Timeline',
      link: '#cronograma',
      submenu: [
        { label: 'Selection Stages', link: '#cronograma' }
      ]
    },
    {
      title: 'Organizers',
      link: '#realizadores',
      submenu: [
        { label: 'Who organizes', link: '#realizadores' }
      ]
    },
    {
      title: 'Support',
      link: '#faq',
      submenu: [
        { label: 'Frequently Asked Questions', link: '#faq' }
      ]
    }
  ];

  const handleMobileSectionToggle = (title: string) => {
    if (expandedMobileSection === title) {
      setExpandedMobileSection(null);
    } else {
      setExpandedMobileSection(title);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(lang === 'PT' ? `Pesquisando por: "${searchQuery}"` : `Searching for: "${searchQuery}"`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      {/* Target headers elements strictly styled like the landing page */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isMenuOpen
            ? 'bg-white shadow-md py-3 text-eneva-slate'
            : 'bg-gradient-to-b from-black/60 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="inline-block">
              <img
                src={scrolled ? "https://www.eneva.com.br/static/images/logo-color.svg" : "https://www.eneva.com.br/static/images/logo.ac5f7806cefa.svg"}
                width="158"
                height="50"
                alt="Eneva"
                className={`h-11 md:h-12 w-auto transition-all duration-300 ${
                  scrolled ? '' : 'brightness-0 invert'
                }`}
              />
            </a>
          </div>
          {/* Desktop Right Side Menu Controls */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="http://ri.eneva.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-xs font-bold tracking-widest hover:text-eneva-lime transition-colors duration-200"
            >
              {lang === 'PT' ? 'INVESTIDORES' : 'INVESTORS'}
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Language toggle resembling PT | EN */}
            <div className="flex items-center text-xs font-bold tracking-widest text-[#9ca3af]/80">
              <button
                onClick={() => setLang('PT')}
                className={`cursor-pointer transition-colors ${
                  lang === 'PT' ? 'text-eneva-lime font-black' : 'hover:text-white'
                }`}
              >
                PT
              </button>
              <span className="mx-2 text-gray-500/50">|</span>
              <button
                onClick={() => setLang('EN')}
                className={`cursor-pointer transition-colors ${
                  lang === 'EN' ? 'text-eneva-lime font-black' : 'hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Magnifying glass for search overlay */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1.5 hover:text-eneva-lime transition-colors duration-200 cursor-pointer"
              aria-label={lang === 'PT' ? 'Buscar' : 'Search'}
            >
              <Search className="w-5.5 h-5.5" />
            </button>

            {/* Hamburger controller for menu-overlay drawer */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 group p-1 hover:text-eneva-lime transition-colors duration-200 cursor-pointer"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>

          {/* Mobile controllers */}
          <div className="flex lg:hidden items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1 hover:text-eneva-lime transition-colors cursor-pointer"
              aria-label={lang === 'PT' ? 'Buscar' : 'Search'}
            >
              <Search className="w-5.5 h-5.5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-1 hover:text-eneva-lime transition-colors cursor-pointer"
              aria-label="Menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>

        </div>
      </header>

      {/* Floating search modal overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/80 z-60 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300">
          <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl scale-100 transform transition-all p-6 md:p-10 relative">
            
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-eneva-slate hover:text-eneva-lime transition-colors p-2"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-xl md:text-2xl font-bold text-eneva-slate mb-6">
              {lang === 'PT' ? 'O que você procura?' : 'What are you looking for?'}
            </h3>

            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder={lang === 'PT' ? 'Buscar...' : 'Search...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-[#EDF1F2] text-eneva-slate px-6 py-4 pr-12 rounded-full border border-gray-200 focus:outline-none focus:border-eneva-teal-medium focus:ring-1 focus:ring-eneva-teal-medium transition-all"
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-eneva-slate hover:text-eneva-lime transition-colors p-1"
              >
                <Search className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Drawer menu overlay */}
      <div 
        className={`fixed inset-0 bg-[#0a585c] text-white z-50 transition-all duration-500 ease-out flex flex-col overflow-y-auto ${
          isMenuOpen ? 'opacity-100 translate-y-[0%]' : 'opacity-0 translate-y-[-100%] pointer-events-none'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col min-h-full">
          
          {/* Menu top row */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8 md:mb-12">
            <a href="/">
              <img
                src="https://www.eneva.com.br/static/images/logo.ac5f7806cefa.svg"
                width="158"
                height="50"
                className="h-10 md:h-12 w-auto brightness-0 invert"
                alt="Eneva"
              />
            </a>

            <div className="flex items-center space-x-6 md:space-x-8">
              {/* Language toggler */}
              <div className="flex items-center text-xs font-bold tracking-widest text-white/60">
                <button
                  onClick={() => setLang('PT')}
                  className={`cursor-pointer transition-colors ${
                    lang === 'PT' ? 'text-eneva-lime font-black' : 'hover:text-white'
                  }`}
                >
                  PT
                </button>
                <span className="mx-2">|</span>
                <button
                  onClick={() => setLang('EN')}
                  className={`cursor-pointer transition-colors ${
                    lang === 'EN' ? 'text-eneva-lime font-black' : 'hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Search button in menu */}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="hover:text-eneva-lime transition-colors cursor-pointer"
              >
                <Search className="w-5.5 h-5.5" />
              </button>

              {/* Close button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-eneva-lime transition-colors p-1 cursor-pointer"
                aria-label={lang === 'PT' ? 'Fechar Menu' : 'Close Menu'}
              >
                <X className="w-7 h-7" />
              </button>
            </div>
          </div>

          {/* Primary & secondary split navigation */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16 flex-grow items-start">
            
            {/* Primary Nav Menu columns (takes remaining widths) */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              {navMenuItems.map((menuItem) => (
                <div key={menuItem.title} className="border-b border-white/5 md:border-none pb-4 md:pb-0">
                  
                  {/* Desktop Title & Sublink lists expand, Mobile Accordion toggles */}
                  <div className="flex items-center justify-between md:mb-4">
                    <h4 className="text-lg md:text-2xl font-black tracking-tight text-white focus:outline-none uppercase">
                      {menuItem.title}
                    </h4>
                    <button
                      onClick={() => handleMobileSectionToggle(menuItem.title)}
                      className="md:hidden text-white/55 hover:text-eneva-lime p-1 cursor-pointer"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          expandedMobileSection === menuItem.title ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Submenu List */}
                  <ul 
                    className={`md:block space-y-2 text-sm text-white/70 font-semibold ${
                      expandedMobileSection === menuItem.title ? 'block mt-3 pl-2' : 'hidden'
                    }`}
                  >
                    {menuItem.submenu.map((sub) => (
                      <li key={sub.label}>
                        <a
                          href={sub.link}
                          onClick={() => setIsMenuOpen(false)}
                          className="hover:text-eneva-lime transition-colors duration-200 block py-1 border-l-2 border-transparent hover:border-eneva-lime pl-2"
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>

            {/* Secondary Link Panel Actions (Column 3 on Desktop) */}
            <div className="lg:col-span-1 bg-white/5 rounded-3xl p-6 md:p-8 space-y-6">
              <h4 className="text-xs uppercase tracking-widest font-bold text-white/40 border-b border-white/10 pb-3">
                {lang === 'PT' ? 'Serviços Rápidos' : 'Quick Links'}
              </h4>

              <ul className="space-y-4">
                <li>
                  <a
                    href="http://ri.eneva.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group text-sm font-semibold hover:text-eneva-lime transition-colors duration-200"
                  >
                    <span>{lang === 'PT' ? 'INVESTIDORES' : 'INVESTORS'}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </li>
                <li>
                  <a
                    href="#seja-um-fornecedor"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between group text-sm font-semibold hover:text-eneva-lime transition-colors duration-200"
                  >
                    <span>{lang === 'PT' ? 'SEJA UM FORNECEDOR' : 'BECOME A SUPPLIER'}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </li>
                <li>
                  <a
                    href="#fale-conosco"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between group text-sm font-semibold hover:text-eneva-lime transition-colors duration-200"
                  >
                    <span>{lang === 'PT' ? 'FALE CONOSCO' : 'CONTACT US'}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.portaldocliente.eneva.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group text-sm font-semibold hover:text-eneva-lime transition-colors duration-200"
                  >
                    <span>{lang === 'PT' ? 'PORTAL DO CLIENTE' : 'CUSTOMER PORTAL'}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Social connections line */}
          <div className="mt-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 space-y-4 md:space-y-0">
            <p>© 2026 Eneva S.A. {lang === 'PT' ? 'Todos os direitos reservados.' : 'All rights reserved.'}</p>
            <div className="flex space-x-4">
              <a href="#aviso-privacidade" className="hover:text-white transition-all">{lang === 'PT' ? 'Aviso de Privacidade' : 'Privacy Notice'}</a>
              <span>•</span>
              <a href="#termos-uso" className="hover:text-white transition-all">{lang === 'PT' ? 'Termos de Uso' : 'Terms of Use'}</a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
