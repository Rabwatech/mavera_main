'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Crown, FileText, CreditCard, Calendar, Shield, Users, Gavel, Mail, Phone } from 'lucide-react'


export default function TermsPage() {
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

  return (
    <div className="min-h-screen">
      {/* SEO Meta Section */}
      <div className="sr-only">
        <h1>الشروط والأحكام - قاعة مافيرا للأفراح والمناسبات</h1>
        <p>الشروط والأحكام لقاعة مافيرا للأفراح والمناسبات في جدة</p>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7] via-[#F8F6F2] to-[#F1EAE3]"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-[rgba(196,157,47,0.02)] to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
          <div className="mb-8">
            <FileText className="w-12 h-12 text-[#C49D2F] mx-auto animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extralight text-[#2D2926] mb-12 tracking-[0.1em] leading-[0.9]">
            الشروط والأحكام
          </h1>
          
          <p className="text-2xl md:text-3xl text-[#766B5A] font-light tracking-[0.05em] leading-relaxed max-w-3xl mx-auto">
            شروط وأحكام استخدام خدماتنا
            <span className="block mt-2 text-xl opacity-70">وفقاً للقوانين والأنظمة السعودية</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section ref={sectionRef} className="py-32 bg-[#FAF9F7] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] mb-8 tracking-[0.05em]">
              شروط وأحكام مافيرا
            </h2>
            
            <p className="text-xl text-[#766B5A] font-light max-w-3xl mx-auto leading-relaxed">
              يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدماتنا.
            </p>
          </div>

          {/* Terms Sections Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* شروط الحجز */}
            <div className="group bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_80px_rgba(196,157,47,0.15)] transition-all duration-700 transform hover:-translate-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-[#C49D2F] to-[#D4A935] rounded-full flex items-center justify-center mb-8">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-light text-[#2D2926] mb-6 tracking-wide">
                شروط الحجز
              </h3>
              
              <div className="w-16 h-px bg-[#C49D2F] mb-8"></div>
              
              <div className="space-y-4">
                <p className="text-[#766B5A] text-lg leading-relaxed font-light">
                  شروط الحجز في قاعة مافيرا:
                </p>
                <ul className="space-y-2 text-[#766B5A] text-lg leading-relaxed font-light">
                  <li>• يجب الحجز قبل 30 يوماً على الأقل للمناسبات الكبيرة</li>
                  <li>• دفع عربون 50% من إجمالي المبلغ عند الحجز</li>
                  <li>• دفع المبلغ المتبقي قبل 7 أيام من المناسبة</li>
                  <li>• تقديم وثائق الهوية للطرفين</li>
                  <li>• الالتزام بمواعيد الاستلام والتسليم المحددة</li>
                </ul>
              </div>
            </div>

            {/* سياسات الدفع */}
            <div className="group bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_80px_rgba(196,157,47,0.15)] transition-all duration-700 transform hover:-translate-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-[#C49D2F] to-[#D4A935] rounded-full flex items-center justify-center mb-8">
                <CreditCard className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-light text-[#2D2926] mb-6 tracking-wide">
                سياسات الدفع
              </h3>
              
              <div className="w-16 h-px bg-[#C49D2F] mb-8"></div>
              
              <div className="space-y-4">
                <p className="text-[#766B5A] text-lg leading-relaxed font-light">
                  طرق الدفع المقبولة:
                </p>
                <ul className="space-y-2 text-[#766B5A] text-lg leading-relaxed font-light">
                  <li>• التحويل البنكي المباشر</li>
                  <li>• الدفع النقدي في مقر القاعة</li>
                  <li>• البطاقات الائتمانية (فيزا، ماستركارد)</li>
                  <li>• الشيكات المصرفية</li>
                  <li>• المحافظ الإلكترونية المعتمدة</li>
                </ul>
              </div>
            </div>

            {/* سياسات الإلغاء والاسترداد */}
            <div className="group bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_80px_rgba(196,157,47,0.15)] transition-all duration-700 transform hover:-translate-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-[#C49D2F] to-[#D4A935] rounded-full flex items-center justify-center mb-8">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-light text-[#2D2926] mb-6 tracking-wide">
                سياسات الإلغاء والاسترداد
              </h3>
              
              <div className="w-16 h-px bg-[#C49D2F] mb-8"></div>
              
              <div className="space-y-4">
                <p className="text-[#766B5A] text-lg leading-relaxed font-light">
                  شروط الإلغاء والاسترداد:
                </p>
                <ul className="space-y-2 text-[#766B5A] text-lg leading-relaxed font-light">
                  <li>• إلغاء قبل 30 يوماً: استرداد 100% من العربون</li>
                  <li>• إلغاء قبل 15 يوماً: استرداد 50% من العربون</li>
                  <li>• إلغاء قبل 7 أيام: استرداد 25% من العربون</li>
                  <li>• إلغاء أقل من 7 أيام: لا يوجد استرداد</li>
                  <li>• في حالات الطوارئ: مراجعة خاصة</li>
                </ul>
              </div>
            </div>

            {/* مسؤوليات العميل */}
            <div className="group bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_80px_rgba(196,157,47,0.15)] transition-all duration-700 transform hover:-translate-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-[#C49D2F] to-[#D4A935] rounded-full flex items-center justify-center mb-8">
                <Users className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-light text-[#2D2926] mb-6 tracking-wide">
                مسؤوليات العميل
              </h3>
              
              <div className="w-16 h-px bg-[#C49D2F] mb-8"></div>
              
              <div className="space-y-4">
                <p className="text-[#766B5A] text-lg leading-relaxed font-light">
                  مسؤوليات العميل تجاه القاعة:
                </p>
                <ul className="space-y-2 text-[#766B5A] text-lg leading-relaxed font-light">
                  <li>• الالتزام بالمواعيد المحددة</li>
                  <li>• احترام قواعد القاعة والمرافق</li>
                  <li>• عدم إتلاف الممتلكات أو الأثاث</li>
                  <li>• الالتزام بعدد الضيوف المتفق عليه</li>
                  <li>• إخلاء القاعة في الوقت المحدد</li>
                  <li>• دفع أي أضرار إضافية</li>
                </ul>
              </div>
            </div>

            {/* مسؤوليات مافيرا */}
            <div className="group bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_80px_rgba(196,157,47,0.15)] transition-all duration-700 transform hover:-translate-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-[#C49D2F] to-[#D4A935] rounded-full flex items-center justify-center mb-8">
                <Crown className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-light text-[#2D2926] mb-6 tracking-wide">
                مسؤوليات مافيرا
              </h3>
              
              <div className="w-16 h-px bg-[#C49D2F] mb-8"></div>
              
              <div className="space-y-4">
                <p className="text-[#766B5A] text-lg leading-relaxed font-light">
                  التزاماتنا تجاه العملاء:
                </p>
                <ul className="space-y-2 text-[#766B5A] text-lg leading-relaxed font-light">
                  <li>• توفير القاعة نظيفة ومعدة بالكامل</li>
                  <li>• الالتزام بالمواصفات المتفق عليها</li>
                  <li>• توفير الخدمات المطلوبة بجودة عالية</li>
                  <li>• حل أي مشاكل طارئة بسرعة</li>
                  <li>• الحفاظ على أمان وسلامة الضيوف</li>
                  <li>• تقديم تقارير مفصلة عن الخدمات</li>
                </ul>
              </div>
            </div>

            {/* القوانين الحاكمة */}
            <div className="group bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_80px_rgba(196,157,47,0.15)] transition-all duration-700 transform hover:-translate-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-[#C49D2F] to-[#D4A935] rounded-full flex items-center justify-center mb-8">
                <Gavel className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-light text-[#2D2926] mb-6 tracking-wide">
                القوانين الحاكمة
              </h3>
              
              <div className="w-16 h-px bg-[#C49D2F] mb-8"></div>
              
              <div className="space-y-4">
                <p className="text-[#766B5A] text-lg leading-relaxed font-light">
                  تخضع هذه الشروط للقوانين السعودية:
                </p>
                <ul className="space-y-2 text-[#766B5A] text-lg leading-relaxed font-light">
                  <li>• نظام التجارة السعودي</li>
                  <li>• نظام حماية المستهلك</li>
                  <li>• نظام حماية البيانات الشخصية</li>
                  <li>• الأنظمة البلدية المحلية</li>
                  <li>• قوانين الضرائب والرسوم</li>
                  <li>• المحاكم السعودية المختصة</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-b from-[#FAF9F7] to-[#F8F6F2] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-8 lg:px-12 relative z-10 text-center">
          <div className="mb-12">
            <Mail className="w-16 h-16 text-[#C49D2F] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-extralight text-[#2D2926] mb-6 tracking-[0.05em]">
              تواصل معنا
            </h2>
            <p className="text-lg text-[#766B5A] font-light max-w-2xl mx-auto">
              إذا كان لديكم أي استفسارات حول الشروط والأحكام، لا تترددوا في التواصل معنا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
              <Phone className="w-8 h-8 text-[#C49D2F] mx-auto mb-4" />
              <h3 className="text-xl font-light text-[#2D2926] mb-2">اتصل بنا</h3>
              <p className="text-[#766B5A]">+966 12 123 4567</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
              <Mail className="w-8 h-8 text-[#C49D2F] mx-auto mb-4" />
              <h3 className="text-xl font-light text-[#2D2926] mb-2">راسلنا</h3>
              <p className="text-[#766B5A]">legal@mavera-jeddah.com</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <h3 className="text-xl font-light text-[#2D2926] mb-4">آخر تحديث</h3>
            <p className="text-[#766B5A] text-lg">
              تم تحديث هذه الشروط والأحكام في 1 يناير 2025. نحتفظ بالحق في تحديث هذه الشروط 
              في أي وقت، وسيتم إشعاركم بأي تغييرات جوهرية.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 