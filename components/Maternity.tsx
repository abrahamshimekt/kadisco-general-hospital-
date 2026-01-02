'use client'

import { Baby, Heart, Users, Home, Shield, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Maternity() {
  const features = [
    { icon: Baby, title: 'Natural Birth & C-Section', description: 'Both delivery options with expert care' },
    { icon: Users, title: 'OB Specialists & Midwives', description: 'Experienced team dedicated to you' },
    { icon: Home, title: 'Homelike Delivery Suites', description: 'Comfortable, private birthing rooms' },
    { icon: Heart, title: 'Prenatal & Postnatal Care', description: 'Comprehensive maternity support' },
    { icon: Shield, title: 'High-Risk Pregnancy Care', description: 'Specialized care for complex cases' },
    { icon: Clock, title: 'Prenatal Training', description: 'Classes to prepare for parenthood' },
  ]

  return (
    <section id="maternity" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl floating" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl floating" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 rounded-3xl p-8 lg:p-12 overflow-hidden">
              {/* Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="maternity-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="1" fill="white"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#maternity-pattern)"/>
                </svg>
              </div>

              {/* Glow Effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-primary/20 to-transparent blur-2xl"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-24 h-24 mx-auto mb-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 animate-pulse-slow"></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full"></div>
                  <div className="absolute inset-4 bg-dark-900 rounded-full flex items-center justify-center">
                    <Baby className="w-10 h-10 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-heading font-bold text-white text-center mb-4">
                  Maternity & Women&apos;s Health
                </h3>
                <p className="text-white/60 text-center mb-8 max-w-md mx-auto">
                  State-of-the-art maternity wing with comprehensive care for mothers and newborns
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-2xl">
                    <div className="text-3xl font-bold text-primary mb-1">15+</div>
                    <div className="text-xs text-white/60">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-2xl">
                    <div className="text-3xl font-bold text-secondary mb-1">5000+</div>
                    <div className="text-xs text-white/60">Deliveries</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-2xl">
                    <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-xs text-white/60">Care Available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Testimonial */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white rounded-2xl shadow-xl p-5 max-w-xs">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-dark-900" />
                </div>
                <div>
                  <p className="text-sm text-dark-700 italic">&quot;Best maternity experience! The staff was so supportive.&quot;</p>
                  <p className="text-xs text-dark-500 mt-2">— Happy Mother</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Baby className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-dark-700">Special Care Unit</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 mb-6 leading-tight">
              Welcoming New Life with{' '}
              <span className="text-secondary-700">Expert Care</span>
            </h2>

            <p className="text-lg text-dark-600 mb-10 leading-relaxed">
              Our maternity wing is designed to provide a safe, comfortable, and supportive environment 
              for expectant mothers. From prenatal care to delivery and beyond, our dedicated team 
              ensures the best outcomes for you and your baby.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-dark-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#contact"
                className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full text-dark-900 font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                <Baby className="w-5 h-5" />
                Schedule Prenatal Visit
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

