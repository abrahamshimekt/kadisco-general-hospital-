'use client'

import { motion } from 'framer-motion'
import {
  Car,
  Accessibility,
  HeartPulse,
  Ambulance,
  Pill,
  FlaskConical,
  Scan,
  UtensilsCrossed,
  Shirt,
} from 'lucide-react'

const facilities = [
  { icon: Car, title: 'Free Parking', description: 'Ample parking space for patients and visitors' },
  { icon: Accessibility, title: 'Wheelchair Accessible', description: 'Accessible entrance and parking facilities' },
  { icon: HeartPulse, title: 'ICU Unit', description: '3-bed ICU with anesthesiologist supervision' },
  { icon: Ambulance, title: 'Ambulance Service', description: 'Equipped ambulance with trained staff' },
  { icon: Pill, title: 'In-House Pharmacy', description: 'Local & imported medicines available' },
  { icon: FlaskConical, title: 'Laboratory', description: 'Comprehensive lab testing services' },
  { icon: Scan, title: 'Radiology', description: 'Advanced imaging and diagnostic services' },
  { icon: UtensilsCrossed, title: 'Catering Services', description: 'Quality meals for admitted patients' },
  { icon: Shirt, title: 'Laundry Services', description: 'Clean linens and patient care' },
]

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 medical-pattern opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm font-medium text-dark-700">Our Facilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 mb-4">
            Facilities & <span className="text-secondary-700">Amenities</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Modern facilities designed for your comfort and optimal care
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:border-secondary/30 shadow-sm hover:shadow-lg transition-all duration-300">
                {/* Icon */}
                <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors flex-shrink-0">
                  <facility.icon className="w-6 h-6 text-secondary" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-dark-900 mb-1 group-hover:text-secondary transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-dark-600">
                    {facility.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 24/7 Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-dark-900 to-dark-800 rounded-full px-8 py-4">
            <div className="relative">
              <div className="w-4 h-4 bg-secondary rounded-full"></div>
              <div className="absolute inset-0 w-4 h-4 bg-secondary rounded-full animate-ping"></div>
            </div>
            <span className="text-white font-semibold text-lg">
              Open 24 Hours — Emergency Services Always Available
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

