'use client'

import { motion } from 'framer-motion'
import {
  Clock,
  Users,
  Building2,
  Zap,
  Ambulance,
  Heart,
  CreditCard,
  Award,
} from 'lucide-react'

const reasons = [
  {
    icon: Clock,
    title: '15+ Years of Service',
    description: 'Trusted healthcare provider since 2007, serving thousands of patients.',
  },
  {
    icon: Users,
    title: 'Expert Medical Team',
    description: 'Experienced doctors, nurses, and specialists dedicated to your care.',
  },
  {
    icon: Building2,
    title: 'Modern Facilities',
    description: 'Clean, spacious, and well-equipped medical facility.',
  },
  {
    icon: Zap,
    title: 'Advanced Diagnostics',
    description: 'State-of-the-art medical equipment for accurate diagnosis.',
  },
  {
    icon: Ambulance,
    title: '24/7 Emergency Services',
    description: 'Round-the-clock emergency care with ambulance service.',
  },
  {
    icon: Heart,
    title: 'Women-Owned Institution',
    description: 'Proudly women-owned healthcare institution.',
  },
  {
    icon: CreditCard,
    title: 'Flexible Payment',
    description: 'Credit facilities for companies and insurance accepted.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Committed to maintaining highest standards of healthcare.',
  },
]

export default function WhyChoose() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary/5 to-transparent"></div>
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
          <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-dark-700">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 mb-4">
            Why Choose <span className="text-secondary-700">Kadisco Hospital</span>?
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Experience the difference of patient-centered care backed by expertise and modern facilities
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-300 card-hover">
                {/* Icon */}
                <div className="relative w-14 h-14 mb-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <reason.icon className="w-7 h-7 text-secondary group-hover:text-primary transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-dark-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-dark-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-br from-dark-900 to-dark-800 rounded-3xl p-8 sm:p-10">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                Ready to Experience Quality Care?
              </h3>
              <p className="text-white/60">
                Book an appointment today or visit our facility.
              </p>
            </div>
            <a
              href="#contact"
              className="btn-shine flex-shrink-0 bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full text-dark-900 font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

