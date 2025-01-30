import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Full-Stack Developer for SaaS Platform",
    category: "Full-Stack",
    budget: "$3,000 - $5,000",
    description: "Looking for an experienced full-stack developer to build a modern SaaS platform using React, Node.js, and PostgreSQL.",
    postedAt: "2 hours ago",
    skills: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Mobile App Developer - React Native",
    category: "Mobile",
    budget: "$2,000 - $4,000",
    description: "Need a skilled React Native developer to create a cross-platform mobile app with modern UI/UX.",
    postedAt: "5 hours ago",
    skills: ["React Native", "TypeScript", "Redux"],
  },
  {
    id: 3,
    title: "Backend Developer - Python/Django",
    category: "Backend",
    budget: "$2,500 - $4,500",
    description: "Seeking a backend developer to build RESTful APIs and implement complex business logic using Python/Django.",
    postedAt: "1 day ago",
    skills: ["Python", "Django", "REST API"],
  },
];

export const FeaturedJobs = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Jobs</h2>
            <p className="text-gray-600">Discover the latest opportunities for developers</p>
          </div>
          <Button variant="outline" asChild className="group">
            <Link to="/jobs">
              View All Jobs
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <Card key={job.id} className="group hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </CardTitle>
                    <Badge variant="secondary">{job.category}</Badge>
                  </div>
                  <Badge variant="outline" className="bg-primary/5">
                    {job.budget}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-secondary/10">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {job.postedAt}
                </span>
                <Button asChild>
                  <Link to={`/jobs/${job.id}`}>Apply Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};