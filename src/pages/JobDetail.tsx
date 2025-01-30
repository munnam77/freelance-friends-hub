import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calendar, Clock, JapaneseYen, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const JobDetail = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          {/* Main Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">フルスタックエンジニア募集</h1>
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>株式会社テックイノベーション</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>東京都</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>2時間前</span>
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2>案件概要</h2>
              <p>
                当社では、新規SaaSプラットフォームの開発に携わっていただけるフルスタックエンジニアを募集しています。
                React、Node.js、PostgreSQLを使用した開発経験のある方を歓迎します。
              </p>

              <h2>必須スキル</h2>
              <ul>
                <li>React.jsでのフロントエンド開発経験（3年以上）</li>
                <li>Node.jsでのバックエンド開発経験（2年以上）</li>
                <li>PostgreSQLなどのRDBMS使用経験</li>
                <li>Git/GitHubを使用したチーム開発経験</li>
              </ul>

              <h2>歓迎スキル</h2>
              <ul>
                <li>TypeScript使用経験</li>
                <li>AWS/GCPなどのクラウドサービス使用経験</li>
                <li>CI/CD構築経験</li>
                <li>アジャイル/スクラム開発経験</li>
              </ul>

              <h2>開発環境</h2>
              <ul>
                <li>言語：TypeScript</li>
                <li>フレームワーク：React, Node.js (Express)</li>
                <li>データベース：PostgreSQL</li>
                <li>その他：Docker, AWS</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>案件情報</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">単価</span>
                  <div className="flex items-center gap-1 font-bold text-lg">
                    <JapaneseYen className="w-4 h-4" />
                    400,000 - 600,000
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">期間</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    3ヶ月〜6ヶ月
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-gray-600">必要スキル</span>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "PostgreSQL", "TypeScript"].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button className="w-full">応募する</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>企業情報</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link to="/company/1" className="block hover:text-primary">
                  株式会社テックイノベーション
                </Link>
                <div className="text-sm text-gray-600">
                  <p>設立：2015年</p>
                  <p>従業員数：50-100人</p>
                  <p>所在地：東京都渋谷区</p>
                </div>
                <Button variant="outline" className="w-full">
                  企業情報を見る
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobDetail;