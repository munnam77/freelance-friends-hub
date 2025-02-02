import { Briefcase, Search, Star, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const steps = [
  {
    icon: Briefcase,
    title: {
      en: "Post a Job",
      ja: "案件を掲載",
    },
    description: {
      en: "Share your project requirements and find the perfect match for your team.",
      ja: "プロジェクトの要件を共有し、チームに最適な人材を見つけましょう。",
    },
  },
  {
    icon: Users,
    title: {
      en: "Connect",
      ja: "つながる",
    },
    description: {
      en: "Direct communication with qualified candidates.",
      ja: "資格のある候補者と直接コミュニケーション。",
    },
  },
  {
    icon: Star,
    title: {
      en: "Select",
      ja: "選択",
    },
    description: {
      en: "Choose the best talent based on skills and experience.",
      ja: "スキルと経験に基づいて最高の人材を選びましょう。",
    },
  },
  {
    icon: Search,
    title: {
      en: "Track",
      ja: "追跡",
    },
    description: {
      en: "Monitor progress and ensure project success.",
      ja: "進捗を監視し、プロジェクトの成功を確実に。",
    },
  },
];

export const HowItWorks = () => {
  const { language } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.5)_100%)]" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            {language === 'en' ? "How It Works" : "ご利用の流れ"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            {language === 'en' 
              ? "Your journey to finding the perfect tech opportunity in Japan starts here" 
              : "日本での理想的なテック機会を見つける旅はここから始まります"}
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-none bg-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/70 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <CardContent className="relative pt-6">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-transform group-hover:scale-110">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {language === 'en' ? step.title.en : step.title.ja}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en' ? step.description.en : step.description.ja}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};