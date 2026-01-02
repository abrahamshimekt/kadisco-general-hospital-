'use client'

import { Star, Award, Heart, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 medical-pattern opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-medium text-dark-700">About Our Hospital</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 mb-6 leading-tight">
              A Legacy of{' '}
              <span className="gradient-text">Compassionate Care</span>{' '}
              Since 2007
            </h2>

            <p className="text-lg text-dark-600 mb-8 leading-relaxed">
              Kadisco General Hospital is a well-established private hospital in Addis Ababa, 
              inaugurated in 2007 as part of the Kadisco Group. Located in Gerji (46 Mazoria), 
              the hospital delivers comprehensive, preventive, diagnostic, and curative healthcare 
              services through highly qualified medical professionals and modern facilities.
            </p>

            {/* Rating Card */}
            <div className="bg-gradient-to-br from-dark-900 to-dark-800 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="flex">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-6 h-6 text-primary fill-primary" />
                  ))}
                  <Star className="w-6 h-6 text-primary fill-primary/40" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">3.7 / 5</div>
                  <div className="text-white/60 text-sm">Based on 87+ Reviews</div>
                </div>
              </div>
              <p className="text-white/80 mt-4 text-sm">
                Trusted by thousands of patients for quality healthcare, maternity excellence, and surgical care.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Award, title: 'Women-Owned', desc: 'Healthcare institution' },
                { icon: Heart, title: 'Patient-Centered', desc: 'Compassionate approach' },
                { icon: Shield, title: 'Quality Assured', desc: 'Modern standards' },
                { icon: Star, title: 'Trusted', desc: '15+ years serving' },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-primary/10 transition-colors"
                >
                  <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
                    <feature.icon className="w-5 h-5 text-dark-900" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark-900">{feature.title}</div>
                    <div className="text-sm text-dark-600">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl opacity-20 blur-xl"></div>
              
              <div className="relative bg-gradient-to-br from-dark-900 to-dark-800 rounded-3xl p-8 overflow-hidden">
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)"/>
                  </svg>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center py-8">
                  {/* Hospital Logo */}
                  <div className="w-40 h-40 mx-auto mb-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse-slow opacity-30"></div>
                    <div className="absolute inset-2 bg-dark-900 rounded-full flex items-center justify-center overflow-hidden p-3">
                      <Image
                        src="/logo.png"
                        alt="Kadisco General Hospital Logo"
                        width={120}
                        height={120}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-white mb-4">
                    Kadisco General Hospital
                  </h3>
                  <p className="text-white/60 font-amharic text-lg mb-6">
                    ካዲስኮ ጠቅላላ ሆስፒታል
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-2xl font-bold text-primary">2007</div>
                      <div className="text-xs text-white/60">Established</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-2xl font-bold text-secondary">50+</div>
                      <div className="text-xs text-white/60">Specialists</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-xs text-white/60">Care</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-dark-900" />
                </div>
                <div>
                  <div className="font-bold text-dark-900">Certified</div>
                  <div className="text-sm text-dark-600">Healthcare Provider</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

