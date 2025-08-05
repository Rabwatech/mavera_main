'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Star, Quote, Crown, ChevronLeft, ChevronRight, Heart } from 'lucide-react'


export default function TestimonialsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const testimonials = [
    {
      text: 'مافيرا حولت حفل زفافي إلى حلم حقيقي. كل التفاصيل كانت مثالية والخدمة لا تضاهى. الفريق كان متعاوناً جداً وحقق كل ما تمنيته وأكثر.',
      name: 'سارة أحمد المالكي',
      occasion: 'حفل زفاف',
      rating: 5,
      date: 'مارس 2024'
    },
    {
      text: 'المكان رائع والتصميم فخم جداً. ضيوفي لم يتوقفوا عن الإعجاب بالديكور والأجواء. خدمة استثنائية وتنظيم مثالي من البداية للنهاية.',
      name: 'محمد الشريف',
      occasion: 'حفل خطوبة',
      rating: 5,
      date: 'فبراير 2024'
    },
    {
      text: 'خدمة متميزة وفريق محترف. استطاعوا تحقيق كل ما تمنيته لحفل عيد ميلاد ابنتي. الاهتمام بالتفاصيل والجودة العالية جعلت اليوم لا يُنسى.',
      name: 'نورا العتيبي',
      occasion: 'عيد ميلاد',
      rating: 5,
      date: 'يناير 2024'
    },
    {
      text: 'تجربة رائعة من البداية للنهاية. الفريق كان متفهماً لكل طلباتنا وحقق توقعاتنا بل وتجاوزها. المكان فخم والخدمة على أعلى مستوى.',
      name: 'أحمد الغامدي',
      occasion: 'حفل تخرج',
      rating: 5,
      date: 'ديسمبر 2023'
    },
    {
      text: 'مافيرا هو المكان المثالي للمناسبات المميزة. الديكور الملكي والخدمة الراقية جعلت حفل زفاف ابنتي يوماً لا يُنسى لجميع الحضور.',
      name: 'فاطمة الزهراني',
      occasion: 'حفل زفاف',
      rating: 5,
      date: 'نوفمبر 2023'
    },
    {
      text: 'تنظيم مثالي وخدمة استثنائية. كل شيء كان مرتباً بدقة والفريق كان متعاوناً جداً. أنصح بشدة بمافيرا لأي مناسبة مهمة.',
      name: 'خالد الحربي',
      occasion: 'مناسبة تجارية',
      rating: 5,
      date: 'أكتوبر 2023'
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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section - Emotional Opening */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7] via-[#F8F6F2] to-[#F1EAE3]"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-[rgba(196,157,47,0.02)] to-transparent"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#C49D2F]/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-[#C49D2F]/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-[#C49D2F]/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
          <div className="mb-8">
            <Quote className="w-12 h-12 text-[#C49D2F] mx-auto animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extralight text-[#2D2926] mb-12 tracking-[0.1em] leading-[0.9]"
              style={{ 
                fontFamily: 'system-ui, -apple-system, sans-serif',
                textShadow: '0 1px 2px rgba(0,0,0,0.02)'
              }}>
            آراء العملاء
          </h1>
          
          <p className="text-2xl md:text-3xl text-[#766B5A] font-light tracking-[0.05em] leading-relaxed max-w-3xl mx-auto">
            شهادات حقيقية من عملائنا الكرام
            <span className="block mt-2 text-xl opacity-70">قصص نجاح تحكي عن تجارب استثنائية</span>
          </p>
        </div>
      </section>

      {/* Featured Testimonial Carousel - Cinematic Experience */}
      <section ref={sectionRef} className="py-32 bg-gradient-to-b from-[#FAF9F7] to-[#F8F6F2] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <div className={`relative transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}>
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.12)] p-12 md:p-16 text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-3">
                <div className="absolute top-8 right-8 w-24 h-24 border border-[#C49D2F] rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-32 h-32 border border-[#C49D2F] rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                {/* Quote Icon */}
                <Quote className="w-16 h-16 text-[#C49D2F] mx-auto mb-12" />
                
                {/* Stars */}
                <div className="flex justify-center mb-12">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 text-[#C49D2F] fill-current mx-1" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-2xl md:text-3xl text-[#2D2926] leading-relaxed mb-16 font-light tracking-wide max-w-4xl mx-auto">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                {/* Golden Separator */}
                <div className="w-24 h-px bg-[#C49D2F] mx-auto mb-12"></div>
                
                {/* Author Info */}
                <div>
                  <h4 className="text-2xl font-light text-[#2D2926] mb-3 tracking-wide">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-[#C49D2F] text-lg font-light mb-2">
                    {testimonials[currentTestimonial].occasion}
                  </p>
                  <p className="text-[#766B5A] text-sm font-light">
                    {testimonials[currentTestimonial].date}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#C49D2F] hover:text-white hover:scale-110"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#C49D2F] hover:text-white hover:scale-110"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-16 space-x-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`transition-all duration-500 ${
                  index === currentTestimonial 
                    ? 'w-12 h-3 bg-[#C49D2F] rounded-full' 
                    : 'w-3 h-3 bg-[#C49D2F]/30 rounded-full hover:bg-[#C49D2F]/60'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid - Spatial Poetry */}
      <section className="py-32 bg-[#FAF9F7]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C49D2F]/40"></div>
              <Heart className="w-6 h-6 text-[#C49D2F] mx-6" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C49D2F]/40"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] mb-8 tracking-[0.05em]">
              جميع التقييمات
            </h2>
            
            <p className="text-xl text-[#766B5A] font-light max-w-2xl mx-auto leading-relaxed">
              مجموعة من أجمل الذكريات التي شاركها عملاؤنا معنا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_80px_rgba(0,0,0,0.12)] transition-all duration-700 transform hover:-translate-y-4 relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Quote Mark */}
                <div className="absolute -top-4 right-8 w-12 h-12 bg-[#C49D2F] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(196,157,47,0.25)]">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                
                {/* Stars */}
                <div className="flex justify-center mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#C49D2F] fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-[#766B5A] leading-relaxed mb-8 text-center font-light">
                  "{testimonial.text}"
                </p>
                
                {/* Golden Separator */}
                <div className="w-16 h-px bg-[#C49D2F] mx-auto mb-8"></div>
                
                {/* Author Info */}
                <div className="text-center">
                  <h4 className="text-[#2D2926] font-light text-lg mb-2 tracking-wide">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#C49D2F] text-sm font-light mb-1">
                    {testimonial.occasion}
                  </p>
                  <p className="text-[#766B5A] text-xs font-light">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Visual Impact */}
      <section className="py-32 bg-gradient-to-b from-[#FAF9F7] to-[#F8F6F2] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] mb-8 tracking-[0.05em]">
              أرقام تتحدث عن نفسها
            </h2>
            
            <p className="text-xl text-[#766B5A] font-light max-w-2xl mx-auto leading-relaxed">
              إنجازات نفخر بها ونسعى لتحقيق المزيد
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { number: '500+', label: 'حفل زفاف' },
              { number: '98%', label: 'رضا العملاء' },
              { number: '6', label: 'سنوات خبرة' },
              { number: '1000+', label: 'عميل سعيد' }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.06)] mb-8 transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_16px_64px_rgba(196,157,47,0.15)]">
                  <Crown className="w-12 h-12 text-[#C49D2F]" />
                </div>
                <div className="text-4xl font-extralight text-[#C49D2F] mb-3">{stat.number}</div>
                <div className="text-[#766B5A] text-lg font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
