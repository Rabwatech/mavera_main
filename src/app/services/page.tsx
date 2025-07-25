'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Crown, Utensils, Camera, Music, Flower, Sparkles, Users, Heart, Star } from 'lucide-react'

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const services = [
    {
      icon: Crown,
      title: 'تنظيم حفلات الزفاف',
      description: 'نقدم خدمة شاملة لتنظيم حفلات الزفاف من التخطيط إلى التنفيذ، مع الاهتمام بكل التفاصيل لضمان يوم مثالي لا يُنسى.',
      features: ['تصميم الديكور', 'تنسيق الورود', 'الإضاءة المتخصصة', 'خدمة الضيافة'],
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Utensils,
      title: 'خدمات الضيافة الفاخرة',
      description: 'قوائم طعام متنوعة من أشهى المأكولات العربية والعالمية، مع خدمة راقية تليق بمناسباتكم المميزة.',
      features: ['مأكولات عربية أصيلة', 'أطباق عالمية', 'حلويات فاخرة', 'مشروبات متنوعة'],
      image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Camera,
      title: 'التصوير والتوثيق',
      description: 'فريق محترف من المصورين لتوثيق أجمل اللحظات بأعلى جودة، مع خدمات التصوير الفوتوغرافي والفيديو.',
      features: ['تصوير فوتوغرافي', 'تصوير فيديو 4K', 'تحرير احترافي', 'ألبوم ذكريات فاخر'],
      image: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Music,
      title: 'الترفيه والموسيقى',
      description: 'أنظمة صوتية متطورة مع إمكانية توفير فرق موسيقية وترفيهية لإضافة البهجة والحيوية لمناسبتكم.',
      features: ['أنظمة صوت متطورة', 'فرق موسيقية', 'عروض ترفيهية', 'إضاءة متحركة'],
      image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]

  const additionalServices = [
    {
      icon: Flower,
      title: 'تنسيق الورود',
      description: 'تصاميم فريدة من الورود والزهور الطبيعية'
    },
    {
      icon: Sparkles,
      title: 'الديكور المخصص',
      description: 'تصميم ديكور يناسب ذوقكم وشخصيتكم'
    },
    {
      icon: Users,
      title: 'خدمة الضيوف',
      description: 'فريق مدرب لخدمة الضيوف بأعلى مستوى'
    },
    {
      icon: Heart,
      title: 'التخطيط الشامل',
      description: 'إدارة كاملة للحدث من البداية للنهاية'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section - Cinematic Opening */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Services Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto text-white">
          <div className="mb-8">
            <div className="w-16 h-px bg-white/40 mx-auto mb-6"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extralight mb-12 tracking-[0.1em] leading-[0.9]"
              style={{ 
                fontFamily: 'system-ui, -apple-system, sans-serif',
                textShadow: '0 2px 20px rgba(0,0,0,0.3)'
              }}>
            خدماتنا
          </h1>
          
          <p className="text-2xl md:text-3xl font-light tracking-[0.05em] leading-relaxed max-w-3xl mx-auto opacity-90">
            نقدم لكم مجموعة شاملة من الخدمات الفاخرة
            <span className="block mt-2 text-xl opacity-70">لتحقيق أحلامكم بأسلوب لا يُضاهى</span>
          </p>
        </div>
      </section>

      {/* Main Services - Visual Storytelling */}
      <section ref={sectionRef} className="py-32 bg-[#FAF9F7] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10">
          <div className={`text-center mb-24 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C49D2F]/40"></div>
              <Star className="w-6 h-6 text-[#C49D2F] mx-6" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C49D2F]/40"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] mb-8 tracking-[0.05em]">
              خدماتنا الرئيسية
            </h2>
            
            <p className="text-xl text-[#766B5A] font-light max-w-2xl mx-auto leading-relaxed">
              كل خدمة مصممة بعناية لتحقيق رؤيتكم المثالية
            </p>
          </div>
          
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                } ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.12)] group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Service Icon Overlay */}
                    <div className="absolute top-8 right-8 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
                      <service.icon className="w-8 h-8 text-[#C49D2F]" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-[#C49D2F] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(196,157,47,0.25)]">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-light text-[#2D2926] tracking-wide">
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className="w-24 h-px bg-[#C49D2F]/40"></div>
                  
                  <p className="text-lg text-[#766B5A] leading-relaxed font-light">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#C49D2F] rounded-full"></div>
                        <span className="text-[#766B5A] font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services - Genius Grid */}
      <section className="py-32 bg-gradient-to-b from-[#FAF9F7] to-[#F8F6F2] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C49D2F]/40"></div>
              <Sparkles className="w-6 h-6 text-[#C49D2F] mx-6" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C49D2F]/40"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] mb-8 tracking-[0.05em]">
              خدمات إضافية
            </h2>
            
            <p className="text-xl text-[#766B5A] font-light max-w-2xl mx-auto leading-relaxed">
              تفاصيل تكمل تجربتكم المثالية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="group text-center transform transition-all duration-700 hover:-translate-y-4"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-12">
                  <div className="w-24 h-24 mx-auto bg-white rounded-3xl flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-700 group-hover:shadow-[0_16px_64px_rgba(196,157,47,0.15)] group-hover:scale-110">
                    <service.icon className="w-12 h-12 text-[#C49D2F] transition-all duration-500 group-hover:scale-110" />
                  </div>
                  
                  {/* Floating Glow */}
                  <div className="absolute inset-0 w-24 h-24 mx-auto rounded-3xl bg-gradient-to-r from-[#C49D2F]/10 to-[#D4A935]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                </div>
                
                <h3 className="text-2xl font-light text-[#2D2926] mb-6 tracking-wide">
                  {service.title}
                </h3>
                
                <p className="text-[#766B5A] text-lg leading-relaxed font-light">
                  {service.description}
                </p>
                
                {/* Subtle Accent */}
                <div className="w-12 h-px bg-[#C49D2F]/30 mx-auto mt-8 transition-all duration-500 group-hover:w-16 group-hover:bg-[#C49D2F]/60"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Emotional Finale */}
      <section className="py-32 bg-[#FAF9F7]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="mb-8">
            <Crown className="w-12 h-12 text-[#C49D2F] mx-auto animate-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] mb-12 tracking-[0.05em]">
            احجز خدمتك الخاصة
          </h2>
          
          <p className="text-xl text-[#766B5A] mb-16 leading-relaxed font-light max-w-2xl mx-auto">
            تواصل معنا لتخصيص باقة خدمات تناسب احتياجاتكم ومتطلباتكم الخاصة
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative px-12 py-5 bg-[#C49D2F] text-white rounded-full text-xl font-medium tracking-[0.05em] transition-all duration-700 hover:shadow-[0_16px_64px_rgba(196,157,47,0.25)] hover:scale-105 overflow-hidden">
              <span className="relative z-10">احجز الآن</span>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
              
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#C49D2F] to-[#D4A935] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </button>
            
            <button className="group relative px-12 py-5 border-2 border-[#C49D2F] text-[#C49D2F] rounded-full text-xl font-medium tracking-[0.05em] transition-all duration-700 hover:bg-[#C49D2F] hover:text-white hover:scale-105 overflow-hidden">
              <span className="relative z-10">استشارة مجانية</span>
              
              {/* Hover Background */}
              <div className="absolute inset-0 bg-[#C49D2F] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
