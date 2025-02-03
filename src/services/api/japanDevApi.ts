import { Job } from "@/types/job";

const MOCK_JOBS: Job[] = [
  {
    id: "jd-1",
    title: {
      en: "Full Stack Developer",
      ja: "フルスタック開発者",
    },
    company: {
      name: "JapanTech Solutions",
      logo: "/placeholder.svg",
    },
    location: {
      en: "Osaka, Japan",
      ja: "大阪",
    },
    salary: {
      en: "$70,000 - $100,000",
      ja: "¥7,000,000 - ¥10,000,000",
    },
    type: {
      en: "Full-time",
      ja: "正社員",
    },
    description: {
      en: "Join our dynamic team of developers...",
      ja: "私たちの開発チームに参加しませんか...",
    },
    skills: ["Node.js", "React", "MongoDB"],
    postedAt: new Date().toLocaleDateString(),
    source: "JapanDev",
    applyUrl: "https://example.com/apply",
  },
  // Add more mock jobs as needed
];

export const fetchJapanDevJobs = async (): Promise<Job[]> => {
  try {
    // For now, return mock data
    // In production, this would be: const response = await fetch('https://api.japandev.com/jobs');
    return MOCK_JOBS;
  } catch (error) {
    console.error('Error fetching JapanDev jobs:', error);
    return [];
  }
};