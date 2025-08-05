'use client'

import React from 'react'
import { Crown, MapPin, Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {

  return (
    <footer className="bg-[#FAF9F7] border-t border-[#E7DFD2]/50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <Crown className="w-8 h-8 text-[#C49D2F]" />
              <h3 className="text-2xl font-bold text-[#2D2926]" style={{ fontFamily: 'serif' }}>
                مافيرا
              </h3>
            </div>
            <p className="text-[#766B5A] leading-relaxed text-lg">
              قاعة أفراح وفعاليات فاخرة في قلب جدة، نخلق ذكريات لا تُنسى بأجواء ملكية متميزة
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="text-center">
            <h4 className="text-xl font-bold text-[#2D2926] mb-6" style={{ fontFamily: 'serif' }}>
              الصفحات
            </h4>
            <div className="space-y-3">
              {[
                { id: 'home', label: 'الرئيسية', href: '/' },
                { id: 'about', label: 'من نحن', href: '/about' },
                { id: 'services', label: 'خدماتنا', href: '/services' },
                { id: 'gallery', label: 'صور القاعة', href: '/gallery' },
                { id: 'testimonials', label: 'آراء العملاء', href: '/testimonials' }
              ].map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block w-full text-[#766B5A] hover:text-[#C49D2F] transition-colors duration-300 text-lg"
                  style={{ fontFamily: 'serif' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Legal Pages */}
          <div className="text-center">
            <h4 className="text-xl font-bold text-[#2D2926] mb-6" style={{ fontFamily: 'serif' }}>
              الصفحات القانونية
            </h4>
            <div className="space-y-3">
              {[
                { id: 'privacy', label: 'سياسة الخصوصية', href: '/privacy' },
                { id: 'terms', label: 'الشروط والأحكام', href: '/terms' }
              ].map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block w-full text-[#766B5A] hover:text-[#C49D2F] transition-colors duration-300 text-lg"
                  style={{ fontFamily: 'serif' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-xl font-bold text-[#2D2926] mb-6" style={{ fontFamily: 'serif' }}>
              تواصل معنا
            </h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <span className="text-[#766B5A] text-lg">+966 12 123 4567</span>
                <Phone className="w-5 h-5 text-[#C49D2F]" />
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <span className="text-[#766B5A] text-lg">حي طيبة - جدة</span>
                <MapPin className="w-5 h-5 text-[#C49D2F]" />
              </div>
              
              {/* WhatsApp Button */}
              <button className="group flex items-center justify-center md:justify-start space-x-3 w-full md:w-auto mt-6 px-6 py-3 border-2 border-[#C49D2F] rounded-xl transition-all duration-300 hover:bg-[#C49D2F] hover:scale-105">
                <span className="text-[#C49D2F] group-hover:text-white font-medium transition-colors duration-300">
                  واتساب
                </span>
                <MessageCircle className="w-5 h-5 text-[#C49D2F] group-hover:text-white transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C49D2F]/20 to-transparent mb-8"></div>
        
        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-[#766B5A] text-sm">
            © جميع الحقوق محفوظة لمافيرا 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;