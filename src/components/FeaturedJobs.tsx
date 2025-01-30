import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Building2, Yen } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "フルスタックエンジニア募集",
    category: "フルスタック",
    budget: "¥400,000 - ¥600,000",
    description: "React、Node.js、PostgreSQLを使用したSaaSプラットフォームの開発。リモートワーク可能。",
    company: "株式会社テックイノベーション",
    location: "東京都",
    postedAt: "2時間前",
    skills: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "モバイルアプリ開発者",
    category: "モバイル",
    budget: "¥350,000 - ¥500,000",
    description: "React Nativeを使用したクロスプラットフォームアプリの開発。UI/UXの実装経験必須。",
    company: "グローバルアプリ株式会社",
    location: "大阪府",
    postedAt: "5時間前",
    skills: ["React Native", "TypeScript", "Redux"],
  },
  {
    id: 3,
    title: "バックエンドエンジニア",
    category: "バックエンド",
    budget: "¥450,000 - ¥700,000",
    description: "Python/Djangoを使用したRESTful APIの開発とビジネスロジックの実装。",
    company: "テックスター株式会社",
    location: "福岡県",
    postedAt: "1日前",
    skills: ["Python", "Django", "REST API"],
  },
];

export const FeaturedJobs = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">注目の案件</h2>
            <p className="text-gray-600">最新のIT案件をチェック</p>
          </div>
          <Button variant="outline" asChild className="group">
            <Link to="/jobs">
              すべての案件を見る
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <Card key={job.id} className="group hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{job.company}</span>
                    </div>
                    <Badge variant="secondary">{job.category}</Badge>
                  </div>
                  <Badge variant="outline" className="bg-primary/5 flex items-center gap-1">
                    <Yen className="w-3 h-3" />
                    {job.budget}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-secondary/10">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {job.postedAt}
                </span>
                <Button asChild>
                  <Link to={`/jobs/${job.id}`}>応募する</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};