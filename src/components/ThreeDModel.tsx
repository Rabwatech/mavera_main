'use client'

import React from 'react';
import { Image, Play } from 'lucide-react';

interface ThreeDModelProps {
  modelPath: string;
  title: string;
  description: string;
}

export default function ThreeDModel({ title, description }: Omit<ThreeDModelProps, 'modelPath'>) {
  return (
    <div className="bg-white rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.12)] p-12 md:p-16 text-center">
      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#C49D2F] to-[#D4A935] rounded-full flex items-center justify-center mb-8">
        <Image className="w-16 h-16 text-white" />
      </div>
      
      <h3 className="text-3xl md:text-4xl font-light text-[#2D2926] mb-6 tracking-wide">
        {title}
      </h3>
      
      <p className="text-[#766B5A] text-lg md:text-xl leading-relaxed font-light mb-8">
        {description}
      </p>
      
      <div className="inline-flex items-center justify-center px-8 py-4 bg-[#C49D2F] text-white rounded-full text-lg font-medium transition-all duration-300 hover:bg-[#D4A935] hover:scale-105">
        <Play className="w-5 h-5 mr-2" />
        عرض النموذج
      </div>
      
      <p className="text-sm text-[#766B5A] mt-4 opacity-70">
        النموذج ثلاثي الأبعاد سيتم إضافته قريباً
      </p>
    </div>
  );
} 