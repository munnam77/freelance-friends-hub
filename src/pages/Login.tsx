import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, Lock, Github, Chrome } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const loginSchema = z.object({
    email: z.string().email({
      message: "有効なメールアドレスを入力してください",
    }),
    password: z.string().min(8, {
      message: "パスワードは8文字以上である必要があります",
    }),
  });

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: t('auth.login'),
        description: t('auth.loginSuccess'),
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        variant: "destructive",
        title: t('auth.error'),
        description: t('auth.loginError'),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: t('auth.login'),
        description: t('auth.loginSuccess'),
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        variant: "destructive",
        title: t('auth.error'),
        description: t('auth.googleError'),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGithubLogin = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: t('auth.login'),
        description: t('auth.loginSuccess'),
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        variant: "destructive",
        title: t('auth.error'),
        description: t('auth.githubError'),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <Card className="w-full max-w-md backdrop-blur-sm bg-white/80">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center font-bold">
            {t('auth.login')}
          </CardTitle>
          <CardDescription className="text-center">
            {t('auth.hasAccount')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Button 
              variant="outline" 
              className="w-full gap-2" 
              onClick={handleGoogleLogin}
              disabled={isLoading}
            >
              <Chrome className="h-5 w-5" />
              Google
            </Button>
            <Button 
              variant="outline" 
              className="w-full gap-2" 
              onClick={handleGithubLogin}
              disabled={isLoading}
            >
              <Github className="h-5 w-5" />
              GitHub
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                {t('auth.or')}
              </span>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('auth.email')}</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        <Input
                          type="email"
                          className="pl-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('auth.password')}</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        <Input
                          type="password"
                          className="pl-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? "..." : t('auth.loginButton')}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center w-full">
            {t('auth.noAccount')}{" "}
            <Link
              to="/register"
              className="text-primary hover:underline font-medium"
            >
              {t('auth.register')}
            </Link>
          </div>
          <div className="text-sm text-center text-muted-foreground">
            <Link to="/forgot-password" className="hover:underline">
              {t('auth.forgotPassword')}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;