import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, Volume2, VolumeX, Lightbulb } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { WebdoorSlide } from '../types';

const SLIDES_PT: WebdoorSlide[] = [
  {
    id: 1,
    title: 'COMERCIALIZAÇÃO E MONETIZAÇÃO DE GÁS E ENERGIA',
    mediaType: 'image',
    mediaUrl: 'https://images.pexels.com/photos/34774358/pexels-photo-34774358.jpeg',
    buttonText: 'INSCRIÇÕES ENCERRADAS',
    buttonLink: '#regulamento-faq'
  },
  {
    id: 2,
    title: 'RECEBA EXPERTISE SETORIAL E MENTORIA COM EXECUTIVOS',
    mediaType: 'image',
    mediaUrl: 'https://images.pexels.com/photos/20044377/pexels-photo-20044377.jpeg',
    buttonText: 'INSCRIÇÕES ENCERRADAS',
    buttonLink: '#por-que-participar'
  },
  {
    id: 3,
    title: 'CONEXÕES COM PARCEIROS E POSSIBILIDADE DE INVESTIMENTO',
    mediaType: 'video',
    mediaUrl: 'https://fd-siteeneva-prd-ajembshudubpg5et.a03.azurefd.net/media/media/hub-sergipe-10s.mp4',
    buttonText: 'INSCRIÇÕES ENCERRADAS',
    buttonLink: '#participar'
  }
];

const SLIDES_EN: WebdoorSlide[] = [
  {
    id: 1,
    title: 'MARKETING AND MONETIZATION OF GAS AND ENERGY',
    mediaType: 'image',
    mediaUrl: 'https://images.pexels.com/photos/34774358/pexels-photo-34774358.jpeg',
    buttonText: 'APPLICATIONS CLOSED',
    buttonLink: '#regulamento-faq'
  },
  {
    id: 2,
    title: 'RECEIVE INDUSTRY EXPERTISE AND EXECUTIVE MENTORSHIP',
    mediaType: 'image',
    mediaUrl: 'https://images.pexels.com/photos/20044377/pexels-photo-20044377.jpeg',
    buttonText: 'APPLICATIONS CLOSED',
    buttonLink: '#por-que-participar'
  },
  {
    id: 3,
    title: 'CONNECTIONS WITH PARTNERS AND INVESTMENT OPPORTUNITIES',
    mediaType: 'video',
    mediaUrl: 'https://fd-siteeneva-prd-ajembshudubpg5et.a03.azurefd.net/media/media/hub-sergipe-10s.mp4',
    buttonText: 'APPLICATIONS CLOSED',
    buttonLink: '#participar'
  }
];

export default function Webdoor() {
  const { language: lang } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDES = lang === 'PT' ? SLIDES_PT : SLIDES_EN;

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 7000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [activeSlide, lang]);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const selectSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] bg-eneva-teal-deep overflow-hidden">
      
      {/* Slides view wrapper */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
              }`}
            >
              {/* Media element container */}
              <div className="absolute inset-0 bg-black/45 z-10" />
              
              {slide.mediaType === 'video' ? (
                <video
                  ref={(el) => { videoRefs.current[index] = el; }}
                  src={slide.mediaUrl}
                  autoPlay={isActive}
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={slide.mediaUrl}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}

              {/* Slide content box positioned precisely */}
              <div className="absolute inset-0 flex items-center z-20 pt-24 md:pt-32 pb-20 md:pb-24">
                <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
                  <div className="max-w-3xl text-white space-y-5 md:space-y-6">
                    
                    <div className="inline-flex items-center gap-2 text-eneva-lime font-extrabold uppercase tracking-widest text-xs md:text-sm bg-black/30 px-4 py-2 rounded-full border border-eneva-lime/25 backdrop-blur-xs">
                      <Lightbulb className="w-4 h-4 text-eneva-lime animate-pulse" />
                      {lang === 'PT' ? 'DESAFIO INOVA ENEVA' : 'INOVA ENEVA CHALLENGE'}
                    </div>

                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight font-display drop-shadow leading-tight">
                      {slide.title}
                    </h2>
                    
                    <p className="text-sm md:text-base text-gray-200 tracking-wide font-medium max-w-xl">
                      {lang === 'PT' 
                        ? 'Se a sua startup propõe soluções inovadoras em comercialização e monetização de gás e energia, o Desafio Inova Eneva é para você! Os participantes deverão propor ideias inovadoras, produtos, serviços ou tecnologias à Eneva.'
                        : 'If your startup proposes innovative solutions in gas and energy marketing and monetization, the Inova Eneva Challenge is for you! Participants must propose innovative ideas, products, services, or technologies to Eneva.'
                      }
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                      <span className="inline-flex items-center gap-2 px-8 py-4 bg-gray-500/30 text-white/80 text-xs font-black tracking-widest rounded-full border border-white/10 backdrop-blur-xs">
                        {lang === 'PT' ? 'INSCRIÇÕES ENCERRADAS' : 'APPLICATIONS CLOSED'}
                      </span>
                      <a
                        href="#sobre"
                        className="inline-flex items-center justify-center px-6 py-4 border-2 border-white/80 hover:border-white text-white hover:bg-white hover:text-eneva-teal-deep bg-white/5 text-xs font-black tracking-widest uppercase rounded-full transition-all duration-300 shadow-md backdrop-blur-xs cursor-pointer"
                      >
                        {lang === 'PT' ? 'Saber mais sobre o desafio' : 'Learn more about the challenge'}
                      </a>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Mute controller toggler for active video slide */}
      {SLIDES[activeSlide].mediaType === 'video' && (
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-32 right-4 md:right-12 z-30 bg-black/40 hover:bg-black/60 text-white rounded-full p-2.5 transition-all outline-none cursor-pointer"
          title={isMuted ? (lang === 'PT' ? 'Ativar Som' : 'Unmute') : (lang === 'PT' ? 'Mutar' : 'Mute')}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      )}

      {/* Slide Arrow navigations */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/10 hover:bg-black/30 text-white rounded-full p-2.5 transition-all opacity-0 md:opacity-100 hover:scale-105 cursor-pointer"
        aria-label={lang === 'PT' ? 'Anterior' : 'Previous'}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/10 hover:bg-black/30 text-white rounded-full p-2.5 transition-all opacity-0 md:opacity-100 hover:scale-105 cursor-pointer"
        aria-label={lang === 'PT' ? 'Próximo' : 'Next'}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Simple minimalist pagination dots */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
        {SLIDES.map((_, idx) => {
          const isActive = idx === activeSlide;
          return (
            <button
              key={idx}
              onClick={() => selectSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                isActive ? 'w-8 bg-eneva-lime' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Ver slide ${idx + 1}`}
            />
          );
        })}
      </div>

    </section>
  );
}
