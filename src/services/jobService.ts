import { useQuery } from "@tanstack/react-query";
import { fetchTokyoDevJobs } from "./api/tokyoDevApi";
import { fetchJapanDevJobs } from "./api/japanDevApi";
import { Job } from "@/types/job";

export const useLatestJobs = () => {
  return useQuery({
    queryKey: ['latestJobs'],
    queryFn: async (): Promise<Job[]> => {
      const [tokyoDevJobs, japanDevJobs] = await Promise.all([
        fetchTokyoDevJobs(),
        fetchJapanDevJobs(),
      ]);

      // Combine and sort jobs by posted date
      const allJobs = [...tokyoDevJobs, ...japanDevJobs].sort((a, b) => 
        new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
      );

      return allJobs;
    },
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchInterval: 1000 * 60 * 60, // Refetch every hour
  });
};