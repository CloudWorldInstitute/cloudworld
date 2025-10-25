import React, { useState, useEffect, useCallback } from 'react';

const HeroImageSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const [failedImages, setFailedImages] = useState({});

  // Images array
  const images = [
    "/heroImage.webp",
    "/heroImage1.webp",
    "/heroImage2.webp"
  ];

  const imagesCount = images.length;

  // Handle image load
  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
    setFailedImages(prev => ({ ...prev, [index]: false }));
  };

  // Handle image error
  const handleImageError = (index) => {
    setFailedImages(prev => ({ ...prev, [index]: true }));
    setLoadedImages(prev => ({ ...prev, [index]: false }));
  };

  // Navigation Callbacks
  const goToPrevious = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + imagesCount) % imagesCount);
  }, [imagesCount]);

  const goToNext = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % imagesCount);
  }, [imagesCount]);

  // Automatic Sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imagesCount);
    }, 4000);

    return () => clearInterval(interval);
  }, [imagesCount]);

  return (
    <div className="relative z-10 w-auto lg:w-1/2 mt-12 lg:mt-0 flex justify-center animate-fade-in-up animation-delay-400">
      
        
        {/* Image Slider Container */}
        <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl h-[400px] sm:h-[500px] overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
          
          {/* Sliding Images with Loading States */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full rounded-2xl transition-all duration-700 ease-in-out ${
                index === currentImage
                  ? 'opacity-100 scale-100 z-10'
                  : 'opacity-0 scale-95 z-0'
              }`}
            >
              {/* Loading State */}
              {!loadedImages[index] && !failedImages[index] && (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-2xl">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-2"></div>
                    <p className="text-gray-600 text-sm">Loading image...</p>
                  </div>
                </div>
              )}

              {/* Error State */}
              {failedImages[index] && (
                <div className="w-full h-full flex flex-col items-center justify-center bg-red-50 border-2 border-red-200 rounded-2xl p-4">
                  <div className="text-red-500 text-4xl mb-2">⚠️</div>
                  <p className="text-red-600 font-semibold text-center mb-1">
                    Image failed to load
                  </p>
                  <p className="text-red-500 text-sm text-center">
                    {image}
                  </p>
                  <p className="text-gray-600 text-xs text-center mt-2">
                    Check if the image exists in public folder
                  </p>
                </div>
              )}

              {/* Image */}
              <img
                src={image}
                alt={`Student learning cloud computing - Slide ${index + 1}`}
                onLoad={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
                className={`w-full h-full object-cover rounded-2xl ${
                  loadedImages[index] ? 'block' : 'hidden'
                } ${failedImages[index] ? 'hidden' : ''}`}
              />
            </div>
          ))}

          {/* Debug Info - Remove in production */}
          <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs z-30">
            Current: {currentImage + 1}/{imagesCount}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white p-3 rounded-full shadow-lg opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 focus:ring-4 focus:ring-orange-300 z-20"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white p-3 rounded-full shadow-lg opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 focus:ring-4 focus:ring-orange-300 z-20"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white ${
                  index === currentImage
                    ? 'w-8 h-2 bg-orange-600'
                    : 'w-2 h-2 bg-white/60 hover:bg-white'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        
        

      </div>
   
  );
};

export default HeroImageSection;