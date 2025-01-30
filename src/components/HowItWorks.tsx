import { Briefcase, Search, Star, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: Briefcase,
    title: "案件を掲載",
    description: "無料で案件を掲載できます。要件と予算を詳しく記載してください。",
  },
  {
    icon: Users,
    title: "提案を受ける",
    description: "熟練したエンジニアから提案を受け取ります。",
  },
  {
    icon: Star,
    title: "最適な人材を選択",
    description: "プロフィール、実績、評価を確認して、最適な人材を選びましょう。",
  },
  {
    icon: Search,
    title: "進捗管理",
    description: "プロジェクトの進捗を確認し、完了後に支払いを行います。",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">DevHubの利用方法</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          4つの簡単なステップで、あなたのプロジェクトを始めることができます
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all border-none bg-white/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};