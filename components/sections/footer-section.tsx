"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#F6F1EA] dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          {/* Questions Section */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Still have questions?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Contact us for more information or assistance.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
              <Mail className="w-5 h-5" />
              <a 
                href="mailto:poorv@drobb.in"
                className="text-lg font-medium"
              >
                poorv@drobb.in
              </a>
            </div>
          </div>

          {/* Logo */}
          <Link href="/" className="relative w-64 h-48 -mb-14">
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
              target="_blank"
              href="https://www.instagram.com/drobb_ai?igsh=MWIyM3J6MTZiZzJr" 
              className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-all duration-200 hover:scale-110 z-10"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link 
              target="_blank"
              href="https://www.linkedin.com/company/drobb0/" 
              className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-all duration-200 hover:scale-110 z-10"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
