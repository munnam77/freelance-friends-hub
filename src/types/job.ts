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