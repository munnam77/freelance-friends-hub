import { Job } from "@/types/job";

export const fetchJapanDevJobs = async (): Promise<Job[]> => {
  try {
    const response = await fetch('https://japan-dev.com/api/jobs');
    const data = await response.json();
    
    // Transform JapanDev API response to our Job type
    return data.map((job: any) => ({
      id: `jd-${job.id}`,
      title: {
        en: job.title,
        ja: job.titleJa || job.title,
      },
      company: {
        name: job.company.name,
        logo: job.company.logo,
      },
      location: {
        en: job.location,
        ja: job.locationJa || job.location,
      },
      salary: {
        en: job.salary,
        ja: job.salaryJa || job.salary,
      },
      type: {
        en: job.employmentType,
        ja: job.employmentTypeJa || job.employmentType,
      },
      description: {
        en: job.description,
        ja: job.descriptionJa || job.description,
      },
      skills: job.skills || [],
      postedAt: new Date(job.postedAt).toLocaleDateString(),
      source: "JapanDev" as const,
      applyUrl: job.applyUrl,
    }));
  } catch (error) {
    console.error('Error fetching JapanDev jobs:', error);
    return [];
  }
};