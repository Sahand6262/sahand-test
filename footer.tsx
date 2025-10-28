import React from 'react'
import {
  MapPin,
  PhoneCall,
  Mail,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  Globe,
  Code,
} from 'lucide-react'
export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <footer
      className="bg-gray-900 text-white relative overflow-hidden"
      dir="rtl"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern
            id="footer-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>
      {/* Main footer content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="pt-16 pb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
            {/* Logo and description */}
            <div>
              <div className="font-bold text-2xl flex items-center text-white relative group mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-blue-300/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center">
                  <span className="relative">
                    <span className="text-blue-400 relative z-10">
                      پەیمانگای تەکنیکی
                    </span>
                    <span className="relative z-10"> کوردستان</span>
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></span>
                  </span>
                </div>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                پەیمانگای تەکنیکی کوردستان یەکێکە لە باشترین دامەزراوە
                پەروەردەییەکانی هەرێمی کوردستان بۆ پەروەردەی تەکنیکی و پیشەیی
              </p>
              <div className="flex space-x-4 space-x-reverse">
                {[
                  {
                    icon: <Twitter size={20} />,
                    label: 'X',
                    href: 'https://x.com/ktiinstitute',
                  },
                  {
                    icon: <Facebook size={20} />,
                    label: 'Facebook',
                    href: 'https://www.facebook.com/ktiinstitute/',
                  },
                  {
                    icon: <Linkedin size={20} />,
                    label: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/kurdistan-technical-institute-b74240155',
                  },
                  {
                    icon: <Youtube size={20} />,
                    label: 'YouTube',
                    href: 'https://www.youtube.com/channel/UCQt_tYDwS_poB4Crjt_Dljg/videos',
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            {/* Contact info */}
            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                زانیاری پەیوەندی
                <span className="absolute -bottom-2 right-0 w-12 h-1 bg-blue-500 rounded-full"></span>
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex group">
                  <div className="mt-1 ml-3 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <MapPin size={16} />
                  </div>
                  <span className="group-hover:text-white transition-colors duration-300">
                    پەیمانگای تەکنیکی کوردستان - بەرزاییەکانی سلێمانی، هەرێمی
                    کوردستان - عێراق
                  </span>
                </li>
                <li className="flex items-center group">
                  <div className="ml-3 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <PhoneCall size={16} />
                  </div>
                  <span
                    className="group-hover:text-white transition-colors duration-300"
                    dir="ltr"
                  >
                    0772 911 2121
                  </span>
                </li>
                <li className="flex items-center group">
                  <div className="ml-3 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <PhoneCall size={16} />
                  </div>
                  <span
                    className="group-hover:text-white transition-colors duration-300"
                    dir="ltr"
                  >
                    0751 911 2121
                  </span>
                </li>
                <li className="flex items-center group">
                  <div className="ml-3 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <Mail size={16} />
                  </div>
                  <a
                    href="mailto:tomar@kti.edu.iq"
                    className="group-hover:text-white transition-colors duration-300"
                  >
                    tomar@kti.edu.iq
                  </a>
                </li>
                <li className="flex items-center group">
                  <div className="ml-3 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <Globe size={16} />
                  </div>
                  <a
                    href="https://www.kti.edu.iq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:text-white transition-colors duration-300"
                  >
                    www.kti.edu.iq
                  </a>
                </li>
              </ul>
            </div>
            {/* Created by section */}
            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                دروستراوە لە لایەن
                <span className="absolute -bottom-2 right-0 w-12 h-1 bg-blue-500 rounded-full"></span>
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center group">
                  <div className="ml-3 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <Code size={16} />
                  </div>
                  <span className="group-hover:text-white transition-colors duration-300 font-medium">
                    سەهەند ووریا
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="py-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © ٢٠٢٥ پەیمانگای تەکنیکی کوردستان. هەموو مافەکان پارێزراون.
          </p>
        </div>
      </div>
    </footer>
  )
}