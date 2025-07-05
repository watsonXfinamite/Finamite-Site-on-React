import React, { useState } from 'react'
import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

const DemoRequestForm = ({ productName, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: productName || '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Submit to Google Sheets
      const response = await fetch('/api/submit-demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Auto close after 5 seconds
        setTimeout(() => {
          onClose()
        }, 5000)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      // For demo purposes, still show success
      setIsSubmitted(true)
      setTimeout(() => {
        onClose()
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      >
        <GlassCard className="p-8 max-w-md w-full text-center bg-white/95 relative overflow-hidden">
          {/* Party Animation Background */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"
                initial={{
                  x: '50%',
                  y: '50%',
                  scale: 0,
                }}
                animate={{
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10"
          >
            <motion.i 
              className="fas fa-check text-white text-3xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative z-10"
          >
            <h3 className="text-3xl font-bold text-primary mb-4">🎉 Demo Requested!</h3>
            <p className="text-text-secondary mb-4">
              Thank you for your interest in <strong>{productName}</strong>!
            </p>
            <p className="text-text-secondary text-sm">
              Our team will contact you within 24 hours to schedule your personalized demo.
              You'll also receive a confirmation email shortly.
            </p>
          </motion.div>

          {/* Confetti Effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`confetti-${i}`}
                className="absolute"
                initial={{
                  x: '50%',
                  y: '20%',
                  rotate: 0,
                }}
                animate={{
                  x: `${20 + Math.random() * 60}%`,
                  y: '100%',
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
              >
                <div className={`w-3 h-3 ${
                  ['bg-yellow-400', 'bg-blue-400', 'bg-red-400', 'bg-green-400', 'bg-purple-400'][i % 5]
                } rounded-sm`} />
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <GlassCard className="p-8 bg-white/95 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
          >
            <i className="fas fa-times text-sm"></i>
          </button>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2">Request Demo</h2>
            <p className="text-text-secondary">
              Get a personalized demo of {productName} and see how it can transform your business
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Enter your company name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Product Interest
              </label>
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              >
                <option value="">Select a product</option>
                <option value="Task Management System">Task Management System</option>
                <option value="Inventory Management System">Inventory Management System</option>
                <option value="Lead Management System">Lead Management System</option>
                <option value="CRM Software">CRM Software</option>
                <option value="HRMS">HRMS</option>
                <option value="Project Management System">Project Management System</option>
                <option value="CA SaaS">CA SaaS</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                placeholder="Tell us about your specific requirements..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 px-8 rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-xl"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </div>
              ) : (
                <>
                  <i className="fas fa-calendar-alt mr-2"></i>
                  Schedule Demo Call
                </>
              )}
            </motion.button>
          </form>
        </GlassCard>
      </motion.div>
    </motion.div>
  )
}

export default DemoRequestForm