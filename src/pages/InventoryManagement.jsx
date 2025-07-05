import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import GlassCard from '../components/GlassCard'
import DemoRequestForm from '../components/DemoRequestForm'

const InventoryManagement = () => {
  const [showDemoForm, setShowDemoForm] = useState(false)

  const features = [
    {
      icon: 'fas fa-robot',
      title: 'AI Copilot',
      description: 'Intelligent AI assistant for smart inventory decisions and predictions',
      details: ['Demand forecasting', 'Stock optimization', 'Automated reordering', 'Predictive analytics']
    },
    {
      icon: 'fas fa-link',
      title: 'ERP Integration',
      description: 'Seamless integration with Tally, Zoho, and other ERP systems',
      details: ['Tally integration', 'Zoho Books sync', 'SAP connectivity', 'Custom API support']
    },
    {
      icon: 'fas fa-sync-alt',
      title: 'Real-time Updates',
      description: 'Live inventory updates across all locations and channels',
      details: ['Multi-location sync', 'Real-time tracking', 'Instant notifications', 'Live dashboards']
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'Sales & Purchase Management',
      description: 'Integrated sales and purchase management with customer notifications',
      details: ['Order processing', 'Purchase orders', 'Customer alerts', 'Supplier management']
    },
    {
      icon: 'fas fa-bell',
      title: 'Vendor Notifications',
      description: 'Automated alerts and notifications to vendors and suppliers',
      details: ['Low stock alerts', 'Reorder notifications', 'Delivery updates', 'Payment reminders']
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Advanced Analytics',
      description: 'Business intelligence with comprehensive reporting and insights',
      details: ['Performance metrics', 'Trend analysis', 'Custom reports', 'Data visualization']
    }
  ]

  const benefits = [
    {
      icon: 'fas fa-percentage',
      title: '30% Cost Reduction',
      description: 'Optimize inventory levels and reduce carrying costs significantly'
    },
    {
      icon: 'fas fa-clock',
      title: '50% Time Savings',
      description: 'Automate manual processes and streamline operations'
    },
    {
      icon: 'fas fa-chart-bar',
      title: '99% Accuracy',
      description: 'Real-time tracking ensures accurate inventory counts'
    },
    {
      icon: 'fas fa-users',
      title: 'Better Customer Service',
      description: 'Never run out of stock with intelligent forecasting'
    }
  ]

  const integrations = [
    { name: 'Tally', icon: 'fas fa-calculator' },
    { name: 'Zoho', icon: 'fas fa-cloud' },
    { name: 'SAP', icon: 'fas fa-database' },
    { name: 'QuickBooks', icon: 'fas fa-book' },
    { name: 'Amazon', icon: 'fab fa-amazon' },
    { name: 'Shopify', icon: 'fab fa-shopify' }
  ]

  const aiFeatures = [
    {
      title: 'Demand Forecasting',
      description: 'Predict future demand based on historical data and market trends',
      icon: 'fas fa-crystal-ball'
    },
    {
      title: 'Smart Reordering',
      description: 'Automatically generate purchase orders when stock levels are low',
      icon: 'fas fa-magic'
    },
    {
      title: 'Price Optimization',
      description: 'AI-driven pricing recommendations for maximum profitability',
      icon: 'fas fa-dollar-sign'
    },
    {
      title: 'Anomaly Detection',
      description: 'Identify unusual patterns and potential issues in inventory data',
      icon: 'fas fa-search'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80" />

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-12 bg-white/10 backdrop-blur-2xl border-white/20">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Inventory Management System
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                AI-powered inventory management with ERP integration and real-time updates across all locations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => setShowDemoForm(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
                >
                  <i className="fas fa-calendar mr-2"></i>
                  Request Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  <i className="fas fa-robot mr-2"></i>
                  Try AI Copilot
                </motion.button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* AI Copilot Section */}
      <section className="py-20 bg-gradient-to-br from-light-color to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              AI Copilot for Intelligent Decisions
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Leverage artificial intelligence to make smarter inventory decisions and optimize your operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="p-8 text-center bg-white/60 backdrop-blur-xl border-white/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i className={`${feature.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <GlassCard className="p-8 bg-gradient-to-r from-purple-500/10 to-blue-600/10 backdrop-blur-xl border-white/30 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">Experience the Power of AI</h3>
              <p className="text-text-secondary mb-6">
                Our AI Copilot learns from your business patterns and provides intelligent recommendations to optimize your inventory management.
              </p>
              <motion.button
                onClick={() => setShowDemoForm(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
              >
                <i className="fas fa-robot mr-2"></i>
                Try AI Demo
              </motion.button>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Features
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Everything you need to manage your inventory efficiently and effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="p-8 h-full bg-white/10 backdrop-blur-xl border-white/20">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <i className={`${feature.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-white/80">
                        <i className="fas fa-check text-accent mr-2"></i>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Proven Business Impact
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              See the measurable results our inventory management system delivers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="p-8 text-center bg-light-color/50 backdrop-blur-sm border-white/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i className={`${benefit.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{benefit.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{benefit.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* ERP Integrations */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary mb-8">ERP & Platform Integrations</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
              {integrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <GlassCard className="p-6 text-center bg-light-color/50 backdrop-blur-sm border-white/30">
                    <i className={`${integration.icon} text-3xl text-primary mb-3`}></i>
                    <p className="text-sm font-medium text-text-secondary">{integration.name}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Notifications Section */}
      <section className="py-20 bg-gradient-to-br from-light-color to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">
                Real-time Customer Notifications
              </h2>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Keep your customers informed with automated notifications about their orders, stock availability, and delivery updates.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <span className="text-text-secondary">Order confirmation notifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-truck text-white text-sm"></i>
                  </div>
                  <span className="text-text-secondary">Shipping and delivery updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-exclamation text-white text-sm"></i>
                  </div>
                  <span className="text-text-secondary">Stock availability alerts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-bell text-white text-sm"></i>
                  </div>
                  <span className="text-text-secondary">Custom notification preferences</span>
                </div>
              </div>

              <motion.button
                onClick={() => setShowDemoForm(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
              >
                <i className="fas fa-bell mr-2"></i>
                See Notifications Demo
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-8 bg-white/60 backdrop-blur-xl border-white/30">
                <div className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <div className="flex items-center">
                      <i className="fas fa-check-circle text-green-500 mr-3"></i>
                      <div>
                        <p className="font-semibold text-green-800">Order Confirmed</p>
                        <p className="text-sm text-green-600">Your order #12345 has been confirmed and is being processed.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <div className="flex items-center">
                      <i className="fas fa-truck text-blue-500 mr-3"></i>
                      <div>
                        <p className="font-semibold text-blue-800">Out for Delivery</p>
                        <p className="text-sm text-blue-600">Your order is out for delivery and will arrive today.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                    <div className="flex items-center">
                      <i className="fas fa-exclamation-triangle text-orange-500 mr-3"></i>
                      <div>
                        <p className="font-semibold text-orange-800">Low Stock Alert</p>
                        <p className="text-sm text-orange-600">Product XYZ is running low. Only 5 units remaining.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-light-color to-white">
        <div className="container mx-auto px-4 text-center">
          <GlassCard className="p-12 bg-white/60 backdrop-blur-xl border-white/30 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Transform Your Inventory Management
            </h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Join businesses that have revolutionized their inventory operations with our AI-powered system
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => setShowDemoForm(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
              >
                <i className="fas fa-calendar mr-2"></i>
                Schedule Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/10 transition-all duration-300"
              >
                <i className="fas fa-rocket mr-2"></i>
                Start Free Trial
              </motion.button>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Demo Request Form */}
      <AnimatePresence>
        {showDemoForm && (
          <DemoRequestForm
            productName="Inventory Management System"
            onClose={() => setShowDemoForm(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default InventoryManagement