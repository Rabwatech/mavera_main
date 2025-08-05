'use client'

import React, { useState } from 'react'
import { X, ChevronRight, ChevronLeft, Calendar, Users, Crown, Flower, Star, Music, Camera, Heart, CheckCircle, ArrowRight, Building } from 'lucide-react'

interface FormData {
  // الخطوة 1: معلومات أساسية
  eventType: string
  guestCount: string
  eventDate: string
  
  // الخطوة 2: تخصيص القاعة
  seatingDesign: string
  spaceDistribution: string
  lighting: string
  
  // الخطوة 3: الخدمات الإضافية
  foodServices: string[]
  decoration: string
  technicalServices: string[]
  
  // الخطوة 4: إضافات خاصة
  specialAdditions: string[]
  
  // الخطوة 5: بيانات التواصل
  fullName: string
  phone: string
  email: string
  notes: string
}

interface GrandBallroomWizardProps {
  isOpen: boolean
  onClose: () => void
}

export default function GrandBallroomWizard({ isOpen, onClose }: GrandBallroomWizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    eventType: '',
    guestCount: '',
    eventDate: '',
    seatingDesign: '',
    spaceDistribution: '',
    lighting: '',
    foodServices: [],
    decoration: '',
    technicalServices: [],
    specialAdditions: [],
    fullName: '',
    phone: '',
    email: '',
    notes: ''
  })

  const totalSteps = 5

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleMultiSelect = (field: keyof FormData, value: string) => {
    const currentValues = formData[field] as string[]
    if (currentValues.includes(value)) {
      updateFormData(field, currentValues.filter(v => v !== value))
    } else {
      updateFormData(field, [...currentValues, value])
    }
  }

  const nextStep = () => {
    // التحقق من صحة البيانات قبل الانتقال للخطوة التالية
    let canProceed = true
    
    switch (currentStep) {
      case 1:
        if (!formData.eventType || !formData.guestCount || !formData.eventDate) {
          canProceed = false
        }
        break
      case 2:
        if (!formData.seatingDesign || !formData.spaceDistribution || !formData.lighting) {
          canProceed = false
        }
        break
      case 3:
        if (formData.foodServices.length === 0 || !formData.decoration || formData.technicalServices.length === 0) {
          canProceed = false
        }
        break
      case 4:
        // الخطوة 4 اختيارية
        break
      case 5:
        if (!formData.fullName || !formData.phone || !formData.email) {
          canProceed = false
        }
        break
    }
    
    if (!canProceed) {
      // إظهار رسالة تحذير
      const warningMessage = document.createElement('div')
      warningMessage.className = 'fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-lg z-[70]'
      warningMessage.innerHTML = `
        <div class="flex items-center space-x-reverse space-x-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
          </svg>
          <span>يرجى إكمال جميع الحقول المطلوبة قبل الانتقال للخطوة التالية</span>
        </div>
      `
      document.body.appendChild(warningMessage)
      
      // إزالة الرسالة بعد 3 ثوان
      setTimeout(() => {
        if (document.body.contains(warningMessage)) {
          document.body.removeChild(warningMessage)
        }
      }, 3000)
      
      return
    }
    
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    try {
      // هنا يمكن إرسال البيانات للإيميل أو قاعدة البيانات
      console.log('Form Data:', formData)
      
      // إظهار رسالة نجاح أكثر جاذبية
      const successMessage = document.createElement('div')
      successMessage.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4'
      successMessage.innerHTML = `
        <div class="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-[0_32px_128px_rgba(0,0,0,0.2)]">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-light text-[#2D2926] mb-4">تم استلام طلبكم بنجاح!</h3>
          <p class="text-gray-600 mb-6">سنقوم بالتواصل معكم قريباً لتأكيد التفاصيل وتقديم العرض المخصص للقاعة الكبرى</p>
          <button onclick="this.parentElement.parentElement.remove()" class="px-6 py-3 bg-[#C49D2F] text-white rounded-full font-medium hover:bg-[#B38A1F] transition-all duration-300">
            شكراً لكم
          </button>
        </div>
      `
      document.body.appendChild(successMessage)
      
      // إغلاق الفورم بعد ثانيتين
      setTimeout(() => {
        onClose()
        if (document.body.contains(successMessage)) {
          document.body.removeChild(successMessage)
        }
      }, 3000)
      
      // إعادة تعيين النموذج
      setFormData({
        eventType: '',
        guestCount: '',
        eventDate: '',
        seatingDesign: '',
        spaceDistribution: '',
        lighting: '',
        foodServices: [],
        decoration: '',
        technicalServices: [],
        specialAdditions: [],
        fullName: '',
        phone: '',
        email: '',
        notes: ''
      })
      setCurrentStep(1)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى.')
    }
  }

  const renderProgressBar = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
              i + 1 < currentStep 
                ? 'bg-[#C49D2F] text-white' 
                : i + 1 === currentStep 
                ? 'bg-[#C49D2F] text-white ring-4 ring-[#C49D2F]/20' 
                : 'bg-gray-200 text-gray-500'
            }`}>
              {i + 1 < currentStep ? <CheckCircle className="w-5 h-5" /> : i + 1}
            </div>
            {i < totalSteps - 1 && (
              <div className={`w-16 h-1 mx-2 transition-all duration-300 ${
                i + 1 < currentStep ? 'bg-[#C49D2F]' : 'bg-gray-200'
              }`}></div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-600">الخطوة {currentStep} من {totalSteps}</p>
        <div className="mt-2 text-xs text-gray-500">
          {currentStep === 1 && 'معلومات أساسية عن المناسبة'}
          {currentStep === 2 && 'تخصيص القاعة'}
          {currentStep === 3 && 'الخدمات الإضافية'}
          {currentStep === 4 && 'إضافات خاصة'}
          {currentStep === 5 && 'بيانات التواصل'}
        </div>
      </div>
    </div>
  )

  const renderStep1 = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-light text-[#2D2926] mb-6 text-right">معلومات أساسية عن المناسبة</h3>
        <p className="text-gray-600 text-right mb-6">أخبرنا عن مناسبتكم لنقدم لكم أفضل عرض مخصص للقاعة الكبرى - أكبر قاعة أفراح في جدة بسعة 500 ضيف</p>
        
        {/* نوع المناسبة */}
        <div className="mb-8">
          <label className="block text-lg font-medium text-[#2D2926] mb-4 text-right">
            نوع المناسبة
            <span className="text-red-500 mr-1">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { value: 'wedding', label: 'حفل زفاف', icon: Heart },
              { value: 'engagement', label: 'خطوبة', icon: Crown },
              { value: 'family', label: 'حفل عائلي', icon: Users },
              { value: 'business', label: 'اجتماع عمل / مؤتمر', icon: Building },
              { value: 'graduation', label: 'حفل تخرج', icon: Star },
              { value: 'other', label: 'مناسبة خاصة أخرى', icon: Star }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => updateFormData('eventType', option.value)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 text-right ${
                  formData.eventType === option.value
                    ? 'border-[#C49D2F] bg-[#C49D2F]/5 shadow-[0_8px_32px_rgba(196,157,47,0.15)]'
                    : 'border-gray-200 hover:border-[#C49D2F]/50 hover:bg-[#C49D2F]/2'
                }`}
              >
                <div className="flex items-center space-x-reverse space-x-3">
                  <option.icon className="w-6 h-6 text-[#C49D2F]" />
                  <span className="text-lg font-medium text-[#2D2926]">{option.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* عدد الضيوف */}
        <div className="mb-8">
          <label className="block text-lg font-medium text-[#2D2926] mb-4 text-right">
            عدد الضيوف المتوقع
            <span className="text-red-500 mr-1">*</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '100-250', label: '100 – 250' },
              { value: '250-400', label: '250 – 400' },
              { value: '400-500', label: '400 – 500' },
              { value: 'more-500', label: 'أكثر من 500' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => updateFormData('guestCount', option.value)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                  formData.guestCount === option.value
                    ? 'border-[#C49D2F] bg-[#C49D2F]/5 shadow-[0_8px_32px_rgba(196,157,47,0.15)]'
                    : 'border-gray-200 hover:border-[#C49D2F]/50 hover:bg-[#C49D2F]/2'
                }`}
              >
                <span className="text-lg font-medium text-[#2D2926]">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* تاريخ المناسبة */}
        <div>
          <label className="block text-lg font-medium text-[#2D2926] mb-4 text-right">
            تاريخ المناسبة
            <span className="text-red-500 mr-1">*</span>
          </label>
          <div className="relative">
            <input
              type="date"
              value={formData.eventDate}
              onChange={(e) => updateFormData('eventDate', e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl text-right text-lg focus:border-[#C49D2F] focus:outline-none transition-all duration-300"
              min={new Date().toISOString().split('T')[0]}
            />
            <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-light text-[#2D2926] mb-6 text-right">تخصيص القاعة الكبرى</h3>
        <p className="text-gray-600 text-right mb-6">اختر التصميم والإعدادات المناسبة للقاعة الكبرى - أكبر قاعة أفراح في جدة مع مرافق فاخرة ومطبخ حديث</p>
        
        {/* تصميم الكراسي والطاولات */}
        <div className="mb-8">
          <label className="block text-lg font-medium text-[#2D2926] mb-4 text-right">
            تصميم الكراسي والطاولات
            <span className="text-red-500 mr-1">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { value: 'classic', label: 'كلاسيكي فاخر (مستطيلات أو مربعات)', image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=300' },
              { value: 'circular', label: 'دائري فاخر', image: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=300' },
              { value: 'mixed', label: 'مزيج بين الاثنين', image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=300' },
              { value: 'custom', label: 'تصميم خاص (إرفاق صورة)', image: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=300' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => updateFormData('seatingDesign', option.value)}
                className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 text-right ${
                  formData.seatingDesign === option.value
                    ? 'border-[#C49D2F] shadow-[0_8px_32px_rgba(196,157,47,0.15)]'
                    : 'border-gray-200 hover:border-[#C49D2F]/50'
                }`}
              >
                <img src={option.image} alt={option.label} className="w-full h-32 object-cover" />
                <div className="p-4 bg-white">
                  <span className="text-lg font-medium text-[#2D2926]">{option.label}</span>
                </div>
                {formData.seatingDesign === option.value && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-[#C49D2F] rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* توزيع المساحة */}
        <div className="mb-8">
          <label className="block text-lg font-medium text-[#2D2926] mb-4 text-right">
            توزيع المساحة
            <span className="text-red-500 mr-1">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { value: 'large-dance', label: 'مساحة رقص كبيرة' },
              { value: 'table-focus', label: 'تركيز على الطاولات' },
              { value: 'balanced', label: 'مزيج متوازن' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => updateFormData('spaceDistribution', option.value)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-center ${
                  formData.spaceDistribution === option.value
                    ? 'border-[#C49D2F] bg-[#C49D2F]/5 shadow-[0_8px_32px_rgba(196,157,47,0.15)]'
                    : 'border-gray-200 hover:border-[#C49D2F]/50 hover:bg-[#C49D2F]/2'
                }`}
              >
                <span className="text-lg font-medium text-[#2D2926]">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* الإضاءة */}
        <div>
          <label className="block text-lg font-medium text-[#2D2926] mb-4 text-right">
            الإضاءة
            <span className="text-red-500 mr-1">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { value: 'classic', label: 'إضاءة كلاسيكية فاخرة' },
              { value: 'custom', label: 'إضاءة مخصصة (ألوان + تأثيرات)' },
              { value: 'theatrical', label: 'إضاءة مسرحية/عروض' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => updateFormData('lighting', option.value)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-center ${
                  formData.lighting === option.value
                    ? 'border-[#C49D2F] bg-[#C49D2F]/5 shadow-[0_8px_32px_rgba(196,157,47,0.15)]'
                    : 'border-gray-200 hover:border-[#C49D2F]/50 hover:bg-[#C49D2F]/2'
                }`}
              >
                <span className="text-lg font-medium text-[#2D2926]">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-light text-[#2D2926] mb-6 text-right">الخدمات الإضافية</h3>
        <p className="text-gray-600 text-right mb-6">اختر الخدمات التي تريدها للقاعة الكبرى مع مطبخ فاخر ومصعد خاص وحديقة خارجية</p>
        
        {/* الطعام والضيافة */}
        <div className="mb-8">
          <label className="block text-lg font-medium text-[#2D2926] mb-4 text-right">
            الطعام والضيافة
            <span className="text-red-500 mr-1">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { value: 'buffet', label: 'بوفيه فاخر مفتوح' },
              { value: 'menu', label: 'قائمة مخصصة (Menu)' },
              { value: 'arabic', label: 'ضيافة عربية / قهوة وشاي' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => handleMultiSelect('foodServices', option.value)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-center ${
                  formData.foodServices.includes(option.value)
                    ? 'border-[#C49D2F] bg-[#C49D2F]/5 shadow-[0_8px_32px_rgba(196,157,47,0.15)]'
                    : 'border-gray-200 hover:border-[#C49D2F]/50 hover:bg-[#C49D2F]/2'
                }`}
              >
                <span className="text-lg font-medium text-[#2D2926]">{option.label}</span>
                {formData.foodServices.includes(option.value) && (
                  <CheckCircle className="w-5 h-5 text-[#C49D2F] mx-auto mt-2" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* الديكور والزهور */}
        <div className="mb-8">
          <label className="block text-lg font-medium text-[#2D2926] mb-4 text-right">
            الديكور والزهور
            <span className="text-red-500 mr-1">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { value: 'basic', label: 'ديكور أساسي' },
              { value: 'luxury', label: 'ديكور فاخر' },
              { value: 'custom', label: 'ديكور مخصص حسب الطلب' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => updateFormData('decoration', option.value)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-center ${
                  formData.decoration === option.value
                    ? 'border-[#C49D2F] bg-[#C49D2F]/5 shadow-[0_8px_32px_rgba(196,157,47,0.15)]'
                    : 'border-gray-200 hover:border-[#C49D2F]/50 hover:bg-[#C49D2F]/2'
                }`}
              >
                <span className="text-lg font-medium text-[#2D2926]">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* الخدمات التقنية */}
        <div>
          <label className="block text-lg font-medium text-[#2D2926] mb-4 text-right">
            الخدمات التقنية
            <span className="text-red-500 mr-1">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { value: 'sound', label: 'نظام صوت احترافي', icon: Music },
              { value: 'projector', label: 'شاشة عرض/بروجكتور', icon: Camera },
              { value: 'photography', label: 'تصوير فوتوغرافي وفيديو', icon: Camera },
              { value: 'live-stream', label: 'بث مباشر', icon: Camera }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => handleMultiSelect('technicalServices', option.value)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-right ${
                  formData.technicalServices.includes(option.value)
                    ? 'border-[#C49D2F] bg-[#C49D2F]/5 shadow-[0_8px_32px_rgba(196,157,47,0.15)]'
                    : 'border-gray-200 hover:border-[#C49D2F]/50 hover:bg-[#C49D2F]/2'
                }`}
              >
                <div className="flex items-center space-x-reverse space-x-3">
                  <option.icon className="w-5 h-5 text-[#C49D2F]" />
                  <span className="text-lg font-medium text-[#2D2926]">{option.label}</span>
                </div>
                {formData.technicalServices.includes(option.value) && (
                  <CheckCircle className="w-5 h-5 text-[#C49D2F] absolute top-2 right-2" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderStep4 = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-light text-[#2D2926] mb-6 text-right">إضافات خاصة (اختيارية)</h3>
        <p className="text-gray-600 text-right mb-6">اختر الإضافات التي تريدها للقاعة الكبرى مع الحديقة الخارجية والمصعد الخاص</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { value: 'bridal-suite', label: 'كوشة عروس فاخرة', icon: Crown },
            { value: 'stage', label: 'تجهيز المسرح الكبير', icon: Star },
            { value: 'special-effects', label: 'مؤثرات خاصة (دخان، إضاءة ليزر، شلال شرارات)', icon: Star },
            { value: 'garden', label: 'استخدام الحديقة الخارجية', icon: Flower },
            { value: 'vip', label: 'ضيافة VIP', icon: Crown },
            { value: 'elevator', label: 'استخدام المصعد الخاص', icon: Building },
            { value: 'custom', label: 'إضافات مخصصة أخرى', icon: Star }
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => handleMultiSelect('specialAdditions', option.value)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 text-right relative ${
                formData.specialAdditions.includes(option.value)
                  ? 'border-[#C49D2F] bg-[#C49D2F]/5 shadow-[0_8px_32px_rgba(196,157,47,0.15)]'
                  : 'border-gray-200 hover:border-[#C49D2F]/50 hover:bg-[#C49D2F]/2'
              }`}
            >
              <div className="flex items-center space-x-reverse space-x-3">
                <option.icon className="w-5 h-5 text-[#C49D2F]" />
                <span className="text-lg font-medium text-[#2D2926]">{option.label}</span>
              </div>
              {formData.specialAdditions.includes(option.value) && (
                <CheckCircle className="w-5 h-5 text-[#C49D2F] absolute top-2 right-2" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  const renderStep5 = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-light text-[#2D2926] mb-6 text-right">بيانات التواصل</h3>
        <p className="text-gray-600 text-right mb-6">أخبرنا كيف يمكننا التواصل معكم لتقديم العرض المخصص للقاعة الكبرى</p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-[#2D2926] mb-2 text-right">
              الاسم الكامل
              <span className="text-red-500 mr-1">*</span>
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => updateFormData('fullName', e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl text-right text-lg focus:border-[#C49D2F] focus:outline-none transition-all duration-300"
              placeholder="أدخل اسمك الكامل"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-[#2D2926] mb-2 text-right">
              رقم الهاتف
              <span className="text-red-500 mr-1">*</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => updateFormData('phone', e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl text-right text-lg focus:border-[#C49D2F] focus:outline-none transition-all duration-300"
              placeholder="05xxxxxxxx"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-[#2D2926] mb-2 text-right">
              البريد الإلكتروني
              <span className="text-red-500 mr-1">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl text-right text-lg focus:border-[#C49D2F] focus:outline-none transition-all duration-300"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-[#2D2926] mb-2 text-right">ملاحظات خاصة (اختيارية)</label>
            <textarea
              value={formData.notes}
              onChange={(e) => updateFormData('notes', e.target.value)}
              rows={4}
              className="w-full p-4 border-2 border-gray-200 rounded-xl text-right text-lg focus:border-[#C49D2F] focus:outline-none transition-all duration-300 resize-none"
              placeholder="أي ملاحظات أو متطلبات خاصة تود إضافتها..."
            />
          </div>
        </div>
      </div>
    </div>
  )

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1()
      case 2:
        return renderStep2()
      case 3:
        return renderStep3()
      case 4:
        return renderStep4()
      case 5:
        return renderStep5()
      default:
        return null
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-[0_32px_128px_rgba(0,0,0,0.2)] max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-3xl p-8 border-b border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
            <div className="text-center">
              <h2 className="text-3xl font-light text-[#2D2926] mb-2">عرض سعر مخصص</h2>
              <p className="text-gray-600">القاعة الكبرى - مافيرا</p>
            </div>
            <div className="w-10"></div>
          </div>
          
          {renderProgressBar()}
        </div>

        {/* Content */}
        <div className="p-8">
          {renderCurrentStep()}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white rounded-b-3xl p-8 border-t border-gray-100">
          <div className="flex items-center justify-between">
            {/* زر السابق - على اليمين في RTL */}
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`group flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-[#2D2926] hover:bg-gray-100 hover:scale-105 hover:shadow-md'
              }`}
            >
              <span className="ml-2 rtl:ml-0 rtl:mr-2 font-medium">السابق</span>
              <ChevronLeft className="w-5 h-5 rtl:rotate-180 transition-transform duration-300 group-hover:-translate-x-1 rtl:group-hover:translate-x-1" />
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">الخطوة {currentStep} من {totalSteps}</p>
              <div className="mt-1 text-xs text-gray-500">
                {currentStep === 1 && 'معلومات أساسية عن المناسبة'}
                {currentStep === 2 && 'تخصيص القاعة'}
                {currentStep === 3 && 'الخدمات الإضافية'}
                {currentStep === 4 && 'إضافات خاصة'}
                {currentStep === 5 && 'بيانات التواصل'}
              </div>
            </div>

            {/* زر التالي/الإرسال - على اليسار في RTL */}
            {currentStep === totalSteps ? (
              <button
                onClick={handleSubmit}
                className="group relative px-8 py-3 bg-[#C49D2F] text-white rounded-full text-lg font-medium transition-all duration-700 hover:shadow-[0_16px_64px_rgba(196,157,47,0.25)] hover:scale-105 hover:bg-[#B38A1F] overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <span className="mr-2 rtl:mr-0 rtl:ml-2 font-medium">إرسال الطلب</span>
                  <ArrowRight className="w-5 h-5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300" />
                </span>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="group relative px-8 py-3 bg-[#C49D2F] text-white rounded-full text-lg font-medium transition-all duration-700 hover:shadow-[0_16px_64px_rgba(196,157,47,0.25)] hover:scale-105 hover:bg-[#B38A1F] overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <span className="mr-2 rtl:mr-0 rtl:ml-2 font-medium">التالي</span>
                  <ChevronRight className="w-5 h-5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300" />
                </span>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 