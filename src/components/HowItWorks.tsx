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
      en: "Post your job requirements and budget details for free.",
      ja: "無料で案件を掲載できます。要件と予算を詳しく記載してください。",
    },
  },
  {
    icon: Users,
    title: {
      en: "Receive Proposals",
      ja: "提案を受ける",
    },
    description: {
      en: "Get proposals from skilled engineers.",
      ja: "熟練したエンジニアから提案を受け取ります。",
    },
  },
  {
    icon: Star,
    title: {
      en: "Select the Best",
      ja: "最適な人材を選択",
    },
    description: {
      en: "Review profiles, experience, and ratings to choose the best fit.",
      ja: "プロフィール、実績、評価を確認して、最適な人材を選びましょう。",
    },
  },
  {
    icon: Search,
    title: {
      en: "Track Progress",
      ja: "進捗管理",
    },
    description: {
      en: "Monitor project progress and release payment upon completion.",
      ja: "プロジェクトの進捗を確認し、完了後に支払いを行います。",
    },
  },
];

export const HowItWorks = () => {
  const { language } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {language === 'en' ? "How DevHub Works" : "DevHubの利用方法"}
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {language === 'en' 
            ? "Get started with your project in 4 simple steps" 
            : "4つの簡単なステップで、あなたのプロジェクトを始めることができます"}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-none bg-white/50 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="pt-6 relative">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
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