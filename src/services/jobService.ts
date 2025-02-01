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

const fetchLatestJobs = async (): Promise<Job[]> => {
  // In a real implementation, this would fetch from your backend API
  // For now, we'll return mock data
  const response = await fetch('/api/jobs');
  if (!response.ok) {
    throw new Error('Failed to fetch jobs');
  }
  return response.json();
};

export const useLatestJobs = () => {
  return useQuery({
    queryKey: ['latestJobs'],
    queryFn: fetchLatestJobs,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};