import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">新規登録</CardTitle>
              <CardDescription className="text-center">
                アカウントを作成して、フリーランス案件を見つけましょう
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">姓</Label>
                  <Input id="firstName" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">名</Label>
                  <Input id="lastName" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">メールアドレス</Label>
                <Input id="email" type="email" placeholder="name@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">パスワード</Label>
                <Input id="password" type="password" />
              </div>
              <Button className="w-full">登録する</Button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    または
                  </span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full gap-2">
                <Github className="w-4 h-4" />
                GitHubで登録
              </Button>
              
              <div className="text-center text-sm">
                すでにアカウントをお持ちの方は{" "}
                <Link to="/login" className="text-primary hover:underline">
                  ログイン
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Register;