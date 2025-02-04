import Image from "next/image";

export const HowItWorksSection = () => {
  return (
    <section className="w-full bg-black text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How does Drobb work?</h2>
          <p className="text-gray-400 max-w-[500px] mx-auto px-4">
            Swipe right to drobb. We&apos;ve made it easy to find clothing styles you love!
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 md:mt-16 relative">
          {/* Left Text */}
          <div className="md:absolute md:left-0 md:lg:left-20 text-center md:text-left order-2 md:order-none mt-8 md:mt-0 max-w-[250px] mx-auto md:mx-0">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">Swipe</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Like what you see? Swipe right to save it.
              Not your style? Swipe left to skip.
            </p>
          </div>

          {/* Center Phone Image */}
          <div className="relative w-[300px] md:w-[700px] h-[500px] md:h-[900px] order-1 md:order-none">
            <Image
              src="https://res.cloudinary.com/diyxwdtjd/image/upload/v1738654199/projects/Untitled_design_1_zp36fu.png"
              alt="Styl App Interface"
              fill
              className="object-contain object-left"
              style={{ objectPosition: 'left center', clipPath: 'inset(0 10% 0 0)' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
