import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JapaneseYen, Mail, Star } from "lucide-react";
import { useParams } from "react-router-dom";

const FreelancerDetail = () => {
  const { id } = useParams();
  // This would normally fetch data based on the ID
  const freelancer = {
    id: Number(id),
    name: "田中 太郎",
    title: "フルスタックエンジニア",
    rating: 4.9,
    hourlyRate: 8000,
    skills: ["React", "Node.js", "TypeScript", "Python"],
    description:
      "10年以上の経験を持つフルスタックエンジニアです。大規模なWebアプリケーション開発からモバイルアプリケーション開発まで、幅広い開発経験があります。",
    completedProjects: 45,
    languages: ["日本語", "英語"],
    availability: "週40時間",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold">{freelancer.name}</h1>
                  <p className="text-gray-500">{freelancer.title}</p>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="text-lg">{freelancer.rating}</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold mb-2">自己紹介</h2>
                  <p className="text-gray-600">{freelancer.description}</p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-2">スキル</h2>
                  <div className="flex flex-wrap gap-2">
                    {freelancer.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h2 className="text-lg font-semibold mb-2">実績</h2>
                    <p className="text-gray-600">
                      完了案件数: {freelancer.completedProjects}件
                    </p>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-2">稼働可能時間</h2>
                    <p className="text-gray-600">{freelancer.availability}</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-2">対応言語</h2>
                  <div className="flex gap-2">
                    {freelancer.languages.map((language) => (
                      <span
                        key={language}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="flex items-center">
                    <JapaneseYen className="h-5 w-5 mr-1" />
                    <span className="text-xl font-semibold">
                      {freelancer.hourlyRate.toLocaleString()}/時
                    </span>
                  </div>
                  <Button>
                    <Mail className="mr-2 h-4 w-4" />
                    メッセージを送る
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default FreelancerDetail;