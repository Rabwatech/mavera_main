'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Crown, Calendar, Users, Phone, Mail, MessageSquare, CheckCircle, X, Sparkles } from 'lucide-react'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    occasion: '',
    guests: '',
    notes: ''
  })

  const [focusedField, setFocusedField] = useState('')
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setShowConfirmation(true)
  }

  const closeConfirmation = () => {
    setShowConfirmation(false)
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      occasion: '',
      guests: '',
      notes: ''
    })
  }

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
            <Crown className="w-12 h-12 text-[#C49D2F] mx-auto animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extralight text-[#2D2926] mb-12 tracking-[0.1em] leading-[0.9]"
              style={{ 
                fontFamily: 'system-ui, -apple-system, sans-serif',
                textShadow: '0 1px 2px rgba(0,0,0,0.02)'
              }}>
            احجز الآن
          </h1>
          
          <p className="text-2xl md:text-3xl text-[#766B5A] font-light tracking-[0.05em] leading-relaxed max-w-3xl mx-auto">
            ابدأ رحلتك نحو مناسبة لا تُنسى
            <span className="block mt-2 text-xl opacity-70">دعنا نحول أحلامك إلى واقع ساحر</span>
          </p>
        </div>
      </section>

      {/* Booking Form Section - Masterpiece Form */}
      <section ref={sectionRef} className="py-32 bg-[#FAF9F7] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-8 lg:px-12 relative z-10">
          <div className={`bg-white rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}>
            {/* Form Header */}
            <div className="bg-gradient-to-r from-[#C49D2F] to-[#D4A935] p-12 text-center text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-16 h-16 border border-white rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 border border-white rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <Crown className="w-16 h-16 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide">
                  نموذج الحجز
                </h2>
                <p className="text-lg opacity-90 font-light">
                  املأ البيانات التالية وسنتواصل معك خلال 24 ساعة
                </p>
              </div>
            </div>
            
            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-12 md:p-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Name */}
                <div className="relative">
                  <label 
                    className={`absolute right-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'name' || formData.name
                        ? 'top-2 text-xs text-[#C49D2F] font-medium'
                        : 'top-4 text-base text-[#766B5A]'
                    }`}
                  >
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full pt-6 pb-2 px-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent font-light"
                    dir="rtl"
                  />
                </div>
                
                {/* Phone */}
                <div className="relative">
                  <label 
                    className={`absolute right-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'phone' || formData.phone
                        ? 'top-2 text-xs text-[#C49D2F] font-medium'
                        : 'top-4 text-base text-[#766B5A]'
                    }`}
                  >
                    رقم الجوال *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full pt-6 pb-2 px-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent font-light"
                    dir="rtl"
                  />
                  <Phone className="absolute left-4 top-4 w-5 h-5 text-[#C49D2F]" />
                </div>
                
                {/* Email */}
                <div className="relative">
                  <label 
                    className={`absolute right-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'email' || formData.email
                        ? 'top-2 text-xs text-[#C49D2F] font-medium'
                        : 'top-4 text-base text-[#766B5A]'
                    }`}
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    className="w-full pt-6 pb-2 px-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent font-light"
                    dir="rtl"
                  />
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-[#C49D2F]" />
                </div>
                
                {/* Date */}
                <div className="relative">
                  <label 
                    className={`absolute right-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'date' || formData.date
                        ? 'top-2 text-xs text-[#C49D2F] font-medium'
                        : 'top-4 text-base text-[#766B5A]'
                    }`}
                  >
                    تاريخ المناسبة *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('date')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full pt-6 pb-2 px-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent font-light"
                    dir="rtl"
                  />
                  <Calendar className="absolute left-4 top-4 w-5 h-5 text-[#C49D2F]" />
                </div>
                
                {/* Occasion Type */}
                <div className="relative">
                  <label 
                    className={`absolute right-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'occasion' || formData.occasion
                        ? 'top-2 text-xs text-[#C49D2F] font-medium'
                        : 'top-4 text-base text-[#766B5A]'
                    }`}
                  >
                    نوع المناسبة *
                  </label>
                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('occasion')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full pt-6 pb-2 px-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent appearance-none font-light"
                    dir="rtl"
                  >
                    <option value=""></option>
                    <option value="wedding">حفل زفاف</option>
                    <option value="engagement">حفل خطوبة</option>
                    <option value="corporate">مناسبة تجارية</option>
                    <option value="birthday">عيد ميلاد</option>
                    <option value="graduation">حفل تخرج</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
                
                {/* Number of Guests */}
                <div className="relative">
                  <label 
                    className={`absolute right-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'guests' || formData.guests
                        ? 'top-2 text-xs text-[#C49D2F] font-medium'
                        : 'top-4 text-base text-[#766B5A]'
                    }`}
                  >
                    عدد الحضور *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('guests')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full pt-6 pb-2 px-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent appearance-none font-light"
                    dir="rtl"
                  >
                    <option value=""></option>
                    <option value="50-100">50-100 ضيف</option>
                    <option value="100-200">100-200 ضيف</option>
                    <option value="200-300">200-300 ضيف</option>
                    <option value="300-500">300-500 ضيف</option>
                    <option value="500+">500+ ضيف</option>
                  </select>
                  <Users className="absolute left-4 top-4 w-5 h-5 text-[#C49D2F]" />
                </div>
              </div>
              
              {/* Notes */}
              <div className="relative mt-12">
                <label 
                  className={`absolute right-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'notes' || formData.notes
                      ? 'top-2 text-xs text-[#C49D2F] font-medium'
                      : 'top-4 text-base text-[#766B5A]'
                  }`}
                >
                  ملاحظات إضافية
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('notes')}
                  onBlur={() => setFocusedField('')}
                  rows={4}
                  className="w-full pt-6 pb-2 px-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent resize-none font-light"
                  dir="rtl"
                />
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#C49D2F]" />
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-16 py-5 bg-[#C49D2F] text-white rounded-xl text-xl font-medium tracking-[0.05em] transition-all duration-700 hover:shadow-[0_16px_64px_rgba(196,157,47,0.25)] hover:scale-105 flex items-center justify-center space-x-3 overflow-hidden group"
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <Crown className="w-6 h-6 ml-3" />
                  <span>أرسل الطلب</span>
                </span>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
                
                {/* Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#C49D2F] to-[#D4A935] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </button>
              
              <p className="text-center text-[#766B5A] text-sm mt-8 font-light">
                * الحقول المطلوبة
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section - Elegant Grid */}
      <section className="py-32 bg-gradient-to-b from-[#FAF9F7] to-[#F8F6F2] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C49D2F]/40"></div>
              <Sparkles className="w-6 h-6 text-[#C49D2F] mx-6" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C49D2F]/40"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] mb-8 tracking-[0.05em]">
              طرق التواصل الأخرى
            </h2>
            
            <p className="text-xl text-[#766B5A] font-light max-w-2xl mx-auto leading-relaxed">
              نحن هنا لخدمتكم في أي وقت
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Phone,
                title: 'اتصل بنا',
                info: '+966 12 123 4567',
                description: 'متاح 24/7 للرد على استفساراتكم'
              },
              {
                icon: Mail,
                title: 'راسلنا',
                info: 'info@mavera-jeddah.com',
                description: 'سنرد على رسائلكم خلال ساعات'
              },
              {
                icon: MessageSquare,
                title: 'واتساب',
                info: '+966 50 123 4567',
                description: 'للتواصل السريع والمباشر'
              }
            ].map((contact, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_80px_rgba(0,0,0,0.12)] transition-all duration-700 transform hover:-translate-y-4 text-center"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 mx-auto bg-[#F1EAE3] rounded-full flex items-center justify-center mb-8 transition-all duration-700 group-hover:bg-[#C49D2F] group-hover:scale-110">
                  <contact.icon className="w-10 h-10 text-[#C49D2F] group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="text-2xl font-light text-[#2D2926] mb-6 tracking-wide">
                  {contact.title}
                </h3>
                
                <p className="text-xl text-[#C49D2F] font-medium mb-6">
                  {contact.info}
                </p>
                
                <p className="text-[#766B5A] leading-relaxed font-light">
                  {contact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confirmation Modal - Elegant Success */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.2)] p-12 md:p-16 max-w-md mx-6 text-center relative">
            <button
              onClick={closeConfirmation}
              className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center text-[#766B5A] hover:text-[#C49D2F] transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-8">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <h3 className="text-2xl font-light text-[#2D2926] mb-6 tracking-wide">
              تم إرسال طلبكم بنجاح!
            </h3>
            
            <p className="text-[#766B5A] mb-12 leading-relaxed font-light">
              شكراً لكم على اختيار مافيرا. سنتواصل معكم خلال 24 ساعة لتأكيد الحجز ومناقشة التفاصيل.
            </p>
            
            <button
              onClick={closeConfirmation}
              className="px-8 py-3 bg-[#C49D2F] text-white rounded-xl font-medium transition-all duration-300 hover:shadow-[0_8px_32px_rgba(196,157,47,0.25)] hover:scale-105"
            >
              حسناً
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
