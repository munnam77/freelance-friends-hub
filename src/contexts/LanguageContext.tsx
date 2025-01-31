import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ja';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    'nav.jobs': 'Jobs',
    'nav.freelancers': 'Freelancers',
    'nav.postJob': 'Post a Job',
    'nav.login': 'Login',
    'featuredJobs.title': 'Featured Jobs',
    'featuredJobs.description': 'Discover the latest opportunities from top companies',
    'featuredJobs.viewDetails': 'View Details',
    'featuredJobs.viewAll': 'View All Jobs',
  },
  ja: {
    'nav.jobs': '求人情報',
    'nav.freelancers': 'フリーランス',
    'nav.postJob': '求人を掲載',
    'nav.login': 'ログイン',
    'featuredJobs.title': '注目の求人',
    'featuredJobs.description': 'トップ企業の最新の機会を見つけましょう',
    'featuredJobs.viewDetails': '詳細を見る',
    'featuredJobs.viewAll': 'すべての求人を見る',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};