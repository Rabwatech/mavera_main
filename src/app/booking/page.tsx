'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Crown, Calendar, Users, Phone, Mail, MessageSquare, CheckCircle, X, Sparkles, Star, ArrowRight, Building, FileText } from 'lucide-react'
import InteractiveCalendar from '../../components/InteractiveCalendar'


export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    occasion: '',
    guests: '',
    hall: '',
    eventType: '',
    budget: '',
    specialRequirements: '',
    notes: ''
  })

  const [focusedField, setFocusedField] = useState('')
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedDate, setSelectedDate] = useState('')
  const [currentStep, setCurrentStep] = useState(1)
  const [totalSteps] = useState(3)
  const sectionRef = useRef<HTMLElement>(null)

  // Mock booked dates
  const bookedDates = [
    "2025-01-15", "2025-01-22", "2025-01-29",
    "2025-02-05", "2025-02-12", "2025-02-19",
    "2025-03-08", "2025-03-15", "2025-03-22"
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    setShowConfirmation(true)
    setIsSubmitting(false)
  }

  const handleDateSelect = (date: string) => {
    setSelectedDate(date)
    setFormData(prev => ({ ...prev, date }))
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
      hall: '',
      eventType: '',
      budget: '',
      specialRequirements: '',
      notes: ''
    })
    setSelectedDate('')
    setCurrentStep(1)
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.phone && formData.email
      case 2:
        return formData.date && formData.occasion && formData.guests
      default:
        return true
    }
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <section className="py-6 bg-white border-b border-[#E7DFD2]">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <nav className="flex items-center space-x-2 text-sm text-[#766B5A] font-light">
            <a href="/" className="hover:text-[#C49D2F] transition-colors duration-300">الرئيسية</a>
            <span className="text-[#C49D2F]">/</span>
            <span className="text-[#2D2926]">الحجز</span>
          </nav>
        </div>
      </section>
      {/* Hero Section - Legendary Opening */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7] via-[#F8F6F2] to-[#F1EAE3]"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-[rgba(196,157,47,0.05)] to-transparent"></div>
          
          {/* Luxury Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-20 left-20 w-32 h-32 border border-[#C49D2F] rounded-full"></div>
            <div className="absolute top-40 right-40 w-24 h-24 border border-[#C49D2F] rounded-full"></div>
            <div className="absolute bottom-32 left-1/3 w-28 h-28 border border-[#C49D2F] rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-20 h-20 border border-[#C49D2F] rounded-full"></div>
          </div>
          
          {/* Animated Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#C49D2F]/40 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-[#C49D2F]/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-[#C49D2F]/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-[#C49D2F]/35 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
          {/* Crown Icon with Animation */}
          <div className="mb-12 animate-fade-in-down">
            <div className="relative">
              <Crown className="w-16 h-16 text-[#C49D2F] mx-auto animate-pulse" />
              <div className="absolute inset-0 w-16 h-16 bg-[#C49D2F]/20 rounded-full blur-xl animate-ping"></div>
            </div>
          </div>
          
          {/* Main Title with Fade + Slide Animation */}
          <h1 className="text-7xl md:text-9xl font-extralight text-[#2D2926] mb-16 tracking-[0.15em] leading-[0.85] animate-fade-in-up"
              style={{ 
                fontFamily: 'system-ui, -apple-system, sans-serif',
                textShadow: '0 2px 4px rgba(0,0,0,0.03)'
              }}>
            احجز الآن
          </h1>
          
          {/* Subtitle with Staggered Animation */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-2xl md:text-4xl text-[#766B5A] font-light tracking-[0.08em] leading-relaxed max-w-4xl mx-auto mb-8">
              ابدأ رحلتك نحو مناسبة لا تُنسى
            </p>
            <p className="text-xl md:text-2xl opacity-80 font-light tracking-[0.05em]">
              دعنا نحول أحلامك إلى واقع ساحر
            </p>
          </div>
          
          {/* CTA Buttons with Hover Effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button className="group relative px-12 py-5 bg-[#C49D2F] text-white rounded-full text-xl font-medium transition-all duration-700 hover:shadow-[0_20px_80px_rgba(196,157,47,0.3)] hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center space-x-3">
                <Crown className="w-6 h-6 ml-3" />
                <span>احجز الآن</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
            </button>
            
            <button className="group relative px-12 py-5 border-2 border-[#C49D2F] text-[#C49D2F] rounded-full text-xl font-medium transition-all duration-700 hover:bg-[#C49D2F] hover:text-white hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center space-x-3">
                <Building className="w-6 h-6 ml-3" />
                <span>شاهد القاعات</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Calendar Section - Enhanced */}
      <section className="py-32 bg-gradient-to-b from-white to-[#FAF9F7] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="mb-8">
              <Calendar className="w-16 h-16 text-[#C49D2F] mx-auto mb-6" />
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] mb-8 tracking-[0.08em]">
              اختر التاريخ المناسب
            </h2>
            <p className="text-xl text-[#766B5A] font-light max-w-3xl mx-auto leading-relaxed">
              اختر التاريخ المناسب لمناسبتك من التقويم التفاعلي أدناه
              <span className="block mt-2 text-lg opacity-80">نوفر لك أفضل الأوقات المتاحة مع أسعار تنافسية</span>
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="transform hover:scale-105 transition-transform duration-700">
              <InteractiveCalendar
                onDateSelect={handleDateSelect}
                bookedDates={bookedDates}
                selectedDate={selectedDate}
              />
            </div>
          </div>
          
          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              {
                icon: Crown,
                title: "أسعار تنافسية",
                description: "نوفر أفضل الأسعار مع ضمان الجودة الفاخرة"
              },
              {
                icon: CheckCircle,
                title: "حجز آمن",
                description: "نظام حجز آمن ومضمون مع تأكيد فوري"
              },
              {
                icon: Sparkles,
                title: "خدمة VIP",
                description: "خدمة VIP حصرية للعملاء المميزين"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_80px_rgba(0,0,0,0.12)] transition-all duration-700 transform hover:-translate-y-2 text-center">
                <div className="w-16 h-16 mx-auto bg-[#F1EAE3] rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-[#C49D2F]" />
                </div>
                <h3 className="text-xl font-light text-[#2D2926] mb-4">{item.title}</h3>
                <p className="text-[#766B5A] text-sm leading-relaxed font-light">{item.description}</p>
              </div>
            ))}
          </div>
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
            
            {/* Form Content - Wizard */}
            <form onSubmit={handleSubmit} className="p-12 md:p-16">
              {/* Progress Bar */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-500 ${
                        step <= currentStep 
                          ? 'bg-[#C49D2F] text-white' 
                          : 'bg-[#E7DFD2] text-[#766B5A]'
                      }`}>
                        {step}
                      </div>
                      {step < 3 && (
                        <div className={`w-16 h-1 mx-4 transition-all duration-500 ${
                          step < currentStep ? 'bg-[#C49D2F]' : 'bg-[#E7DFD2]'
                        }`}></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-[#766B5A] font-light">
                    الخطوة {currentStep} من {totalSteps}
                  </p>
                </div>
              </div>

              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-light text-[#2D2926] mb-4">المعلومات الشخصية</h3>
                    <p className="text-[#766B5A] font-light">أخبرنا عنك أولاً</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  </div>
                  
                  {/* Navigation Buttons */}
                  <div className="flex justify-end mt-12">
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!canProceedToNext()}
                      className="px-8 py-3 bg-[#C49D2F] text-white rounded-xl font-medium transition-all duration-500 hover:shadow-[0_8px_32px_rgba(196,157,47,0.25)] hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-3"
                    >
                      <span>التالي</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Event Details */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-light text-[#2D2926] mb-4">تفاصيل المناسبة</h3>
                    <p className="text-[#766B5A] font-light">أخبرنا عن مناسبتك</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                        type="text"
                        name="date"
                        value={formData.date ? new Date(formData.date).toLocaleDateString('ar-SA') : ''}
                        readOnly
                        className="w-full pt-6 pb-2 px-4 border-2 border-[#E7DFD2] rounded-xl bg-[#F8F6F2] text-right font-light cursor-pointer"
                        dir="rtl"
                        placeholder="اختر التاريخ من التقويم أعلاه"
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
                    
                    {/* Hall Selection */}
                    <div className="relative">
                      <label 
                        className={`absolute right-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'hall' || formData.hall
                            ? 'top-2 text-xs text-[#C49D2F] font-medium'
                            : 'top-4 text-base text-[#766B5A]'
                        }`}
                      >
                        القاعة المفضلة
                      </label>
                      <select
                        name="hall"
                        value={formData.hall}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('hall')}
                        onBlur={() => setFocusedField('')}
                        className="w-full pt-6 pb-2 px-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent appearance-none font-light"
                        dir="rtl"
                      >
                        <option value=""></option>
                        <option value="grand-ballroom">القاعة الكبرى (500 ضيف)</option>
                        <option value="flower-hall">قاعة الأزهار (300 ضيف)</option>
                        <option value="golden-hall">القاعة الذهبية (200 ضيف)</option>
                        <option value="any">أي قاعة متاحة</option>
                      </select>
                      <Building className="absolute left-4 top-4 w-5 h-5 text-[#C49D2F]" />
                    </div>
                  </div>
                  
                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-12">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-8 py-3 border-2 border-[#C49D2F] text-[#C49D2F] rounded-xl font-medium transition-all duration-500 hover:bg-[#C49D2F] hover:text-white flex items-center space-x-3"
                    >
                      <ArrowRight className="w-5 h-5 rotate-180" />
                      <span>السابق</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!canProceedToNext()}
                      className="px-8 py-3 bg-[#C49D2F] text-white rounded-xl font-medium transition-all duration-500 hover:shadow-[0_8px_32px_rgba(196,157,47,0.25)] hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-3"
                    >
                      <span>التالي</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Additional Details */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-light text-[#2D2926] mb-4">تفاصيل إضافية</h3>
                    <p className="text-[#766B5A] font-light">أخبرنا المزيد عن متطلباتك</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Budget Range */}
                    <div className="relative">
                      <label 
                        className={`absolute right-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'budget' || formData.budget
                            ? 'top-2 text-xs text-[#C49D2F] font-medium'
                            : 'top-4 text-base text-[#766B5A]'
                        }`}
                      >
                        الميزانية المتوقعة
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('budget')}
                        onBlur={() => setFocusedField('')}
                        className="w-full pt-6 pb-2 px-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent appearance-none font-light"
                        dir="rtl"
                      >
                        <option value=""></option>
                        <option value="25k-50k">25,000 - 50,000 ريال</option>
                        <option value="50k-100k">50,000 - 100,000 ريال</option>
                        <option value="100k-200k">100,000 - 200,000 ريال</option>
                        <option value="200k+">200,000+ ريال</option>
                      </select>
                      <Crown className="absolute left-4 top-4 w-5 h-5 text-[#C49D2F]" />
                    </div>
                  </div>
                  
                  {/* Special Requirements */}
                  <div className="relative">
                    <label 
                      className={`absolute right-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'specialRequirements' || formData.specialRequirements
                          ? 'top-2 text-xs text-[#C49D2F] font-medium'
                          : 'top-4 text-base text-[#766B5A]'
                      }`}
                    >
                      متطلبات خاصة
                    </label>
                    <textarea
                      name="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('specialRequirements')}
                      onBlur={() => setFocusedField('')}
                      rows={3}
                      className="w-full pt-6 pb-2 px-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent resize-none font-light"
                      dir="rtl"
                    />
                    <FileText className="absolute left-4 top-4 w-5 h-5 text-[#C49D2F]" />
                  </div>
                  
                  {/* Notes */}
                  <div className="relative">
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
                  
                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-12">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-8 py-3 border-2 border-[#C49D2F] text-[#C49D2F] rounded-xl font-medium transition-all duration-500 hover:bg-[#C49D2F] hover:text-white flex items-center space-x-3"
                    >
                      <ArrowRight className="w-5 h-5 rotate-180" />
                      <span>السابق</span>
                    </button>
                    
                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-12 py-3 bg-[#C49D2F] text-white rounded-xl text-lg font-medium tracking-[0.05em] transition-all duration-700 hover:shadow-[0_16px_64px_rgba(196,157,47,0.25)] hover:scale-105 flex items-center space-x-3 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="relative z-10 flex items-center space-x-3">
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>جاري الإرسال...</span>
                        </span>
                      ) : (
                        <span className="relative z-10 flex items-center space-x-3">
                          <Crown className="w-6 h-6 ml-3" />
                          <span>أرسل الطلب</span>
                        </span>
                      )}
                      
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
                    </button>
                  </div>
                </div>
              )}
              
              <p className="text-center text-[#766B5A] text-sm mt-8 font-light">
                * الحقول المطلوبة
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Direct Contact Options - Enhanced */}
      <section className="py-32 bg-gradient-to-b from-[#FAF9F7] to-[#F8F6F2] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="mb-8">
              <Phone className="w-16 h-16 text-[#C49D2F] mx-auto mb-6" />
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] mb-8 tracking-[0.08em]">
              تواصل معنا مباشرة
            </h2>
            <p className="text-xl text-[#766B5A] font-light max-w-3xl mx-auto leading-relaxed">
              نحن هنا لخدمتكم على مدار الساعة
              <span className="block mt-2 text-lg opacity-80">فريق متخصص لمساعدتك في كل خطوة</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Phone,
                title: 'اتصل الآن',
                info: '+966 12 123 4567',
                description: 'متاح 24/7 للرد على استفساراتكم',
                cta: 'اتصل الآن',
                href: 'tel:+966121234567',
                badge: 'مفضل'
              },
              {
                icon: MessageSquare,
                title: 'واتساب فوري',
                info: '+966 50 123 4567',
                description: 'للتواصل السريع والمباشر',
                cta: 'راسلنا على واتساب',
                href: 'https://wa.me/966501234567',
                badge: 'سريع'
              },
              {
                icon: Mail,
                title: 'راسلنا',
                info: 'info@mavera-jeddah.com',
                description: 'سنرد على رسائلكم خلال ساعات',
                cta: 'أرسل بريد إلكتروني',
                href: 'mailto:info@mavera-jeddah.com',
                badge: 'رسمي'
              }
            ].map((contact, index) => (
              <div
                key={index}
                className="group bg-white p-10 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_32px_120px_rgba(0,0,0,0.15)] transition-all duration-700 transform hover:-translate-y-6 text-center relative overflow-hidden"
              >
                {/* Badge */}
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 bg-[#C49D2F] text-white text-xs font-medium rounded-full">
                    {contact.badge}
                  </span>
                </div>
                
                {/* Icon with Golden Frame */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#C49D2F] to-[#D4A935] rounded-full flex items-center justify-center mb-4 transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_16px_64px_rgba(196,157,47,0.3)]">
                    <contact.icon className="w-12 h-12 text-white" />
                  </div>
                  {/* Golden Ring */}
                  <div className="absolute inset-0 w-24 h-24 mx-auto border-2 border-[#C49D2F]/30 rounded-full"></div>
                </div>
                
                <h3 className="text-2xl font-light text-[#2D2926] mb-6 tracking-wide">
                  {contact.title}
                </h3>
                
                <p className="text-xl text-[#C49D2F] font-medium mb-6">
                  {contact.info}
                </p>
                
                <p className="text-[#766B5A] text-base mb-8 leading-relaxed font-light">
                  {contact.description}
                </p>

                <a
                  href={contact.href}
                  className="group/btn inline-block px-8 py-4 bg-[#C49D2F] text-white rounded-full text-base font-medium transition-all duration-500 hover:shadow-[0_16px_64px_rgba(196,157,47,0.3)] hover:scale-105 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-3">
                    <span>{contact.cta}</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1200"></div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider - Enhanced */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="mb-8">
              <Star className="w-16 h-16 text-[#C49D2F] mx-auto mb-6" />
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] mb-8 tracking-[0.08em]">
              آراء عملائنا
            </h2>
            <p className="text-xl text-[#766B5A] font-light max-w-3xl mx-auto leading-relaxed">
              اكتشف ما يقوله عملاؤنا عن تجربتهم مع مافيرا
            </p>
          </div>
          
          <div className="relative">
            <div className="flex overflow-hidden">
              {[
                {
                  name: "سارة أحمد",
                  role: "حفل زفاف فاخر",
                  text: "فريق مافيرا تجاوز كل توقعاتنا! الخدمة شاملة والفريق محترف جداً. أنصح بهم بشدة لأي شخص يريد حفلاً لا يُنسى.",
                  rating: 5,
                  image: "👰‍♀️"
                },
                {
                  name: "محمد العلي",
                  role: "حفل خطوبة",
                  text: "تجربة رائعة من البداية للنهاية. القاعة جميلة والخدمة ممتازة. سأحجز معهم مرة أخرى بالتأكيد.",
                  rating: 5,
                  image: "🤵‍♂️"
                },
                {
                  name: "فاطمة الزهراني",
                  role: "مناسبة تجارية",
                  text: "احترافية عالية وتنظيم ممتاز. ساعدونا في إنجاح مناسبتنا التجارية بشكل مثالي.",
                  rating: 5,
                  image: "👩‍💼"
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full flex-shrink-0 px-4"
                  style={{
                    animation: `slide 15s infinite ${index * 5}s`
                  }}
                >
                  <div className="bg-gradient-to-r from-[#C49D2F]/5 to-[#D4A935]/5 rounded-[2rem] p-12 text-center max-w-4xl mx-auto">
                    <div className="flex items-center justify-center mb-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-8 h-8 text-[#C49D2F] fill-current mx-1" />
                      ))}
                    </div>
                    
                    <div className="mb-8">
                      <div className="text-6xl mb-4">{testimonial.image}</div>
                      <blockquote className="text-2xl md:text-3xl font-light text-[#2D2926] leading-relaxed italic">
                        "{testimonial.text}"
                      </blockquote>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-2xl font-medium text-[#2D2926]">{testimonial.name}</h4>
                      <p className="text-[#C49D2F] font-medium text-lg">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-12 space-x-3">
              {[0, 1, 2].map((dot) => (
                <button
                  key={dot}
                  className="w-3 h-3 rounded-full bg-[#E7DFD2] transition-all duration-300 hover:bg-[#C49D2F]"
                ></button>
              ))}
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes slide {
            0%, 33.33% { transform: translateX(0); }
            33.34%, 66.66% { transform: translateX(-100%); }
            66.67%, 100% { transform: translateX(-200%); }
          }
          
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fade-in-down {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out forwards;
          }
          
          .animate-fade-in-down {
            animation: fade-in-down 1s ease-out forwards;
          }
        `}</style>
      </section>

      {/* VIP Consultation - Enhanced */}
      <section className="py-32 bg-gradient-to-br from-[#FAF9F7] via-[#F8F6F2] to-[#F1EAE3] relative overflow-hidden">
        {/* Luxury Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#C49D2F]/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="mb-8">
              <div className="relative">
                <Crown className="w-20 h-20 text-[#C49D2F] mx-auto mb-6" />
                <div className="absolute inset-0 w-20 h-20 bg-[#C49D2F]/20 rounded-full blur-xl animate-ping"></div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="px-4 py-2 bg-[#C49D2F] text-white text-sm font-medium rounded-full">VIP</span>
                <span className="px-4 py-2 bg-gradient-to-r from-[#C49D2F] to-[#D4A935] text-white text-sm font-medium rounded-full">حصري</span>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] mb-8 tracking-[0.08em]">
              احصل على استشارة VIP مجانية
            </h2>
            <p className="text-xl text-[#766B5A] font-light max-w-3xl mx-auto leading-relaxed">
              دع خبرائنا يساعدونك في تخطيط مناسبتك المثالية
              <span className="block mt-2 text-lg opacity-80">استشارة شخصية مع خبراء التخطيط</span>
            </p>
          </div>

          <div className="bg-white rounded-[2rem] shadow-[0_32px_120px_rgba(0,0,0,0.15)] p-12 md:p-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
              <div className="absolute top-8 right-8 w-16 h-16 border border-[#C49D2F] rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-20 h-20 border border-[#C49D2F] rounded-full"></div>
              <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-[#C49D2F] rounded-full"></div>
            </div>
            
            <form className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="relative">
                  <label className="block text-sm font-medium text-[#2D2926] mb-3">الاسم الكامل *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-6 py-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent font-light"
                    placeholder="أدخل اسمك الكامل"
                    dir="rtl"
                  />
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-[#2D2926] mb-3">رقم الهاتف *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-6 py-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent font-light"
                    placeholder="أدخل رقم هاتفك"
                    dir="rtl"
                  />
                  <Phone className="absolute left-4 top-12 w-5 h-5 text-[#C49D2F]" />
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-[#2D2926] mb-3">البريد الإلكتروني</label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent font-light"
                    placeholder="أدخل بريدك الإلكتروني"
                    dir="rtl"
                  />
                  <Mail className="absolute left-4 top-12 w-5 h-5 text-[#C49D2F]" />
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-[#2D2926] mb-3">نوع المناسبة *</label>
                  <select
                    required
                    className="w-full px-6 py-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent appearance-none font-light"
                    dir="rtl"
                  >
                    <option value="">اختر نوع المناسبة</option>
                    <option value="wedding">حفل زفاف</option>
                    <option value="engagement">حفل خطوبة</option>
                    <option value="corporate">مناسبة تجارية</option>
                    <option value="birthday">عيد ميلاد</option>
                    <option value="graduation">حفل تخرج</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-[#2D2926] mb-3">التاريخ المفضل</label>
                  <input
                    type="date"
                    className="w-full px-6 py-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent font-light"
                    dir="rtl"
                  />
                  <Calendar className="absolute left-4 top-12 w-5 h-5 text-[#C49D2F]" />
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-[#2D2926] mb-3">عدد الضيوف</label>
                  <select className="w-full px-6 py-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent appearance-none font-light" dir="rtl">
                    <option value="">اختر عدد الضيوف</option>
                    <option value="50-100">50-100 ضيف</option>
                    <option value="100-200">100-200 ضيف</option>
                    <option value="200-300">200-300 ضيف</option>
                    <option value="300-500">300-500 ضيف</option>
                    <option value="500+">500+ ضيف</option>
                  </select>
                  <Users className="absolute left-4 top-12 w-5 h-5 text-[#C49D2F]" />
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-[#2D2926] mb-3">رسالة إضافية</label>
                <textarea
                  rows={4}
                  className="w-full px-6 py-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent resize-none font-light"
                  placeholder="أخبرنا المزيد عن مناسبتك..."
                  dir="rtl"
                />
                <MessageSquare className="absolute left-4 top-12 w-5 h-5 text-[#C49D2F]" />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="group relative px-16 py-5 bg-gradient-to-r from-[#C49D2F] to-[#D4A935] text-white rounded-full text-xl font-medium transition-all duration-700 hover:shadow-[0_24px_80px_rgba(196,157,47,0.3)] hover:scale-105 flex items-center justify-center space-x-3 mx-auto overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-3">
                    <Crown className="w-6 h-6 ml-3" />
                    <span>احصل على استشارة مجانية</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
                </button>
                
                <p className="text-[#766B5A] text-sm mt-6 font-light">
                  * سنتواصل معك خلال 24 ساعة
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map & Location - Enhanced */}
      <section className="py-32 bg-gradient-to-b from-white to-[#FAF9F7] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="mb-8">
              <div className="relative">
                <Building className="w-16 h-16 text-[#C49D2F] mx-auto mb-6" />
                <div className="absolute inset-0 w-16 h-16 bg-[#C49D2F]/20 rounded-full blur-xl animate-ping"></div>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] mb-8 tracking-[0.08em]">
              موقعنا
            </h2>
            <p className="text-xl text-[#766B5A] font-light max-w-3xl mx-auto leading-relaxed">
              قاعات مافيرا الفاخرة في قلب جدة
              <span className="block mt-2 text-lg opacity-80">سهولة الوصول وموقف سيارات مجاني</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_80px_rgba(0,0,0,0.12)] transition-all duration-700 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#F1EAE3] rounded-full flex items-center justify-center mr-4">
                    <Building className="w-6 h-6 text-[#C49D2F]" />
                  </div>
                  <h3 className="text-2xl font-light text-[#2D2926]">العنوان</h3>
                </div>
                <p className="text-[#766B5A] text-lg leading-relaxed font-light">
                  شارع التحلية، حي النزهة<br />
                  جدة، المملكة العربية السعودية
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_80px_rgba(0,0,0,0.12)] transition-all duration-700 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#F1EAE3] rounded-full flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-[#C49D2F]" />
                  </div>
                  <h3 className="text-2xl font-light text-[#2D2926]">ساعات العمل</h3>
                </div>
                <p className="text-[#766B5A] text-lg leading-relaxed font-light">
                  الأحد - الخميس: 9:00 ص - 10:00 م<br />
                  الجمعة - السبت: 10:00 ص - 11:00 م
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_80px_rgba(0,0,0,0.12)] transition-all duration-700 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#F1EAE3] rounded-full flex items-center justify-center mr-4">
                    <ArrowRight className="w-6 h-6 text-[#C49D2F]" />
                  </div>
                  <h3 className="text-2xl font-light text-[#2D2926]">الوصول</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-[#766B5A] text-lg leading-relaxed font-light flex items-center">
                    <span className="w-2 h-2 bg-[#C49D2F] rounded-full ml-3"></span>
                    10 دقائق من مطار الملك عبدالعزيز
                  </p>
                  <p className="text-[#766B5A] text-lg leading-relaxed font-light flex items-center">
                    <span className="w-2 h-2 bg-[#C49D2F] rounded-full ml-3"></span>
                    5 دقائق من مركز المدينة
                  </p>
                  <p className="text-[#766B5A] text-lg leading-relaxed font-light flex items-center">
                    <span className="w-2 h-2 bg-[#C49D2F] rounded-full ml-3"></span>
                    موقف سيارات مجاني متاح
                  </p>
                </div>
              </div>
              
              <div className="pt-6">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#C49D2F] to-[#D4A935] text-white rounded-full text-xl font-medium transition-all duration-700 hover:shadow-[0_24px_80px_rgba(196,157,47,0.3)] hover:scale-105 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-3">
                    <span>احصل على الاتجاهات</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-[#F1EAE3] to-[#E7DFD2] rounded-[2rem] shadow-[0_32px_120px_rgba(0,0,0,0.15)] overflow-hidden relative">
                {/* Custom Map Styling */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C49D2F]/5 to-transparent"></div>
                
                {/* Golden Pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#C49D2F] to-[#D4A935] rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-[#C49D2F]"></div>
                  </div>
                </div>
                
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.5!2d39.2!3d21.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMwJzAwLjAiTiAzOcKwMTInMDAuMCJF!5e0!3m2!1sen!2ssa!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full opacity-90"
                ></iframe>
              </div>
              
              {/* Location Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white px-6 py-3 rounded-full shadow-lg">
                <p className="text-[#C49D2F] font-medium text-sm">📍 موقع مافيرا</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTAs - Enhanced */}
      <section className="py-32 bg-gradient-to-br from-[#FAF9F7] via-[#F8F6F2] to-[#F1EAE3] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#C49D2F]/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10 text-center">
          <div className="mb-20">
            <div className="relative mb-8">
              <Crown className="w-20 h-20 text-[#C49D2F] mx-auto mb-6" />
              <div className="absolute inset-0 w-20 h-20 bg-[#C49D2F]/20 rounded-full blur-xl animate-ping"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] mb-8 tracking-[0.08em]">
              ابدأ رحلتك مع مافيرا
            </h2>
            <p className="text-xl text-[#766B5A] font-light max-w-3xl mx-auto leading-relaxed">
              اختر الطريقة التي تناسبك للتواصل معنا
              <span className="block mt-2 text-lg opacity-80">نحن هنا لتحويل أحلامك إلى واقع ساحر</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Crown,
                title: "احجز جولة مجانية",
                description: "تعرف على قاعاتنا عن قرب",
                action: "احجز الآن",
                primary: true
              },
              {
                icon: Phone,
                title: "اتصل بنا مباشرة",
                description: "للحصول على استشارة فورية",
                action: "اتصل الآن",
                primary: false
              },
              {
                icon: MessageSquare,
                title: "راسلنا على واتساب",
                description: "للتواصل السريع والمباشر",
                action: "راسلنا",
                primary: false
              }
            ].map((cta, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_80px_rgba(0,0,0,0.12)] transition-all duration-700 transform hover:-translate-y-4 text-center"
              >
                <div className="w-16 h-16 mx-auto bg-[#F1EAE3] rounded-full flex items-center justify-center mb-6 transition-all duration-700 group-hover:bg-[#C49D2F] group-hover:scale-110">
                  <cta.icon className="w-8 h-8 text-[#C49D2F] group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="text-xl font-light text-[#2D2926] mb-4">
                  {cta.title}
                </h3>
                
                <p className="text-[#766B5A] text-sm mb-6 leading-relaxed font-light">
                  {cta.description}
                </p>

                <button className={`group/btn relative px-8 py-4 rounded-full text-base font-medium transition-all duration-500 hover:scale-105 overflow-hidden ${
                  cta.primary 
                    ? 'bg-[#C49D2F] text-white hover:shadow-[0_16px_64px_rgba(196,157,47,0.3)]' 
                    : 'border-2 border-[#C49D2F] text-[#C49D2F] hover:bg-[#C49D2F] hover:text-white'
                }`}>
                  <span className="relative z-10 flex items-center justify-center space-x-3">
                    <span>{cta.action}</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1200"></div>
                </button>
              </div>
            ))}
          </div>
          
          {/* Trust Indicators */}
          <div className="bg-white/50 backdrop-blur-sm rounded-[2rem] p-8 border border-[#C49D2F]/10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "مناسبة ناجحة" },
                { number: "98%", label: "رضا العملاء" },
                { number: "24/7", label: "دعم متواصل" },
                { number: "5", label: "نجوم التقييم" }
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-3xl font-light text-[#C49D2F]">{stat.number}</div>
                  <div className="text-[#766B5A] text-sm font-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-32 bg-gradient-to-b from-[#FAF9F7] to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="mb-8">
              <MessageSquare className="w-16 h-16 text-[#C49D2F] mx-auto mb-6" />
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] mb-8 tracking-[0.08em]">
              الأسئلة الشائعة
            </h2>
            <p className="text-xl text-[#766B5A] font-light max-w-3xl mx-auto leading-relaxed">
              إجابات على أكثر الأسئلة شيوعاً
              <span className="block mt-2 text-lg opacity-80">كل ما تحتاج معرفته عن خدماتنا</span>
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "ما هي سعة القاعات المتاحة؟",
                answer: "نوفر قاعات بسعات مختلفة: القاعة الكبرى تستوعب حتى 500 ضيف، قاعة الزهور حتى 300 ضيف، والقاعة الذهبية حتى 200 ضيف.",
                icon: Building
              },
              {
                question: "هل تقدمون خدمات التصوير والضيافة؟",
                answer: "نعم، نقدم خدمات شاملة تشمل التصوير الاحترافي، الضيافة الفاخرة، تنسيق الورود، والديكور المخصص.",
                icon: Crown
              },
              {
                question: "ما هي مدة الحجز المطلوبة؟",
                answer: "ننصح بالحجز قبل 3-6 أشهر للمناسبات الكبيرة، ويمكن الحجز قبل شهر للمناسبات الصغيرة حسب التوفر.",
                icon: Calendar
              },
              {
                question: "هل تقدمون عروض خاصة للمناسبات الموسمية؟",
                answer: "نعم، نقدم عروضاً خاصة في المواسم المختلفة مع خصومات على الحجوزات المبكرة وباقات مخصصة.",
                icon: Sparkles
              },
              {
                question: "ما هي سياسة الإلغاء والتعديل؟",
                answer: "يمكن تعديل الحجز مجاناً قبل 30 يوم من التاريخ، والإلغاء قبل 60 يوم مع استرداد كامل المبلغ.",
                icon: CheckCircle
              },
              {
                question: "هل تقدمون خدمات التصميم والديكور؟",
                answer: "نعم، لدينا فريق متخصص في التصميم والديكور لتحويل رؤيتك إلى واقع ساحر ومميز.",
                icon: Star
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="group bg-white rounded-[2rem] p-8 hover:shadow-[0_16px_64px_rgba(0,0,0,0.12)] transition-all duration-700 transform hover:-translate-y-2 border border-[#E7DFD2] hover:border-[#C49D2F]/30"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F1EAE3] rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-[#C49D2F] group-hover:scale-110">
                    <faq.icon className="w-6 h-6 text-[#C49D2F] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-light text-[#2D2926] mb-4 transition-colors duration-500 group-hover:text-[#C49D2F]">
                      {faq.question}
                    </h3>
                    <p className="text-[#766B5A] leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#C49D2F]/5 to-[#D4A935]/5 rounded-[2rem] p-12">
              <h3 className="text-2xl font-light text-[#2D2926] mb-6">
                لم تجد إجابة لسؤالك؟
              </h3>
              <p className="text-[#766B5A] text-lg mb-8 font-light">
                فريقنا متاح دائماً للإجابة على استفساراتكم
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+966121234567"
                  className="inline-flex items-center px-8 py-4 bg-[#C49D2F] text-white rounded-full font-medium transition-all duration-500 hover:shadow-[0_8px_32px_rgba(196,157,47,0.25)] hover:scale-105"
                >
                  <Phone className="w-5 h-5 ml-3" />
                  <span>اتصل بنا</span>
                </a>
                <a
                  href="https://wa.me/966501234567"
                  className="inline-flex items-center px-8 py-4 border-2 border-[#C49D2F] text-[#C49D2F] rounded-full font-medium transition-all duration-500 hover:bg-[#C49D2F] hover:text-white hover:scale-105"
                >
                  <MessageSquare className="w-5 h-5 ml-3" />
                  <span>راسلنا على واتساب</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal - Legendary Success */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
          <div className="bg-white rounded-[2rem] shadow-[0_32px_120px_rgba(0,0,0,0.3)] p-12 md:p-16 max-w-lg mx-6 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
              <div className="absolute top-8 right-8 w-16 h-16 border border-[#C49D2F] rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-20 h-20 border border-[#C49D2F] rounded-full"></div>
            </div>
            
            <button
              onClick={closeConfirmation}
              className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center text-[#766B5A] hover:text-[#C49D2F] transition-colors duration-300 bg-[#F1EAE3] rounded-full hover:bg-[#C49D2F] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="relative z-10">
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <CheckCircle className="w-14 h-14 text-white" />
                </div>
                <div className="absolute inset-0 w-24 h-24 bg-green-400/30 rounded-full blur-xl animate-ping"></div>
              </div>
              
              <div className="mb-6">
                <Crown className="w-8 h-8 text-[#C49D2F] mx-auto mb-4" />
                <h3 className="text-3xl font-light text-[#2D2926] mb-4 tracking-wide">
                  تم إرسال طلبكم بنجاح!
                </h3>
              </div>
              
              <p className="text-[#766B5A] mb-8 leading-relaxed font-light text-lg">
                شكراً لكم على اختيار مافيرا. سنتواصل معكم خلال 24 ساعة لتأكيد الحجز ومناقشة التفاصيل.
              </p>
              
              <div className="bg-gradient-to-r from-[#C49D2F]/5 to-[#D4A935]/5 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-center space-x-4 text-sm text-[#766B5A]">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#C49D2F] ml-2" />
                    <span>تأكيد فوري</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#C49D2F] ml-2" />
                    <span>رد خلال 24 ساعة</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={closeConfirmation}
                  className="flex-1 px-8 py-4 bg-[#C49D2F] text-white rounded-xl font-medium transition-all duration-500 hover:shadow-[0_16px_64px_rgba(196,157,47,0.3)] hover:scale-105"
                >
                  حسناً
                </button>
                <button
                  onClick={() => {
                    closeConfirmation()
                    // Scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="flex-1 px-8 py-4 border-2 border-[#C49D2F] text-[#C49D2F] rounded-xl font-medium transition-all duration-500 hover:bg-[#C49D2F] hover:text-white"
                >
                  احجز مرة أخرى
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
