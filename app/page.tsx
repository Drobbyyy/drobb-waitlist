"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import FooterSection from "@/components/sections/footer-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ShopSection } from "@/components/sections/shop-section";
import { StyleSection } from "@/components/sections/style-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { Navbar } from "@/components/navbar";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export default function Home() {
  const { toast } = useToast();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Email Input */}
      <HeroSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Shop Section */}
      <ShopSection />

      {/* Style Section */}
      <StyleSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Footer Section */}
      <FooterSection />
    </main>
  );
}
