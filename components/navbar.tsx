import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="https://res.cloudinary.com/diyxwdtjd/image/upload/v1738478698/projects/black-drobb-logo.png"
              alt="Drobb Logo"
              width={200}
              height={100}
              className="h-28 w-auto"
            />
          </Link>

          {/* Download Button */}
          <Button 
            variant="default" 
            size="sm"
            className="bg-black text-white rounded-full px-6 hover:bg-gray-900"
          >
            Join Now!
          </Button>
        </div>
      </div>
    </nav>
  );
}
