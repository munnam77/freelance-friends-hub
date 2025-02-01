import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Clock, JapaneseYen, Search, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Jobs = () => {
  const { language, t } = useLanguage();

  const categories = [
    { id: "all", name: { en: "All Jobs", ja: "すべての仕事" } },
    { id: "web", name: { en: "Web Development", ja: "ウェブ開発" } },
    { id: "mobile", name: { en: "Mobile Development", ja: "モバイルアプリ開発" } },
    { id: "ai", name: { en: "AI/Machine Learning", ja: "AI・機械学習" } },
    { id: "design", name: { en: "UI/UX Design", ja: "UI/UXデザイン" } },
    { id: "data", name: { en: "Data Science", ja: "データサイエンス" } }
  ];

  const jobTypes = [
    { id: "all", name: { en: "All Types", ja: "すべての形態" } },
    { id: "fulltime", name: { en: "Full-time", ja: "正社員" } },
    { id: "contract", name: { en: "Contract", ja: "契約社員" } },
    { id: "freelance", name: { en: "Freelance", ja: "フリーランス" } },
    { id: "parttime", name: { en: "Part-time", ja: "パートタイム" } }
  ];

  // This would later be fetched from an API
  const jobs = [
    {
      id: 1,
      title: { en: "Senior React Developer", ja: "シニアReactエンジニア" },
      company: "TechCorp Inc.",
      location: { en: "Tokyo, Japan", ja: "東京都" },
      salary: { en: "¥8M - ¥12M/year", ja: "¥800万 - ¥1,200万/年" },
      type: { en: "Full-time", ja: "正社員" },
      posted: { en: "2 days ago", ja: "2日前" },
      skills: ["React", "Node.js", "PostgreSQL"]
    },
    {
      id: 2,
      title: { en: "Frontend Engineer", ja: "フロントエンドエンジニア" },
      company: "StartupX",
      location: { en: "Remote", ja: "リモート" },
      salary: { en: "¥6M - ¥9M/year", ja: "¥600万 - ¥900万/年" },
      type: { en: "Contract", ja: "契約社員" },
      posted: { en: "1 week ago", ja: "1週間前" },
      skills: ["Vue.js", "TypeScript", "AWS"]
    },
    {
      id: 3,
      title: { en: "Full Stack Developer", ja: "フルスタックエンジニア" },
      company: "Global Systems Ltd",
      location: { en: "Osaka, Japan", ja: "大阪府" },
      salary: { en: "¥7M - ¥10M/year", ja: "¥700万 - ¥1,000万/年" },
      type: { en: "Full-time", ja: "正社員" },
      posted: { en: "3 days ago", ja: "3日前" },
      skills: ["React", "Python", "MongoDB"]
    }
  ];

  const skillColors: { [key: string]: string } = {
    "React": "bg-blue-600",
    "Node.js": "bg-green-600",
    "PostgreSQL": "bg-indigo-600",
    "Vue.js": "bg-emerald-600",
    "TypeScript": "bg-blue-500",
    "AWS": "bg-orange-600",
    "Python": "bg-yellow-600",
    "MongoDB": "bg-green-500"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <HoverCard key={category.id}>
                <HoverCardTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start hover:bg-primary hover:text-white transition-all"
                  >
                    {language === 'en' ? category.name.en : category.name.ja}
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">
                      {language === 'en' ? "Popular in " + category.name.en : category.name.ja + "の人気の仕事"}
                    </h4>
                    <div className="text-sm text-muted-foreground">
                      {/* This would be populated with subcategories */}
                      {language === 'en' ? 
                        "Browse popular jobs in this category" :
                        "このカテゴリーの人気の仕事を見る"}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>

          {/* Search and Filters */}
          <div className="grid gap-4 md:grid-cols-[1fr_auto_auto]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                placeholder={language === 'en' ? "Search by skills, keywords..." : "スキル、キーワードで検索"}
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder={language === 'en' ? "Job Type" : "雇用形態"} />
              </SelectTrigger>
              <SelectContent>
                {jobTypes.map((type) => (
                  <SelectItem key={type.id} value={type.id}>
                    {language === 'en' ? type.name.en : type.name.ja}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              {language === 'en' ? "Filters" : "絞り込み"}
            </Button>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="cursor-pointer">
              {language === 'en' ? "Remote Work ✕" : "リモートワーク ✕"}
            </Badge>
            <Badge variant="secondary" className="cursor-pointer">
              {language === 'en' ? "Full-time ✕" : "正社員 ✕"}
            </Badge>
          </div>

          <Separator />

          {/* Results */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <Card key={job.id} className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="mb-2 group-hover:text-primary transition-colors">
                        {language === 'en' ? job.title.en : job.title.ja}
                      </CardTitle>
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{job.company}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-primary/5 flex items-center gap-1">
                      <JapaneseYen className="w-3 h-3" />
                      {language === 'en' ? job.salary.en : job.salary.ja}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      {language === 'en' ? job.location.en : job.location.ja}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      {language === 'en' ? job.type.en : job.type.ja}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          className={`${skillColors[skill]} text-white hover:opacity-90`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {language === 'en' ? job.posted.en : job.posted.ja}
                  </span>
                  <Button asChild>
                    <Link to={`/jobs/${job.id}`}>
                      {language === 'en' ? "Apply Now" : "応募する"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Jobs;