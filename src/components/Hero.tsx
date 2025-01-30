import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-secondary/5 py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <Badge variant="outline" className="bg-primary/10 text-primary">
                日本最大級のフリーランス市場
              </Badge>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              フリーランスエンジニアの
              <br />
              新しい働き方を提供
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              DevHubは、低手数料で高品質な案件とエンジニアをマッチングするプラットフォームです。
              安心・安全な取引環境で、あなたのキャリアをサポートします。
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary w-5 h-5" />
                <span>業界最低水準の手数料</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary w-5 h-5" />
                <span>エスクローによる安全な取引</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary w-5 h-5" />
                <span>24時間365日のサポート体制</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Button size="lg" asChild className="group">
                <Link to="/post-job">
                  案件を掲載する
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/jobs">案件を探す</Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174"
              alt="オフィスで働くエンジニア"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};