import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.jobs': 'Find Jobs',
    'nav.freelancers': 'Find Freelancers',
    'nav.postJob': 'Post a Job',
    'nav.login': 'Login',
    'login.title': 'Login',
    'login.description': 'Sign in to find freelance opportunities',
    'login.email': 'Email',
    'login.password': 'Password',
    'login.submit': 'Login',
    'login.or': 'or',
    'login.github': 'Login with GitHub',
    'login.noAccount': "Don't have an account?",
    'login.register': 'Register',
  },
  ja: {
    'nav.jobs': '案件を探す',
    'nav.freelancers': 'フリーランスを探す',
    'nav.postJob': '案件を掲載',
    'nav.login': 'ログイン',
    'login.title': 'ログイン',
    'login.description': 'アカウントにログインして、フリーランス案件を見つけましょう',
    'login.email': 'メールアドレス',
    'login.password': 'パスワード',
    'login.submit': 'ログイン',
    'login.or': 'または',
    'login.github': 'GitHubでログイン',
    'login.noAccount': 'アカウントをお持ちでない方は',
    'login.register': '新規登録',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ja');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};