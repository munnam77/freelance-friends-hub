import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BadgeDollarSign, Briefcase, MapPin, Clock, ExternalLink, Building2 } from "lucide-react";
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
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.05
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            {t('featuredJobs.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('featuredJobs.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow border-none bg-card-glass backdrop-blur-sm">
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
              <Card key={job.id} className="group hover:shadow-lg transition-all duration-300 border-none bg-card-glass backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                        {language === 'en' ? job.title.en : job.title.ja}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        {job.company.logo ? (
                          <img 
                            src={job.company.logo} 
                            alt={job.company.name} 
                            className="w-8 h-8 rounded-full object-cover border border-border/50"
                          />
                        ) : (
                          <Building2 className="w-8 h-8 p-1.5 rounded-full bg-muted text-muted-foreground" />
                        )}
                        <span className="font-medium text-foreground/80">{job.company.name}</span>
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-primary/5 text-primary whitespace-nowrap">
                      {job.source}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-subtle" />
                        <span className="text-sm truncate">
                          {language === 'en' ? job.location.en : job.location.ja}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <BadgeDollarSign className="w-4 h-4 text-subtle" />
                        <span className="text-sm truncate">
                          {language === 'en' ? job.salary.en : job.salary.ja}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="w-4 h-4 text-subtle" />
                        <span className="text-sm truncate">
                          {language === 'en' ? job.type.en : job.type.ja}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4 text-subtle" />
                        <span className="text-sm truncate">{job.postedAt}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.skills.slice(0, 3).map((skill) => (
                        <Badge 
                          key={skill}
                          variant="secondary" 
                          className="bg-secondary/20 text-secondary-foreground text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {job.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{job.skills.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button asChild className="flex-1 bg-primary/90 hover:bg-primary">
                        <Link to={`/jobs/${job.id}`}>
                          {t('featuredJobs.viewDetails')}
                        </Link>
                      </Button>
                      <Button variant="outline" asChild className="gap-2">
                        <a 
                          href={`/jobs/${job.id}/apply`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group"
                        >
                          {t('featuredJobs.apply')}
                          <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <div className="text-center mt-16">
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="group bg-card-glass backdrop-blur-sm hover:bg-secondary/50"
          >
            <Link to="/jobs" className="gap-2">
              {t('featuredJobs.viewAll')}
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};