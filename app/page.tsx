"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Sparkles, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { ThemeToggle } from "@/components/theme-toggle";
import { addUser } from "@/lib/actions";
import Image from "next/image";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export default function Home() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      await addUser(values.email);
      toast({
        title: "Success!",
        description: "Thank you for subscribing.",
      });
      form.reset();
    } catch (error: any) {
      console.log("Error at client: ", error);
      if(error.message.includes("Email already subscribed.")){
        toast({
          title: "Error",
          description: "You are already subscribed.",
          variant: "destructive",
        });
        return;
      }
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  }

  const scrollToEmail = () => {
    document.getElementById("email-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br dark:from-indigo-950 dark:via-[#1E1B4B] dark:to-[#1E1B4B] from-indigo-50 via-white to-white animate-gradient" />
        
        {/* Glow Effects */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[30%] h-[60%] bg-gradient-to-r from-violet-500/30 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-violet-500/30 blur-[120px] -z-10" />
        
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 bg-indigo-500/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: Math.random() * 5 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              style={{
                willChange: "transform",
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Content Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-48 bg-violet-500/20 blur-[100px] -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-32 bg-indigo-500/15 blur-[60px] -z-10" />
            
            <div className="relative w-48 h-48 mx-auto -mb-10">
              <Image
                src="https://res.cloudinary.com/diyxwdtjd/image/upload/v1738073291/projects/Screenshot_2025-01-28_at_7.26.51_PM-removebg-preview_xqiswr.png"
                alt="Drobb Logo"
                width={250}
                height={250}
                className="relative object-contain filter drop-shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
              Be the First to Experience Drobb
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
              Join our exclusive waitlist and be notified when we launch our revolutionary app
            </p>
            <Button
              size="lg"
              className="bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-200"
              onClick={scrollToEmail}
            >
              Get Started
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Email Capture Section */}
      <section
        id="email-section"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-b dark:from-[#1E1B4B] dark:to-indigo-950 from-white to-indigo-50"
      >
        {/* Email Section Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md h-32 bg-violet-500/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 max-w-sm h-24 bg-indigo-500/10 blur-[60px]" />
        
        <div className="relative max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-background/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-[0_0_1rem_0_rgba(0,0,0,0.1)] dark:shadow-[0_0_1rem_0_rgba(255,255,255,0.1)]"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
              Join the Waitlist
            </h2>
            <p className="text-muted-foreground mb-8 text-center">
              Be among the first to know when Drobb launches. Get early access and exclusive updates!
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          className="h-12 bg-background/50 backdrop-blur-sm border-white/20 focus:border-violet-500/50 transition-colors"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full h-12 bg-violet-500 hover:bg-violet-600 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-all duration-200"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <motion.div
                      className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    "Subscribe Now"
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}