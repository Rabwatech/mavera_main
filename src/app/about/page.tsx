'use client'

import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Crown, Heart, Shield, Star, Sparkles, Users, MapPin, Calendar, ArrowRight, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Award, Building, Camera, Music, Flower, Gem, Trophy } from 'lucide-react'

// Types
interface TimelineItem {
  year: string
  title: string
  description: string
}

interface ValueItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

interface HallCard {
  id: string
  name: string
  capacity: string
  uniqueTraits: string[]
  image: string
  description: string
  badge?: string
  isPopular?: boolean
}

export default function AboutPage() {
  const [currentHallIndex, setCurrentHallIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isStoryVisible, setIsStoryVisible] = useState(false)
  const [isValuesVisible, setIsValuesVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const storyRef = useRef<HTMLElement>(null)
  const valuesRef = useRef<HTMLElement>(null)

  // Timeline Card Component with Scroll Animation - KEEP AS IS
  const TimelineCard = ({ item, index }: { item: TimelineItem; index: number }) => {
    const [isVisible, setIsVisible] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

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
        } ${isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
        style={{ transitionDelay: `${index * 200}ms` }}
      >
        {/* Card Content */}
        <div className={`w-full lg:w-1/2 ${
          isLeft 
            ? 'lg:pl-16 lg:text-left pr-16 lg:pr-0' 
            : 'lg:pr-16 lg:text-right pl-16 lg:pl-0'
        }`}>
          <div className="group bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_80px_rgba(196,157,47,0.15)] transition-all duration-700 transform hover:-translate-y-4 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-3">
              <div className="absolute top-4 left-4 w-16 h-16 border border-[#C49D2F] rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-20 h-20 border border-[#C49D2F] rounded-full"></div>
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
        <div className="lg:hidden absolute right-8 top-8 z-10">
          <div className={`w-4 h-4 bg-gradient-to-r from-[#C49D2F] to-[#D4A935] rounded-full shadow-[0_0_16px_rgba(196,157,47,0.4)] transition-all duration-700 ${
            isVisible ? 'scale-100' : 'scale-0'
          }`}></div>
        </div>
        
        {/* Empty Space for Desktop Layout */}
        <div className="hidden lg:block w-1/2"></div>
      </div>
    )
  }

  // Enhanced Hall Card Component
  const HallCard = ({ hall, index }: { hall: HallCard; index: number }) => {
    return (
      <div className={`relative bg-white rounded-[2rem] overflow-hidden shadow-[0_16px_64px_rgba(0,0,0,0.08)] transition-all duration-700 hover:shadow-[0_32px_96px_rgba(196,157,47,0.25)] hover:scale-105 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ transitionDelay: `${index * 200}ms` }}>
        {/* Badge */}
        {hall.badge && (
          <div className="absolute top-6 left-6 z-10">
            <div className="bg-gradient-to-r from-[#C49D2F] to-[#D4AF37] text-white px-4 py-2 rounded-full text-sm font-medium shadow-[0_8px_32px_rgba(196,157,47,0.4)]">
              {hall.badge}
            </div>
          </div>
        )}
        
        {/* Popular Badge */}
        {hall.isPopular && (
          <div className="absolute top-6 right-6 z-10">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-[0_8px_32px_rgba(239,68,68,0.4)] flex items-center space-x-reverse space-x-2">
              <Trophy className="w-4 h-4" />
              <span>الأكثر حجزًا</span>
            </div>
          </div>
        )}

        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={hall.image}
            alt={hall.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#C49D2F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-[#2D2926] mb-4 text-right">{hall.name}</h3>
          <p className="text-[#766B5A] mb-6 leading-relaxed text-right">{hall.description}</p>
          
          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {hall.uniqueTraits.map((trait, idx) => (
              <div key={idx} className="flex items-center space-x-reverse space-x-2 text-sm text-[#766B5A]">
                <div className="w-2 h-2 bg-[#C49D2F] rounded-full"></div>
                <span>{trait}</span>
              </div>
            ))}
          </div>

          {/* Capacity & Icons */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-reverse space-x-4">
              <div className="flex items-center space-x-reverse space-x-2 text-[#C49D2F]">
                <Users className="w-5 h-5" />
                <span className="font-medium">{hall.capacity}</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-2 text-[#C49D2F]">
                <Building className="w-5 h-5" />
                <span className="font-medium">مساحة واسعة</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link href={`/halls/${hall.id}`}>
            <button className="w-full bg-gradient-to-r from-[#C49D2F] to-[#D4AF37] text-white py-4 rounded-xl font-medium transition-all duration-500 hover:shadow-[0_16px_64px_rgba(196,157,47,0.25)] hover:scale-105 group/btn">
              <span className="flex items-center justify-center space-x-reverse space-x-3">
                <span>التفاصيل</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    )
  }

  const halls: HallCard[] = [
    {
      id: 'grand-ballroom',
      name: 'القاعة الكبرى',
      capacity: '400 ضيف',
      description: 'قاعة فاخرة بتصميم كلاسيكي أنيق، مثالية للحفلات الكبيرة والمناسبات الرسمية.',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      uniqueTraits: ['تصميم كلاسيكي', 'إضاءة فاخرة', 'خدمة شاملة'],
      badge: 'مميزة',
      isPopular: true
    },
    {
      id: 'flower-hall',
      name: 'قاعة الأزهار',
      capacity: '250 ضيف',
      description: 'قاعة رومانسية بتصميم عصري، تتناسب مع حفلات الزفاف والمناسبات العائلية.',
      image: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800',
      uniqueTraits: ['تصميم عصري', 'ديكور طبيعي', 'جو رومانسي'],
      badge: 'رومانسية'
    },
    {
      id: 'golden-hall',
      name: 'القاعة الذهبية',
      capacity: '300 ضيف',
      description: 'قاعة فاخرة بتصميم شرقي أصيل، تجمع بين الأصالة والحداثة.',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      uniqueTraits: ['تصميم شرقي', 'ألوان ذهبية', 'جو فاخر'],
      badge: 'فاخرة'
    }
  ]

  const timeline: TimelineItem[] = [
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

  const values: ValueItem[] = [
    {
      icon: Heart,
      title: 'الاهتمام بالتفاصيل',
      description: 'نؤمن بأن التفاصيل الصغيرة تصنع الفرق الكبير في نجاح أي مناسبة.'
    },
    {
      icon: Shield,
      title: 'الجودة المضمونة',
      description: 'نلتزم بأعلى معايير الجودة في جميع خدماتنا ومرافقنا.'
    },
    {
      icon: Users,
      title: 'خدمة العملاء',
      description: 'فريق محترف لخدمة عملائنا وتلبية جميع احتياجاتهم باحترافية عالية.'
    },
    {
      icon: Star,
      title: 'التميز المستمر',
      description: 'نسعى دائماً للتطوير والتحسين لضمان تجربة استثنائية لعملائنا.'
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

    const storyObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStoryVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const valuesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsValuesVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    if (storyRef.current) {
      storyObserver.observe(storyRef.current)
    }
    if (valuesRef.current) {
      valuesObserver.observe(valuesRef.current)
    }

    return () => {
      observer.disconnect()
      storyObserver.disconnect()
      valuesObserver.disconnect()
    }
  }, [])

  const nextHall = () => {
    setCurrentHallIndex((prev) => (prev + 1) % halls.length)
  }

  const prevHall = () => {
    setCurrentHallIndex((prev) => (prev - 1 + halls.length) % halls.length)
  }

  return (
    <div className="min-h-screen rtl" dir="rtl">
      {/* SEO Meta Section - Hidden for SEO */}
      <div className="sr-only">
        <h1>قاعات حفلات فاخرة في جدة - مافيرا</h1>
        <p>قاعات حفلات فاخرة في جدة مع خدمات شاملة لحفلات الزفاف والمناسبات. تصاميم فريدة وخدمة احترافية</p>
        <meta name="description" content="قاعات حفلات فاخرة في جدة - مافيرا، قاعات حفلات زفاف فاخرة مع خدمات شاملة وتصاميم فريدة" />
        <meta name="keywords" content="قاعات حفلات جدة, قاعات زفاف جدة, حفلات فاخرة جدة, مناسبات جدة" />
      </div>

      {/* Hero Section - Cinematic Opening */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="About Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto text-white">
          <div className="mb-8">
            <img
              src="https://ik.imagekit.io/b4rz6znyz/LOGO.png?updatedAt=1754143903491"
              alt="مافيرا"
              className="w-12 h-12 mx-auto mb-6 animate-pulse"
            />
            <div className="w-16 h-px bg-white/40 mx-auto mb-6"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extralight mb-12 tracking-[0.1em] leading-[0.9]"
              style={{ 
                fontFamily: 'system-ui, -apple-system, sans-serif',
                textShadow: '0 2px 20px rgba(0,0,0,0.3)'
              }}>
            من نحن
          </h1>
          
          <p className="text-2xl md:text-3xl font-light tracking-[0.05em] leading-relaxed max-w-3xl mx-auto opacity-90">
            قصة فاخرة، رحلة عبر الجمال والفخامة
          </p>
        </div>
      </section>

      {/* Halls Section - Enhanced Design */}
      <section ref={sectionRef} className="py-32 bg-gradient-to-b from-[#FAF9F7] to-[#F8F6F2] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C49D2F]/40"></div>
              <Crown className="w-6 h-6 text-[#C49D2F] mx-6" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C49D2F]/40"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] mb-8 tracking-[0.05em]">
              قاعاتنا الفاخرة
            </h2>
            
            <p className="text-xl text-[#766B5A] font-light max-w-3xl mx-auto">
              اكتشف قاعاتنا الفريدة المصممة لتلبية جميع احتياجات مناسباتكم
            </p>
          </div>

          {/* Enhanced Hall Cards Slider */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {halls.map((hall, index) => (
                <HallCard key={hall.id} hall={hall} index={index} />
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevHall}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-white hover:scale-110 lg:hidden"
            >
              <ChevronRight className="w-6 h-6 text-[#2D2926]" />
            </button>
            
            <button
              onClick={nextHall}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-white hover:scale-110 lg:hidden"
            >
              <ChevronLeft className="w-6 h-6 text-[#2D2926]" />
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Comparison Table */}
      <section className="py-32 bg-gradient-to-br from-white to-[#FAF9F7] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C49D2F]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C49D2F]/20 to-transparent"></div>
        </div>

        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-[#2D2926] mb-8 tracking-[0.05em]">
              مقارنة القاعات
            </h2>
            <p className="text-xl text-[#766B5A] font-light">
              اختر القاعة المناسبة لمناسبتكم
            </p>
          </div>

          <div className="bg-white rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.08)] overflow-hidden border border-[#E7DFD2]/30">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#C49D2F]/5 to-[#D4AF37]/5">
                    <th className="px-8 py-6 text-right text-lg font-semibold text-[#2D2926] border-b border-[#E7DFD2]/50">
                      <div className="flex items-center space-x-reverse space-x-3">
                        <Building className="w-6 h-6 text-[#C49D2F]" />
                        <span>المميزات</span>
                      </div>
                    </th>
                    <th className="px-8 py-6 text-center text-lg font-semibold text-[#2D2926] border-b border-[#E7DFD2]/50">
                      <div className="flex items-center justify-center space-x-reverse space-x-3">
                        <Crown className="w-6 h-6 text-[#C49D2F]" />
                        <span>القاعة الكبرى</span>
                      </div>
                    </th>
                    <th className="px-8 py-6 text-center text-lg font-semibold text-[#2D2926] border-b border-[#E7DFD2]/50">
                      <div className="flex items-center justify-center space-x-reverse space-x-3">
                        <Flower className="w-6 h-6 text-[#C49D2F]" />
                        <span>قاعة الأزهار</span>
                      </div>
                    </th>
                    <th className="px-8 py-6 text-center text-lg font-semibold text-[#2D2926] border-b border-[#E7DFD2]/50">
                      <div className="flex items-center justify-center space-x-reverse space-x-3">
                        <Gem className="w-6 h-6 text-[#C49D2F]" />
                        <span>القاعة الذهبية</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-[#FAF9F7]/50 transition-colors duration-300">
                    <td className="px-8 py-6 text-right font-medium text-[#2D2926] border-b border-[#E7DFD2]/30">
                      <div className="flex items-center space-x-reverse space-x-3">
                        <Users className="w-5 h-5 text-[#C49D2F]" />
                        <span>السعة</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center text-[#766B5A] border-b border-[#E7DFD2]/30">400 ضيف</td>
                    <td className="px-8 py-6 text-center text-[#766B5A] border-b border-[#E7DFD2]/30">250 ضيف</td>
                    <td className="px-8 py-6 text-center text-[#766B5A] border-b border-[#E7DFD2]/30">300 ضيف</td>
                  </tr>
                  <tr className="hover:bg-[#FAF9F7]/50 transition-colors duration-300">
                    <td className="px-8 py-6 text-right font-medium text-[#2D2926] border-b border-[#E7DFD2]/30">
                      <div className="flex items-center space-x-reverse space-x-3">
                        <Camera className="w-5 h-5 text-[#C49D2F]" />
                        <span>التصميم</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center text-[#766B5A] border-b border-[#E7DFD2]/30">كلاسيكي فاخر</td>
                    <td className="px-8 py-6 text-center text-[#766B5A] border-b border-[#E7DFD2]/30">عصري رومانسي</td>
                    <td className="px-8 py-6 text-center text-[#766B5A] border-b border-[#E7DFD2]/30">شرقي أصيل</td>
                  </tr>
                  <tr className="hover:bg-[#FAF9F7]/50 transition-colors duration-300">
                    <td className="px-8 py-6 text-right font-medium text-[#2D2926] border-b border-[#E7DFD2]/30">
                      <div className="flex items-center space-x-reverse space-x-3">
                        <Music className="w-5 h-5 text-[#C49D2F]" />
                        <span>الخدمات</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center text-[#766B5A] border-b border-[#E7DFD2]/30">شاملة</td>
                    <td className="px-8 py-6 text-center text-[#766B5A] border-b border-[#E7DFD2]/30">أساسية</td>
                    <td className="px-8 py-6 text-center text-[#766B5A] border-b border-[#E7DFD2]/30">فاخرة</td>
                  </tr>
                  <tr className="hover:bg-[#FAF9F7]/50 transition-colors duration-300">
                    <td className="px-8 py-6 text-right font-medium text-[#2D2926]">
                      <div className="flex items-center space-x-reverse space-x-3">
                        <Award className="w-5 h-5 text-[#C49D2F]" />
                        <span>المناسبة</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center text-[#766B5A]">حفلات كبيرة</td>
                    <td className="px-8 py-6 text-center text-[#766B5A]">زفاف رومانسي</td>
                    <td className="px-8 py-6 text-center text-[#766B5A]">مناسبات فاخرة</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Story Section */}
      <section ref={storyRef} className="py-32 bg-gradient-to-br from-[#F8F6F2] to-[#FAF9F7] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${
              isStoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex items-center space-x-reverse space-x-4 mb-8">
                <img
                  src="https://ik.imagekit.io/b4rz6znyz/LOGO.png?updatedAt=1754143903491"
                  alt="مافيرا"
                  className="w-8 h-8"
                />
                <div>
                  <h2 className="text-4xl md:text-5xl font-extralight text-[#2D2926] tracking-[0.05em]">
                    قصتنا
                  </h2>
                </div>
              </div>
              
              <p className="text-xl text-[#766B5A] leading-relaxed text-right">
                في قلب جدة الجميلة، وُلدت مافيرا من حلم بتقديم تجربة استثنائية تليق بأهم لحظات حياتكم. نحن لسنا مجرد قاعة أفراح، بل وجهة للذكريات الخالدة.
              </p>
              
              <p className="text-xl text-[#766B5A] leading-relaxed text-right">
                منذ تأسيسنا، آمنا بأن كل مناسبة تستحق أن تكون مميزة. لذلك، صممنا مساحاتنا بعناية فائقة، واخترنا كل تفصيل ليعكس الفخامة والأناقة التي تستحقونها.
              </p>
              
              <div className="pt-8">
                <Link href="/booking">
                  <button className="group relative px-8 py-4 bg-[#C49D2F] text-white rounded-full text-lg font-medium transition-all duration-700 hover:shadow-[0_16px_64px_rgba(196,157,47,0.25)] hover:scale-105 overflow-hidden">
                    <span className="relative z-10 flex items-center space-x-reverse space-x-3">
                      <Calendar className="w-5 h-5" />
                      <span>احجز جولة</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 ${
              isStoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
                <img
                  src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="قصة مافيرا"
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

      {/* Timeline Section - KEEP AS IS */}
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
            <div className="hidden lg:block absolute right-1/2 transform translate-x-1/2 w-px h-full bg-gradient-to-b from-[#C49D2F]/20 via-[#C49D2F]/60 to-[#C49D2F]/20"></div>
            
            {/* Mobile Timeline Line */}
            <div className="lg:hidden absolute right-8 top-0 w-px h-full bg-gradient-to-b from-[#C49D2F]/20 via-[#C49D2F]/60 to-[#C49D2F]/20"></div>
            
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

      {/* Enhanced Values Section */}
      <section ref={valuesRef} className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C49D2F]/40"></div>
              <Heart className="w-6 h-6 text-[#C49D2F] mx-6" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C49D2F]/40"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extralight text-[#2D2926] mb-8 tracking-[0.05em]">
              قيمنا
            </h2>
            
            <p className="text-xl text-[#766B5A] font-light max-w-3xl mx-auto">
              المبادئ التي تقودنا في كل خطوة نحو التميز
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className={`bg-white rounded-[2rem] p-8 shadow-[0_16px_64px_rgba(0,0,0,0.08)] border border-[#E7DFD2]/50 transition-all duration-700 hover:shadow-[0_24px_80px_rgba(196,157,47,0.15)] hover:scale-105 ${
                isValuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-[#C49D2F] to-[#D4AF37] rounded-2xl flex items-center justify-center mb-6 shadow-[0_8px_32px_rgba(196,157,47,0.3)]">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-[#2D2926] mb-4 text-right">{value.title}</h3>
                <p className="text-[#766B5A] leading-relaxed text-right">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#2D2926] to-[#1a1a1a] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D2926]/90 to-[#1a1a1a]/90"></div>
          </div>
          
        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10 text-center">
          <div className="mb-16">
            <img
              src="https://ik.imagekit.io/b4rz6znyz/LOGO.png?updatedAt=1754143903491"
              alt="مافيرا"
              className="w-16 h-16 mx-auto mb-8"
            />
            <h2 className="text-5xl md:text-6xl font-extralight text-white mb-8 tracking-[0.05em]">
              حقق حلم زفافك مع مافيرا
          </h2>
          
            <p className="text-xl text-white/80 font-light max-w-3xl mx-auto mb-12">
              دعنا نعمل معاً لخلق يوم لا يُنسى مليء بالجمال والفخامة
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/booking">
              <button className="group relative px-12 py-6 bg-[#C49D2F] text-white rounded-full text-xl font-medium transition-all duration-700 hover:shadow-[0_24px_80px_rgba(196,157,47,0.4)] hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center space-x-reverse space-x-4">
                  <Calendar className="w-6 h-6" />
                  <span>احجز الآن</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
              </button>
            </Link>
            
            <Link href="/services">
              <button className="group relative px-12 py-6 border-2 border-white/30 text-white rounded-full text-xl font-medium transition-all duration-700 hover:bg-white hover:text-[#2D2926] hover:shadow-[0_24px_80px_rgba(255,255,255,0.2)] hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center space-x-reverse space-x-4">
                  <span>استكشف خدماتنا</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
          </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
