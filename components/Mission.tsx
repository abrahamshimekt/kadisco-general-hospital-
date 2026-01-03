'use client'

import { Target, Eye, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Mission() {
  const items = [
    {
      icon: Target,
      title: 'Our Mission',
      titleAm: 'ተልዕኮአችን',
      description: 'To provide accessible, high-quality healthcare services to the community with compassion and professionalism.',
      color: 'from-primary to-primary-600',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      titleAm: 'ራዕያችን',
      description: 'To be the most efficient, competent, and courteous provider of comprehensive healthcare in Ethiopia.',
      color: 'from-secondary to-secondary-600',
    },
    {
      icon: TrendingUp,
      title: 'Our Goals',
      titleAm: 'ግባችን',
      description: 'Expand departments such as ophthalmology and telepathology. Improve patient-centered digital and medical services.',
      color: 'from-primary via-secondary to-secondary',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="mission-grid" width="5" height="5" patternUnits="userSpaceOnUse">
                <circle cx="0.5" cy="0.5" r="0.5" fill="white"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#mission-grid)"/>
          </svg>
        </div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white/80">Our Purpose</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Mission, Vision & Goals
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Guiding principles that drive our commitment to exceptional healthcare
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 mb-6 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  <item.icon className="w-8 h-8 text-dark-900" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/40 font-amharic text-sm mb-4">
                  {item.titleAm}
                </p>
                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative Line */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


