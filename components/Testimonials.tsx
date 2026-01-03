'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Our family has had few surgical experiences over the past few years at Kadisco Hospital, and each time we received excellent care. The doctors, nurses, and staff were professional, kind, and supportive. We are very grateful and highly recommend Kadisco Hospital.",
    author: "Mahder Asrat",
    role: "Patient",
    rating: 5,
    time: "4 months ago",
  },
  {
    quote: "Gave birth in this hospital and my follow up was with Sister Regina. She was amazing throughout my pregnancy and delivery, she made the pain bearable by being there every minute. Would never go nowhere else to give birth. Highly recommend!",
    author: "Enas Mohammad",
    role: "New Mother",
    rating: 5,
    time: "4 years ago",
  },
  {
    quote: "My wife has been there for our 3 boys birth and the prenatal yoga and maternal training by Sr. Mariam was really amazing. Dr. Samia is the best gynecologist - she recommends normal delivery. I am very happy with all Kadisco services.",
    author: "Michael Mekonnen",
    role: "Father of 3",
    rating: 5,
    time: "1 year ago",
  },
  {
    quote: "I had a very positive experience at KADISCO General Hospital. The care I received was top-notch, and the entire team was both kind and efficient. The facilities were modern and clean. I would definitely recommend KADISCO for anyone seeking reliable medical care.",
    author: "Gorfie Demssie",
    role: "Patient",
    rating: 5,
    time: "1 year ago",
  },
  {
    quote: "Best hospital ever! In fact I was born at Kadisco and the staffs are really nice.",
    author: "Leoul Fasil",
    role: "Lifelong Patient",
    rating: 5,
    time: "5 months ago",
  },
  {
    quote: "The staff was friendly, and the facilities were clean. The medical team provided excellent care and made sure I was comfortable throughout my visit. Highly recommend KADISCO General Hospital for quality healthcare.",
    author: "Imran Khalifa",
    role: "Patient",
    rating: 5,
    time: "1 year ago",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="testimonial-card h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all">
                {/* Header with Rating and Time */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
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
                  <span className="text-xs text-white/40">{testimonial.time}</span>
                </div>

                {/* Quote */}
                <blockquote className="text-white text-base leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-dark-900 font-bold text-sm">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{testimonial.author}</div>
                    <div className="text-xs text-white/60">{testimonial.role}</div>
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

