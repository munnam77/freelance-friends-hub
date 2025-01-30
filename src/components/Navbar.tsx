import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code2, Menu, Globe } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="border-b bg-white/75 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Code2 className="w-8 h-8" />
          DevHub
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/jobs" className="text-gray-600 hover:text-primary transition-colors">
            案件を探す
          </Link>
          <Link to="/freelancers" className="text-gray-600 hover:text-primary transition-colors">
            フリーランスを探す
          </Link>
          <Button variant="outline" asChild className="animate-fade-in">
            <Link to="/post-job">案件を掲載</Link>
          </Button>
          <Button asChild className="animate-fade-in">
            <Link to="/login">ログイン</Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Globe className="w-5 h-5" />
          </Button>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </nav>
  );
};