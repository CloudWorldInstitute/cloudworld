import React, { useState, useEffect } from 'react';

const SlidingImageSection = () => {
  const images = [
    "/heroImage3.webp",
    "/heroImage1.webp",
    "/heroImage2.webp",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // Slide every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-in-out ${
            index === current
              ? "translate-x-0 opacity-100"
              : index < current
              ? "-translate-x-full opacity-0"
              : "translate-x-full opacity-0"
          }`}
        />
      ))}

      {/* Stats Card */}
      <div className="absolute -bottom-1 -right-0 animate-glow bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 animate-bounce-slow z-20">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">100%</div>
          <div className="text-sm text-green-600 font-medium">Placement Support</div>
        </div>
      </div>
    </div>
  );
};

export default SlidingImageSection;
