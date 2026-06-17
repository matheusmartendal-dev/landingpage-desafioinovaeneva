import React, { createContext, useContext, useState } from 'react';

export type Language = 'PT' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('eneva_lang');
      return (saved === 'PT' || saved === 'EN') ? saved : 'PT';
    } catch {
      return 'PT';
    }
  });

  const setLanguageAndSave = (lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem('eneva_lang', lang);
    } catch (e) {
      // Ignore security errors in sandboxes
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageAndSave }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
