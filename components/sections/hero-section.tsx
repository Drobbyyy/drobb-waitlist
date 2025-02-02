"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { addUser } from "@/lib/actions";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export function HeroSection() {
  const { toast } = useToast();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  // const { theme } = useTheme();
  
  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
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

  return (
    <section className="h-screen flex items-center justify-between px-4 sm:px-6 lg:px-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br dark:from-black dark:via-zinc-900 dark:to-zinc-800 from-white via-gray-50 to-gray-100" />
      
      {/* Glow Effects */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[30%] h-[60%] bg-gradient-to-r dark:from-white/10 dark:to-transparent from-black/10 to-transparent blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 dark:bg-white/5 bg-black/5 blur-[120px]" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {dimensions.width > 0 && Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 dark:bg-white/10 bg-black/10 rounded-full before:absolute before:inset-0 before:blur-sm before:bg-inherit"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
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
      
      {/* Left Side - Hero Content */}
      <div className="relative z-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-64 h-48">
            <Image
              src="https://res.cloudinary.com/diyxwdtjd/image/upload/v1738478698/projects/black-drobb-logo.png"
              alt="drobb logo"
              fill
              className="object-contain dark:invert"
            />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-black dark:text-white mb-6">
            Be the First to Experience Drobb
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Join our exclusive waitlist and be notified when we launch our revolutionary app
          </p>
        </motion.div>
      </div>

      {/* Right Side - Email Form */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="relative dark:bg-white/5 bg-black/5 backdrop-blur-xl rounded-2xl p-8 border dark:border-white/10 border-black/10 dark:shadow-[0_0_2rem_0_rgba(255,255,255,0.05)] shadow-[0_0_2rem_0_rgba(0,0,0,0.05)]">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
            Join the Waitlist
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
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
                        className="h-12 dark:bg-white/5 bg-black/5 backdrop-blur-sm dark:border-white/10 border-black/10 focus:dark:border-white/20 focus:border-black/20 transition-colors text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 dark:text-red-400" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full h-12 bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-gray-100 text-white dark:text-black border border-transparent shadow-lg transition-all duration-200"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <motion.div
                    className="h-5 w-5 border-2 border-current border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  "Subscribe Now"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </motion.div>
    </section>
  );
}
