'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Ambulance,
  Baby,
  Stethoscope,
  Syringe,
  Bone,
  Sparkles,
  SmilePlus,
  Ear,
  Scan,
  FlaskConical,
  HeartPulse,
  Activity,
  Brain,
  Pill,
  Heart,
  ChevronRight,
} from 'lucide-react'

const services = [
  { icon: Ambulance, name: 'Emergency & 24-Hour Care', description: 'Round-the-clock emergency medical services with trained staff' },
  { icon: Baby, name: 'Maternity & OB/GYN', description: 'Normal & high-risk deliveries with expert OB specialists' },
  { icon: Stethoscope, name: 'Pediatrics & Neonatal Care', description: 'Specialized care for infants, children, and adolescents' },
  { icon: HeartPulse, name: 'Internal Medicine', description: 'Comprehensive diagnosis and treatment of adult diseases' },
  { icon: Syringe, name: 'General & Specialized Surgery', description: 'Advanced surgical procedures by experienced surgeons' },
  { icon: Bone, name: 'Orthopedics & Physiotherapy', description: 'Treatment of musculoskeletal conditions and rehabilitation' },
  { icon: Sparkles, name: 'Dermatology & Skin Care', description: 'Skin condition diagnosis, treatment, and cosmetic care' },
  { icon: SmilePlus, name: 'Dental Services', description: 'Complete dental care from checkups to specialized treatments' },
  { icon: Ear, name: 'ENT & Head & Neck Surgery', description: 'Ear, nose, throat, and related surgical services' },
  { icon: Scan, name: 'Radiology & Imaging', description: 'Advanced diagnostic imaging including X-ray and ultrasound' },
  { icon: FlaskConical, name: 'Laboratory Services', description: 'Comprehensive lab testing with quick and accurate results' },
  { icon: Activity, name: 'ICU & Critical Care', description: 'Intensive monitoring and care for critically ill patients' },
  { icon: Heart, name: 'Urology & Gastroenterology', description: 'Specialized care for urinary and digestive system disorders' },
  { icon: Pill, name: 'Anesthesia & Pain Management', description: 'Expert anesthesia services and chronic pain treatment' },
  { icon: Heart, name: 'Breast Clinic', description: 'Dedicated breast health screening and treatment services' },
  { icon: Brain, name: 'Spinal & Neuro Surgery', description: 'Advanced neurological and spinal surgical procedures' },
]

export default function Services() {
  const [showAll, setShowAll] = useState(false)
  const displayedServices = showAll ? services : services.slice(0, 8)

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-secondary/5 to-transparent pointer-events-none"></div>

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
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <span className="text-sm font-medium text-dark-700">Medical Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 mb-4">
            Core Medical <span className="text-secondary-700">Services</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Comprehensive healthcare services delivered by experienced specialists using modern medical equipment
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div className="service-card h-full p-6 shadow-sm hover:shadow-xl transition-all duration-300 card-hover">
                  {/* Icon */}
                  <div className="relative w-14 h-14 mb-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform"></div>
                    <div className="relative w-full h-full bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <service.icon className="w-7 h-7 text-secondary group-hover:text-primary transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-dark-900 mb-2 group-hover:text-secondary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-dark-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full text-dark-900 font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            {showAll ? 'Show Less' : 'View All Departments'}
            <ChevronRight className={`w-5 h-5 transition-transform ${showAll ? 'rotate-90' : ''}`} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

