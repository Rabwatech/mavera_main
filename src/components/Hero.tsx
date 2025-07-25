import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7] via-[#F1EAE3] to-[#E7DFD2]"></div>
      
      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[rgba(0,0,0,0.03)]"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        {/* Arabic Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-wider" style={{ fontFamily: 'serif' }}>
          مرحبًا بك في مافيرا
        </h1>
        
        {/* Arabic Subtitle */}
        <p className="text-2xl md:text-3xl text-[#766B5A] mb-12 opacity-80 tracking-wide" style={{ fontFamily: 'serif' }}>
          تحفتك الفاخرة في قلب جدة
        </p>
        
        {/* CTA Button */}
        <button className="group relative px-12 py-4 bg-[#C49D2F] text-white rounded-full text-xl font-medium tracking-wider transition-all duration-500 hover:shadow-2xl hover:shadow-[#C49D2F]/30 hover:scale-105">
          <span className="relative z-10">احجز الآن</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C49D2F] to-[#D4A935] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-[#C49D2F]" />
      </div>
    </section>
  );
};

export default Hero;