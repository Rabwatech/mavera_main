import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const images = [
    {
      url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1600',
      caption: 'قاعة الاستقبال الرئيسية',
      description: 'مساحة فاخرة تتسع لـ 500 ضيف'
    },
    {
      url: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1600',
      caption: 'تصميم الطاولات الملكية',
      description: 'تفاصيل مدروسة بعناية فائقة'
    },
    {
      url: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=1600',
      caption: 'منطقة التصوير المخصصة',
      description: 'خلفيات ساحرة لذكريات خالدة'
    },
    {
      url: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1600',
      caption: 'الإضاءة الرومانسية',
      description: 'أجواء سحرية تأسر القلوب'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section ref={sectionRef} className="py-32 bg-[#FAF9F7] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-5xl md:text-7xl font-extralight text-[#2D2926] mb-8 tracking-[0.05em]">
            جولة افتراضية
          </h2>
          <p className="text-xl text-[#766B5A] font-light max-w-2xl mx-auto">
            اكتشف جمال مافيرا من خلال معرض صورنا الحصري
          </p>
        </div>
        
        {/* Gallery Container - Cinematic Experience */}
        <div className={`relative max-w-6xl mx-auto transition-all duration-1200 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          {/* Main Image Display */}
          <div className="relative h-[60vh] md:h-[70vh] overflow-hidden rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-out ${
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
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="max-w-2xl">
                    <h3 className="text-3xl md:text-4xl font-light text-white mb-3 tracking-wide">
                      {image.caption}
                    </h3>
                    <p className="text-white/80 text-lg font-light">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Navigation Controls - Minimal Genius */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>
            
            {/* Play Button - Interactive Element */}
            <button className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 group">
              <Play className="w-5 h-5 text-white ml-0.5 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
          
          {/* Slide Indicators - Elegant Minimalism */}
          <div className="flex justify-center mt-12 space-x-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-500 ${
                  index === currentSlide 
                    ? 'w-12 h-2 bg-[#C49D2F] rounded-full' 
                    : 'w-2 h-2 bg-[#C49D2F]/30 rounded-full hover:bg-[#C49D2F]/60'
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