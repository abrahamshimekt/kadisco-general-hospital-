'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Professional, kind, and supportive staff. The doctors took time to explain everything and made me feel at ease throughout my treatment.",
    author: "Tigist M.",
    role: "Patient",
    rating: 5,
  },
  {
    quote: "Excellent maternity and surgical care. I had my baby here and the experience was wonderful. The midwives were so supportive and caring.",
    author: "Hana B.",
    role: "New Mother",
    rating: 5,
  },
  {
    quote: "Clean facilities and reliable healthcare. I've been coming here for years and have always received excellent care from the entire team.",
    author: "Dawit T.",
    role: "Regular Patient",
    rating: 4,
  },
  {
    quote: "The emergency department was quick and efficient. They handled my situation with professionalism and genuine concern for my wellbeing.",
    author: "Sara A.",
    role: "Emergency Patient",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
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
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white/80">Patient Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            What Our <span className="gradient-text-light">Patients Say</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Hear from those who have experienced our care firsthand
          </p>

          {/* Google Rating */}
          <div className="mt-8 inline-flex items-center gap-4 glass rounded-full px-6 py-3">
            <div className="flex">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
              <Star className="w-5 h-5 text-primary fill-primary/40" />
            </div>
            <div className="text-white">
              <span className="font-bold">3.7 / 5</span>
              <span className="text-white/60 ml-2">based on 87+ Google Reviews</span>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="testimonial-card h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
                {/* Quote Icon - Override default */}
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-primary/30" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? 'text-primary fill-primary'
                          : 'text-white/20'
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-white/80 text-lg leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-dark-900 font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-white/60">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

