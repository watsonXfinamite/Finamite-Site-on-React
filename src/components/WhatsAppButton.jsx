import React from 'react'
import { motion } from 'framer-motion'

const WhatsAppButton = () => {
  const whatsappNumber = "+919592500362"
  const message = "Hello! I'm interested in learning more about Finamite Solutions services."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 pulse-glow"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </motion.button>
  )
}

export default WhatsAppButton