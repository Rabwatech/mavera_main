'use client'

import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Crown, Heart, Shield, Star, Sparkles } from 'lucide-react'

export default function AboutPage() {
  // Timeline Card Component with Scroll Animation
  const TimelineCard = ({ item, index }) => {
    const [isVisible, setIsVisible] = useState(false)
    const cardRef = useRef(null)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        },
        { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
      )

      if (cardRef.current) {
        observer.observe(cardRef.current)
      }

      return () => observer.disconnect()
    }, [])

    const isLeft = index % 2 === 0

    return (
      <div
        ref={cardRef}
        className={`relative flex items-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        } ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
        style={{ transitionDelay: `${index * 200}ms` }}
      >
        {/* Card Content */}
        <div className={`w-full lg:w-1/2 ${
          isLeft 
            ? 'lg:pr-16 lg:text-right pl-16 lg:pl-0' 
            : 'lg:pl-16 lg:text-left pl-16 lg:pl-0'
        }`}>
          <div className="group bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_80px_rgba(196,157,47,0.15)] transition-all duration-700 transform hover:-translate-y-4 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-3">
              <div className="absolute top-4 right-4 w-16 h-16 border border-[#C49D2F] rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-20 h-20 border border-[#C49D2F] rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              {/* Year Badge */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#C49D2F] to-[#D4A935] rounded-full text-white text-2xl font-extralight mb-8 shadow-[0_8px_32px_rgba(196,157,47,0.25)]">
                {item.year}
              </div>
              
              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-light text-[#2D2926] mb-6 tracking-wide group-hover:text-[#C49D2F] transition-colors duration-500">
                {item.title}
              </h3>
              
              {/* Golden Separator */}
              <div className="w-16 h-px bg-[#C49D2F] mb-8 transition-all duration-500 group-hover:w-24"></div>
              
              {/* Description */}
              <p className="text-[#766B5A] text-lg md:text-xl leading-relaxed font-light">
                {item.description}
              </p>
            </div>
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#C49D2F]/5 to-[#D4A935]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem]"></div>
          </div>
        </div>
        
        {/* Timeline Dot - Desktop */}
        <div className="hidden lg:block relative z-10">
          <div className={`w-6 h-6 bg-gradient-to-r from-[#C49D2F] to-[#D4A935] rounded-full shadow-[0_0_24px_rgba(196,157,47,0.4)] transition-all duration-700 ${
            isVisible ? 'scale-100' : 'scale-0'
          }`}></div>
          
          {/* Pulsing Ring */}
          <div className={`absolute inset-0 w-6 h-6 border-2 border-[#C49D2F]/30 rounded-full transition-all duration-1000 ${
            isVisible ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
          }`}></div>
        </div>
        
        {/* Timeline Dot - Mobile */}
        <div className="lg:hidden absolute left-8 top-8 z-10">
          <div className={`w-4 h-4 bg-gradient-to-r from-[#C49D2F] to-[#D4A935] rounded-full shadow-[0_0_16px_rgba(196,157,47,0.4)] transition-all duration-700 ${
            isVisible ? 'scale-100' : 'scale-0'
          }`}></div>
        </div>
        
        {/* Empty Space for Desktop Layout */}
        <div className="hidden lg:block w-1/2"></div>
      </div>
    )
  }

  const timeline = [
    {
      year: '2018',
      title: 'البداية',
      description: 'انطلاقة مافيرا بحفلات متواضعة وخدمات محلية، بدأنا رحلتنا بحلم كبير وعزيمة لا تلين'
    },
    {
      year: '2020',
      title: 'التطور',
      description: 'انطلقت مافيرا برؤية أن تحول كل لحظة إلى ذكرى لا تُنسى، مع توسيع نطاق خدماتنا وتطوير مرافقنا'
    },
    {
      year: '2022',
      title: 'التميز',
      description: 'حفلات عالمية بلمسة فريدة، شهدت الرفاهية والفخامة، وحصولنا على جائزة أفضل قاعة أفراح في جدة'
    },
    {
      year: '2024',
      title: 'الريادة',
      description: 'أصبحت مافيرا الاسم الأول في المناسبات الفاخرة بجدة، والخيار المفضل للعائلات المميزة في المملكة'
    }
  ]

  const values = [
    {
      icon: Crown,
      title: 'فخامة',
      description: 'نقدم أرقى مستويات الفخامة والأناقة في كل تفصيل'
    },
    {
      icon: Heart,
      title: 'خدمة',
      description: 'فريق متخصص يهتم بأدق التفاصيل لضمان راحتكم'
    },
    {
      icon: Shield,
      title: 'خصوصية',
      description: 'نضمن لكم الخصوصية التامة والأمان في مناسباتكم'
    },
    {
      icon: Star,
      title: 'إتقان',
      description: 'نسعى للكمال في كل عنصر من عناصر الحفل'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Cinematic Opening */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7] via-[#F8F6F2] to-[#F1EAE3]"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-[rgba(196,157,47,0.02)] to-transparent"></div>
          
          {/* Floating Poetry */}
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#C49D2F]/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-[#C49D2F]/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-[#C49D2F]/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
          <div className="mb-8">
            <Sparkles className="w-6 h-6 text-[#C49D2F] mx-auto mb-6 animate-pulse" />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-extralight text-[#2D2926] mb-12 tracking-[0.1em] leading-[0.9]"
              style={{ 
                fontFamily: 'system-ui, -apple-system, sans-serif',
                textShadow: '0 1px 2px rgba(0,0,0,0.02)'
              }}>
            من نحن
          </h1>
          
          <p className="text-2xl md:text-3xl text-[#766B5A] font-light tracking-[0.05em] leading-relaxed max-w-3xl mx-auto">
            قصة مافيرا... رحلة نحو الكمال
            <span className="block mt-2 text-xl opacity-70">حيث تولد الأحلام وتصبح حقيقة</span>
          </p>
        </div>
      </section>

      {/* Our Story Section - Visual Narrative */}
      <section className="py-32 bg-gradient-to-b from-[#FAF9F7] to-[#F8F6F2] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
                <img
                  src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mavera Interior"
                  className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-12">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C49D2F]/40"></div>
                <Crown className="w-6 h-6 text-[#C49D2F]" />
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C49D2F]/40"></div>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] tracking-[0.05em]">
                قصتنا
              </h2>
              
              <div className="space-y-8 text-lg text-[#766B5A] leading-relaxed font-light">
                <p>
                  في قلب جدة الجميلة، وُلدت مافيرا من حلم بتقديم تجربة استثنائية تليق بأهم لحظات حياتكم. 
                  نحن لسنا مجرد قاعة أفراح، بل وجهة للذكريات الخالدة.
                </p>
                
                <p>
                  منذ تأسيسنا، آمنا بأن كل مناسبة تستحق أن تكون مميزة. لذلك، صممنا مساحاتنا بعناية فائقة، 
                  واخترنا كل تفصيل ليعكس الفخامة والأناقة التي تستحقونها.
                </p>
                
                <p>
                  اليوم، نفخر بكوننا الخيار الأول للعائلات المميزة في المملكة، ونواصل رحلتنا نحو تحقيق 
                  أحلامكم وتجاوز توقعاتكم في كل مناسبة.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8">
                {[
                  { number: '500+', label: 'حفل زفاف' },
                  { number: '6', label: 'سنوات خبرة' },
                  { number: '100%', label: 'رضا العملاء' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-extralight text-[#C49D2F] mb-2">{stat.number}</div>
                    <div className="text-[#766B5A] text-sm font-light">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Spatial Poetry */}
      <section className="py-32 bg-[#FAF9F7] relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1200px] mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C49D2F]/40"></div>
              <Star className="w-6 h-6 text-[#C49D2F] mx-6" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C49D2F]/40"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] mb-8 tracking-[0.05em]">
              رحلة مافيرا عبر الزمن
            </h2>
            
            <p className="text-xl text-[#766B5A] font-light max-w-2xl mx-auto leading-relaxed">
              قصة نجاح تُكتب بأحرف من ذهب، كل عام يحمل إنجازاً جديداً
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Elegant Timeline Line - Desktop */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#C49D2F]/20 via-[#C49D2F]/60 to-[#C49D2F]/20"></div>
            
            {/* Mobile Timeline Line */}
            <div className="lg:hidden absolute left-8 top-0 w-px h-full bg-gradient-to-b from-[#C49D2F]/20 via-[#C49D2F]/60 to-[#C49D2F]/20"></div>
            
            <div className="space-y-32">
              {timeline.map((item, index) => (
                <TimelineCard
                  key={index}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Genius Grid */}
      <section className="py-32 bg-gradient-to-b from-[#FAF9F7] to-[#F8F6F2] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C49D2F]/40"></div>
              <Heart className="w-6 h-6 text-[#C49D2F] mx-6" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C49D2F]/40"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] mb-8 tracking-[0.05em]">
              قيمنا
            </h2>
            
            <p className="text-xl text-[#766B5A] font-light max-w-2xl mx-auto leading-relaxed">
              المبادئ التي تقود رحلتنا نحو التميز
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center transform transition-all duration-700 hover:-translate-y-4"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-12">
                  <div className="w-24 h-24 mx-auto bg-white rounded-3xl flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-700 group-hover:shadow-[0_16px_64px_rgba(196,157,47,0.15)] group-hover:scale-110">
                    <value.icon className="w-12 h-12 text-[#C49D2F] transition-all duration-500 group-hover:scale-110" />
                  </div>
                  
                  {/* Floating Glow */}
                  <div className="absolute inset-0 w-24 h-24 mx-auto rounded-3xl bg-gradient-to-r from-[#C49D2F]/10 to-[#D4A935]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                </div>
                
                <h3 className="text-2xl font-light text-[#2D2926] mb-6 tracking-wide">
                  {value.title}
                </h3>
                
                <p className="text-[#766B5A] text-lg leading-relaxed font-light">
                  {value.description}
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
            احجز مناسبتك معنا
          </h2>
          
          <p className="text-xl text-[#766B5A] mb-16 leading-relaxed font-light max-w-2xl mx-auto">
            دعنا نكون جزءاً من قصة نجاحك ونخلق معاً ذكريات تدوم للأبد
          </p>
          
          <button className="group relative px-12 py-5 bg-[#C49D2F] text-white rounded-full text-xl font-medium tracking-[0.05em] transition-all duration-700 hover:shadow-[0_16px_64px_rgba(196,157,47,0.25)] hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center space-x-3">
              <span>ابدأ رحلتك معنا</span>
              <div className="w-2 h-2 bg-white rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            </span>
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
            
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#C49D2F] to-[#D4A935] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </button>
        </div>
      </section>
    </div>
  )
}
