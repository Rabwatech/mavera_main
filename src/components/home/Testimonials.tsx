import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: 'مافيرا حولت حفل زفافي إلى حلم حقيقي. كل التفاصيل كانت مثالية والخدمة لا تضاهى',
      name: 'سارة أحمد',
      occasion: 'حفل زفاف',
      rating: 5
    },
    {
      text: 'المكان رائع والتصميم فخم جداً. ضيوفي لم يتوقفوا عن الإعجاب بالديكور والأجواء',
      name: 'محمد الشريف',
      occasion: 'حفل خطوبة',
      rating: 5
    },
    {
      text: 'خدمة متميزة وفريق محترف. استطاعوا تحقيق كل ما تمنيته لحفل عيد ميلاد ابنتي',
      name: 'نورا العتيبي',
      occasion: 'عيد ميلاد',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-[#FAF9F7] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#C49D2F] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#C49D2F] rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-[#C49D2F] rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2D2926]" style={{ fontFamily: 'serif' }}>
            آراء عملائنا
          </h2>
          <div className="w-24 h-0.5 bg-[#C49D2F] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              {/* Quote Mark */}
              <div className="absolute -top-4 right-8 w-8 h-8 bg-[#C49D2F] rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">"</span>
              </div>
              
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#C49D2F] fill-current" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-[#766B5A] text-lg leading-relaxed mb-6 text-center">
                {testimonial.text}
              </p>
              
              {/* Golden Separator */}
              <div className="w-16 h-0.5 bg-[#C49D2F] mx-auto mb-6"></div>
              
              {/* Author Info */}
              <div className="text-center">
                <h4 className="text-[#2D2926] font-bold text-lg mb-1" style={{ fontFamily: 'serif' }}>
                  {testimonial.name}
                </h4>
                <p className="text-[#C49D2F] text-sm font-medium">
                  {testimonial.occasion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;