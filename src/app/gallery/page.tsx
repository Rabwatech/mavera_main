'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Filter, Play, Pause } from 'lucide-react'

export default function GalleryPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeFilter, setActiveFilter] = useState('all')
  const [isPlaying, setIsPlaying] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const heroImages = [
    {
      url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1600',
      caption: 'قاعة الاستقبال الرئيسية',
      description: 'مساحة فاخرة تتسع لـ 500 ضيف'
    },
    {
      url: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1600',
      caption: 'تصميم الطاولات الملكية',
      description: 'تفاصيل مدروسة بعناية فائقة'
    },
    {
      url: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=1600',
      caption: 'منطقة التصوير المخصصة',
      description: 'خلفيات ساحرة لذكريات خالدة'
    },
    {
      url: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1600',
      caption: 'الإضاءة الرومانسية',
      description: 'أجواء سحرية تأسر القلوب'
    }
  ]

  const galleryImages = [
    {
      url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600',
      caption: 'حفل زفاف ملكي',
      category: 'weddings'
    },
    {
      url: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600',
      caption: 'تصميم الطاولات الفاخرة',
      category: 'royal'
    },
    {
      url: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=600',
      caption: 'منطقة التصوير',
      category: 'special'
    },
    {
      url: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=600',
      caption: 'إضاءة رومانسية',
      category: 'weddings'
    },
    {
      url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600',
      caption: 'قاعة الملكة',
      category: 'royal'
    },
    {
      url: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600',
      caption: 'مناسبة خاصة',
      category: 'special'
    },
    {
      url: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=600',
      caption: 'حفل خطوبة أنيق',
      category: 'weddings'
    },
    {
      url: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=600',
      caption: 'ديكور ملكي',
      category: 'royal'
    },
    {
      url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600',
      caption: 'احتفال مميز',
      category: 'special'
    }
  ]

  const filters = [
    { id: 'all', label: 'جميع الصور' },
    { id: 'weddings', label: 'الزواجات' },
    { id: 'royal', label: 'الملكة' },
    { id: 'special', label: 'المناسبات الخاصة' }
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

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [heroImages.length, isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter)

  return (
    <div className="min-h-screen">
      {/* Hero Slider - Cinematic Experience */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1500 ease-out ${
                index === currentSlide 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>
          ))}
          
          {/* Content Overlay - Floating Typography */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-8 max-w-5xl">
              <div className="mb-8">
                <div className="w-16 h-px bg-white/40 mx-auto mb-6"></div>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-extralight mb-12 tracking-[0.1em] leading-[0.9]"
                  style={{ 
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    textShadow: '0 2px 20px rgba(0,0,0,0.3)'
                  }}>
                صور القاعة
              </h1>
              
              <div className="transition-all duration-1000 ease-out">
                <h2 className="text-3xl md:text-4xl mb-6 font-light tracking-wide">
                  {heroImages[currentSlide].caption}
                </h2>
                <p className="text-xl opacity-90 font-light">
                  {heroImages[currentSlide].description}
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation Controls - Minimal Genius */}
          <button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 group"
          >
            <ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 group"
          >
            <ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>
          
          {/* Play/Pause Control */}
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 group"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            ) : (
              <Play className="w-6 h-6 text-white ml-0.5 group-hover:scale-110 transition-transform duration-300" />
            )}
          </button>
          
          {/* Slide Indicators - Elegant Minimalism */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-500 ${
                  index === currentSlide 
                    ? 'w-12 h-2 bg-white rounded-full' 
                    : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Spatial Intelligence */}
      <section ref={sectionRef} className="py-32 bg-[#FAF9F7] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10">
          {/* Filter Section - Genius Interaction */}
          <div className={`text-center mb-20 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C49D2F]/40"></div>
              <Filter className="w-6 h-6 text-[#C49D2F] mx-6" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C49D2F]/40"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] mb-12 tracking-[0.05em]">
              معرض الصور
            </h2>
            
            <div className="flex flex-wrap justify-center gap-6">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`group relative px-8 py-4 rounded-full border transition-all duration-500 ${
                    activeFilter === filter.id
                      ? 'border-[#C49D2F] bg-[#C49D2F] text-white shadow-[0_8px_32px_rgba(196,157,47,0.25)]'
                      : 'border-[#E7DFD2] bg-white text-[#2D2926] hover:border-[#C49D2F] hover:text-[#C49D2F] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]'
                  }`}
                >
                  <span className="relative z-10 font-light tracking-wide">{filter.label}</span>
                  {activeFilter !== filter.id && (
                    <div className="absolute inset-0 rounded-full bg-[#C49D2F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Image Grid - Masonry Poetry */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}>
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_80px_rgba(0,0,0,0.12)] transition-all duration-700 transform hover:-translate-y-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Golden Border Effect */}
                  <div className="absolute inset-0 border-2 border-[#C49D2F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
                </div>
                
                {/* Caption Overlay - Floating Typography */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-light mb-3 tracking-wide">
                    {image.caption}
                  </h3>
                  <div className="w-16 h-px bg-[#C49D2F]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
