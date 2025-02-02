"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#F6F1EA] dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-10">
          {/* Logo */}
          <Link href="/" className="relative w-64 h-48 -mb-20">
            <Image
              src="https://res.cloudinary.com/diyxwdtjd/image/upload/v1738478698/projects/black-drobb-logo.png"
              alt="drobb logo"
              fill
              className="object-contain dark:invert"
              priority
            />
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link 
              href="#" 
              className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-all duration-200 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link 
              href="#" 
              className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>

          {/* Contact and Copyright */}
          <div className="flex flex-col items-center space-y-3">
            <div className="text-sm font-light tracking-wide">
              <span className="text-zinc-500 dark:text-zinc-400">for contact mail at </span>
              <a 
                href="mailto:poorv@gmail.com" 
                className="text-zinc-900 dark:text-zinc-100 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-200"
              >
                poorv@gmail.com
              </a>
            </div>
            <p className="text-sm font-light tracking-wide text-zinc-500 dark:text-zinc-400">
              &copy; {new Date().getFullYear()} USAR Technologies Pvt. Ltd.
            </p>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-[13px] text-center font-light text-zinc-500 dark:text-zinc-400">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
