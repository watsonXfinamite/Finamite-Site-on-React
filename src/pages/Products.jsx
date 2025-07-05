import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import GlassCard from '../components/GlassCard'
import AnimatedSection from '../components/AnimatedSection'

const Products = () => {
  const products = [
    {
      name: 'Task Management System',
      path: '/products/task-management',
      icon: 'fas fa-tasks',
      description: 'Complete task management solution with advanced notification system and team collaboration features.',
      features: ['Real-time Notifications', 'Team Collaboration', 'Progress Tracking', 'Deadline Management'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3'
    },
    {
      name: 'Inventory Management System',
      path: '/products/inventory-management',
      icon: 'fas fa-boxes',
      description: 'AI-powered inventory management with ERP integration and real-time updates.',
      features: ['AI Copilot', 'ERP Integration', 'Real-time Updates', 'Vendor Notifications'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3'
    },
    {
      name: 'Lead Management System',
      path: '/products/lead-management',
      icon: 'fas fa-user-friends',
      description: 'Advanced lead tracking and conversion system with intelligent analytics.',
      features: ['Lead Scoring', 'Conversion Analytics', 'Pipeline Management', 'Automated Follow-ups'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3'
    },
    {
      name: 'CRM Software',
      path: '/products/crm',
      icon: 'fas fa-chart-line',
      description: 'Complete customer relationship management solution for growing businesses.',
      features: ['Customer Analytics', 'Sales Pipeline', 'Communication Hub', 'Reporting Dashboard'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section with Glass Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-12 bg-white/10 backdrop-blur-2xl border-white/20">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Our SaaS Products
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Transform your business with our cutting-edge software solutions designed for modern enterprises
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
                >
                  <i className="fas fa-play mr-2"></i>
                  Watch Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  <i className="fas fa-calendar mr-2"></i>
                  Schedule Call
                </motion.button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-br from-light-color to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Choose Your Solution
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Each product is designed to solve specific business challenges and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="h-full bg-white/60 backdrop-blur-xl border-white/30 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <i className={`${product.icon} text-white text-xl`}></i>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {product.name}
                    </h3>
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="space-y-2 mb-8">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-text-secondary">
                          <i className="fas fa-check text-accent mr-3"></i>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link
                      to={product.path}
                      className="block w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-xl font-semibold text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <GlassCard className="p-12 bg-white/10 backdrop-blur-2xl border-white/20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of businesses that have already transformed their operations with our solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
              >
                <i className="fas fa-rocket mr-2"></i>
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                <i className="fas fa-phone mr-2"></i>
                Contact Sales
              </motion.button>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}

export default Products