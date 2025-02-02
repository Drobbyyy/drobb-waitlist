"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function SearchSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-32 py-20 relative bg-[#F6F1EA] dark:bg-zinc-900">
      {/* Content Container */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-20">
        {/* Left side content */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-[2rem] font-medium text-zinc-900 dark:text-zinc-100 mb-3">
              search what you see
            </h2>
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm">
              saved a fashion reference in your photos? simply upload an image and find all inspired outfits from across the Indian internet
            </p>
          </motion.div>
        </div>

        {/* Right side floating images */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full lg:w-1/2 h-[500px] lg:h-[600px]"
        >
          {/* Main center image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[300px] h-[400px] group">
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop"
              alt="Fashion model in striped dress"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/20 group-hover:via-black/0 group-hover:to-black/10 transition-all duration-500 rounded-2xl" />
            <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-black/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg transform group-hover:-translate-y-1 transition-all duration-500">
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">lulu & sky</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Rs. 1,370</p>
            </div>
          </div>

          {/* Top right floating image */}
          <div className="absolute top-0 right-4 sm:right-0 w-[140px] sm:w-[160px] h-[200px] sm:h-[220px] group">
            <Image
              src="https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&w=880&auto=format&fit=crop"
              alt="Fashion model in striped dress"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/20 group-hover:via-black/0 group-hover:to-black/10 transition-all duration-500 rounded-2xl" />
            <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-black/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg transform group-hover:-translate-y-1 transition-all duration-500">
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">star store</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Rs. 3,300</p>
            </div>
          </div>

          {/* Top left floating image */}
          <div className="absolute top-0 left-4 sm:left-0 w-[140px] sm:w-[160px] h-[200px] sm:h-[220px] group">
            <Image
              src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=880&auto=format&fit=crop"
              alt="Fashion model in striped dress"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/20 group-hover:via-black/0 group-hover:to-black/10 transition-all duration-500 rounded-2xl" />
            <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-black/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg transform group-hover:-translate-y-1 transition-all duration-500">
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">zara</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Rs. 2,499</p>
            </div>
          </div>

          {/* Bottom right floating image */}
          <div className="absolute bottom-0 right-4 sm:right-0 w-[140px] sm:w-[160px] h-[200px] sm:h-[220px] group">
            <Image
              src="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=880&auto=format&fit=crop"
              alt="Fashion model in striped dress"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/20 group-hover:via-black/0 group-hover:to-black/10 transition-all duration-500 rounded-2xl" />
            <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-black/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg transform group-hover:-translate-y-1 transition-all duration-500">
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">h&m</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Rs. 1,639</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
