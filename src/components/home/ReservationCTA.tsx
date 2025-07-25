import React, { useState } from 'react';
import { Crown, Calendar, Users, Phone, Mail } from 'lucide-react';

const ReservationCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    guests: '',
    occasion: ''
  });

  const [focusedField, setFocusedField] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-24 bg-[#F1EAE3]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <Crown className="w-12 h-12 text-[#C49D2F] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2D2926]" style={{ fontFamily: 'serif' }}>
            ابدأ رحلتك معنا
          </h2>
          <p className="text-xl text-[#766B5A] mb-8">
            دعنا نخلق لك تجربة لا تُنسى
          </p>
          <div className="w-24 h-0.5 bg-[#C49D2F] mx-auto"></div>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
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
                الاسم الكامل
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField('')}
                className="w-full pt-6 pb-2 px-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent"
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
                رقم الهاتف
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField('')}
                className="w-full pt-6 pb-2 px-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent"
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
                className="w-full pt-6 pb-2 px-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent"
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
                تاريخ المناسبة المفضل
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('date')}
                onBlur={() => setFocusedField('')}
                className="w-full pt-6 pb-2 px-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent"
                dir="rtl"
              />
              <Calendar className="absolute left-4 top-4 w-5 h-5 text-[#C49D2F]" />
            </div>
            
            {/* Guests */}
            <div className="relative">
              <label 
                className={`absolute right-4 transition-all duration-300 pointer-events-none ${
                  focusedField === 'guests' || formData.guests
                    ? 'top-2 text-xs text-[#C49D2F] font-medium'
                    : 'top-4 text-base text-[#766B5A]'
                }`}
              >
                عدد الضيوف المتوقع
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('guests')}
                onBlur={() => setFocusedField('')}
                className="w-full pt-6 pb-2 px-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent appearance-none"
                dir="rtl"
              >
                <option value=""></option>
                <option value="50-100">50-100 ضيف</option>
                <option value="100-200">100-200 ضيف</option>
                <option value="200-300">200-300 ضيف</option>
                <option value="300+">300+ ضيف</option>
              </select>
              <Users className="absolute left-4 top-4 w-5 h-5 text-[#C49D2F]" />
            </div>
            
            {/* Occasion */}
            <div className="relative">
              <label 
                className={`absolute right-4 transition-all duration-300 pointer-events-none ${
                  focusedField === 'occasion' || formData.occasion
                    ? 'top-2 text-xs text-[#C49D2F] font-medium'
                    : 'top-4 text-base text-[#766B5A]'
                }`}
              >
                نوع المناسبة
              </label>
              <select
                name="occasion"
                value={formData.occasion}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('occasion')}
                onBlur={() => setFocusedField('')}
                className="w-full pt-6 pb-2 px-4 border-2 border-[#E7DFD2] rounded-xl focus:border-[#C49D2F] focus:outline-none transition-all duration-300 text-right bg-transparent appearance-none"
                dir="rtl"
              >
                <option value=""></option>
                <option value="wedding">حفل زفاف</option>
                <option value="engagement">حفل خطوبة</option>
                <option value="corporate">مناسبة تجارية</option>
                <option value="birthday">عيد ميلاد</option>
                <option value="other">أخرى</option>
              </select>
            </div>
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-12 py-4 bg-[#C49D2F] text-white rounded-xl text-xl font-bold tracking-wider transition-all duration-500 hover:shadow-2xl hover:shadow-[#C49D2F]/30 hover:scale-105 flex items-center justify-center space-x-3"
          >
            <Crown className="w-6 h-6 ml-3" />
            <span>احجز موعدك الآن</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReservationCTA;