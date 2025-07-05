import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import GlassCard from './GlassCard'

const ProductDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  const products = [
    {
      name: 'Task Management System',
      path: '/products/task-management',
      icon: 'fas fa-tasks',
      description: 'Complete task management with notifications'
    },
    {
      name: 'Inventory Management',
      path: '/products/inventory-management',
      icon: 'fas fa-boxes',
      description: 'AI-powered inventory with ERP integration'
    },
    {
      name: 'Lead Management',
      path: '/products/lead-management',
      icon: 'fas fa-user-friends',
      description: 'Advanced lead tracking and conversion'
    },
    {
      name: 'CRM Software',
      path: '/products/crm',
      icon: 'fas fa-chart-line',
      description: 'Complete customer relationship management'
    }
  ]

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 text-primary hover:text-secondary transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="font-medium">Products</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-80 z-50"
          >
            <GlassCard 
              className="p-4 bg-white/95 backdrop-blur-xl border-white/30"
              hover={false}
            >
              <div className="space-y-2">
                {products.map((product, index) => (
                  <motion.div
                    key={product.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={product.path}
                      onClick={() => setIsOpen(false)}
                      className="block p-3 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <i className={`${product.icon} text-white text-sm`}></i>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-primary group-hover:text-secondary transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-sm text-text-secondary">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/20">
                <Link
                  to="/products"
                  onClick={() => setIsOpen(false)}
                  className="block text-center py-2 px-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  View All Products
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default ProductDropdown