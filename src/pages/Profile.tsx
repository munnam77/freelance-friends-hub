import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "山田 太郎",
    email: "yamada@example.com",
    title: "シニアフロントエンドエンジニア",
    bio: "5年以上のフロントエンド開発経験があります。",
    skills: "React, TypeScript, Next.js",
    hourlyRate: "8000",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", profile);
    // Handle profile update
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>プロフィール設定</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">名前</label>
                <Input
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">メールアドレス</label>
                <Input
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">職種</label>
                <Input
                  value={profile.title}
                  onChange={(e) =>
                    setProfile({ ...profile, title: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">自己紹介</label>
                <Textarea
                  value={profile.bio}
                  onChange={(e) =>
                    setProfile({ ...profile, bio: e.target.value })
                  }
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">スキル</label>
                <Input
                  value={profile.skills}
                  onChange={(e) =>
                    setProfile({ ...profile, skills: e.target.value })
                  }
                  placeholder="カンマ区切りでスキルを入力"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">時給（円）</label>
                <Input
                  type="number"
                  value={profile.hourlyRate}
                  onChange={(e) =>
                    setProfile({ ...profile, hourlyRate: e.target.value })
                  }
                />
              </div>

              <Button type="submit" className="w-full">
                保存する
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Profile;