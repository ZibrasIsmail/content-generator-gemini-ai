"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Loader2, Send } from "lucide-react";

export default function Generate() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");

  const handleGenerate = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsGenerating(true);
    // Simulating API call for content generation
    setTimeout(() => {
      setGeneratedContent(
        "This is a sample generated content. In a real application, this would be the result from your AI model."
      );
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="max-w-auto mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Generate Content</h1>
      <form onSubmit={handleGenerate} className="space-y-6">
        <div>
          <Label htmlFor="topic">Topic</Label>
          <Input
            id="topic"
            placeholder="Enter the main topic or subject"
            required
          />
        </div>
        <div>
          <Label htmlFor="contentType">Content Type</Label>
          <Select>
            <SelectTrigger id="contentType">
              <SelectValue placeholder="Select content type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="blog-post">Blog Post</SelectItem>
              <SelectItem value="social-media">Social Media Post</SelectItem>
              <SelectItem value="product-description">
                Product Description
              </SelectItem>
              <SelectItem value="email">Email</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="tone">Tone</Label>
          <Select>
            <SelectTrigger id="tone">
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="casual">Casual</SelectItem>
              <SelectItem value="humorous">Humorous</SelectItem>
              <SelectItem value="formal">Formal</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="keywords">Keywords (comma-separated)</Label>
          <Input id="keywords" placeholder="Enter relevant keywords" />
        </div>
        <div>
          <Label>Content Length</Label>
          <Slider defaultValue={[500]} max={1000} step={100} className="mt-2" />
          <div className="text-sm text-gray-500 mt-1">
            Approximately 500 words
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="citations" />
          <Label htmlFor="citations">Include citations</Label>
        </div>
        <Button type="submit" disabled={isGenerating} className="w-full">
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Generate Content
            </>
          )}
        </Button>
      </form>
      {generatedContent && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Generated Content</h2>
          <Textarea
            value={generatedContent}
            readOnly
            rows={10}
            className="w-full p-4 border rounded-md"
          />
        </div>
      )}
    </div>
  );
}
