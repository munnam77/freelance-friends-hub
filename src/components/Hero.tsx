import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Find the Perfect Freelancer for Your Project
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with top talent, pay lower fees, and get your projects done faster.
            Join thousands of satisfied clients and freelancers.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <Link to="/post-job">Post a Job</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/jobs">Find Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};