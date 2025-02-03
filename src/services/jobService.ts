import { useQuery } from "@tanstack/react-query";

export interface Job {
  id: string;
  title: {
    en: string;
    ja: string;
  };
  company: {
    name: string;
    logo?: string;
  };
  location: {
    en: string;
    ja: string;
  };
  salary: {
    en: string;
    ja: string;
  };
  type: {
    en: string;
    ja: string;
  };
  description: {
    en: string;
    ja: string;
  };
  skills: string[];
  postedAt: string;
  source: "JapanDev" | "TokyoDev";
  applyUrl: string;
}

// Fetch jobs from multiple sources
const fetchJobs = async (): Promise<Job[]> => {
  try {
    // In a real implementation, this would fetch from actual APIs
    // For now, using mock data with realistic timestamps
    const tenDaysAgo = new Date();
    tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
    
    console.log("Fetching jobs...");
    
    const mockJobs: Job[] = [
      {
        id: "td-1",
        title: {
          en: "Senior Frontend Engineer",
          ja: "シニアフロントエンドエンジニア",
        },
        company: {
          name: "TechCorp Japan",
          logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=48&h=48&auto=format&fit=crop",
        },
        location: {
          en: "Tokyo (Hybrid)",
          ja: "東京（ハイブリッド）",
        },
        salary: {
          en: "¥8M - ¥12M/year",
          ja: "¥800万 - ¥1,200万/年",
        },
        type: {
          en: "Full-time",
          ja: "正社員",
        },
        description: {
          en: "Join our team as a Senior Frontend Engineer...",
          ja: "シニアフロントエンドエンジニアとして私たちのチームに参加...",
        },
        skills: ["React", "TypeScript", "Next.js", "Node.js", "GraphQL"],
        postedAt: "2 days ago",
        source: "TokyoDev",
        applyUrl: "https://tokyodev.com/jobs/1",
      },
      {
        id: "2",
        title: {
          en: "Full Stack Developer",
          ja: "フルスタック開発者",
        },
        company: {
          name: "StartupX",
          logo: "https://images.unsplash.com/photo-1611162616305-c69b3037f77e?w=48&h=48&auto=format&fit=crop",
        },
        location: {
          en: "Remote (Japan)",
          ja: "リモート（日本）",
        },
        salary: {
          en: "¥6M - ¥10M/year",
          ja: "¥600万 - ¥1,000万/年",
        },
        type: {
          en: "Full-time",
          ja: "正社員",
        },
        description: {
          en: "Looking for a Full Stack Developer...",
          ja: "フルスタック開発者を探しています...",
        },
        skills: ["Node.js", "React", "MongoDB", "AWS", "Docker"],
        postedAt: "1 week ago",
        source: "TokyoDev",
        applyUrl: "https://tokyodev.com/jobs/2",
      },
      {
        id: "3",
        title: {
          en: "UI/UX Designer",
          ja: "UI/UXデザイナー",
        },
        company: {
          name: "DesignLab Tokyo",
          logo: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=48&h=48&auto=format&fit=crop",
        },
        location: {
          en: "Osaka",
          ja: "大阪",
        },
        salary: {
          en: "¥5M - ¥8M/year",
          ja: "¥500万 - ¥800万/年",
        },
        type: {
          en: "Contract",
          ja: "契約社員",
        },
        description: {
          en: "Join our creative team as a UI/UX Designer...",
          ja: "UIUXデザイナーとして私たちのクリエイティブチームに参加...",
        },
        skills: ["Figma", "Adobe XD", "Sketch", "User Research", "Prototyping"],
        postedAt: "3 days ago",
        source: "JapanDev",
        applyUrl: "https://japandev.com/jobs/3",
      },
      {
        id: "4",
        title: {
          en: "DevOps Engineer",
          ja: "DevOpsエンジニア",
        },
        company: {
          name: "CloudTech Solutions",
          logo: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=48&h=48&auto=format&fit=crop",
        },
        location: {
          en: "Tokyo",
          ja: "東京",
        },
        salary: {
          en: "¥7M - ¥11M/year",
          ja: "¥700万 - ¥1,100万/年",
        },
        type: {
          en: "Full-time",
          ja: "正社員",
        },
        description: {
          en: "Looking for an experienced DevOps Engineer...",
          ja: "経験豊富なDevOpsエンジニアを募集...",
        },
        skills: ["Kubernetes", "AWS", "Docker", "CI/CD", "Terraform"],
        postedAt: "5 days ago",
        source: "TokyoDev",
        applyUrl: "https://tokyodev.com/jobs/4",
      },
    ];

    // Filter jobs posted within the last 10 days
    return mockJobs.filter(job => {
      const postedDate = new Date(job.postedAt);
      return postedDate >= tenDaysAgo;
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

export const useLatestJobs = () => {
  return useQuery({
    queryKey: ['latestJobs'],
    queryFn: fetchJobs,
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchInterval: 1000 * 60 * 60, // Refetch every hour
  });
};

// New hook for filtered jobs
export const useFilteredJobs = (filters: {
  search?: string;
  source?: string;
  type?: string;
}) => {
  return useQuery({
    queryKey: ['filteredJobs', filters],
    queryFn: async () => {
      const jobs = await fetchJobs();
      return jobs.filter(job => {
        const matchesSearch = !filters.search || 
          job.title.en.toLowerCase().includes(filters.search.toLowerCase()) ||
          job.title.ja.includes(filters.search) ||
          job.company.name.toLowerCase().includes(filters.search.toLowerCase());
        
        const matchesSource = !filters.source || job.source === filters.source;
        const matchesType = !filters.type || job.type.en === filters.type;
        
        return matchesSearch && matchesSource && matchesType;
      });
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};