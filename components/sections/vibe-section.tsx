"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function VibeSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-32 py-20 relative">
      {/* Content Container */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-20">
        {/* Left side - Images Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full lg:w-1/2 grid grid-cols-3 gap-4 h-[500px]"
        >
          {/* First Column */}
          <div className="flex flex-col gap-4">
            <div className="relative h-[200px] rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1000&auto=format&fit=crop"
                alt="Fashion model"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
              <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg transform group-hover:-translate-y-1 transition-all duration-500">
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">snitch</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Rs. 1,999</p>
              </div>
            </div>
            <div className="relative h-[280px] rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1475180098004-ca77a66827be?q=80&w=1000&auto=format&fit=crop"
                alt="Fashion model"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
              <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg transform group-hover:-translate-y-1 transition-all duration-500">
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">sage by mala</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Rs. 2,690</p>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="flex flex-col gap-4 pt-8">
            <div className="relative h-[280px] rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1507114845806-0347f6150324?q=80&w=1000&auto=format&fit=crop"
                alt="Fashion model"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
              <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg transform group-hover:-translate-y-1 transition-all duration-500">
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">dash and dot</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Rs. 2,990</p>
              </div>
            </div>
            <div className="relative h-[180px] rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1000&auto=format&fit=crop"
                alt="Fashion model"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
              <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg transform group-hover:-translate-y-1 transition-all duration-500">
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">little box</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Rs. 1,299</p>
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className="flex flex-col gap-4 pt-16">
            <div className="relative h-[240px] rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop"
                alt="Fashion model"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
              <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg transform group-hover:-translate-y-1 transition-all duration-500">
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">h&m</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Rs. 1,299</p>
              </div>
            </div>
            <div className="relative h-[220px] rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1000&auto=format&fit=crop"
                alt="Fashion model"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
              <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg transform group-hover:-translate-y-1 transition-all duration-500">
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">zara</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Rs. 2,499</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side - Text and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/3"
        >
          <h2 className="text-[2rem] font-medium text-zinc-900 dark:text-zinc-100 mb-3">
            search your vibe
          </h2>
          <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
            think of a vibe you're into, say — summer in south of france — and find your inspiration. search, discover, buy and slay
          </p>

          <div className="relative group">
            <Input
              type="text"
              placeholder="date night outfit"
              disabled
              className="h-12 pl-12 bg-white/80 dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 rounded-2xl focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 focus:border-zinc-200 dark:focus:border-zinc-800 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 backdrop-blur-sm disabled:opacity-100 disabled:cursor-default transform group-hover:translate-y-[-2px] transition-all duration-500"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors duration-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
