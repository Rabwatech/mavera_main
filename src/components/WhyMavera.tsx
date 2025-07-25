import React from 'react';
import { Crown, Sparkles, Heart } from 'lucide-react';

const WhyMavera = () => {
  const features = [
    {
      icon: Crown,
      title: 'الفخامة الملكية',
      description: 'تصميم داخلي يحاكي القصور العريقة مع لمسة عصرية متميزة'
    },
    {
      icon: Sparkles,
      title: 'الاهتمام بالتفاصيل',
      description: 'كل عنصر مدروس بعناية لضمان تجربة لا تُنسى'
    },
    {
      icon: Heart,
      title: 'ذكريات أبدية',
      description: 'نخلق لحظات سحرية تبقى في القلب إلى الأبد'
    }
  ];

  return (
    <section className="py-24 bg-[#F1EAE3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2D2926]" style={{ fontFamily: 'serif' }}>
            لماذا مافيرا؟
          </h2>
          <div className="w-24 h-0.5 bg-[#C49D2F] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center transform transition-all duration-700 hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#C49D2F]/20">
                  <feature.icon className="w-10 h-10 text-[#C49D2F] transition-all duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-[#C49D2F]/10 to-[#D4A935]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-[#2D2926]" style={{ fontFamily: 'serif' }}>
                {feature.title}
              </h3>
              
              <p className="text-[#766B5A] text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMavera;