'use client'

import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function EmergencyButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="tel:+251116298902"
        className="group flex items-center gap-3 emergency-badge px-5 py-4 rounded-full text-white font-semibold shadow-2xl hover:scale-105 transition-transform"
        aria-label="Call Emergency"
      >
        {/* Phone Icon with Pulse */}
        <div className="relative">
          <Phone className="w-6 h-6" />
          <div className="absolute inset-0">
            <Phone className="w-6 h-6 animate-ping opacity-50" />
          </div>
        </div>

        {/* Text - Hidden on mobile, shown on hover on desktop */}
        <span className="hidden sm:inline-block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
          Emergency
        </span>
      </a>

      {/* Tooltip for mobile */}
      <div className="absolute -top-10 right-0 bg-dark-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap sm:hidden">
        Call Emergency
      </div>
    </motion.div>
  )
}

