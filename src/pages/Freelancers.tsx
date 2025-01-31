import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, MapPin, Code2, Briefcase } from "lucide-react";

const Freelancers = () => {
  // This would later be fetched from an API/database
  const freelancers = [
    {
      id: 1,
      name: "田中 健一",
      title: "シニアフルスタックエンジニア",
      rating: 4.9,
      location: "東京",
      hourlyRate: "¥15,000",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      completedProjects: 45,
      yearsOfExperience: 8,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      id: 2,
      name: "鈴木 美咲",
      title: "UIデザイナー & フロントエンド開発者",
      rating: 4.8,
      location: "大阪",
      hourlyRate: "¥12,000",
      skills: ["React", "Figma", "TailwindCSS", "Next.js"],
      completedProjects: 32,
      yearsOfExperience: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    {
      id: 3,
      name: "佐藤 隆",
      title: "バックエンドエンジニア",
      rating: 4.7,
      location: "福岡",
      hourlyRate: "¥13,000",
      skills: ["Python", "Django", "PostgreSQL", "Docker"],
      completedProjects: 28,
      yearsOfExperience: 6,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">フリーランスエンジニア</h1>
            <p className="text-gray-600">トップクラスのフリーランスエンジニアを見つけましょう</p>
          </div>
          <Button asChild>
            <Link to="/register">フリーランスとして登録</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelancers.map((freelancer) => (
            <Card key={freelancer.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <img
                  src={freelancer.avatar}
                  alt={freelancer.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <CardTitle className="text-lg">{freelancer.name}</CardTitle>
                  <p className="text-sm text-gray-600">{freelancer.title}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{freelancer.rating}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{freelancer.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Code2 className="w-4 h-4" />
                    <div className="flex flex-wrap gap-1">
                      {freelancer.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Briefcase className="w-4 h-4" />
                    <span>{freelancer.completedProjects}件のプロジェクト完了</span>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="font-semibold text-lg">{freelancer.hourlyRate}/時</span>
                    <Button asChild variant="outline">
                      <Link to={`/freelancers/${freelancer.id}`}>
                        プロフィールを見る
                      </Link>
                    </Button>
                  </div>
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