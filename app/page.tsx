import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Bot, FileText, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <>
      <main className="flex-grow pt-16">
        <section className="bg-gradient-to-b from-background to-secondary py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Generate Content with AI
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Unlock the power of AI to create engaging content for your blog,
              social media, and more. Save time and boost your creativity.
            </p>
            <Button className="text-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Bot className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>AI-Powered</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Leverage advanced AI models to generate high-quality content
                    tailored to your needs.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <FileText className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Multiple Formats</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Create blog posts, social media updates, product
                    descriptions, and more with ease.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Fast & Efficient</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Generate content in seconds, saving you time and boosting
                    your productivity.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-muted py-20">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-8">
              Ready to revolutionize your content creation?
            </h3>
            <Button size="lg" className="text-lg">
              Start Generating Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 AI Content Gen. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
