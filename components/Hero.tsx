'use client'

import { Phone, Calendar, MapPin, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center hero-pattern overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        {/* Medical Cross Decorations */}
        <svg className="absolute top-32 right-20 w-16 h-16 text-primary/20 floating" style={{ animationDelay: '1s' }} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
        </svg>
        <svg className="absolute bottom-32 left-20 w-12 h-12 text-secondary/20 floating" style={{ animationDelay: '3s' }} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
            <span className="text-white/90 text-sm font-medium">24/7 Emergency Services Available</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Comprehensive Healthcare{' '}
            <span className="relative inline-block">
              <span className="gradient-text-light">You Can Trust</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C47 2 153 2 199 5.5" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop offset="0%" stopColor="#eded50"/>
                    <stop offset="100%" stopColor="#10da1e"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 mb-12 font-light"
          >
            24/7 Medical Services • Advanced Diagnostics • Compassionate Care
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="tel:+251116298902"
              className="group flex items-center gap-3 emergency-badge px-8 py-4 rounded-full text-white font-semibold text-lg transition-transform hover:scale-105"
            >
              <div className="relative">
                <Phone className="w-5 h-5" />
                <div className="absolute inset-0 animate-ping">
                  <Phone className="w-5 h-5 opacity-50" />
                </div>
              </div>
              Call Emergency
            </a>
            
            <a
              href="#contact"
              className="btn-shine flex items-center gap-3 bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full text-dark-900 font-semibold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>
            
            <a
              href="#contact"
              className="flex items-center gap-3 glass px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-white/20 transition-all"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {[
              { value: '15+', label: 'Years of Service' },
              { value: '50+', label: 'Medical Specialists' },
              { value: '24/7', label: 'Emergency Care' },
              { value: '3.7★', label: 'Patient Rating' },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-4 md:p-6 text-center"
              >
                <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

