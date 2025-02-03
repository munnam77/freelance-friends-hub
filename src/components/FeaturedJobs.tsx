import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BadgeDollarSign, Briefcase, MapPin, Clock, ExternalLink, Building2, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLatestJobs } from "@/services/jobService";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const FeaturedJobs = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const { data: jobs, isLoading, error } = useLatestJobs();

  const filteredJobs = jobs?.filter(job => 
    job.title.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.title.ja.includes(searchQuery) ||
    job.company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        {t('errors.failedToLoadJobs')}
      </div>
    );
  }

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      <div className="absolute inset-0 bg-grid-indigo/5 [mask-image:linear-gradient(0deg,transparent,black)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400">
            {t('featuredJobs.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('featuredJobs.description')}
          </p>
          
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder={language === 'en' ? "Search jobs..." : "仕事を検索..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/50 backdrop-blur-sm border-indigo-100 focus:border-indigo-200"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow border-none bg-white/50 backdrop-blur-sm">
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
            filteredJobs?.slice(0, 6).map((job) => (
              <Card key={job.id} className="group hover:shadow-lg transition-all duration-300 border-none bg-white/50 backdrop-blur-sm hover:bg-white/80">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-indigo-600 transition-colors line-clamp-2">
                        {language === 'en' ? job.title.en : job.title.ja}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        {job.company.logo ? (
                          <img 
                            src={job.company.logo} 
                            alt={job.company.name} 
                            className="w-8 h-8 rounded-full object-cover border border-indigo-100"
                          />
                        ) : (
                          <Building2 className="w-8 h-8 p-1.5 rounded-full bg-indigo-50 text-indigo-500" />
                        )}
                        <span className="font-medium text-foreground/80">{job.company.name}</span>
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-indigo-50 text-indigo-600 whitespace-nowrap border-indigo-200">
                      {job.source}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-indigo-400" />
                        <span className="text-sm truncate">
                          {language === 'en' ? job.location.en : job.location.ja}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <BadgeDollarSign className="w-4 h-4 text-indigo-400" />
                        <span className="text-sm truncate">
                          {language === 'en' ? job.salary.en : job.salary.ja}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="w-4 h-4 text-indigo-400" />
                        <span className="text-sm truncate">
                          {language === 'en' ? job.type.en : job.type.ja}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4 text-indigo-400" />
                        <span className="text-sm truncate">{job.postedAt}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.skills.slice(0, 3).map((skill) => (
                        <Badge 
                          key={skill}
                          variant="secondary" 
                          className="bg-indigo-50 text-indigo-600 border-indigo-100 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {job.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs border-indigo-100">
                          +{job.skills.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button asChild className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                        <Link to={`/jobs/${job.id}`}>
                          {t('featuredJobs.viewDetails')}
                        </Link>
                      </Button>
                      <Button variant="outline" asChild className="gap-2 border-indigo-200 hover:bg-indigo-50">
                        <a 
                          href={job.applyUrl} 
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
            className="group bg-white/50 backdrop-blur-sm hover:bg-white border-indigo-200 hover:border-indigo-300"
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