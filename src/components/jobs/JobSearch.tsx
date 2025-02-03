import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface JobSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const JobSearch = ({ value, onChange }: JobSearchProps) => {
  const { language } = useLanguage();

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder={language === 'en' ? "Search jobs..." : "仕事を検索..."}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 bg-white/50 backdrop-blur-sm border-indigo-100 focus:border-indigo-200"
      />
    </div>
  );
};