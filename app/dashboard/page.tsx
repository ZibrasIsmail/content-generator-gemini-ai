import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  FileText,
  Mail,
  Megaphone,
  MessageSquare,
  Newspaper,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const services = [
    {
      title: "Blog Post Generator",
      description:
        "Create engaging blog posts on any topic with AI assistance.",
      icon: <FileText className="h-6 w-6" />,
      link: "/dashboard/generate?type=blog",
    },
    {
      title: "Story Generator",
      description:
        "Craft captivating short stories with customizable plots and characters.",
      icon: <BookOpen className="h-6 w-6" />,
      link: "/dashboard/generate?type=story",
    },
    {
      title: "Social Media Post Creator",
      description:
        "Generate attention-grabbing social media content for various platforms.",
      icon: <MessageSquare className="h-6 w-6" />,
      link: "/dashboard/generate?type=social",
    },
    {
      title: "Email Composer",
      description:
        "Draft professional and persuasive emails for any business scenario.",
      icon: <Mail className="h-6 w-6" />,
      link: "/dashboard/generate?type=email",
    },
    {
      title: "Article Summarizer",
      description:
        "Quickly summarize long articles or documents into concise overviews.",
      icon: <Newspaper className="h-6 w-6" />,
      link: "/dashboard/generate?type=summary",
    },
    {
      title: "Ad Copy Generator",
      description:
        "Create compelling ad copy for various marketing campaigns and platforms.",
      icon: <Megaphone className="h-6 w-6" />,
      link: "/dashboard/generate?type=ad",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Content Generation Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Link href={service.link} passHref>
                <Button className="w-full">Get Started</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
