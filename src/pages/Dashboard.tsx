import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JapaneseYen, Briefcase, Clock, Star } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "総収入",
      value: "¥850,000",
      icon: JapaneseYen,
    },
    {
      title: "完了案件",
      value: "12",
      icon: Briefcase,
    },
    {
      title: "稼働時間",
      value: "164時間",
      icon: Clock,
    },
    {
      title: "評価",
      value: "4.9",
      icon: Star,
    },
  ];

  const recentProjects = [
    {
      id: 1,
      title: "ECサイトのフロントエンド開発",
      client: "株式会社テック",
      status: "進行中",
      dueDate: "2024-04-15",
    },
    {
      id: 2,
      title: "モバイルアプリのUI実装",
      client: "スタートアップA社",
      status: "完了",
      dueDate: "2024-03-30",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">ダッシュボード</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>進行中の案件</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div
                    key={project.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div>
                      <h3 className="font-semibold">{project.title}</h3>
                      <p className="text-sm text-gray-500">{project.client}</p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-block px-2 py-1 rounded text-sm ${
                          project.status === "進行中"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {project.status}
                      </span>
                      <p className="text-sm text-gray-500 mt-1">
                        期限: {project.dueDate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>最近のアクティビティ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <p className="text-sm text-gray-600">
                    新しい案件が追加されました
                  </p>
                  <p className="text-xs text-gray-400 mt-1">1時間前</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p className="text-sm text-gray-600">
                    プロジェクトのマイルストーンを達成しました
                  </p>
                  <p className="text-xs text-gray-400 mt-1">3時間前</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p className="text-sm text-gray-600">
                    新しいメッセージを受信しました
                  </p>
                  <p className="text-xs text-gray-400 mt-1">1日前</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;