import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JapaneseYen, Briefcase, Clock, Star, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Dashboard = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      title: t('dashboard.totalEarnings'),
      value: "¥850,000",
      icon: JapaneseYen,
      trend: "+12.5%",
    },
    {
      title: t('dashboard.completedProjects'),
      value: "12",
      icon: Briefcase,
      trend: "+3",
    },
    {
      title: t('dashboard.activeHours'),
      value: "164",
      icon: Clock,
      trend: "+24h",
    },
    {
      title: t('dashboard.rating'),
      value: "4.9",
      icon: Star,
      trend: "+0.2",
    },
  ];

  const recentProjects = [
    {
      id: 1,
      title: t('dashboard.projects.ecommerce'),
      client: "TechCorp Inc.",
      status: t('dashboard.status.inProgress'),
      dueDate: "2024-04-15",
      progress: 75,
    },
    {
      id: 2,
      title: t('dashboard.projects.mobileApp'),
      client: "StartupX",
      status: t('dashboard.status.completed'),
      dueDate: "2024-03-30",
      progress: 100,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navbar />
      <main className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-4xl font-light tracking-tight text-foreground">
              {t('dashboard.welcome')}
            </h1>
            <p className="text-subtle-foreground">
              {t('dashboard.overview')}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card 
                key={stat.title}
                className="backdrop-blur-sm bg-card-glass border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-light">{stat.value}</span>
                    <span className="text-xs text-primary flex items-center gap-0.5">
                      {stat.trend}
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Projects and Activity Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Recent Projects */}
            <Card className="backdrop-blur-sm bg-card-glass border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-medium">
                  {t('dashboard.recentProjects')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <div
                      key={project.id}
                      className="p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors duration-300"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium text-foreground">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {project.client}
                          </p>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            project.status === t('dashboard.status.inProgress')
                              ? 'bg-primary/10 text-primary'
                              : 'bg-[#7EBF8E]/10 text-[#7EBF8E]'
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {t('dashboard.dueDate')}: {project.dueDate}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="backdrop-blur-sm bg-card-glass border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-medium">
                  {t('dashboard.recentActivity')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors duration-300"
                    >
                      <p className="text-sm text-foreground">
                        {t(`dashboard.activity.${i + 1}`)}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {t(`dashboard.timeAgo.${i + 1}`)}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;