'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react'

interface InteractiveCalendarProps {
  onDateSelect: (date: string) => void
  bookedDates?: string[]
  selectedDate?: string
}

export default function InteractiveCalendar({
  onDateSelect,
  bookedDates = [],
  selectedDate = ''
}: InteractiveCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  // Arabic month names
  const arabicMonths = [
    'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
  ]

  // Arabic day names
  const arabicDays = ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت']

  // Generate calendar days
  const generateCalendarDays = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    
    const firstDay = new Date(year, month, 1)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())
    
    const days = []
    const currentDate = new Date()
    
    for (let i = 0; i < 42; i++) {
      const dayDate = new Date(startDate)
      dayDate.setDate(startDate.getDate() + i)
      
      const isCurrentMonth = dayDate.getMonth() === month
      const isToday = dayDate.toDateString() === currentDate.toDateString()
      const isPast = dayDate < new Date(currentDate.setHours(0, 0, 0, 0))
      const isBooked = bookedDates.includes(dayDate.toISOString().split('T')[0])
      const isSelected = selectedDate === dayDate.toISOString().split('T')[0]
      
      days.push({
        date: dayDate,
        day: dayDate.getDate(),
        isCurrentMonth,
        isToday,
        isPast,
        isBooked,
        isSelected
      })
    }
    
    return days
  }

  const calendarDays = generateCalendarDays(currentMonth)

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const handleDateClick = (day: { isPast: boolean; isBooked: boolean; isCurrentMonth: boolean; date: Date }) => {
    if (day.isPast || day.isBooked || !day.isCurrentMonth) return
    
    const dateString = day.date.toISOString().split('T')[0]
    onDateSelect(dateString)
  }

  const getDayClasses = (day: { isCurrentMonth: boolean; isPast: boolean; isBooked: boolean; isSelected: boolean; isToday: boolean }) => {
    let classes = 'w-12 h-12 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200 cursor-pointer'
    
    if (!day.isCurrentMonth) {
      classes += ' text-gray-400 cursor-not-allowed'
    } else if (day.isPast) {
      classes += ' bg-gray-600 text-gray-400 cursor-not-allowed'
    } else if (day.isBooked) {
      classes += ' bg-red-500/20 text-red-400 cursor-not-allowed border border-red-500/30'
    } else if (day.isSelected) {
      classes += ' bg-gradient-to-br from-[#C49D2F] to-[#D4A935] text-white shadow-lg scale-105 ring-2 ring-[#C49D2F]/30'
    } else if (day.isToday) {
      classes += ' bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-900 ring-2 ring-amber-300 hover:scale-105'
    } else {
      classes += ' bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-900 hover:scale-105 hover:shadow-lg'
    }
    
    return classes
  }

  return (
    <div className="bg-white rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.12)] p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <CalendarIcon className="w-8 h-8 text-[#C49D2F]" />
          <h3 className="text-2xl font-light text-[#2D2926]">اختر التاريخ</h3>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={goToPreviousMonth}
            className="w-10 h-10 rounded-full bg-[#F1EAE3] hover:bg-[#C49D2F] hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <h4 className="text-xl font-medium text-[#2D2926]">
              {arabicMonths[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h4>
          </div>
          
          <button
            onClick={goToNextMonth}
            className="w-10 h-10 rounded-full bg-[#F1EAE3] hover:bg-[#C49D2F] hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {arabicDays.map((day, index) => (
          <div
            key={index}
            className="h-12 flex items-center justify-center text-sm font-medium text-[#766B5A]"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {calendarDays.map((day, index) => (
          <button
            key={index}
            onClick={() => handleDateClick(day)}
            className={getDayClasses(day)}
            disabled={day.isPast || day.isBooked || !day.isCurrentMonth}
          >
            {day.day}
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-8 pt-6 border-t border-[#E7DFD2]">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-amber-400 to-yellow-500"></div>
            <span className="text-[#766B5A]">متاح</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded bg-red-500/20 border border-red-500/30"></div>
            <span className="text-[#766B5A]">محجوز</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-[#C49D2F] to-[#D4A935]"></div>
            <span className="text-[#766B5A]">محدد</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded bg-gray-600"></div>
            <span className="text-[#766B5A]">ماضي</span>
          </div>
        </div>
      </div>

      {/* Selected Date Display */}
      {selectedDate && (
        <div className="mt-6 p-4 bg-gradient-to-r from-[#C49D2F]/10 to-[#D4A935]/10 rounded-xl border border-[#C49D2F]/20">
          <div className="text-center">
            <p className="text-[#766B5A] text-sm mb-1">التاريخ المحدد:</p>
            <p className="text-[#2D2926] font-medium">
              {new Date(selectedDate).toLocaleDateString('ar-SA', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      )}
    </div>
  )
} 