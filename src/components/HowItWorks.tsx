import { Briefcase, Search, Star, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: Briefcase,
    title: "Post a Job",
    description: "Create a detailed job posting for free. Specify your requirements and budget.",
  },
  {
    icon: Users,
    title: "Get Proposals",
    description: "Receive proposals from skilled developers within hours.",
  },
  {
    icon: Star,
    title: "Choose the Best",
    description: "Review profiles, portfolios, and ratings to select the perfect match.",
  },
  {
    icon: Search,
    title: "Track Progress",
    description: "Monitor project progress and release payment when satisfied.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">How DevHub Works</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Get your projects done in four simple steps with our streamlined process
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all border-none bg-white/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};