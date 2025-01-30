import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JapaneseYen, Search, Star } from "lucide-react";

const freelancers = [
  {
    id: 1,
    name: "田中 太郎",
    title: "フルスタックエンジニア",
    rating: 4.9,
    hourlyRate: 8000,
    skills: ["React", "Node.js", "TypeScript", "Python"],
    description: "10年以上の経験を持つフルスタックエンジニアです。",
  },
  {
    id: 2,
    name: "佐藤 花子",
    title: "UIデザイナー",
    rating: 4.8,
    hourlyRate: 7000,
    skills: ["Figma", "Adobe XD", "UI/UX", "Webデザイン"],
    description: "使いやすいインターフェースの設計が得意です。",
  },
  // Add more freelancers as needed
];

const Freelancers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">フリーランス一覧</h1>
          <div className="flex gap-4">
            <Input
              placeholder="スキル、経験などで検索"
              className="max-w-md"
              type="search"
            />
            <Button>
              <Search className="mr-2 h-4 w-4" />
              検索
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {freelancers.map((freelancer) => (
            <Card key={freelancer.id}>
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{freelancer.name}</h3>
                    <p className="text-sm text-gray-500">{freelancer.title}</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>{freelancer.rating}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-gray-600">{freelancer.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {freelancer.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <JapaneseYen className="h-4 w-4 mr-1" />
                    <span className="font-semibold">
                      {freelancer.hourlyRate.toLocaleString()}/時
                    </span>
                  </div>
                  <Button asChild>
                    <a href={`/freelancers/${freelancer.id}`}>詳細を見る</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Freelancers;