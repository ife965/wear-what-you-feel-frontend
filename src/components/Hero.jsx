import { useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets.js";

const Hero = () => {
  // Animated images
  const heroImages = [
    assets.hero_img1,
    assets.hero_img2,
    assets.hero_img3,
    assets.hero_img4,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-stretch border border-[#DDD4C5] overflow-hidden rounded-lg">
      {/* LEFT SIDE */}
      <div className="w-full sm:w-[55%] flex items-center justify-center px-8 sm:px-14 py-14 bg-[#DDD4C5] sm:py-0">
        <div className="text-[#333] text-center sm:text-left max-w-lg">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
            <p className="w-10 md:w-12 h-[2px] bg-[#333]"></p>
            <p className="font-medium text-base md:text-lg tracking-wide">
              OUR BEST SELLERS
            </p>
          </div>

          {/* Title Logo Image */}
          <img
            src={assets.Wear_What}
            alt="Latest Arrivals"
            className="mx-auto sm:mx-0 w-[240px] sm:w-[300px] lg:w-[360px] object-contain my-5"
          />

          <div className="flex items-center justify-center sm:justify-start gap-3 mt-4">
            <p className="font-semibold text-base md:text-lg cursor-pointer hover:text-gray-700 transition">
              SHOP NOW
            </p>
            <p className="w-10 md:w-12 h-[1px] bg-[#333]"></p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative w-full sm:w-[45%] h-[380px] sm:h-[500px] md:h-[560px] lg:h-[620px]">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hero ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
