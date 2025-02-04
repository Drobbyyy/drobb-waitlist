import Image from "next/image";
import { Sparkles, TrendingUp, BookmarkCheck, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FeaturesSection = () => {
  return (
    <section className="w-full bg-white text-black py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Why you&apos;ll love Drobb.</h2>
        </div>

        {/* Main Content */}
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 md:gap-8 items-start">
            {/* Left Features */}
            <div className="space-y-16 md:space-y-24 lg:space-y-32 order-2 md:order-1">
              {/* Personalised Picks */}
              <div className="text-center">
                <div className="inline-flex flex-col items-center">
                  <Sparkles className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mb-3 md:mb-4" />
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Personalised Picks</h3>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-[250px] mx-auto">
                    Your style, your rules. The more you swipe, the better we get at curating outfits just for you.
                  </p>
                </div>
              </div>

              {/* Curate Your Wishlist */}
              <div className="text-center">
                <div className="inline-flex flex-col items-center">
                  <BookmarkCheck className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mb-3 md:mb-4" />
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Curate Your Wishlist</h3>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-[250px] mx-auto">
                    Save your faves to shop later or get inspired when you&apos;re ready to switch up your wardrobe.
                  </p>
                </div>
              </div>
            </div>

            {/* Center Phone Images - Taking up 2 columns on larger screens */}
            <div className="md:col-span-2 relative order-1 md:order-2 mb-8 md:mb-0">
              <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
                <Image
                  src="https://res.cloudinary.com/diyxwdtjd/image/upload/v1738657366/projects/4_pgwftn.png"
                  alt="Styl App Features"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right Features */}
            <div className="space-y-16 md:space-y-24 lg:space-y-32 order-3">
              {/* Trending Looks */}
              <div className="text-center">
                <div className="inline-flex flex-col items-center">
                  <TrendingUp className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mb-3 md:mb-4" />
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Trending Looks</h3>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-[250px] mx-auto">
                    Stay ahead of the fashion curve with daily updates on the latest trends.
                  </p>
                </div>
              </div>

              {/* 1-Click Checkout */}
              <div className="text-center">
                <div className="inline-flex flex-col items-center">
                  <CreditCard className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mb-3 md:mb-4" />
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">1-Click Checkout</h3>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-[250px] mx-auto">
                    Found something you can&apos;t live without? Checkout lets you buy with just one tap.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center mt-12 md:mt-16 lg:mt-20">
            <Button 
              variant="default" 
              size="lg"
              className="rounded-full text-base md:text-lg px-8 py-6 h-auto font-medium bg-black hover:bg-gray-900"
            >
              Download Now!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
