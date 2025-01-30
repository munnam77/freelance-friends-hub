import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Clock, JapaneseYen, Search, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  "すべて",
  "システム開発",
  "ウェブ開発",
  "モバイルアプリ",
  "UI/UXデザイン",
  "データ分析",
  "AI/機械学習",
];

const Jobs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          {/* Search and Filters */}
          <div className="grid gap-4 md:grid-cols-[1fr_auto_auto]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                placeholder="スキル、キーワードで検索"
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="カテゴリー" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category.toLowerCase()}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              絞り込み
            </Button>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="cursor-pointer">
              リモートワーク ✕
            </Badge>
            <Badge variant="secondary" className="cursor-pointer">
              週3日以下 ✕
            </Badge>
          </div>

          <Separator />

          {/* Results */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="mb-2 group-hover:text-primary transition-colors">
                        フルスタックエンジニア募集
                      </CardTitle>
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">株式会社テックイノベーション</span>
                      </div>
                      <Badge variant="secondary">フルスタック</Badge>
                    </div>
                    <Badge variant="outline" className="bg-primary/5 flex items-center gap-1">
                      <JapaneseYen className="w-3 h-3" />
                      400,000 - 600,000
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    React、Node.js、PostgreSQLを使用したSaaSプラットフォームの開発。リモートワーク可能。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "PostgreSQL"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-secondary/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    2時間前
                  </span>
                  <Button asChild>
                    <Link to={`/jobs/${i + 1}`}>応募する</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Jobs;