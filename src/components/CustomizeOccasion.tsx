import React, { useState } from 'react';

const CustomizeOccasion = () => {
  const [selectedOccasion, setSelectedOccasion] = useState('wedding');
  const [selectedGuests, setSelectedGuests] = useState('100-200');
  const [selectedColors, setSelectedColors] = useState('gold');

  const occasions = [
    { value: 'wedding', label: 'حفل زفاف' },
    { value: 'engagement', label: 'حفل خطوبة' },
    { value: 'corporate', label: 'مناسبة تجارية' },
    { value: 'birthday', label: 'عيد ميلاد' }
  ];

  const guestCounts = [
    { value: '50-100', label: '50-100 ضيف' },
    { value: '100-200', label: '100-200 ضيف' },
    { value: '200-300', label: '200-300 ضيف' },
    { value: '300+', label: '300+ ضيف' }
  ];

  const colorThemes = [
    { value: 'gold', label: 'ذهبي كلاسيكي', preview: 'bg-gradient-to-r from-[#C49D2F] to-[#D4A935]' },
    { value: 'white', label: 'أبيض ملكي', preview: 'bg-gradient-to-r from-white to-gray-100' },
    { value: 'rose', label: 'وردي رومانسي', preview: 'bg-gradient-to-r from-pink-200 to-rose-300' },
    { value: 'navy', label: 'كحلي أنيق', preview: 'bg-gradient-to-r from-blue-900 to-blue-700' }
  ];

  const getPreviewImage = () => {
    const baseImages = {
      wedding: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      engagement: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800',
      corporate: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800',
      birthday: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800'
    };
    return baseImages[selectedOccasion as keyof typeof baseImages];
  };

  return (
    <section className="py-24 bg-[#F1EAE3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2D2926]" style={{ fontFamily: 'serif' }}>
            صمم مناسبتك
          </h2>
          <div className="w-24 h-0.5 bg-[#C49D2F] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Preview Image */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={getPreviewImage()}
                alt="Preview"
                className="w-full h-96 md:h-[500px] object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Color Overlay */}
              <div className={`absolute inset-0 ${colorThemes.find(c => c.value === selectedColors)?.preview} opacity-20 mix-blend-multiply transition-all duration-700`}></div>
              
              {/* Guest Count Indicator */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-[#2D2926] font-medium">{guestCounts.find(g => g.value === selectedGuests)?.label}</span>
              </div>
            </div>
          </div>
          
          {/* Customization Options */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Occasion Type */}
            <div>
              <label className="block text-xl font-bold mb-4 text-[#2D2926]" style={{ fontFamily: 'serif' }}>
                نوع المناسبة
              </label>
              <div className="grid grid-cols-2 gap-3">
                {occasions.map((occasion) => (
                  <button
                    key={occasion.value}
                    onClick={() => setSelectedOccasion(occasion.value)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-right ${
                      selectedOccasion === occasion.value
                        ? 'border-[#C49D2F] bg-[#C49D2F]/10 shadow-lg'
                        : 'border-[#E7DFD2] bg-white hover:border-[#C49D2F]/50'
                    }`}
                  >
                    <span className="font-medium text-[#2D2926]">{occasion.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Guest Count */}
            <div>
              <label className="block text-xl font-bold mb-4 text-[#2D2926]" style={{ fontFamily: 'serif' }}>
                عدد الضيوف
              </label>
              <div className="grid grid-cols-2 gap-3">
                {guestCounts.map((count) => (
                  <button
                    key={count.value}
                    onClick={() => setSelectedGuests(count.value)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-right ${
                      selectedGuests === count.value
                        ? 'border-[#C49D2F] bg-[#C49D2F]/10 shadow-lg'
                        : 'border-[#E7DFD2] bg-white hover:border-[#C49D2F]/50'
                    }`}
                  >
                    <span className="font-medium text-[#2D2926]">{count.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Color Theme */}
            <div>
              <label className="block text-xl font-bold mb-4 text-[#2D2926]" style={{ fontFamily: 'serif' }}>
                الألوان المفضلة
              </label>
              <div className="grid grid-cols-2 gap-3">
                {colorThemes.map((theme) => (
                  <button
                    key={theme.value}
                    onClick={() => setSelectedColors(theme.value)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-right ${
                      selectedColors === theme.value
                        ? 'border-[#C49D2F] bg-[#C49D2F]/10 shadow-lg'
                        : 'border-[#E7DFD2] bg-white hover:border-[#C49D2F]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-[#2D2926]">{theme.label}</span>
                      <div className={`w-6 h-6 rounded-full ${theme.preview} border border-gray-200`}></div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeOccasion;