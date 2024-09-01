import NavBar from "@/components/nav/NavBar";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Next.js with Google Gemini",
  description: "Next.js with Google Gemini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${mono.className} flex flex-col min-h-screen`}>
          <NavBar />
          <div>{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
