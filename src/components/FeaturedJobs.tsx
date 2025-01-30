import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const jobs = [
  {
    id: 1,
    title: "Website Redesign Project",
    category: "Web Development",
    budget: "$1,000 - $2,000",
    description: "Looking for a skilled web developer to redesign our company website using React and Tailwind CSS.",
    postedAt: "2 hours ago",
  },
  {
    id: 2,
    title: "Logo Design for Tech Startup",
    category: "Design",
    budget: "$300 - $500",
    description: "Need a modern, minimalist logo design for our AI-powered startup.",
    postedAt: "5 hours ago",
  },
  {
    id: 3,
    title: "Content Writer for Blog",
    category: "Writing",
    budget: "$200 - $400",
    description: "Seeking an experienced content writer to create engaging blog posts about technology.",
    postedAt: "1 day ago",
  },
];

export const FeaturedJobs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Featured Jobs</h2>
          <Button variant="outline" asChild>
            <Link to="/jobs">View All Jobs</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <Card key={job.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="mb-2">{job.title}</CardTitle>
                    <Badge variant="secondary">{job.category}</Badge>
                  </div>
                  <Badge variant="outline">{job.budget}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{job.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{job.postedAt}</span>
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