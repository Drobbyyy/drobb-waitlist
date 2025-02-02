"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function MatchSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-32 py-20 relative bg-[#F6F1EA] dark:bg-zinc-900">
      {/* Content Container */}
      <div className="w-full flex flex-col lg:flex-row-reverse justify-between items-center gap-20">
        {/* Right side - Images Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full lg:w-1/2"
        >
          <div className="grid grid-cols-3 gap-3 relative">
            {/* Search Input Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] z-10">
              <div className="relative group">
                <Input
                  type="text"
                  placeholder="corset bodycon dress"
                  disabled
                  className="h-12 pl-12 pr-12 bg-white/95 dark:bg-black/95 border-zinc-200/50 dark:border-zinc-700/50 rounded-full shadow-xl focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 focus:border-zinc-200 dark:focus:border-zinc-700 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 backdrop-blur-sm disabled:opacity-100 disabled:cursor-default"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-rose-500 dark:text-rose-400" />
              </div>
            </div>

            {/* First Column */}
            <div className="flex flex-col gap-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000&auto=format&fit=crop"
                  alt="Fashion model"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/20 group-hover:via-black/0 group-hover:to-black/10 transition-all duration-500" />
                <div className="absolute bottom-3 left-3 bg-white/95 dark:bg-black/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">lea</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Rs. 5,290</p>
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div className="flex flex-col gap-3 pt-6">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop"
                  alt="Fashion model"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/20 group-hover:via-black/0 group-hover:to-black/10 transition-all duration-500" />
                <div className="absolute bottom-3 left-3 bg-white/95 dark:bg-black/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">h&m</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Rs. 2,999</p>
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=1000&auto=format&fit=crop"
                  alt="Fashion model"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/20 group-hover:via-black/0 group-hover:to-black/10 transition-all duration-500" />
                <div className="absolute bottom-3 left-3 bg-white/95 dark:bg-black/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">outcasts</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Rs. 2,071</p>
                </div>
              </div>
            </div>

            {/* Third Column */}
            <div className="flex flex-col gap-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=1000&auto=format&fit=crop"
                  alt="Fashion model"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/20 group-hover:via-black/0 group-hover:to-black/10 transition-all duration-500" />
                <div className="absolute bottom-3 left-3 bg-white/95 dark:bg-black/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">littlebox</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Rs. 3,550</p>
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group mt-3">
                <Image
                  src="https://images.unsplash.com/photo-1566206091558-7f218b696731?q=80&w=1000&auto=format&fit=crop"
                  alt="Fashion model"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/20 group-hover:via-black/0 group-hover:to-black/10 transition-all duration-500" />
                <div className="absolute bottom-3 left-3 bg-white/95 dark:bg-black/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">zara</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Rs. 3,550</p>
                </div>
              </div>
            </div>

            {/* Decorative dots */}
            <motion.div 
              className="absolute -right-4 -bottom-4 w-20 h-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute w-2 h-2 rounded-full bg-rose-500/20 dark:bg-rose-400/20" style={{ top: '20%', left: '60%' }} />
              <div className="absolute w-2 h-2 rounded-full bg-rose-500/40 dark:bg-rose-400/40" style={{ top: '40%', left: '80%' }} />
              <div className="absolute w-2 h-2 rounded-full bg-rose-500/60 dark:bg-rose-400/60" style={{ top: '60%', left: '40%' }} />
              <div className="absolute w-2 h-2 rounded-full bg-rose-500/80 dark:bg-rose-400/80" style={{ top: '80%', left: '70%' }} />
            </motion.div>
          </div>
        </motion.div>

        {/* Left side - Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/3"
        >
          <h2 className="text-[2rem] font-medium text-zinc-900 dark:text-zinc-100 mb-3">
            find your match
          </h2>
          <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
            dreaming of a red ribbed bodycon midi dress with a bow? just search for it and get results that match your vision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
