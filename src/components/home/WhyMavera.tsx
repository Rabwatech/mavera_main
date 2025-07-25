import React, { useEffect, useRef, useState } from 'react';
import { Crown, Sparkles, Heart, Star } from 'lucide-react';

const WhyMavera = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const features = [
    {
      icon: Crown,
      title: 'الفخامة الملكية',
      description: 'تصميم داخلي يحاكي القصور العريقة مع لمسة عصرية متميزة تأسر الأنظار وتخلق أجواء استثنائية',
      delay: 0
    },
    {
      icon: Sparkles,
      title: 'الاهتمام بالتفاصيل',
      description: 'كل عنصر مدروس بعناية فائقة، من الإضاءة الرومانسية إلى أدق التفاصيل الديكورية',
      delay: 200
    },
    {
      icon: Heart,
      title: 'ذكريات أبدية',
      description: 'نخلق لحظات سحرية تبقى محفورة في القلب والذاكرة، تحكي قصة حبكم للأجيال القادمة',
      delay: 400
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-[#FAF9F7] to-[#F8F6F2] relative overflow-hidden">
      {/* Background Artistry */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10">
        {/* Section Header - Emotional Typography */}
        <div className={`text-center mb-24 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C49D2F]/40"></div>
            <Star className="w-6 h-6 text-[#C49D2F] mx-6" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C49D2F]/40"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extralight text-[#2D2926] mb-8 tracking-[0.05em]">
            لماذا مافيرا؟
          </h2>
          
          <p className="text-xl text-[#766B5A] font-light max-w-2xl mx-auto leading-relaxed">
            نحن لا نقدم مجرد قاعة، بل نخلق تجربة تتجاوز التوقعات
          </p>
        </div>
        
        {/* Features Grid - Spatial Intelligence */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group text-center transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              {/* Icon Container - Genius Simplicity */}
              <div className="relative mb-12">
                <div className="w-24 h-24 mx-auto bg-white rounded-3xl flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-700 group-hover:shadow-[0_16px_64px_rgba(196,157,47,0.15)] group-hover:scale-110">
                  <feature.icon className="w-12 h-12 text-[#C49D2F] transition-all duration-500 group-hover:scale-110" />
                </div>
                
                {/* Floating Glow */}
                <div className="absolute inset-0 w-24 h-24 mx-auto rounded-3xl bg-gradient-to-r from-[#C49D2F]/10 to-[#D4A935]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-light text-[#2D2926] mb-6 tracking-wide">
                {feature.title}
              </h3>
              
              <p className="text-[#766B5A] text-lg leading-relaxed font-light max-w-sm mx-auto">
                {feature.description}
              </p>
              
              {/* Subtle Accent */}
              <div className="w-12 h-px bg-[#C49D2F]/30 mx-auto mt-8 transition-all duration-500 group-hover:w-16 group-hover:bg-[#C49D2F]/60"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMavera;