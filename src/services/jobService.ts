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
  source: string;
}

const mockJobs: Job[] = [
  {
    id: "1",
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
    source: "JapanDev",
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
  },
];

const fetchLatestJobs = async (): Promise<Job[]> => {
  // In a real implementation, this would fetch from multiple job sites
  // For now, we'll return mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockJobs);
    }, 1000);
  });
};

export const useLatestJobs = () => {
  return useQuery({
    queryKey: ['latestJobs'],
    queryFn: fetchLatestJobs,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};