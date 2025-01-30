import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-secondary/5 py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Find Expert Developers for Your Projects
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with top developers, pay lower fees, and get your projects done faster.
              Join thousands of satisfied clients and freelancers on DevHub.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild className="group">
                <Link to="/post-job">
                  Post a Job
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/jobs">Find Work</Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Developer working"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};