import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          FreeLance
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/jobs" className="text-gray-600 hover:text-primary">
            Browse Jobs
          </Link>
          <Button variant="outline" asChild>
            <Link to="/post-job">Post a Job</Link>
          </Button>
          <Button asChild>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};