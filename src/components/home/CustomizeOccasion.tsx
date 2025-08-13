import React, { useState } from 'react';
import { Crown, Users, Heart, Palette, ArrowRight, Sparkles, Star, CheckCircle } from 'lucide-react';

const CustomizeOccasion = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    occasion: '',
    guests: '',
    atmosphere: '',
    colors: ''
  });
  const [showResult, setShowResult] = useState(false);
  const [recommendedHall, setRecommendedHall] = useState<string | null>(null);

  const questions = [
    {
      id: 'occasion',
      icon: Crown,
      title: 'ما نوع المناسبة؟',
      subtitle: 'اختر نوع الحفل الذي تخطط له',
      options: [
        { value: 'wedding', label: 'حفل زفاف', description: 'يوم العمر الأجمل' },
        { value: 'engagement', label: 'حفل خطوبة', description: 'بداية القصة الجميلة' },
        { value: 'corporate', label: 'مناسبة تجارية', description: 'احتفالات الشركات' },
        { value: 'celebration', label: 'حفل صغير', description: 'مناسبات خاصة وحميمة' }
      ]
    },
    {
      id: 'guests',
      icon: Users,
      title: 'كم عدد الضيوف؟',
      subtitle: 'حدد العدد المتوقع للحضور',
      options: [
        { value: 'small', label: 'أقل من 100', description: 'حفل حميم ومريح' },
        { value: 'medium', label: '100-200 ضيف', description: 'حفل متوسط الحجم' },
        { value: 'large', label: '200-300 ضيف', description: 'حفل كبير ومميز' },
        { value: 'xlarge', label: 'أكثر من 300', description: 'حفل ملكي فخم' }
      ]
    },
    {
      id: 'atmosphere',
      icon: Heart,
      title: 'ما نوع الأجواء التي تفضلها؟',
      subtitle: 'اختر الطابع الذي يعكس شخصيتك',
      options: [
        { value: 'romantic', label: 'رومانسية', description: 'أجواء دافئة وحالمة' },
        { value: 'royal', label: 'ملكية', description: 'فخامة وأناقة كلاسيكية' },
        { value: 'modern', label: 'عصرية', description: 'تصميم أنيق ومعاصر' },
        { value: 'traditional', label: 'تراثية', description: 'أصالة وعراقة' }
      ]
    },
    {
      id: 'colors',
      icon: Palette,
      title: 'الألوان المحببة؟',
      subtitle: 'اختر لوحة الألوان المفضلة لديك',
      options: [
        { value: 'gold', label: 'ذهبي', description: 'فخامة وأناقة خالدة', color: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
        { value: 'rose', label: 'وردي', description: 'رومانسية ونعومة', color: 'bg-gradient-to-r from-pink-300 to-rose-400' },
        { value: 'white', label: 'أبيض', description: 'نقاء وبساطة راقية', color: 'bg-gradient-to-r from-gray-100 to-white' },
        { value: 'blue', label: 'أزرق', description: 'هدوء وأناقة ملكية', color: 'bg-gradient-to-r from-blue-400 to-blue-600' }
      ]
    }
  ];

  const halls = {
    hall1: {
      name: 'قاعة مافيرا الملكية',
      subtitle: 'للمناسبات الفاخرة والحفلات الكبيرة',
      description: 'قاعة فخمة تتسع لـ 500 ضيف مع تصميم ملكي أنيق وخدمات متكاملة تليق بأهم مناسباتكم.',
      features: ['تتسع لـ 500 ضيف', 'تصميم ملكي فاخر', 'إضاءة متطورة', 'خدمة VIP'],
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    hall2: {
      name: 'قاعة مافيرا الرومانسية',
      subtitle: 'للحفلات الحميمة والمناسبات الخاصة',
      description: 'قاعة أنيقة بتصميم رومانسي دافئ، مثالية للحفلات المتوسطة والمناسبات الحميمة.',
      features: ['تتسع لـ 200 ضيف', 'أجواء رومانسية', 'ديكور دافئ', 'خصوصية تامة'],
      image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    hall3: {
      name: 'قاعة مافيرا العصرية',
      subtitle: 'للمناسبات التجارية والحفلات المعاصرة',
      description: 'قاعة بتصميم عصري متطور، مجهزة بأحدث التقنيات للمناسبات التجارية والحفلات المعاصرة.',
      features: ['تتسع لـ 300 ضيف', 'تصميم عصري', 'تقنيات متطورة', 'مرونة في التخطيط'],
      image: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  };

  const calculateRecommendation = () => {
    // Simple logic to recommend halls based on answers
    // eslint-disable-next-line prefer-const
    let score = { hall1: 0, hall2: 0, hall3: 0 };

    // Occasion scoring
    if (answers.occasion === 'wedding') {
      score.hall1 += 3; score.hall2 += 2;
    } else if (answers.occasion === 'engagement') {
      score.hall2 += 3; score.hall1 += 1;
    } else if (answers.occasion === 'corporate') {
      score.hall3 += 3; score.hall1 += 1;
    } else {
      score.hall2 += 2; score.hall3 += 1;
    }

    // Guests scoring
    if (answers.guests === 'xlarge') {
      score.hall1 += 3;
    } else if (answers.guests === 'large') {
      score.hall1 += 2; score.hall3 += 1;
    } else if (answers.guests === 'medium') {
      score.hall2 += 2; score.hall3 += 2;
    } else {
      score.hall2 += 3;
    }

    // Atmosphere scoring
    if (answers.atmosphere === 'royal') {
      score.hall1 += 3;
    } else if (answers.atmosphere === 'romantic') {
      score.hall2 += 3;
    } else if (answers.atmosphere === 'modern') {
      score.hall3 += 3;
    } else {
      score.hall1 += 1; score.hall2 += 1;
    }

    // Colors scoring
    if (answers.colors === 'gold') {
      score.hall1 += 2; score.hall2 += 1;
    } else if (answers.colors === 'rose') {
      score.hall2 += 2;
    } else if (answers.colors === 'white') {
      score.hall1 += 1; score.hall3 += 1;
    } else {
      score.hall3 += 2;
    }

    // Find the hall with highest score
    const winner = Object.keys(score).reduce((a, b) => score[a as keyof typeof score] > score[b as keyof typeof score] ? a : b);
    return winner;
  };

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 500);
    } else {
      // Calculate recommendation
      const recommendation = calculateRecommendation();
      setRecommendedHall(recommendation);
      setTimeout(() => {
        setShowResult(true);
      }, 800);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({ occasion: '', guests: '', atmosphere: '', colors: '' });
    setShowResult(false);
    setRecommendedHall(null);
  };

  if (showResult && recommendedHall) {
    const hall = halls[recommendedHall as keyof typeof halls];
    return (
      <section className="py-32 bg-gradient-to-b from-[#FAF9F7] to-[#F8F6F2] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          {/* Result Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-8">
              <Sparkles className="w-8 h-8 text-[#C49D2F] animate-pulse" />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] mb-8 tracking-[0.05em]">
              القاعة المثالية لك
            </h2>
            
            <p className="text-xl text-[#766B5A] font-light max-w-2xl mx-auto leading-relaxed">
              بناءً على إجاباتك، وجدنا القاعة التي تناسب أحلامك تماماً
            </p>
          </div>

          {/* Result Card */}
          <div className="bg-white rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.12)] overflow-hidden animate-fade-in-scale">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-80 lg:h-auto overflow-hidden">
                <img
                  src={hall.image}
                  alt={hall.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Success Badge */}
                <div className="absolute top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">مطابقة مثالية</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-12 lg:p-16">
                <div className="flex items-center space-x-4 mb-8">
                  <Crown className="w-8 h-8 text-[#C49D2F]" />
                  <div>
                    <h3 className="text-3xl font-light text-[#2D2926] tracking-wide">
                      {hall.name}
                    </h3>
                    <p className="text-[#C49D2F] font-light mt-1">
                      {hall.subtitle}
                    </p>
                  </div>
                </div>
                
                <div className="w-24 h-px bg-[#C49D2F] mb-8"></div>
                
                <p className="text-lg text-[#766B5A] leading-relaxed mb-12 font-light">
                  {hall.description}
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-6 mb-12">
                  {hall.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-[#C49D2F] fill-current" />
                      <span className="text-[#766B5A] font-light">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group flex-1 relative px-8 py-4 bg-[#C49D2F] text-white rounded-xl font-medium tracking-wide transition-all duration-500 hover:shadow-[0_16px_64px_rgba(196,157,47,0.25)] hover:scale-105 overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center space-x-3">
                      <span>اطلع على تفاصيل القاعة</span>
                      <ArrowRight className="w-5 h-5" />
                    </span>
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
                  </button>
                  
                  <button 
                    onClick={resetQuiz}
                    className="flex-1 px-8 py-4 border-2 border-[#C49D2F] text-[#C49D2F] rounded-xl font-medium tracking-wide transition-all duration-300 hover:bg-[#C49D2F] hover:text-white"
                  >
                    جرب مرة أخرى
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <section className="py-32 bg-gradient-to-b from-[#FAF9F7] to-[#F8F6F2] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#C49D2F]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C49D2F]/2 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="w-8 h-8 text-[#C49D2F] animate-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extralight text-[#2D2926] mb-8 tracking-[0.05em]">
            اكتشف قاعتك المثالية
          </h2>
          
          <p className="text-xl text-[#766B5A] font-light max-w-2xl mx-auto leading-relaxed">
            أجب على بعض الأسئلة البسيطة ودع مافيرا توصي لك بالقاعة التي تناسب حلمك
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[#766B5A] font-light">السؤال {currentStep + 1} من {questions.length}</span>
            <span className="text-[#C49D2F] font-medium">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-[#E7DFD2] rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-[#C49D2F] to-[#D4A935] h-2 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.12)] p-12 md:p-16 animate-fade-in-scale">
          {/* Question Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto bg-[#F1EAE3] rounded-full flex items-center justify-center mb-8">
              <currentQuestion.icon className="w-10 h-10 text-[#C49D2F]" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-light text-[#2D2926] mb-4 tracking-wide">
              {currentQuestion.title}
            </h3>
            
            <p className="text-lg text-[#766B5A] font-light">
              {currentQuestion.subtitle}
            </p>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentQuestion.options.map((option, index) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
                className="group relative p-8 border-2 border-[#E7DFD2] rounded-xl transition-all duration-500 hover:border-[#C49D2F] hover:shadow-[0_8px_32px_rgba(196,157,47,0.15)] hover:-translate-y-2 text-right"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Color Preview for Colors Question */}
                {currentQuestion.id === 'colors' && 'color' in option && option.color && (
                  <div className={`absolute top-4 left-4 w-8 h-8 rounded-full ${option.color} border-2 border-white shadow-lg`}></div>
                )}
                
                <h4 className="text-xl font-medium text-[#2D2926] mb-3 group-hover:text-[#C49D2F] transition-colors duration-300">
                  {option.label}
                </h4>
                
                <p className="text-[#766B5A] font-light leading-relaxed">
                  {option.description}
                </p>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-[#C49D2F]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeOccasion;