import React, { useState, useRef } from 'react'
import {
  GraduationCap,
  BookOpen,
  HardHat,
  Briefcase,
  ArrowRight,
  Shield,
  CheckCircle2,
  Star,
  ExternalLink,
  Award,
  BookMarked,
  Lightbulb,
  Target,
  Trophy,
  Users,
  Sparkles,
  Atom,
  FlaskConical,
} from 'lucide-react'
const LOGO_DATA_URL = 'https://kti.edu.iq/photo/kti_52_0.png'
const BACKGROUND_IMAGE = 'https://kti.edu.iq/photo/kti_53_01702585603.jpg'
const KTI_WEBSITE = 'https://kti.edu.iq'
interface SelectionPageProps {
  onSelect: (type: 'zansi' | 'wezhay' | 'peshassazi' | 'bazrgani') => void
}
export const SelectionPage: React.FC<SelectionPageProps> = ({ onSelect }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const departmentSectionRef = useRef<HTMLDivElement>(null)
  const categories = [
    {
      id: 'zansi' as const,
      title: 'زانستی',
      details: 'بۆ قوتابیانی لقی زانست',
      icon: GraduationCap,
      gradient: 'from-blue-500/20 via-blue-400/10 to-transparent',
      iconColor: 'text-blue-400',
      borderGlow: 'group-hover:shadow-blue-500/50',
      bgGlow: 'from-blue-500/10 to-blue-600/5',
    },
    {
      id: 'wezhay' as const,
      title: 'وێژەیی',
      details: 'بۆ قوتابیانی لقی ئەدەبی',
      icon: BookOpen,
      gradient: 'from-purple-500/20 via-purple-400/10 to-transparent',
      iconColor: 'text-purple-400',
      borderGlow: 'group-hover:shadow-purple-500/50',
      bgGlow: 'from-purple-500/10 to-purple-600/5',
    },
    {
      id: 'peshassazi' as const,
      title: 'پیشەسازی',
      details: 'بۆ قوتابیانی لقی پیشەیی',
      icon: HardHat,
      gradient: 'from-emerald-500/20 via-emerald-400/10 to-transparent',
      iconColor: 'text-emerald-400',
      borderGlow: 'group-hover:shadow-emerald-500/50',
      bgGlow: 'from-emerald-500/10 to-emerald-600/5',
    },
    {
      id: 'bazrgani' as const,
      title: 'بازرگانی',
      details: 'بۆ قوتابیانی لقی بازرگانی',
      icon: Briefcase,
      gradient: 'from-amber-500/20 via-amber-400/10 to-transparent',
      iconColor: 'text-amber-400',
      borderGlow: 'group-hover:shadow-amber-500/50',
      bgGlow: 'from-amber-500/10 to-amber-600/5',
    },
  ]
  const handleLearnMore = () => {
    window.open(KTI_WEBSITE, '_blank', 'noopener,noreferrer')
  }
  const scrollToDepartments = () => {
    departmentSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  return (
    <div
      className="min-h-screen w-full bg-slate-950 relative overflow-x-hidden"
      dir="rtl"
    >
      {/* Background Image with Enhanced Overlay */}
      <div className="fixed inset-0 z-0">
        <img
          src={BACKGROUND_IMAGE}
          alt="Kurdistan Technical Institute"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/80"></div>
      </div>
      {/* Institute-Themed Decorative Elements */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
        {/* Floating Institute Icons */}
        <div className="absolute top-[10%] left-[5%] text-blue-400/10 animate-float-slow">
          <GraduationCap size={80} strokeWidth={1.5} />
        </div>
        <div className="absolute top-[15%] right-[8%] text-purple-400/10 animate-float-slower">
          <BookMarked size={60} strokeWidth={1.5} />
        </div>
        <div className="absolute top-[40%] left-[10%] text-emerald-400/10 animate-float">
          <Award size={70} strokeWidth={1.5} />
        </div>
        <div className="absolute top-[60%] right-[12%] text-amber-400/10 animate-float-slowest">
          <Trophy size={65} strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-[20%] left-[15%] text-blue-400/10 animate-float-slow">
          <Lightbulb size={55} strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-[30%] right-[6%] text-purple-400/10 animate-float-slower">
          <Target size={75} strokeWidth={1.5} />
        </div>
        <div className="absolute top-[25%] right-[25%] text-emerald-400/10 animate-float">
          <Users size={50} strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-[40%] left-[20%] text-amber-400/10 animate-float-slowest">
          <Atom size={60} strokeWidth={1.5} />
        </div>
        <div className="absolute top-[50%] right-[20%] text-blue-400/10 animate-float-slow">
          <FlaskConical size={55} strokeWidth={1.5} />
        </div>
        {/* Geometric Shapes */}
        <div className="absolute top-[20%] left-[30%] w-32 h-32 border-2 border-blue-400/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-[70%] right-[25%] w-24 h-24 border-2 border-purple-400/10 rotate-45 animate-float-slower"></div>
        <div className="absolute bottom-[15%] left-[35%] w-28 h-28 border-2 border-emerald-400/10 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute top-[35%] right-[40%] w-20 h-20 border-2 border-amber-400/10 rounded-full animate-pulse-slower"></div>
        {/* Sparkle Elements */}
        <div className="absolute top-[18%] left-[18%] text-blue-300/15 animate-pulse">
          <Sparkles size={30} />
        </div>
        <div className="absolute top-[55%] right-[18%] text-purple-300/15 animate-pulse-slow">
          <Sparkles size={25} />
        </div>
        <div className="absolute bottom-[35%] left-[25%] text-emerald-300/15 animate-pulse-slower">
          <Sparkles size={28} />
        </div>
        {/* Small Floating Particles */}
        {Array.from({
          length: 40,
        }).map((_, i) => {
          const size = 2 + Math.random() * 4
          const top = Math.random() * 100
          const left = Math.random() * 100
          const animationDuration = 20 + Math.random() * 40
          const opacity = 0.05 + Math.random() * 0.15
          const colors = [
            'bg-blue-400',
            'bg-purple-400',
            'bg-emerald-400',
            'bg-amber-400',
          ]
          const color = colors[Math.floor(Math.random() * colors.length)]
          return (
            <div
              key={i}
              className={`absolute rounded-full ${color}`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                opacity: opacity,
                animation: `float ${animationDuration}s ease-in-out infinite`,
              }}
            />
          )
        })}
        {/* Circuit-like Lines */}
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0 opacity-[0.03]"
        >
          <defs>
            <linearGradient
              id="instituteGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>
          {Array.from({
            length: 8,
          }).map((_, i) => {
            const startX = Math.random() * 100
            const startY = Math.random() * 100
            const endX = Math.random() * 100
            const endY = Math.random() * 100
            return (
              <line
                key={i}
                x1={`${startX}%`}
                y1={`${startY}%`}
                x2={`${endX}%`}
                y2={`${endY}%`}
                stroke="url(#instituteGradient)"
                strokeWidth="1"
                strokeDasharray="4,8"
                className="animate-pulse-slow"
              />
            )
          })}
        </svg>
      </div>
      {/* Hero Section with Enhanced Layout */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-4xl mx-auto">
          {/* Hero Content with Better Spacing */}
          <div className="space-y-6 md:space-y-8 text-center">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-2.5 bg-blue-500/20 backdrop-blur-xl px-4 py-2 rounded-full border border-blue-400/30 shadow-lg shadow-blue-500/10">
              <Star size={16} className="text-blue-400" fill="currentColor" />
              <span className="text-blue-100 text-sm md:text-base font-medium tracking-wide">
                پەیمانگای تەکنیکی کوردستان
              </span>
            </div>
            {/* Enhanced Main Heading */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                فۆڕمی تۆمارکردن
              </h1>
            </div>
            {/* Enhanced Description */}
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-light px-4 lg:px-0">
              دەرفەتی خوێندن لە یەکێک لە باشترین پەیمانگاکانی هەرێمی کوردستان.
              جۆری خوێندنەکەت هەڵبژێرە و هەنگاوی یەکەم بنێ بۆ داهاتوویەکی گەشاوە.
            </p>
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center pt-4">
              <button
                onClick={scrollToDepartments}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 text-base md:text-lg transform hover:scale-105"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative">دەست پێبکە</span>
                <ArrowRight
                  size={20}
                  className="relative rotate-180 group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
              <button
                onClick={handleLearnMore}
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white font-semibold py-4 px-10 rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-3 text-base md:text-lg hover:shadow-xl hover:shadow-white/10 transform hover:scale-105"
              >
                <span>زیاتر بزانە</span>
                <ExternalLink
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Enhanced Department Cards Section */}
      <section
        ref={departmentSectionRef}
        className="relative z-10 py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* Enhanced Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              بەشەکان هەڵبژێرە
            </h3>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              لقی گونجاو هەڵبژێرە و بەشداری بکە لە داهاتوویەکی درەوشاوە
            </p>
          </div>
          {/* Enhanced Department Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {categories.map((category) => {
              const Icon = category.icon
              const isHovered = hoveredCard === category.id
              return (
                <button
                  key={category.id}
                  onClick={() => onSelect(category.id)}
                  onMouseEnter={() => setHoveredCard(category.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative"
                >
                  <div
                    className={`relative bg-white/5 backdrop-blur-2xl rounded-2xl p-6 md:p-7 border-2 border-white/10 transition-all duration-500 hover:bg-white/10 hover:scale-105 ${category.borderGlow} hover:shadow-2xl h-full flex flex-col`}
                  >
                    {/* Enhanced gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>
                    {/* Glow effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-br ${category.bgGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>
                    <div className="relative z-10 flex flex-col h-full text-right">
                      {/* Enhanced Icon Container */}
                      <div className="inline-flex mb-6">
                        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                          <Icon
                            size={32}
                            className={category.iconColor}
                            strokeWidth={2}
                          />
                        </div>
                      </div>
                      {/* Content with better spacing */}
                      <div className="space-y-3 flex-grow">
                        <h4 className="text-xl md:text-2xl font-black text-white tracking-wide group-hover:text-shadow-lg">
                          {category.title}
                        </h4>
                        <p className="text-base text-gray-300 font-light leading-relaxed">
                          {category.details}
                        </p>
                      </div>
                      {/* Enhanced Arrow indicator */}
                      <div className="flex items-center justify-end pt-6 mt-auto">
                        <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors duration-300">
                          <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            هەڵبژاردن
                          </span>
                          <ArrowRight
                            size={20}
                            className="transform rotate-180 group-hover:translate-x-2 transition-all duration-300"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Enhanced hover indicator */}
                    {isHovered && (
                      <div className="absolute top-4 left-4 animate-pulse">
                        <CheckCircle2
                          size={24}
                          className={category.iconColor}
                        />
                      </div>
                    )}
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}