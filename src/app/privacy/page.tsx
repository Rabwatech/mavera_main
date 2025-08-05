'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Crown, Shield, Lock, Eye, Users, Mail, Phone, Calendar } from 'lucide-react'


export default function PrivacyPage() {
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
        <h1>سياسة الخصوصية - قاعة مافيرا للأفراح والمناسبات</h1>
        <p>سياسة الخصوصية لقاعة مافيرا للأفراح والمناسبات في جدة</p>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7] via-[#F8F6F2] to-[#F1EAE3]"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-[rgba(196,157,47,0.02)] to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
          <div className="mb-8">
            <Shield className="w-12 h-12 text-[#C49D2F] mx-auto animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extralight text-[#2D2926] mb-12 tracking-[0.1em] leading-[0.9]">
            سياسة الخصوصية
          </h1>
          
          <p className="text-2xl md:text-3xl text-[#766B5A] font-light tracking-[0.05em] leading-relaxed max-w-3xl mx-auto">
            نلتزم بحماية بياناتكم الشخصية
            <span className="block mt-2 text-xl opacity-70">وفقاً لأعلى معايير الأمان والقوانين السعودية</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section ref={sectionRef} className="py-32 bg-[#FAF9F7] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] mb-8 tracking-[0.05em]">
              التزامنا بحماية خصوصيتكم
            </h2>
            
            <p className="text-xl text-[#766B5A] font-light max-w-3xl mx-auto leading-relaxed">
              في قاعة مافيرا للأفراح والمناسبات، نعتبر خصوصيتكم وأمان بياناتكم من أهم أولوياتنا.
            </p>
          </div>

          {/* Privacy Sections Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* جمع البيانات الشخصية */}
            <div className="group bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_80px_rgba(196,157,47,0.15)] transition-all duration-700 transform hover:-translate-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-[#C49D2F] to-[#D4A935] rounded-full flex items-center justify-center mb-8">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-light text-[#2D2926] mb-6 tracking-wide">
                جمع البيانات الشخصية
              </h3>
              
              <div className="w-16 h-px bg-[#C49D2F] mb-8"></div>
              
              <div className="space-y-4">
                <p className="text-[#766B5A] text-lg leading-relaxed font-light">
                  نحن في قاعة مافيرا للأفراح والمناسبات نجمع البيانات التالية:
                </p>
                <ul className="space-y-2 text-[#766B5A] text-lg leading-relaxed font-light">
                  <li>• الاسم الكامل والبيانات الشخصية</li>
                  <li>• رقم الهاتف والبريد الإلكتروني</li>
                  <li>• تفاصيل المناسبة والتاريخ المفضل</li>
                  <li>• عدد الضيوف ونوع الخدمة المطلوبة</li>
                  <li>• أي معلومات إضافية تقدمها لنا طواعية</li>
                </ul>
              </div>
            </div>

            {/* استخدام البيانات */}
            <div className="group bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_80px_rgba(196,157,47,0.15)] transition-all duration-700 transform hover:-translate-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-[#C49D2F] to-[#D4A935] rounded-full flex items-center justify-center mb-8">
                <Eye className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-light text-[#2D2926] mb-6 tracking-wide">
                استخدام البيانات
              </h3>
              
              <div className="w-16 h-px bg-[#C49D2F] mb-8"></div>
              
              <div className="space-y-4">
                <p className="text-[#766B5A] text-lg leading-relaxed font-light">
                  نستخدم البيانات التي نجمعها للأغراض التالية:
                </p>
                <ul className="space-y-2 text-[#766B5A] text-lg leading-relaxed font-light">
                  <li>• توفير الخدمات المطلوبة وتنظيم المناسبات</li>
                  <li>• التواصل معكم بخصوص الحجوزات والاستفسارات</li>
                  <li>• إرسال عروض خاصة وتحديثات عن خدماتنا</li>
                  <li>• تحسين جودة الخدمات وتجربة العملاء</li>
                  <li>• الامتثال للقوانين والأنظمة السعودية</li>
                </ul>
              </div>
            </div>

            {/* حماية المعلومات */}
            <div className="group bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_80px_rgba(196,157,47,0.15)] transition-all duration-700 transform hover:-translate-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-[#C49D2F] to-[#D4A935] rounded-full flex items-center justify-center mb-8">
                <Lock className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-light text-[#2D2926] mb-6 tracking-wide">
                حماية المعلومات
              </h3>
              
              <div className="w-16 h-px bg-[#C49D2F] mb-8"></div>
              
              <div className="space-y-4">
                <p className="text-[#766B5A] text-lg leading-relaxed font-light">
                  نلتزم بحماية بياناتكم الشخصية من خلال:
                </p>
                <ul className="space-y-2 text-[#766B5A] text-lg leading-relaxed font-light">
                  <li>• استخدام تقنيات تشفير متقدمة</li>
                  <li>• تقييد الوصول للبيانات للموظفين المصرح لهم فقط</li>
                  <li>• تحديث إجراءات الأمان بشكل دوري</li>
                  <li>• الامتثال لقانون حماية البيانات الشخصية السعودي</li>
                  <li>• عدم مشاركة البيانات مع أطراف ثالثة دون موافقتكم</li>
                </ul>
              </div>
            </div>

            {/* حقوقكم */}
            <div className="group bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_80px_rgba(196,157,47,0.15)] transition-all duration-700 transform hover:-translate-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-[#C49D2F] to-[#D4A935] rounded-full flex items-center justify-center mb-8">
                <Users className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-light text-[#2D2926] mb-6 tracking-wide">
                حقوقكم
              </h3>
              
              <div className="w-16 h-px bg-[#C49D2F] mb-8"></div>
              
              <div className="space-y-4">
                <p className="text-[#766B5A] text-lg leading-relaxed font-light">
                  لديكم الحق في:
                </p>
                <ul className="space-y-2 text-[#766B5A] text-lg leading-relaxed font-light">
                  <li>• الوصول لبياناتكم الشخصية وتحديثها</li>
                  <li>• طلب حذف بياناتكم الشخصية</li>
                  <li>• الاعتراض على معالجة بياناتكم</li>
                  <li>• نقل بياناتكم لمزود خدمة آخر</li>
                  <li>• سحب الموافقة على معالجة البيانات</li>
                  <li>• تقديم شكوى للجهات المختصة</li>
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
              إذا كان لديكم أي استفسارات حول سياسة الخصوصية، لا تترددوا في التواصل معنا
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
              <p className="text-[#766B5A]">privacy@mavera-jeddah.com</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <h3 className="text-xl font-light text-[#2D2926] mb-4">آخر تحديث</h3>
            <p className="text-[#766B5A] text-lg">
              تم تحديث هذه السياسة في 1 يناير 2025. نحتفظ بالحق في تحديث هذه السياسة 
              في أي وقت، وسيتم إشعاركم بأي تغييرات جوهرية.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 