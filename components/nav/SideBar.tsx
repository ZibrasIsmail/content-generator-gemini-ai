"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, Settings, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", icon: Home, label: "Dashboard" },
    { href: "/dashboard/generate", icon: FileText, label: "Generate" },
    { href: "/dashboard/history", icon: FileText, label: "History" },
    { href: "/dashboard/settings", icon: Settings, label: "Settings" },
    { href: "/dashboard/help", icon: HelpCircle, label: "Help" },
  ];

  return (
    <div className="bg-gray-800 text-white w-16 md:w-64 fixed left-0 top-16 bottom-0 overflow-y-auto">
      <nav className="py-4">
        {navItems.map((item) => (
          <TooltipProvider key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={`block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white ${
                    pathname === item.href ? "bg-gray-700" : ""
                  }`}
                >
                  <item.icon className="inline-block w-5 h-5 md:mr-2" />
                  <span className="hidden md:inline-block">{item.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="md:hidden">
                {item.label}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </nav>
    </div>
  );
}
