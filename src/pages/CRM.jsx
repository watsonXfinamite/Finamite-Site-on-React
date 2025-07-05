import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import GlassCard from '../components/GlassCard'
import DemoRequestForm from '../components/DemoRequestForm'

const CRM = () => {
  const [showDemoForm, setShowDemoForm] = useState(false)

  const features = [
    {
      icon: 'fas fa-chart-pie',
      title: 'Customer Analytics',
      description: 'Deep insights into customer behavior and preferences',
      details: ['Customer segmentation', 'Behavior tracking', 'Lifetime value', 'Churn prediction']
    },
    {
      icon: 'fas fa-funnel-dollar',
      title: 'Sales Pipeline',
      description: 'Complete sales pipeline management and forecasting',
      details: ['Deal tracking', 'Sales forecasting', 'Pipeline analytics', 'Revenue reporting']
    },
    {
      icon: 'fas fa-comments',
      title: 'Communication Hub',
      description: 'Centralized communication across all channels',
      details: ['Email integration', 'Call logging', 'Chat history', 'Social media']
    },
    {
      icon: 'fas fa-chart-bar',
      title: 'Reporting Dashboard',
      description: 'Comprehensive reporting and business intelligence',
      details: ['Custom dashboards', 'Real-time reports', 'KPI tracking', 'Data visualization']
    },
    {
      icon: 'fas fa-tasks',
      title: 'Task Management',
      description: 'Integrated task and activity management',
      details: ['Activity tracking', 'Task automation', 'Follow-up reminders', 'Team collaboration']
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile CRM',
      description: 'Full-featured mobile app for on-the-go access',
      details: ['Offline access', 'Mobile forms', 'GPS tracking', 'Push notifications']
    }
  ]

  const modules = [
    {
      icon: 'fas fa-users',
      title: 'Contact Management',
      description: 'Comprehensive contact and account management',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Sales Management',
      description: 'Complete sales process automation',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Marketing Automation',
      description: 'Automated marketing campaigns and lead nurturing',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'fas fa-headset',
      title: 'Customer Service',
      description: 'Integrated customer support and ticketing',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const integrations = [
    { name: 'Gmail', icon: 'fab fa-google' },
    { name: 'Outlook', icon: 'fab fa-microsoft' },
    { name: 'Slack', icon: 'fab fa-slack' },
    { name: 'Zoom', icon: 'fas fa-video' },
    { name: 'WhatsApp', icon: 'fab fa-whatsapp' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin' }
  ]

  const stats = [
    { number: '40%', label: 'Increase in Sales', icon: 'fas fa-arrow-up' },
    { number: '60%', label: 'Better Customer Retention', icon: 'fas fa-heart' },
    { number: '50%', label: 'Time Savings', icon: 'fas fa-clock' },
    { number: '99.9%', label: 'Uptime Guarantee', icon: 'fas fa-shield-alt' }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3)'
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
                CRM Software
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Complete customer relationship management solution designed for growing businesses
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
                  <i className="fas fa-play mr-2"></i>
                  Watch Tour
                </motion.button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* CRM Modules */}
      <section className="py-20 bg-gradient-to-br from-light-color to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Complete CRM Solution
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              All the tools you need to manage customer relationships in one integrated platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="p-8 h-full bg-white/60 backdrop-blur-xl border-white/30 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <i className={`${module.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{module.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{module.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Everything you need to build stronger customer relationships and drive growth
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

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              See the impact our CRM has on business performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="p-8 text-center bg-light-color/50 backdrop-blur-sm border-white/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i className={`${stat.icon} text-2xl text-white`}></i>
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-text-secondary font-medium">{stat.label}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Integrations */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary mb-8">Seamless Integrations</h3>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-light-color to-white">
        <div className="container mx-auto px-4 text-center">
          <GlassCard className="p-12 bg-white/60 backdrop-blur-xl border-white/30 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Transform Your Customer Relationships
            </h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Join thousands of businesses that have improved their customer relationships with our CRM
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
            productName="CRM Software"
            onClose={() => setShowDemoForm(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default CRM