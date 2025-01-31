import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BadgeDollarSign, Briefcase, MapPin, Clock, Building2, Globe2 } from "lucide-react";

const JobDetail = () => {
  const { id } = useParams();

  // This would later be fetched from an API/database
  const jobDetails = {
    title: "Senior React Developer",
    company: "TechCorp Inc.",
    location: "Tokyo, Japan",
    salary: "¥8M - ¥12M",
    type: "Full-time",
    posted: "2 days ago",
    description: `We are looking for a Senior React Developer to join our team. The ideal candidate will have:

    • 5+ years of experience with React and modern JavaScript
    • Strong understanding of state management (Redux, Context API)
    • Experience with TypeScript and modern build tools
    • Excellent problem-solving skills
    • Strong communication abilities in both English and Japanese
    
    You'll be working on cutting-edge projects using the latest technologies.`,
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "5+ years of experience with React",
      "Strong understanding of JavaScript and TypeScript",
      "Experience with modern frontend tools and practices",
      "Excellent communication skills"
    ],
    benefits: [
      "Competitive salary",
      "Remote work options",
      "Health insurance",
      "Annual bonus",
      "Professional development budget"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <CardTitle className="text-3xl font-bold">{jobDetails.title}</CardTitle>
                <div className="flex items-center gap-2 mt-2 text-gray-600">
                  <Building2 className="w-4 h-4" />
                  <span>{jobDetails.company}</span>
                </div>
              </div>
              <Button size="lg">応募する</Button>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Badge variant="secondary" className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {jobDetails.location}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <BadgeDollarSign className="w-4 h-4" />
                {jobDetails.salary}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                {jobDetails.type}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {jobDetails.posted}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Globe2 className="w-4 h-4" />
                日本語・英語
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">職務内容</h3>
              <div className="whitespace-pre-line text-gray-600">
                {jobDetails.description}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">応募要件</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {jobDetails.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">福利厚生</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {jobDetails.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center pt-4">
              <Button size="lg">応募する</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default JobDetail;