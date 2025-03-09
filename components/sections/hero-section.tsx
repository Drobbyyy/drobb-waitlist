"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { addUser, getUsersCountAction } from "@/lib/actions";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export function HeroSection() {
  const { toast } = useToast();
  const [usersCount, setUsersCount] = useState<any>(0);
  const session = useSession();

  useEffect(() => {
    const getUsersCountData = async () => {
      const count = await getUsersCountAction();
      setUsersCount(count);
    }
    getUsersCountData();
  }, [])
  

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
    <section className="flex items-center mt-32 mb-10 bg-white text-black">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6 lg:space-y-8 mt-0 lg:-mt-48">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
              Find clothing tailored to you, in minutes.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Drobb is here to make fashion fun. Discover personalised outfits that match your vibe with just a swipe.
            </p>
            <div className="space-y-4 max-w-md">
              <div className="space-y-1.5">
                <h3 className="text-lg font-semibold text-gray-900">Join Our Waitlist</h3>
                <p className="text-sm text-gray-500">Get early access and exclusive updates when we launch.</p>
              </div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="flex gap-2 w-full">
                            <Input
                              placeholder="Enter your email"
                              className="h-11 rounded-lg border-gray-200 bg-white/80 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all duration-200"
                              {...field}
                            />
                            <Button 
                              type="submit"
                              className="h-11 px-6 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-all duration-200 whitespace-nowrap flex-shrink-0"
                              disabled={form.formState.isSubmitting}
                            >
                              {form.formState.isSubmitting ? (
                                <div className="flex items-center gap-2">
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                  <span>Joining...</span>
                                </div>
                              ) : (
                                "Join Now"
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-500 mt-1.5 text-sm" />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>

              {/* Sign in with Google */}
              <div className="space-y-3">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                  </div>
                </div>
                {
                  session?.data?.user ? 
                  <Button 
                  variant="outline" 
                  className="w-full h-11 border-gray-200 bg-white hover:bg-gray-50 hover:text-gray-900 text-gray-700 flex items-center justify-center gap-2 rounded-lg transition-all duration-200"
                  onClick={async() => await signOut()}
                >
                  <span>Sign out</span>
                </Button> : 
                <Button 
                variant="outline" 
                className="w-full h-11 border-gray-200 bg-white hover:bg-gray-50 hover:text-gray-900 text-gray-700 flex items-center justify-center gap-2 rounded-lg transition-all duration-200"
                onClick={async() => await signIn("google")}
              >
                <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                </svg>
                <span>Sign in with Google</span>
              </Button>
                }
              </div>

              {/* User Count Indicator */}
              <div className="flex items-center gap-3 mt-6">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-900 border-2 border-white flex items-center justify-center text-[10px] font-medium text-white">D</div>
                  <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-white flex items-center justify-center text-[10px] font-medium text-white">R</div>
                  <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-white flex items-center justify-center text-[10px] font-medium text-white">B</div>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-semibold text-gray-900">{usersCount}</span>
                  <span className="text-sm text-gray-600">users have already joined</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-3 gap-3 lg:gap-4">
            <div className="col-span-2 space-y-3 lg:space-y-4">
              <div className="bg-gray-50 rounded-2xl p-3 lg:p-4">
                <Image
                  src="https://res.cloudinary.com/diyxwdtjd/image/upload/v1738662028/projects/3_uw4ktn.png"
                  alt="Fashion"
                  width={400}
                  height={600}
                  className="rounded-xl w-full h-auto"
                />
              </div>
              <div className="bg-gray-50 rounded-2xl p-3 lg:p-4">
                <Image
                  src="https://res.cloudinary.com/diyxwdtjd/image/upload/v1738662028/projects/WhatsApp_Image_2025-02-04_at_13.48.17_yq1lky.jpg"
                  alt="Fashion"
                  width={400}
                  height={300}
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-3 lg:space-y-4">
              <div className="bg-gray-50 rounded-2xl p-3 lg:p-4">
                <Image
                  src="https://res.cloudinary.com/diyxwdtjd/image/upload/v1738662028/projects/WhatsApp_Image_2025-02-04_at_13.48.16_xqyy9l.jpg"
                  alt="Fashion"
                  width={200}
                  height={400}
                  className="rounded-xl w-full h-auto"
                />
              </div>
              <div className="bg-gray-50 rounded-2xl p-3 lg:p-4">
                <Image
                  src="https://res.cloudinary.com/diyxwdtjd/image/upload/v1738662027/projects/WhatsApp_Image_2025-02-04_at_13.48.16_1_kglrux.jpg"
                  alt="Fashion"
                  width={200}
                  height={400}
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-lg font-medium text-center mt-8 text-gray-900">
          Shop instantly from 100+ premium brands!
        </p>
      </div>
    </section>
  );
}