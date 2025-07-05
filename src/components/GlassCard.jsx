import React from 'react'
import { motion } from 'framer-motion'

const GlassCard = ({ 
  children, 
  className = '', 
  hover = true, 
  blur = 'backdrop-blur-xl',
  background = 'bg-white/10',
  border = 'border border-white/20',
  shadow = 'shadow-2xl',
  ...props 
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={`
        ${background} 
        ${blur} 
        ${border} 
        ${shadow}
        rounded-2xl 
        backdrop-saturate-150
        ${hover ? 'hover:shadow-3xl hover:border-white/30' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default GlassCard