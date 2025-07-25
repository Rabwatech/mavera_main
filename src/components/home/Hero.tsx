import React, { useEffect, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/30311728/pexels-photo-30311728.jpeg"
          alt="Luxury Wedding Venue"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Masterpiece Background Overlays - Breathing Gradients */}
      <div className="absolute inset-0">
        {/* Primary elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7]/75 via-[#F8F6F2]/65 to-[#F1EAE3]/70"></div>
        
        {/* Secondary depth gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[rgba(196,157,47,0.08)] to-[rgba(196,157,47,0.12)]"></div>
        
        {/* Soft vignette for focus */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent 40% via-transparent 70% to-[rgba(0,0,0,0.15)]"></div>
        
        {/* Floating Elements - Spatial Poetry */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#C49D2F]/40 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-[#C49D2F]/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-[#C49D2F]/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content - Emotional Typography */}
      <div className={`relative z-10 text-center px-8 max-w-5xl mx-auto transition-all duration-1500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        {/* Genius Typography Hierarchy */}
        <div className="mb-8">
          <Sparkles className="w-6 h-6 text-[#C49D2F] mx-auto mb-6 animate-pulse" />
        </div>
        
        <h1 className="text-7xl md:text-9xl font-extralight text-[#2D2926] mb-12 tracking-[0.1em] leading-[0.9]"
            style={{ 
              fontFamily: 'system-ui, -apple-system, sans-serif',
              textShadow: '0 2px 20px rgba(255,255,255,0.8), 0 1px 2px rgba(0,0,0,0.1)'
            }}>
          مرحبًا بك في
          <span className="block text-[#C49D2F] font-light mt-4" style={{ textShadow: '0 2px 20px rgba(196,157,47,0.3), 0 1px 2px rgba(0,0,0,0.1)' }}>مافيرا</span>
        </h1>
        
        <div className={`transition-all duration-1500 ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-2xl md:text-3xl text-[#2D2926] mb-16 font-light tracking-[0.05em] leading-relaxed max-w-3xl mx-auto"
             style={{ textShadow: '0 1px 10px rgba(255,255,255,0.9)' }}>
            حيث تتحول الأحلام إلى ذكريات خالدة
            <span className="block mt-2 text-xl opacity-80">في قلب جدة الجميلة</span>
          </p>
        </div>
        
        {/* CTA - Genius Interaction */}
        <div className={`transition-all duration-1500 ease-out delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button className="group relative px-12 py-5 bg-[#C49D2F] text-white rounded-full text-xl font-medium tracking-[0.05em] transition-all duration-700 hover:shadow-[0_16px_64px_rgba(196,157,47,0.4)] hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center space-x-3">
              <span>ابدأ رحلتك</span>
              <div className="w-2 h-2 bg-white rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            </span>
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
            
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#C49D2F] to-[#D4A935] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator - Minimal Genius */}
      <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1500 ease-out delay-1500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="flex flex-col items-center space-y-3">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#C49D2F]/60 to-transparent"></div>
          <ChevronDown className="w-5 h-5 text-[#C49D2F]/80 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;