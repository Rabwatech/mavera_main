'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Crown, Users, MapPin, ArrowRight, ChevronLeft, ChevronRight, Building, Camera, Music, Award, Flower, Gem, Trophy, Calendar, Heart, Shield, Star } from 'lucide-react'

interface HallCard {
  id: string
  name: string
  arabicName: string
  capacity: string
  description: string
  image: string
  uniqueTraits: string[]
  price: string
  badge?: string
  isPopular?: boolean
}

interface ValueItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export default function HallsPage() {
  const [currentHallIndex, setCurrentHallIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isStoryVisible, setIsStoryVisible] = useState(false)
  const [isValuesVisible, setIsValuesVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const storyRef = useRef<HTMLElement>(null)
  const valuesRef = useRef<HTMLElement>(null)

  const halls: HallCard[] = [
    {
      id: 'grand-ballroom',
      name: 'قاعة مافيرا الرئيسية',
      arabicName: 'القاعة الكبرى',
      capacity: '500 ضيف',
      description: 'قاعة فاخرة بتصميم عصري تليق بأرقى المناسبات',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      uniqueTraits: ['أكبر قاعة في جدة', 'مطبخ فاخر', 'حديقة خارجية'],
      price: 'يبدأ من 50,000 ريال',
      badge: 'مميزة',
      isPopular: true
    },
    {
      id: 'flower-hall',
      name: 'قاعة الأزهار',
      arabicName: 'قاعة الأزهار',
      capacity: '300 ضيف',
      description: 'قاعة أنيقة بتصميم كلاسيكي ومرافق حديثة',
      image: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800',
      uniqueTraits: ['شرفة بانورامية', 'إضاءة متطورة', 'نظام صوتي احترافي'],
      price: 'يبدأ من 35,000 ريال',
      badge: 'رومانسية'
    },
    {
      id: 'golden-hall',
      name: 'قاعة الذهبي',
      arabicName: 'قاعة الذهبي',
      capacity: '200 ضيف',
      description: 'قاعة صغيرة الحجم كبيرة في الفخامة والأناقة',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      uniqueTraits: ['خدمة VIP', 'إضاءة ذكية', 'نظام تكييف متطور'],
      price: 'يبدأ من 25,000 ريال',
      badge: 'فاخرة'
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
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#C49D2F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-[#2D2926] mb-4 text-right">{hall.arabicName}</h3>
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

          {/* Price */}
          <div className="mb-6 text-right">
            <span className="text-[#C49D2F] font-medium text-lg">{hall.price}</span>
          </div>

          {/* CTA Button */}
          <Link href={`/halls/${hall.id}`}>
            <button className="w-full bg-gradient-to-r from-[#C49D2F] to-[#D4AF37] text-white py-4 rounded-xl font-medium transition-all duration-500 hover:shadow-[0_16px_64px_rgba(196,157,47,0.25)] hover:scale-105 group/btn overflow-hidden">
              <span className="relative z-10 flex items-center justify-center space-x-reverse space-x-3">
                <span>عرض التفاصيل</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </span>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1200"></div>
            </button>
          </Link>
        </div>
      </div>
    )
  }

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
            alt="Halls Hero"
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
            قاعاتنا الفاخرة
          </h1>
          
          <p className="text-2xl md:text-3xl font-light tracking-[0.05em] leading-relaxed max-w-3xl mx-auto opacity-90">
            وجهتك المثالية لمناسبات لا تُنسى
          </p>
        </div>
      </section>

      {/* Enhanced Halls Grid */}
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
              اكتشف قاعاتنا
            </h2>
            
            <p className="text-xl text-[#766B5A] font-light max-w-3xl mx-auto">
              ثلاث قاعات فريدة، كل واحدة مصممة لتلبية احتياجاتكم الخاصة
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
                        <span>قاعة الذهبي</span>
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
                    <td className="px-8 py-6 text-center text-[#766B5A] border-b border-[#E7DFD2]/30">500 ضيف</td>
                    <td className="px-8 py-6 text-center text-[#766B5A] border-b border-[#E7DFD2]/30">300 ضيف</td>
                    <td className="px-8 py-6 text-center text-[#766B5A] border-b border-[#E7DFD2]/30">200 ضيف</td>
                  </tr>
                  <tr className="hover:bg-[#FAF9F7]/50 transition-colors duration-300">
                    <td className="px-8 py-6 text-right font-medium text-[#2D2926] border-b border-[#E7DFD2]/30">
                      <div className="flex items-center space-x-reverse space-x-3">
                        <Camera className="w-5 h-5 text-[#C49D2F]" />
                        <span>التصميم</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center text-[#766B5A] border-b border-[#E7DFD2]/30">عصري فاخر</td>
                    <td className="px-8 py-6 text-center text-[#766B5A] border-b border-[#E7DFD2]/30">كلاسيكي أنيق</td>
                    <td className="px-8 py-6 text-center text-[#766B5A] border-b border-[#E7DFD2]/30">فاخر صغير</td>
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
                    <td className="px-8 py-6 text-center text-[#766B5A] border-b border-[#E7DFD2]/30">VIP</td>
                  </tr>
                  <tr className="hover:bg-[#FAF9F7]/50 transition-colors duration-300">
                    <td className="px-8 py-6 text-right font-medium text-[#2D2926]">
                      <div className="flex items-center space-x-reverse space-x-3">
                        <Award className="w-5 h-5 text-[#C49D2F]" />
                        <span>السعر</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center text-[#766B5A]">50,000 ريال</td>
                    <td className="px-8 py-6 text-center text-[#766B5A]">35,000 ريال</td>
                    <td className="px-8 py-6 text-center text-[#766B5A]">25,000 ريال</td>
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