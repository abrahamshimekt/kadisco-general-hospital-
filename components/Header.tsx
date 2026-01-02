'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState<'en' | 'am'>('en')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: language === 'en' ? 'About' : 'ስለ እኛ' },
    { href: '#services', label: language === 'en' ? 'Services' : 'አገልግሎቶች' },
    { href: '#maternity', label: language === 'en' ? 'Maternity' : 'ወሊድ' },
    { href: '#facilities', label: language === 'en' ? 'Facilities' : 'መገልገያዎች' },
    { href: '#contact', label: language === 'en' ? 'Contact' : 'አድራሻ' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-dark-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>{language === 'en' ? 'Open 24 Hours' : '24 ሰዓት ክፍት'}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" />
              <span>Gerji (46 Mazoria), Addis Ababa</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+251116298902" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+251 11 629 8902</span>
            </a>
            {/* Language Toggle */}
            <div className="lang-toggle ml-4">
              <button
                onClick={() => setLanguage('en')}
                className={language === 'en' ? 'active' : ''}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('am')}
                className={language === 'am' ? 'active' : ''}
              >
                አማ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Kadisco General Hospital Logo"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
                priority
              />
              <div className="hidden sm:block">
                <h1 className="text-lg font-heading font-bold text-dark-900 leading-tight">
                  Kadisco General Hospital
                </h1>
                <p className="text-xs text-dark-600 font-amharic">ካዲስኮ ጠቅላላ ሆስፒታል</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-dark-700 hover:text-secondary font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+251116298902"
                className="emergency-badge flex items-center gap-2 px-4 py-2.5 rounded-full text-white font-semibold text-sm"
              >
                <Phone className="w-4 h-4" />
                {language === 'en' ? 'Emergency' : 'አደጋ'}
              </a>
              <a
                href="#contact"
                className="btn-shine bg-gradient-to-r from-primary to-secondary px-5 py-2.5 rounded-full text-dark-900 font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                {language === 'en' ? 'Book Appointment' : 'ቀጠሮ ይያዙ'}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-dark-900" />
              ) : (
                <Menu className="w-6 h-6 text-dark-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="bg-white border-t border-gray-100 px-4 py-6">
            {/* Mobile Language Toggle */}
            <div className="flex justify-center mb-6">
              <div className="lang-toggle">
                <button
                  onClick={() => setLanguage('en')}
                  className={language === 'en' ? 'active' : ''}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('am')}
                  className={language === 'am' ? 'active' : ''}
                >
                  አማርኛ
                </button>
              </div>
            </div>

            <nav className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-dark-700 hover:text-secondary font-medium transition-colors text-center"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-6 space-y-3">
              <a
                href="tel:+251116298902"
                className="emergency-badge flex items-center justify-center gap-2 w-full py-3 rounded-full text-white font-semibold"
              >
                <Phone className="w-5 h-5" />
                {language === 'en' ? 'Call Emergency' : 'አደጋ ጥሪ'}
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-shine flex items-center justify-center bg-gradient-to-r from-primary to-secondary w-full py-3 rounded-full text-dark-900 font-semibold"
              >
                {language === 'en' ? 'Book Appointment' : 'ቀጠሮ ይያዙ'}
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 text-center text-sm text-dark-600">
              <p className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-secondary-600" />
                {language === 'en' ? 'Open 24 Hours' : '24 ሰዓት ክፍት'}
              </p>
              <p className="mt-2">Gerji (46 Mazoria), Addis Ababa</p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

