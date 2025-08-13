'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Crown, Users, MapPin, Calendar, ArrowRight, Star, Heart, Shield, CheckCircle, Play, ChevronLeft, ChevronRight, Flower, Building, Camera, Music, Award, Gem, Trophy } from 'lucide-react'
import ThreeDModel from '../../../components/ThreeDModel'
import GrandBallroomWizard from '../../../components/GrandBallroomWizard'

export default function GrandBallroomPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const [isFactsVisible, setIsFactsVisible] = useState(false)
  const [isStoryVisible, setIsStoryVisible] = useState(false)
  const [isGalleryVisible, setIsGalleryVisible] = useState(false)
  const [isDecisionVisible, setIsDecisionVisible] = useState(false)
  const [isCTAVisible, setIsCTAVisible] = useState(false)
  const [showWizard, setShowWizard] = useState(false)
  
  const heroRef = useRef<HTMLElement>(null)
  const factsRef = useRef<HTMLElement>(null)
  const storyRef = useRef<HTMLElement>(null)
  const galleryRef = useRef<HTMLElement>(null)
  const decisionRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'القاعة الكبرى - منظر عام للقاعة الفاخرة'
    },
    {
      src: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'القاعة الكبرى - منطقة الاستقبال والضيافة الفاخرة'
    },
    {
      src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'القاعة الكبرى - المطبخ الفاخر والمعدات الحديثة'
    },
    {
      src: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'القاعة الكبرى - الحديقة الخارجية والمناظر الطبيعية'
    },
    {
      src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'القاعة الكبرى - نظام الإضاءة المتطور'
    },
    {
      src: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'القاعة الكبرى - منطقة الجلوس والراحة'
    },
    {
      src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'القاعة الكبرى - المصعد الخاص والمرافق'
    },
    {
      src: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'القاعة الكبرى - موقف السيارات والمدخل الرئيسي'
    }
  ]

  const testimonials = [
    {
      name: 'سارة أحمد',
      event: 'حفل زفاف',
      text: 'القاعة الكبرى تجاوزت كل توقعاتنا! الفخامة والأناقة في كل تفصيل، والفريق كان محترفاً جداً. أنصح بها بشدة.',
      rating: 5
    },
    {
      name: 'محمد العلي',
      event: 'حفل تخرج',
      text: 'أفضل قاعة في جدة بلا منازع. السعة كبيرة والمرافق ممتازة. سعر معقول مقابل الخدمة المقدمة.',
      rating: 5
    },
    {
      name: 'فاطمة الزهراني',
      event: 'حفل خطوبة',
      text: 'تجربة رائعة! القاعة نظيفة والفريق متعاون. الحديقة الخارجية إضافة جميلة للصور.',
      rating: 5
    }
  ]

  const quickFacts = [
    { icon: Users, label: 'السعة', value: '500 ضيف' },
    { icon: Crown, label: 'الأفضل لـ', value: 'حفلات الزفاف الكبيرة' },
    { icon: Shield, label: 'المرافق', value: 'مطبخ فاخر، مصعد خاص' },
    { icon: Heart, label: 'الطعام', value: 'بوفيه فاخر متوفر' },
    { icon: Star, label: 'المرونة', value: 'تصميم قابل للتخصيص' }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    }

    const heroObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsHeroVisible(true)
    }, observerOptions)

    const factsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsFactsVisible(true)
    }, observerOptions)

    const storyObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsStoryVisible(true)
    }, observerOptions)

    const galleryObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsGalleryVisible(true)
    }, observerOptions)

    const decisionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsDecisionVisible(true)
    }, observerOptions)

    const ctaObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsCTAVisible(true)
    }, observerOptions)

    if (heroRef.current) heroObserver.observe(heroRef.current)
    if (factsRef.current) factsObserver.observe(factsRef.current)
    if (storyRef.current) storyObserver.observe(storyRef.current)
    if (galleryRef.current) galleryObserver.observe(galleryRef.current)
    if (decisionRef.current) decisionObserver.observe(decisionRef.current)
    if (ctaRef.current) ctaObserver.observe(ctaRef.current)

    return () => {
      heroObserver.disconnect()
      factsObserver.disconnect()
      storyObserver.disconnect()
      galleryObserver.disconnect()
      decisionObserver.disconnect()
      ctaObserver.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen rtl" dir="rtl">
      {/* SEO Meta Section */}
      <div className="sr-only">
        <h1>القاعة الكبرى - قاعة مافيرا الرئيسية في جدة</h1>
        <p>أكبر قاعة أفراح في جدة بسعة 500 ضيف، مطبخ فاخر، حديقة خارجية، ومرافق حديثة. احجز الآن لحفلتك الفاخرة</p>
        <meta name="description" content="القاعة الكبرى في مافيرا - أكبر قاعة أفراح في جدة بسعة 500 ضيف، مطبخ فاخر، حديقة خارجية، ومرافق حديثة لحفلات الزفاف والمناسبات الفاخرة" />
        <meta name="keywords" content="القاعة الكبرى جدة, قاعة مافيرا الرئيسية, حفلات زفاف جدة, قاعات أفراح كبيرة جدة" />
      </div>

      {/* Hero Section - Enhanced with Fade + Slide */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="القاعة الكبرى - منظر عام"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50"></div>
        </div>
        
        <div className={`relative z-10 text-center px-8 max-w-5xl mx-auto text-white transition-all duration-1000 ${
          isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="mb-8">
            <img
              src="https://ik.imagekit.io/b4rz6znyz/LOGO.png?updatedAt=1754143903491"
              alt="مافيرا"
              className="w-12 h-12 mx-auto mb-6 animate-pulse"
            />
            <div className="w-16 h-px bg-white/40 mx-auto mb-6"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extralight mb-8 tracking-[0.1em] leading-[0.9]"
              style={{ 
                fontFamily: 'system-ui, -apple-system, sans-serif',
                textShadow: '0 2px 20px rgba(0,0,0,0.3)'
              }}>
            القاعة الكبرى
          </h1>
          
          <p className="text-2xl md:text-3xl font-light tracking-[0.05em] leading-relaxed max-w-3xl mx-auto mb-12 opacity-90">
            أكبر قاعة أفراح في جدة، مصممة لتلبية أحلامكم الأكثر طموحاً
          </p>
          
          <button className="group relative px-12 py-5 bg-[#C49D2F] text-white rounded-full text-xl font-medium tracking-[0.05em] transition-all duration-700 hover:shadow-[0_16px_64px_rgba(196,157,47,0.25)] hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center space-x-reverse space-x-3">
              <span>احجز جولة مجانية</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
          </button>
        </div>
      </section>

      {/* Quick Facts Section - Enhanced with Luxury Icons */}
      <section ref={factsRef} className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {quickFacts.map((fact, index) => (
              <div key={index} className={`text-center group transition-all duration-1000 ${
                isFactsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: `${index * 150}ms` }}>
                {/* الأيقونة في الأعلى */}
                <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_8px_32px_rgba(196,157,47,0.25)] relative overflow-hidden border-2 border-[#C49D2F]/20">
                  <fact.icon className="w-10 h-10 text-[#C49D2F] relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C49D2F]/5 to-[#D4A935]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* العنوان أسفل الأيقونة */}
                <h3 className="text-lg font-bold text-[#2D2926] mb-3 text-center">{fact.label}</h3>
                {/* الوصف أسفل العنوان */}
                <p className="text-[#766B5A] font-light text-center text-sm">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storytelling Experience Section - Enhanced */}
      <section ref={storyRef} className="py-32 bg-gradient-to-b from-[#FAF9F7] to-[#F8F6F2] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${
              isStoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex items-center space-x-reverse space-x-4 mb-8">
                <img
                  src="https://ik.imagekit.io/b4rz6znyz/LOGO.png?updatedAt=1754143903491"
                  alt="مافيرا"
                  className="w-8 h-8"
                />
                <h2 className="text-4xl md:text-5xl font-extralight text-[#2D2926] tracking-[0.05em]">
                  قصة القاعة الكبرى
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-[#766B5A] leading-relaxed font-light text-right">
                <p>
                  القاعة الكبرى ليست مجرد مساحة، بل هي تحفة معمارية تجمع بين الفخامة التقليدية والحداثة العصرية. 
                  صممت خصيصاً لتكون وجهة العائلات المميزة في المملكة.
                </p>
                
                <p>
                  مع سعة تصل إلى 500 ضيف، ومطبخ فاخر مجهز بأحدث المعدات، وحديقة خارجية خلابة، 
                  تضمن القاعة الكبرى أن تكون مناسبتكم استثنائية بكل معنى الكلمة.
                </p>
              </div>
              
              <div className="mt-12">
                <button 
                  onClick={() => setShowWizard(true)}
                  className="group relative px-8 py-4 border-2 border-[#C49D2F] text-[#C49D2F] rounded-full text-lg font-medium transition-all duration-700 hover:bg-[#C49D2F] hover:text-white hover:shadow-[0_16px_64px_rgba(196,157,47,0.25)] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-reverse space-x-3">
                    <span>احصل على عرض سعر مخصص</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 ${
              isStoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
                <img
                  src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="القاعة الكبرى - تفاصيل التصميم"
                  className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Golden Frame Effect */}
                <div className="absolute inset-0 border-4 border-[#C49D2F]/30 rounded-[2rem] pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Enhanced with Lightbox */}
      <section ref={galleryRef} className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-[#2D2926] mb-8 tracking-[0.05em]">
              معرض الصور
            </h2>
            <p className="text-xl text-[#766B5A] font-light max-w-2xl mx-auto">
              اكتشف جمال القاعة الكبرى من خلال صورنا المختارة
            </p>
          </div>
          
          {/* Main Image */}
          <div className={`relative mb-8 transition-all duration-1000 ${
            isGalleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.12)] cursor-pointer group" onClick={() => setShowLightbox(true)}>
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <Camera className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-lg font-medium">انقر لعرض الصورة مكبرة</p>
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-[#2D2926]" />
              </button>
              
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-[#2D2926]" />
              </button>
            </div>
          </div>
          
          {/* Thumbnail Grid */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative overflow-hidden rounded-xl transition-all duration-300 group ${
                  currentImageIndex === index ? 'ring-2 ring-[#C49D2F]' : 'hover:scale-105'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-20 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#C49D2F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {showLightbox && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setShowLightbox(false)}>
            <div className="relative max-w-4xl max-h-full">
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={() => setShowLightbox(false)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-all duration-300"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 3D Model Section */}
      <ThreeDModel
        title="النموذج ثلاثي الأبعاد"
        description="استكشف القاعة الكبرى من جميع الزوايا من خلال النموذج التفاعلي ثلاثي الأبعاد"
      />

      {/* Testimonials Section - KEEP AS IS */}
      <section className="py-32 bg-gradient-to-b from-[#FAF9F7] to-[#F8F6F2] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-[#2D2926] mb-8 tracking-[0.05em]">
              آراء عملائنا
            </h2>
            <p className="text-xl text-[#766B5A] font-light max-w-2xl mx-auto">
              اكتشف ما يقوله عملاؤنا عن تجربتهم في القاعة الكبرى
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_80px_rgba(196,157,47,0.15)] transition-all duration-700 hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#C49D2F] fill-current" />
                  ))}
                </div>
                
                <p className="text-[#766B5A] text-lg leading-relaxed font-light mb-6">
                  "{testimonial.text}"
                </p>
                
                <div>
                  <h4 className="text-lg font-medium text-[#2D2926]">{testimonial.name}</h4>
                  <p className="text-[#C49D2F] text-sm">{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Guide Section - Enhanced */}
      <section ref={decisionRef} className="py-32 bg-gradient-to-br from-white to-[#FAF9F7]">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-[#2D2926] mb-8 tracking-[0.05em]">
              هل القاعة الكبرى مناسبة لكم؟
            </h2>
            <p className="text-xl text-[#766B5A] font-light max-w-2xl mx-auto">
              القاعة الكبرى مثالية للعائلات التي تبحث عن الفخامة والأناقة
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-1000 ${
            isDecisionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div>
              <h3 className="text-2xl font-light text-[#2D2926] mb-6 tracking-wide text-right">
                القاعة الكبرى مناسبة لكم إذا كنتم:
              </h3>
              <div className="space-y-4">
                {[
                  { text: 'تخططون لحفل كبير مع أكثر من 300 ضيف', icon: Users },
                  { text: 'تبحثون عن قاعة فاخرة بمرافق متطورة', icon: Crown },
                  { text: 'تريدون مطبخ فاخر مجهز بأحدث المعدات', icon: Building },
                  { text: 'تحبون الحفلات في الهواء الطلق مع حديقة خارجية', icon: Flower },
                  { text: 'تريدون فريق خدمة محترف ومتخصص', icon: Shield }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-reverse space-x-4">
                    <div className="w-8 h-8 bg-[#C49D2F]/10 rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#C49D2F]" />
                    </div>
                    <span className="text-[#766B5A] text-lg font-light text-right">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#FAF9F7] to-[#F8F6F2] p-8 rounded-[2rem] border border-[#E7DFD2]/30">
              <h3 className="text-2xl font-light text-[#2D2926] mb-6 tracking-wide text-right">
                احتاجوا مساعدة في الاختيار؟
              </h3>
              <p className="text-[#766B5A] text-lg leading-relaxed font-light mb-8 text-right">
                خذوا اختبارنا السريع لمعرفة أي قاعة تناسبكم أكثر
              </p>
              
              <button className="group relative w-full px-8 py-4 bg-[#C49D2F] text-white rounded-full text-lg font-medium transition-all duration-700 hover:shadow-[0_16px_64px_rgba(196,157,47,0.25)] hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center space-x-reverse space-x-3">
                  <span>ابدأ الاختبار السريع</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Enhanced */}
      <section ref={ctaRef} className="py-32 bg-gradient-to-br from-[#2D2926] to-[#1a1a1a] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D2926]/90 to-[#1a1a1a]/90"></div>
        </div>

        <div className={`max-w-4xl mx-auto px-8 text-center relative z-10 transition-all duration-1000 ${
          isCTAVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="mb-8">
            <img
              src="https://ik.imagekit.io/b4rz6znyz/LOGO.png?updatedAt=1754143903491"
              alt="مافيرا"
              className="w-16 h-16 mx-auto mb-8"
            />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-8 tracking-[0.05em]">
            احجزوا القاعة الكبرى الآن
          </h2>
          
          <p className="text-xl text-white/80 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
            دعوا القاعة الكبرى تكون مسرح أحلامكم وتخلقوا ذكريات تدوم للأبد
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative px-12 py-6 bg-[#C49D2F] text-white rounded-full text-xl font-medium tracking-[0.05em] transition-all duration-700 hover:shadow-[0_24px_80px_rgba(196,157,47,0.4)] hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center space-x-reverse space-x-4">
                <span>احجز جولة مجانية</span>
                <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </span>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
            </button>
            
            <button 
              onClick={() => setShowWizard(true)}
              className="group relative px-12 py-6 border-2 border-white/30 text-white rounded-full text-xl font-medium tracking-[0.05em] transition-all duration-700 hover:bg-white hover:text-[#2D2926] hover:shadow-[0_24px_80px_rgba(255,255,255,0.2)] hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-reverse space-x-4">
                <span>احصل على عرض سعر مخصص</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Grand Ballroom Wizard Modal */}
      <GrandBallroomWizard 
        isOpen={showWizard} 
        onClose={() => setShowWizard(false)} 
      />
    </div>
  )
} 