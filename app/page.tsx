"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { ThemeToggle } from "@/components/theme-toggle";
import { addUser } from "@/lib/actions";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SearchSection } from "@/components/sections/search-section";
import { HeroSection } from "@/components/sections/hero-section";
import { VibeSection } from "@/components/sections/vibe-section";
import { MatchSection } from "@/components/sections/match-section";
import FooterSection from "@/components/sections/footer-section";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export default function Home() {
  const { toast } = useToast();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* <ThemeToggle className="fixed top-4 right-4 z-50" /> */}
      
      {/* Hero Section with Email Input */}
      <HeroSection />

      {/* Search Section */}
      <SearchSection />

      {/* Vibe Section */}
      <VibeSection />

      {/* Match Section */}
      <MatchSection />

      {/* Footer Section */}
      <FooterSection />
    </main>
  );
}