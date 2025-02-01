import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BadgeDollarSign, Briefcase, MapPin, Clock, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLatestJobs } from "@/services/jobService";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

export const FeaturedJobs = () => {
  const { t, language } = useLanguage();
  const { data: jobs, isLoading, error } = useLatestJobs();

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        {t('errors.failedToLoadJobs')}
      </div>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('featuredJobs.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('featuredJobs.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            jobs?.slice(0, 6).map((job) => (
              <Card key={job.id} className="group hover:shadow-lg transition-all duration-300 border-none bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {language === 'en' ? job.title.en : job.title.ja}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        {job.company.logo && (
                          <img 
                            src={job.company.logo} 
                            alt={job.company.name} 
                            className="w-6 h-6 rounded-full"
                          />
                        )}
                        <span>{job.company.name}</span>
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      {job.source}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{language === 'en' ? job.location.en : job.location.ja}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <BadgeDollarSign className="w-4 h-4" />
                      <span>{language === 'en' ? job.salary.en : job.salary.ja}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Briefcase className="w-4 h-4" />
                      <span>{language === 'en' ? job.type.en : job.type.ja}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{job.postedAt}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.skills.map((skill) => (
                        <Badge 
                          key={skill}
                          variant="secondary" 
                          className="bg-secondary/20 text-secondary-foreground"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button asChild className="flex-1">
                        <Link to={`/jobs/${job.id}`}>
                          {t('featuredJobs.viewDetails')}
                        </Link>
                      </Button>
                      <Button variant="outline" asChild className="gap-2">
                        <a href={`/jobs/${job.id}/apply`} target="_blank" rel="noopener noreferrer">
                          {t('featuredJobs.apply')}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="group">
            <Link to="/jobs">
              {t('featuredJobs.viewAll')}
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};