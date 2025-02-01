import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { language } = useLanguage();

  const benefits = [
    {
      en: "Industry-lowest commission rates",
      ja: "業界最低水準の手数料",
    },
    {
      en: "Secure transactions with escrow",
      ja: "エスクローによる安全な取引",
    },
    {
      en: "24/7 support available",
      ja: "24時間365日のサポート体制",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 py-32">
      <div className="absolute inset-0 bg-grid-primary/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl animate-fade-in space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-primary/10 text-primary">
                {language === 'en' 
                  ? "Japan's Largest Freelance Marketplace" 
                  : "日本最大級のフリーランス市場"}
              </Badge>
            </div>
            <h1 className="text-5xl font-bold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {language === 'en' ? (
                <>
                  Providing New Ways of Work
                  <br />
                  for Freelance Engineers
                </>
              ) : (
                <>
                  フリーランスエンジニアの
                  <br />
                  新しい働き方を提供
                </>
              )}
            </h1>
            <p className="text-xl text-gray-600">
              {language === 'en' 
                ? "DevHub is a platform that matches high-quality projects with engineers at low commission rates. We support your career in a safe and secure transaction environment."
                : "DevHubは、低手数料で高品質な案件とエンジニアをマッチングするプラットフォームです。安心・安全な取引環境で、あなたのキャリアをサポートします。"}
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span>{language === 'en' ? benefit.en : benefit.ja}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <Button size="lg" asChild className="group">
                <Link to="/post-job">
                  {language === 'en' ? "Post a Job" : "案件を掲載する"}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/jobs">
                  {language === 'en' ? "Find Jobs" : "案件を探す"}
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg" />
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174"
              alt={language === 'en' ? "Engineer working in office" : "オフィスで働くエンジニア"}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};