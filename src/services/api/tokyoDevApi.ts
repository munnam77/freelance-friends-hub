import { Job } from "@/types/job";

const MOCK_JOBS: Job[] = [
  {
    id: "td-1",
    title: {
      en: "Senior Frontend Developer",
      ja: "シニアフロントエンド開発者",
    },
    company: {
      name: "TokyoTech Inc.",
      logo: "/placeholder.svg",
    },
    location: {
      en: "Tokyo, Japan",
      ja: "東京",
    },
    salary: {
      en: "$80,000 - $120,000",
      ja: "¥8,000,000 - ¥12,000,000",
    },
    type: {
      en: "Full-time",
      ja: "正社員",
    },
    description: {
      en: "Looking for an experienced frontend developer...",
      ja: "経験豊富なフロントエンド開発者を探しています...",
    },
    skills: ["React", "TypeScript", "Next.js"],
    postedAt: new Date().toLocaleDateString(),
    source: "TokyoDev",
    applyUrl: "https://example.com/apply",
  },
  // Add more mock jobs as needed
];

export const fetchTokyoDevJobs = async (): Promise<Job[]> => {
  try {
    // For now, return mock data
    // In production, this would be: const response = await fetch('https://api.tokyodev.com/jobs');
    return MOCK_JOBS;
  } catch (error) {
    console.error('Error fetching TokyoDev jobs:', error);
    return [];
  }
};