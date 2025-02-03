import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BadgeDollarSign, Briefcase, MapPin, Clock, ExternalLink, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Job } from "@/types/job";

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  const { t, language } = useLanguage();

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-none bg-white/50 backdrop-blur-sm hover:bg-white/80">
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
  );
};