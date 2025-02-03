import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLatestJobs } from "@/services/jobService";
import { useState } from "react";
import { JobCard } from "./jobs/JobCard";
import { JobSearch } from "./jobs/JobSearch";
import { 
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export const FeaturedJobs = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const { data: jobs, isLoading, error } = useLatestJobs();

  const filteredJobs = jobs?.filter(job => 
    job.title.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.title.ja.includes(searchQuery) ||
    job.company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (error) {
    // Show error toast
    toast({
      title: t('errors.failedToLoadJobs'),
      variant: "destructive",
    });
    
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
            <JobSearch value={searchQuery} onChange={setSearchQuery} />
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
              <JobCard key={job.id} job={job} />
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