import Image from "next/image";

export const ShopSection = () => {
  return (
    <section className="w-full bg-black text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 md:mt-16 relative">
          {/* Center Phone Image */}
          <div className="relative w-[300px] md:w-[700px] h-[500px] md:h-[900px] order-1">
            <Image
              src="https://res.cloudinary.com/diyxwdtjd/image/upload/v1738654199/projects/Untitled_design_eizdfu.png"
              alt="Styl Shop Interface"
              fill
              className="object-contain object-left"
              style={{ objectPosition: 'left center', clipPath: 'inset(0 10% 0 0)' }}
              priority
            />
          </div>

          {/* Right Text */}
          <div className="md:absolute md:right-0 md:lg:right-20 text-center md:text-left order-2 mt-8 md:mt-0 max-w-[250px] mx-auto md:mx-0">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">Shop</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Love what you see? Tap to buy and have it delivered directly to your door!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
