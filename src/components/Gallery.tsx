import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {
      url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'قاعة الاستقبال الرئيسية'
    },
    {
      url: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'تصميم الطاولات الملكية'
    },
    {
      url: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'منطقة التصوير المخصصة'
    },
    {
      url: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'الإضاءة الرومانسية'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-24 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2D2926]" style={{ fontFamily: 'serif' }}>
            جولة افتراضية
          </h2>
          <div className="w-24 h-0.5 bg-[#C49D2F] mx-auto"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Image Container */}
          <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentSlide 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            ))}
            
            {/* Caption */}
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <p className="text-white text-xl font-medium" style={{ fontFamily: 'serif' }}>
                {images[currentSlide].caption}
              </p>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-white hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-[#C49D2F]" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-white hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-[#C49D2F]" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#C49D2F] scale-125' 
                    : 'bg-[#C49D2F]/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;