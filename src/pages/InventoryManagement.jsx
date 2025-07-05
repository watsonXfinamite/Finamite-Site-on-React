import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import GlassCard from '../components/GlassCard'
import DemoRequestForm from '../components/DemoRequestForm'

const LeadManagement = () => {
  const [showDemoForm, setShowDemoForm] = useState(false)

  const features = [
    {
      icon: 'fas fa-star',
      title: 'Lead Scoring',
      description: 'AI-powered lead scoring to prioritize your best prospects',
      details: ['Behavioral scoring', 'Demographic analysis', 'Engagement tracking', 'Custom scoring models']
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Conversion Analytics',
      description: 'Deep insights into your conversion funnel and performance',
      details: ['Conversion tracking', 'Funnel analysis', 'ROI reporting', 'Performance metrics']
    },
    {
      icon: 'fas fa-stream',
      title: 'Pipeline Management',
      description: 'Visual pipeline management with drag-and-drop functionality',
      details: ['Kanban boards', 'Stage automation', 'Deal tracking', 'Probability forecasting']
    },
    {
      icon: 'fas fa-robot',
      title: 'Automated Follow-ups',
      description: 'Smart automation for consistent lead nurturing',
      details: ['Email sequences', 'SMS campaigns', 'Task automation', 'Trigger-based actions']
    },
    {
      icon: 'fas fa-users',
      title: 'Lead Capture',
      description: 'Multiple channels for capturing and qualifying leads',
      details: ['Web forms', 'Landing pages', 'Social media', 'API integrations']
    },
    {
      icon: 'fas fa-brain',
      title: 'AI Insights',
      description: 'Machine learning insights for better lead management',
      details: ['Predictive analytics', 'Churn prediction', 'Opportunity identification', 'Trend analysis']
    }
  ]

  const benefits = [
    {
      icon: 'fas fa-arrow-up',
      title: '3x Higher Conversion',
      description: 'Advanced lead scoring and nurturing increases conversion rates significantly'
    },
    {
      icon: 'fas fa-clock',
      title: '50% Time Savings',
      description: 'Automation reduces manual work and increases team productivity'
    },
    {
      icon: 'fas fa-eye',
      title: 'Complete Visibility',
      description: 'Full visibility into your sales pipeline and lead journey'
    },
    {
      icon: 'fas fa-target',
      title: 'Better Targeting',
      description: 'AI-powered insights help you focus on the right prospects'
    }
  ]

  const integrations = [
    { name: 'Salesforce', icon: 'fab fa-salesforce' },
    { name: 'HubSpot', icon: 'fas fa-hubspot' },
    { name: 'Mailchimp', icon: 'fab fa-mailchimp' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin' },
    { name: 'Facebook', icon: 'fab fa-facebook' },
    { name: 'Google Ads', icon: 'fab fa-google' }
  ]

  const pipelineStages = [
    { name: 'Lead', color: 'bg-blue-500', count: '245' },
    { name: 'Qualified', color: 'bg-yellow-500', count: '89' },
    { name: 'Proposal', color: 'bg-orange-500', count: '34' },
    { name: 'Negotiation', color: 'bg-red-500', count: '12' },
    { name: 'Closed Won', color: 'bg-green-500', count: '67' }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3)'
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
                Lead Management System
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Advanced lead tracking and conversion system with intelligent analytics and automation
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
                  <i className="fas fa-chart-line mr-2"></i>
                  View Analytics
                </motion.button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Pipeline Visualization */}
      <section className="py-20 bg-gradient-to-br from-light-color to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Visual Pipeline Management
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Track your leads through every stage with our intuitive pipeline visualization
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
              {pipelineStages.map((stage, index) => (
                <motion.div
                  key={stage.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard className="p-6 text-center bg-white/60 backdrop-blur-xl border-white/30">
                    <div className={`w-12 h-12 ${stage.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-white font-bold">{stage.count}</span>
                    </div>
                    <h3 className="font-semibold text-primary">{stage.name}</h3>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            <GlassCard className="p-8 bg-white/60 backdrop-blur-xl border-white/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$2.4M</div>
                  <div className="text-text-secondary">Pipeline Value</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">34%</div>
                  <div className="text-text-secondary">Conversion Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">18 days</div>
                  <div className="text-text-secondary">Avg. Sales Cycle</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Features
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Everything you need to capture, nurture, and convert leads effectively
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
              Proven Results
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              See the impact our lead management system has on business growth
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
              Ready to Boost Your Sales?
            </h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Join successful sales teams who have transformed their lead management process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => setShowDemoForm(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
              >
                <i className="fas fa-calendar mr-2"></i>
                Get Demo
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
            productName="Lead Management System"
            onClose={() => setShowDemoForm(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default LeadManagement