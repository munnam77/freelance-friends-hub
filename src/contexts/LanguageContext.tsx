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
    'auth.login': 'Login',
    'auth.register': 'Register',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.confirmPassword': 'Confirm Password',
    'auth.firstName': 'First Name',
    'auth.lastName': 'Last Name',
    'auth.loginButton': 'Login',
    'auth.registerButton': 'Register',
    'auth.googleLogin': 'Continue with Google',
    'auth.githubLogin': 'Continue with GitHub',
    'auth.or': 'or',
    'auth.noAccount': "Don't have an account?",
    'auth.hasAccount': 'Already have an account?',
    'auth.forgotPassword': 'Forgot password?',
    'auth.registerSuccess': 'Registration successful. Please log in.',
    'auth.loginSuccess': 'Login successful.',
    'auth.error': 'Error',
    'auth.loginError': 'Login failed. Please try again.',
    'auth.registerError': 'Registration failed. Please try again.',
    'auth.googleError': 'Google login failed.',
    'auth.githubError': 'GitHub login failed.',
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
    'auth.login': 'ログイン',
    'auth.register': '新規登録',
    'auth.email': 'メールアドレス',
    'auth.password': 'パスワード',
    'auth.confirmPassword': 'パスワード（確認）',
    'auth.firstName': '姓',
    'auth.lastName': '名',
    'auth.loginButton': 'ログイン',
    'auth.registerButton': '登録する',
    'auth.googleLogin': 'Googleで続ける',
    'auth.githubLogin': 'GitHubで続ける',
    'auth.or': 'または',
    'auth.noAccount': 'アカウントをお持ちでない方は',
    'auth.hasAccount': 'すでにアカウントをお持ちの方は',
    'auth.forgotPassword': 'パスワードをお忘れですか？',
    'auth.registerSuccess': '登録が完了しました。ログインしてください。',
    'auth.loginSuccess': 'ログインしました。',
    'auth.error': 'エラー',
    'auth.loginError': 'ログインに失敗しました。もう一度お試しください。',
    'auth.registerError': '登録に失敗しました。もう一度お試しください。',
    'auth.googleError': 'Googleログインに失敗しました。',
    'auth.githubError': 'GitHubログインに失敗しました。',
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
