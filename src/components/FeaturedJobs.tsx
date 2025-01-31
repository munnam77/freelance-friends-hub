import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BadgeDollarSign, Briefcase, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const FeaturedJobs = () => {
  const { t } = useLanguage();
  
  // This would later be fetched from an API/database
  const featuredJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp Inc.",
      location: "Tokyo, Japan",
      salary: "¥8M - ¥12M",
      type: "Full-time",
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Frontend Engineer",
      company: "StartupX",
      location: "Remote",
      salary: "¥6M - ¥9M",
      type: "Contract",
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Global Systems Ltd",
      location: "Osaka, Japan",
      salary: "¥7M - ¥10M",
      type: "Full-time",
      posted: "3 days ago"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('featuredJobs.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('featuredJobs.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{job.title}</CardTitle>
                <CardDescription>{job.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <BadgeDollarSign className="w-4 h-4" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Briefcase className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{job.posted}</span>
                  </div>
                  <Button asChild className="w-full mt-4">
                    <Link to={`/jobs/${job.id}`}>
                      {t('featuredJobs.viewDetails')}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/jobs">{t('featuredJobs.viewAll')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};