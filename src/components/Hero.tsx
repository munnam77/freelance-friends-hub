import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Briefcase, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: Search,
      title: {
        en: "Smart Search",
        ja: "スマート検索",
      },
      description: {
        en: "Find the perfect job match with our intelligent search",
        ja: "インテリジェントな検索で最適な仕事を見つける",
      },
    },
    {
      icon: Briefcase,
      title: {
        en: "Latest Jobs",
        ja: "最新の仕事",
      },
      description: {
        en: "Access the newest opportunities from top companies",
        ja: "トップ企業からの最新の機会にアクセス",
      },
    },
    {
      icon: Users,
      title: {
        en: "Direct Connect",
        ja: "直接つながる",
      },
      description: {
        en: "Connect directly with hiring managers",
        ja: "採用担当者と直接つながる",
      },
    },
  ];

  return (
    <div className="relative min-h-[90vh] overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.9)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95 backdrop-blur-sm" />
      <div className="container relative z-10 mx-auto px-4 pt-20 pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-8 bg-primary/5 text-primary backdrop-blur-sm">
            {language === 'en' 
              ? "Japan's Premier Tech Job Platform" 
              : "日本のプレミアテック求人プラットフォーム"}
          </Badge>
          <h1 className="text-5xl font-bold leading-tight text-foreground sm:text-6xl">
            {language === 'en' ? (
              <>
                Find Your Next
                <br />
                Tech Opportunity in Japan
              </>
            ) : (
              <>
                日本での次なる
                <br />
                テック機会を見つけよう
              </>
            )}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {language === 'en' 
              ? "Connect with leading technology companies and startups in Japan. Find remote and on-site opportunities that match your skills and aspirations."
              : "日本の主要テクノロジー企業やスタートアップとつながりましょう。あなたのスキルと目標に合ったリモートや現場での機会を見つけてください。"}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="group min-w-[200px]">
              <Link to="/jobs">
                {language === 'en' ? "Explore Jobs" : "仕事を探す"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="min-w-[200px] backdrop-blur-sm">
              <Link to="/post-job">
                {language === 'en' ? "Post a Job" : "求人を掲載"}
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card-glass p-6 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <feature.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">
                {language === 'en' ? feature.title.en : feature.title.ja}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en' ? feature.description.en : feature.description.ja}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};