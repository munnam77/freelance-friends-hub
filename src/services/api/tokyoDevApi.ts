import { Job } from "@/types/job";

export const fetchTokyoDevJobs = async (): Promise<Job[]> => {
  try {
    const response = await fetch('https://www.tokyodev.com/api/jobs');
    const data = await response.json();
    
    // Transform TokyoDev API response to our Job type
    return data.map((job: any) => ({
      id: `td-${job.id}`,
      title: {
        en: job.title,
        ja: job.titleJa || job.title, // Fallback to English if Japanese title not available
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
        en: job.type,
        ja: job.typeJa || job.type,
      },
      description: {
        en: job.description,
        ja: job.descriptionJa || job.description,
      },
      skills: job.skills || [],
      postedAt: new Date(job.postedAt).toLocaleDateString(),
      source: "TokyoDev" as const,
      applyUrl: job.applyUrl,
    }));
  } catch (error) {
    console.error('Error fetching TokyoDev jobs:', error);
    return [];
  }
};