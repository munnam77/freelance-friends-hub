import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code2, Menu, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ja' ? 'en' : 'ja');
  };

  return (
    <nav className="border-b bg-white/75 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Code2 className="w-8 h-8" />
          DevHub
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/jobs" className="text-gray-600 hover:text-primary transition-colors">
            {t('nav.jobs')}
          </Link>
          <Link to="/freelancers" className="text-gray-600 hover:text-primary transition-colors">
            {t('nav.freelancers')}
          </Link>
          <Button variant="outline" asChild className="animate-fade-in">
            <Link to="/post-job">{t('nav.postJob')}</Link>
          </Button>
          <Button asChild className="animate-fade-in">
            <Link to="/login">{t('nav.login')}</Link>
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleLanguage}>
            <Globe className="w-5 h-5" />
          </Button>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </nav>
  );
};