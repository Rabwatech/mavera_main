'use client'

import React, { useState, useEffect } from 'react'
import { Crown, Calendar, Palette, Users2, ArrowRight, ArrowLeft, Check, Star } from 'lucide-react'

interface PlanOptions {
  guestCount: 'small' | 'medium' | 'grand'
  eventType: 'wedding' | 'gala' | 'corporate'
}

interface DesignOptions {
  theme: 'classic' | 'modern' | 'arabian'
  lighting: 'romantic' | 'dynamic' | 'festive'
  catering: 'formal' | 'buffet' | 'local'
}

interface HostOptions {
  extraServices: string[]
  serviceLevel: 'standard' | 'full' | 'vip'
}

interface LeadForm {
  name: string
  email: string
  phone: string
}

const guestCountOptions = [
  { id: 'small', label: 'صغير', description: 'أقل من 150 ضيف', capacity: '< 150' },
  { id: 'medium', label: 'متوسط', description: '150-400 ضيف', capacity: '150-400' },
  { id: 'grand', label: 'كبير', description: 'أكثر من 400 ضيف', capacity: '400+' }
]

const eventTypeOptions = [
  { id: 'wedding', label: 'حفل زفاف', description: 'احتفال رومانسي لا يُنسى' },
  { id: 'gala', label: 'حفل غالا', description: 'مناسبة فاخرة ومميزة' },
  { id: 'corporate', label: 'فعالية شركات', description: 'حدث احترافي راقي' }
]

const themeOptions = [
  { id: 'classic', label: 'كلاسيكي', description: 'أناقة خالدة وتقليدية' },
  { id: 'modern', label: 'حديث', description: 'تصميم عصري ومتطور' },
  { id: 'arabian', label: 'فخامة عربية', description: 'تراث عربي أصيل' }
]

const lightingOptions = [
  { id: 'romantic', label: 'رومانسي', description: 'إضاءة ناعمة وحميمية' },
  { id: 'dynamic', label: 'ديناميكي', description: 'إضاءة متحركة ومتطورة' },
  { id: 'festive', label: 'احتفالي', description: 'إضاءة ملونة ومبهجة' }
]

const cateringOptions = [
  { id: 'formal', label: 'عشاء رسمي', description: 'خدمة راقية على الطاولة' },
  { id: 'buffet', label: 'بوفيه عالمي', description: 'تنوع في المأكولات' },
  { id: 'local', label: 'مأكولات محلية', description: 'أطباق عربية أصيلة' }
]

const extraServiceOptions = [
  { id: 'live-band', label: 'فرقة موسيقية حية', description: 'موسيقى مباشرة احترافية' },
  { id: 'visual-show', label: 'عرض بصري', description: 'عروض ضوئية متطورة' },
  { id: 'vip-hosts', label: 'مضيفين VIP', description: 'خدمة شخصية فاخرة' },
  { id: 'photography', label: 'تصوير احترافي', description: 'توثيق كامل للحدث' },
  { id: 'decoration', label: 'ديكور مخصص', description: 'تصميم فريد ومميز' },
  { id: 'transportation', label: 'خدمة نقل', description: 'تنقل مريح للضيوف' }
]

const serviceLevelOptions = [
  { id: 'standard', label: 'قياسي', description: 'خدمة أساسية شاملة' },
  { id: 'full', label: 'خدمة كاملة', description: 'إدارة شاملة للحدث' },
  { id: 'vip', label: 'فخامة VIP', description: 'تجربة فاخرة استثنائية' }
]

const previewImages = {
  plan: {
    small: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    medium: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800',
    grand: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  design: {
    classic: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    modern: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800',
    arabian: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  host: {
    standard: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    full: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800',
    vip: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
}

export default function FullServiceJourney() {
  const [currentStep, setCurrentStep] = useState(1)
  const [planOptions, setPlanOptions] = useState<PlanOptions>({
    guestCount: 'medium',
    eventType: 'wedding'
  })
  const [designOptions, setDesignOptions] = useState<DesignOptions>({
    theme: 'classic',
    lighting: 'romantic',
    catering: 'formal'
  })
  const [hostOptions, setHostOptions] = useState<HostOptions>({
    extraServices: [],
    serviceLevel: 'full'
  })
  const [leadForm, setLeadForm] = useState<LeadForm>({
    name: '',
    email: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const steps = [
    { id: 1, title: 'Plan', icon: Calendar, arabicTitle: 'التخطيط' },
    { id: 2, title: 'Design', icon: Palette, arabicTitle: 'التصميم' },
    { id: 3, title: 'Host', icon: Users2, arabicTitle: 'الاستضافة' },
    { id: 4, title: 'Summary', icon: Crown, arabicTitle: 'الملخص' }
  ]

  const getCurrentPreviewImage = () => {
    switch (currentStep) {
      case 1:
        return previewImages.plan[planOptions.guestCount]
      case 2:
        return previewImages.design[designOptions.theme]
      case 3:
        return previewImages.host[hostOptions.serviceLevel]
      default:
        return previewImages.plan.medium
    }
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleExtraServiceToggle = (serviceId: string) => {
    setHostOptions(prev => ({
      ...prev,
      extraServices: prev.extraServices.includes(serviceId)
        ? prev.extraServices.filter(id => id !== serviceId)
        : [...prev.extraServices, serviceId]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    // Handle form submission logic here
  }

  const renderPlanStep = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-light text-[#2D2926] mb-6">عدد الضيوف</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {guestCountOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setPlanOptions(prev => ({ ...prev, guestCount: option.id as any }))}
              className={`p-6 rounded-2xl border-2 transition-all duration-500 text-right ${
                planOptions.guestCount === option.id
                  ? 'border-[#C49D2F] bg-[#C49D2F]/5 shadow-[0_8px_32px_rgba(196,157,47,0.15)]'
                  : 'border-gray-200 hover:border-[#C49D2F]/50 hover:bg-[#C49D2F]/2'
              }`}
            >
              <div className="text-2xl font-light text-[#2D2926] mb-2">{option.label}</div>
              <div className="text-[#C49D2F] font-medium mb-1">{option.capacity}</div>
              <div className="text-sm text-[#766B5A]">{option.description}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-light text-[#2D2926] mb-6">نوع الحدث</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {eventTypeOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setPlanOptions(prev => ({ ...prev, eventType: option.id as any }))}
              className={`p-6 rounded-2xl border-2 transition-all duration-500 text-right ${
                planOptions.eventType === option.id
                  ? 'border-[#C49D2F] bg-[#C49D2F]/5 shadow-[0_8px_32px_rgba(196,157,47,0.15)]'
                  : 'border-gray-200 hover:border-[#C49D2F]/50 hover:bg-[#C49D2F]/2'
              }`}
            >
              <div className="text-2xl font-light text-[#2D2926] mb-2">{option.label}</div>
              <div className="text-sm text-[#766B5A]">{option.description}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  const renderDesignStep = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-light text-[#2D2926] mb-6">المظهر العام</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {themeOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setDesignOptions(prev => ({ ...prev, theme: option.id as any }))}
              className={`p-6 rounded-2xl border-2 transition-all duration-500 text-right ${
                designOptions.theme === option.id
                  ? 'border-[#C49D2F] bg-[#C49D2F]/5 shadow-[0_8px_32px_rgba(196,157,47,0.15)]'
                  : 'border-gray-200 hover:border-[#C49D2F]/50 hover:bg-[#C49D2F]/2'
              }`}
            >
              <div className="text-2xl font-light text-[#2D2926] mb-2">{option.label}</div>
              <div className="text-sm text-[#766B5A]">{option.description}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-light text-[#2D2926] mb-6">الإضاءة</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {lightingOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setDesignOptions(prev => ({ ...prev, lighting: option.id as any }))}
              className={`p-6 rounded-2xl border-2 transition-all duration-500 text-right ${
                designOptions.lighting === option.id
                  ? 'border-[#C49D2F] bg-[#C49D2F]/5 shadow-[0_8px_32px_rgba(196,157,47,0.15)]'
                  : 'border-gray-200 hover:border-[#C49D2F]/50 hover:bg-[#C49D2F]/2'
              }`}
            >
              <div className="text-2xl font-light text-[#2D2926] mb-2">{option.label}</div>
              <div className="text-sm text-[#766B5A]">{option.description}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-light text-[#2D2926] mb-6">خدمة الطعام</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cateringOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setDesignOptions(prev => ({ ...prev, catering: option.id as any }))}
              className={`p-6 rounded-2xl border-2 transition-all duration-500 text-right ${
                designOptions.catering === option.id
                  ? 'border-[#C49D2F] bg-[#C49D2F]/5 shadow-[0_8px_32px_rgba(196,157,47,0.15)]'
                  : 'border-gray-200 hover:border-[#C49D2F]/50 hover:bg-[#C49D2F]/2'
              }`}
            >
              <div className="text-2xl font-light text-[#2D2926] mb-2">{option.label}</div>
              <div className="text-sm text-[#766B5A]">{option.description}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  const renderHostStep = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-light text-[#2D2926] mb-6">خدمات إضافية</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {extraServiceOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleExtraServiceToggle(option.id)}
              className={`p-6 rounded-2xl border-2 transition-all duration-500 text-right ${
                hostOptions.extraServices.includes(option.id)
                  ? 'border-[#C49D2F] bg-[#C49D2F]/5 shadow-[0_8px_32px_rgba(196,157,47,0.15)]'
                  : 'border-gray-200 hover:border-[#C49D2F]/50 hover:bg-[#C49D2F]/2'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-2xl font-light text-[#2D2926]">{option.label}</div>
                {hostOptions.extraServices.includes(option.id) && (
                  <Check className="w-6 h-6 text-[#C49D2F]" />
                )}
              </div>
              <div className="text-sm text-[#766B5A]">{option.description}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-light text-[#2D2926] mb-6">مستوى الخدمة</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {serviceLevelOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setHostOptions(prev => ({ ...prev, serviceLevel: option.id as any }))}
              className={`p-6 rounded-2xl border-2 transition-all duration-500 text-right ${
                hostOptions.serviceLevel === option.id
                  ? 'border-[#C49D2F] bg-[#C49D2F]/5 shadow-[0_8px_32px_rgba(196,157,47,0.15)]'
                  : 'border-gray-200 hover:border-[#C49D2F]/50 hover:bg-[#C49D2F]/2'
              }`}
            >
              <div className="text-2xl font-light text-[#2D2926] mb-2">{option.label}</div>
              <div className="text-sm text-[#766B5A]">{option.description}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  const renderSummary = () => {
    const selectedGuestCount = guestCountOptions.find(opt => opt.id === planOptions.guestCount)
    const selectedEventType = eventTypeOptions.find(opt => opt.id === planOptions.eventType)
    const selectedTheme = themeOptions.find(opt => opt.id === designOptions.theme)
    const selectedServiceLevel = serviceLevelOptions.find(opt => opt.id === hostOptions.serviceLevel)

    return (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-[#C49D2F]/5 to-[#D4A935]/5 rounded-3xl p-8">
          <h3 className="text-3xl font-light text-[#2D2926] mb-6 text-center">ملخص تجربتك المخصصة</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-[#C49D2F]" />
                <div>
                  <div className="font-medium text-[#2D2926]">{selectedEventType?.label}</div>
                  <div className="text-sm text-[#766B5A]">{selectedGuestCount?.capacity} ضيف</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Palette className="w-6 h-6 text-[#C49D2F]" />
                <div>
                  <div className="font-medium text-[#2D2926]">{selectedTheme?.label}</div>
                  <div className="text-sm text-[#766B5A]">{designOptions.lighting} • {designOptions.catering}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Users2 className="w-6 h-6 text-[#C49D2F]" />
                <div>
                  <div className="font-medium text-[#2D2926]">{selectedServiceLevel?.label}</div>
                  <div className="text-sm text-[#766B5A]">
                    {hostOptions.extraServices.length} خدمة إضافية
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-[#2D2926] mb-3">الخدمات المختارة:</h4>
              <div className="space-y-2">
                {hostOptions.extraServices.map(serviceId => {
                  const service = extraServiceOptions.find(opt => opt.id === serviceId)
                  return (
                    <div key={serviceId} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-[#C49D2F]" />
                      <span className="text-sm text-[#766B5A]">{service?.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-2xl font-light text-[#2D2926] mb-6">معلومات التواصل</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#2D2926] mb-2">الاسم الكامل</label>
              <input
                type="text"
                required
                value={leadForm.name}
                onChange={(e) => setLeadForm(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#C49D2F] focus:outline-none transition-colors duration-300"
                placeholder="أدخل اسمك الكامل"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#2D2926] mb-2">البريد الإلكتروني</label>
              <input
                type="email"
                required
                value={leadForm.email}
                onChange={(e) => setLeadForm(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#C49D2F] focus:outline-none transition-colors duration-300"
                placeholder="أدخل بريدك الإلكتروني"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#2D2926] mb-2">رقم الهاتف</label>
              <input
                type="tel"
                required
                value={leadForm.phone}
                onChange={(e) => setLeadForm(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#C49D2F] focus:outline-none transition-colors duration-300"
                placeholder="أدخل رقم هاتفك"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 group relative px-8 py-4 bg-[#C49D2F] text-white rounded-full text-lg font-medium transition-all duration-700 hover:shadow-[0_16px_64px_rgba(196,157,47,0.25)] hover:scale-105 overflow-hidden disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <span>{isSubmitting ? 'جاري الإرسال...' : 'احجز هذه التجربة'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            
            <button
              type="button"
              className="flex-1 group relative px-8 py-4 border-2 border-[#C49D2F] text-[#C49D2F] rounded-full text-lg font-medium transition-all duration-700 hover:bg-[#C49D2F] hover:text-white hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <span>تواصل معنا للمناقشة</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C49D2F]/40"></div>
            <Crown className="w-6 h-6 text-[#C49D2F] mx-6" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C49D2F]/40"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] mb-8 tracking-[0.05em]">
            رحلة الخدمة الشاملة
          </h2>
          
          <p className="text-xl text-[#766B5A] font-light max-w-2xl mx-auto leading-relaxed">
            صمم تجربتك المثالية خطوة بخطوة
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                  currentStep >= step.id
                    ? 'bg-[#C49D2F] text-white shadow-[0_8px_32px_rgba(196,157,47,0.25)]'
                    : 'bg-gray-200 text-[#766B5A]'
                }`}>
                  {currentStep > step.id ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <step.icon className="w-6 h-6" />
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-4 transition-all duration-500 ${
                    currentStep > step.id ? 'bg-[#C49D2F]' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Interactive Options */}
          <div className="space-y-8">
                         {currentStep < 4 && (
               <div className="text-center mb-8">
                 <h3 className="text-3xl font-light text-[#2D2926] mb-2">
                   {steps[currentStep - 1].arabicTitle}
                 </h3>
                 <p className="text-[#C49D2F] font-medium tracking-wide">
                   {steps[currentStep - 1].title}
                 </p>
               </div>
             )}

            {currentStep === 1 && renderPlanStep()}
            {currentStep === 2 && renderDesignStep()}
            {currentStep === 3 && renderHostStep()}
            {currentStep === 4 && renderSummary()}

            {/* Navigation Buttons */}
            {currentStep < 4 && (
              <div className="flex justify-between pt-8">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="group relative px-8 py-4 border-2 border-[#C49D2F] text-[#C49D2F] rounded-full text-lg font-medium transition-all duration-700 hover:bg-[#C49D2F] hover:text-white hover:scale-105 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center space-x-3">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                    <span>السابق</span>
                  </span>
                </button>
                
                <button
                  onClick={handleNext}
                  className="group relative px-8 py-4 bg-[#C49D2F] text-white rounded-full text-lg font-medium transition-all duration-700 hover:shadow-[0_16px_64px_rgba(196,157,47,0.25)] hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-3">
                    <span>التالي</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Dynamic Preview */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.12)] group">
                <img
                  src={getCurrentPreviewImage()}
                  alt={`Preview for step ${currentStep}`}
                  className="w-full h-96 md:h-[500px] object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                                 {/* Step Icon Overlay */}
                 <div className="absolute top-8 right-8 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
                   {React.createElement(steps[currentStep - 1].icon, { className: "w-8 h-8 text-[#C49D2F]" })}
                 </div>
                
                {/* Step Info */}
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-2xl font-light mb-2">{steps[currentStep - 1].arabicTitle}</div>
                  <div className="text-[#C49D2F] font-medium">{steps[currentStep - 1].title}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 