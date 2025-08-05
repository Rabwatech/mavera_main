'use client'

import React, { useState, useEffect } from 'react'
import { Crown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  
  const getCurrentPage = () => {
    if (pathname === '/') return 'home'
    if (pathname.startsWith('/halls')) return 'halls'
    return pathname.slice(1) // Remove leading slash
  }
  
  const currentPage = getCurrentPage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { id: 'home', label: 'الرئيسية', href: '/' },
    { id: 'about', label: 'من نحن', href: '/about' },
    { id: 'halls', label: 'قاعاتنا', href: '/halls' },
    { id: 'gallery', label: 'صور القاعة', href: '/gallery' },
    { id: 'services', label: 'خدماتنا', href: '/services' },
    { id: 'testimonials', label: 'آراء العملاء', href: '/testimonials' }
  ]

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false)
  }

  const isActivePage = (itemId: string) => {
    if (itemId === 'home') return currentPage === 'home'
    if (itemId === 'halls') return currentPage === 'halls' || pathname.startsWith('/halls/')
    return currentPage === itemId
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled 
          ? 'bg-[#FAF9F7]/95 shadow-[0_1px_40px_rgba(0,0,0,0.08)]' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-24">
            {/* Logo - Masterpiece Typography */}
            <Link href="/" className="flex items-center space-x-4 cursor-pointer group">
              <div className="relative">
                <img 
                  src="https://ik.imagekit.io/b4rz6znyz/LOGO.png?updatedAt=1754143903491" 
                  alt="مافيرا" 
                  className="w-8 h-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                />
                <div className="absolute inset-0 w-8 h-8 bg-[#C49D2F]/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
              </div>
              <h1 className="text-3xl font-light text-[#2D2926] tracking-[0.15em] transition-all duration-500 group-hover:text-[#C49D2F]">
                مافيرا
              </h1>
            </Link>

            {/* Desktop Menu - Spatial Intelligence */}
            <div className="hidden lg:flex items-center space-x-16">
              {menuItems.map((item, index) => {
                const isActive = isActivePage(item.id)
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`relative text-lg font-light tracking-wide transition-all duration-500 group ${
                      isActive 
                        ? 'text-[#C49D2F] font-medium' 
                        : 'text-[#2D2926] hover:text-[#C49D2F]'
                    }`}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}
                  >
                    {item.label}
                    
                    {/* Active/Active underline */}
                    <span className={`absolute -bottom-2 left-0 h-0.5 bg-[#C49D2F] transition-all duration-500 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                    
                    
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-[#C49D2F]/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                    
                    
                  </Link>
                )
              })}
              
              {/* CTA Button - Genius Simplicity */}
              <Link
                href="/booking"
                className="group relative px-8 py-3 bg-[#C49D2F] text-white rounded-2xl font-medium tracking-wide transition-all duration-500 hover:shadow-[0_8px_32px_rgba(196,157,47,0.3)] hover:scale-105 overflow-hidden block"
              >
                <span className="relative z-10">احجز الآن</span>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Glow background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#C49D2F] to-[#D4A935] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-12 h-12 flex items-center justify-center text-[#2D2926] hover:text-[#C49D2F] transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Cinematic Reveal */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-700 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-[#FAF9F7]/98" onClick={() => setIsMobileMenuOpen(false)}></div>
        
        <div className={`absolute top-24 left-0 right-0 bg-[#FAF9F7] transition-all duration-700 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="px-8 py-12 space-y-8">
            {menuItems.map((item, index) => {
              const isActive = isActivePage(item.id)
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={handleMobileMenuClose}
                  className={`block w-full text-right text-2xl font-light tracking-wide transition-all duration-500 relative ${
                    isActive 
                      ? 'text-[#C49D2F] font-medium' 
                      : 'text-[#2D2926] hover:text-[#C49D2F]'
                  }`}
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100px)',
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transition: `all 0.7s ease-out ${index * 150}ms`
                  }}
                >
                  {item.label}
                  
                  {/* Active indicator for mobile */}
                  {isActive && (
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#C49D2F] rounded-full animate-pulse"></div>
                  )}
                </Link>
              )
            })}
            
            <Link
              href="/booking"
              onClick={handleMobileMenuClose}
              className="block w-full mt-12 py-4 bg-[#C49D2F] text-white rounded-2xl text-xl font-medium tracking-wide transition-all duration-500 hover:shadow-[0_8px_32px_rgba(196,157,47,0.3)] text-center"
              style={{
                transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100px)',
                opacity: isMobileMenuOpen ? 1 : 0,
                transition: 'all 0.7s ease-out 600ms'
              }}
            >
              احجز الآن
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;