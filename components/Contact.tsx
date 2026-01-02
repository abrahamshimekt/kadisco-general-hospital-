'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Send,
  CheckCircle2,
} from 'lucide-react'

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setFormState('success')
    setFormData({ name: '', email: '', phone: '', department: '', message: '' })
    
    // Reset after 3 seconds
    setTimeout(() => setFormState('idle'), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary/5 to-transparent"></div>
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
            <MapPin className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-dark-700">Contact & Location</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 mb-4">
            Get in <span className="text-secondary-700">Touch</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            We&apos;re here to help. Reach out for appointments, inquiries, or emergencies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {/* Address */}
              <div className="p-5 bg-gradient-to-br from-dark-900 to-dark-800 rounded-2xl text-white">
                <MapPin className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-sm text-white/70">
                  Road to Gerji Giorgis,<br />
                  Gerji (46 Mazoria),<br />
                  Addis Ababa, Ethiopia
                </p>
              </div>

              {/* Phone */}
              <div className="p-5 bg-gradient-to-br from-dark-900 to-dark-800 rounded-2xl text-white">
                <Phone className="w-6 h-6 text-secondary mb-3" />
                <h4 className="font-semibold mb-2">Phone</h4>
                <div className="space-y-1 text-sm text-white/70">
                  <a href="tel:+251116298902" className="block hover:text-white transition-colors">
                    +251 11 629 8902
                  </a>
                  <a href="tel:+251116298903" className="block hover:text-white transition-colors">
                    +251 11 629 8903
                  </a>
                  <a href="tel:+251116298904" className="block hover:text-white transition-colors">
                    +251 11 629 8904
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 bg-gradient-to-br from-dark-900 to-dark-800 rounded-2xl text-white">
                <Mail className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-semibold mb-2">Email</h4>
                <a 
                  href="mailto:kgh@kadcogroup.com" 
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  kgh@kadcogroup.com
                </a>
              </div>

              {/* Hours */}
              <div className="p-5 bg-gradient-to-br from-dark-900 to-dark-800 rounded-2xl text-white">
                <Clock className="w-6 h-6 text-secondary mb-3" />
                <h4 className="font-semibold mb-2">Hours</h4>
                <div className="flex items-center gap-2 text-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                  </span>
                  <span className="text-white/70">Open 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Website Link */}
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl mb-8">
              <Globe className="w-5 h-5 text-secondary" />
              <span className="text-dark-700">Website:</span>
              <a 
                href="https://kadcogroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:underline font-medium"
              >
                kadcogroup.com
              </a>
            </div>

            {/* Google Map */}
            <div className="map-container h-80 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.4!2d38.82!3d9.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGerji%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kadisco General Hospital Location"
              ></iframe>
            </div>

            {/* Get Directions Button */}
            <a
              href="https://www.google.com/maps/dir//Gerji,+Addis+Ababa,+Ethiopia"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 btn-shine inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary to-secondary px-6 py-4 rounded-full text-dark-900 font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-10">
              <h3 className="text-2xl font-heading font-bold text-dark-900 mb-2">
                Book an Appointment
              </h3>
              <p className="text-dark-600 mb-8">
                Fill out the form below and we&apos;ll get back to you shortly.
              </p>

              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold text-dark-900 mb-2">Request Submitted!</h4>
                  <p className="text-dark-600">We&apos;ll contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-dark-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                        placeholder="+251 9XX XXX XXX"
                      />
                    </div>
                  </div>

                  {/* Department */}
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-dark-700 mb-2">
                      Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select a department</option>
                      <option value="general">General Consultation</option>
                      <option value="maternity">Maternity & OB/GYN</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="surgery">Surgery</option>
                      <option value="internal">Internal Medicine</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="dental">Dental Services</option>
                      <option value="ent">ENT</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-2">
                      Message / Reason for Visit
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your healthcare needs..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="btn-shine w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary px-6 py-4 rounded-full text-dark-900 font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-dark-900/30 border-t-dark-900 rounded-full animate-spin"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

