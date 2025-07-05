import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import GlassCard from '../components/GlassCard'
import DemoRequestForm from '../components/DemoRequestForm'

const CASaaS = () => {
  const [showDemoForm, setShowDemoForm] = useState(false)

  const features = [
    {
      icon: 'fas fa-walking',
      title: 'Client Walk-In',
      description: 'Streamlined client registration and walk-in management system',
      details: ['Digital registration', 'Queue management', 'Appointment scheduling', 'Client history tracking']
    },
    {
      icon: 'fas fa-clipboard-list',
      title: 'Work Order Management',
      description: 'Complete work order lifecycle management for CA services',
      details: ['Service categorization', 'Priority assignment', 'Status tracking', 'Deadline management']
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Document Request',
      description: 'Automated document request and collection system',
      details: ['Document checklists', 'Request notifications', 'Upload tracking', 'Compliance verification']
    },
    {
      icon: 'fas fa-user-tie',
      title: 'Debtor Management',
      description: 'Comprehensive client debt tracking and collection management',
      details: ['Outstanding tracking', 'Payment reminders', 'Collection reports', 'Aging analysis']
    },
    {
      icon: 'fas fa-tasks',
      title: 'Compliance Work Order',
      description: 'Specialized work orders for compliance and regulatory requirements',
      details: ['Compliance tracking', 'Deadline alerts', 'Regulatory updates', 'Audit trails']
    },
    {
      icon: 'fas fa-receipt',
      title: 'Fees Receipt & Register',
      description: 'Digital fee collection and receipt management system',
      details: ['Digital receipts', 'Fee tracking', 'Payment history', 'Tax calculations']
    },
    {
      icon: 'fas fa-money-check-alt',
      title: 'Cash & Cheque Input',
      description: 'Comprehensive cash and cheque management system',
      details: ['Payment recording', 'Bank reconciliation', 'Cheque tracking', 'Cash flow reports']
    }
  ]

  const caServices = [
    {
      title: 'Tax Compliance',
      description: 'Complete tax filing and compliance services',
      icon: 'fas fa-file-invoice-dollar',
      services: ['Income Tax Returns', 'GST Filing', 'TDS Returns', 'Audit Services']
    },
    {
      title: 'Business Registration',
      description: 'Company incorporation and registration services',
      icon: 'fas fa-building',
      services: ['Company Registration', 'Partnership Firms', 'LLP Formation', 'Trademark Registration']
    },
    {
      title: 'Financial Services',
      description: 'Comprehensive financial planning and advisory',
      icon: 'fas fa-chart-line',
      services: ['Financial Planning', 'Investment Advisory', 'Loan Assistance', 'Insurance Services']
    },
    {
      title: 'Accounting Services',
      description: 'Complete bookkeeping and accounting solutions',
      icon: 'fas fa-calculator',
      services: ['Bookkeeping', 'Financial Statements', 'Management Reports', 'Payroll Services']
    }
  ]

  const workflowSteps = [
    {
      step: '1',
      title: 'Client Walk-In',
      description: 'Client registers and checks in through digital system',
      icon: 'fas fa-door-open'
    },
    {
      step: '2',
      title: 'Service Selection',
      description: 'Client selects required CA services and creates work order',
      icon: 'fas fa-list-ul'
    },
    {
      step: '3',
      title: 'Document Collection',
      description: 'System generates document checklist and tracks collection',
      icon: 'fas fa-folder-open'
    },
    {
      step: '4',
      title: 'Work Processing',
      description: 'CA team processes work with compliance tracking',
      icon: 'fas fa-cogs'
    },
    {
      step: '5',
      title: 'Fee Collection',
      description: 'Digital fee collection with receipt generation',
      icon: 'fas fa-credit-card'
    },
    {
      step: '6',
      title: 'Delivery',
      description: 'Completed work delivered with digital records',
      icon: 'fas fa-check-circle'
    }
  ]

  const benefits = [
    {
      icon: 'fas fa-clock',
      title: '60% Time Savings',
      description: 'Automate routine tasks and streamline CA operations'
    },
    {
      icon: 'fas fa-shield-alt',
      title: '100% Compliance',
      description: 'Ensure full regulatory compliance with automated tracking'
    },
    {
      icon: 'fas fa-users',
      title: 'Better Client Experience',
      description: 'Digital processes improve client satisfaction and engagement'
    },
    {
      icon: 'fas fa-chart-bar',
      title: 'Improved Profitability',
      description: 'Better resource utilization and fee collection increase profits'
    }
  ]

  const integrations = [
    { name: 'Tally', icon: 'fas fa-calculator' },
    { name: 'GST Portal', icon: 'fas fa-globe' },
    { name: 'Income Tax Portal', icon: 'fas fa-landmark' },
    { name: 'MCA Portal', icon: 'fas fa-building' },
    { name: 'Banking APIs', icon: 'fas fa-university' },
    { name: 'WhatsApp', icon: 'fab fa-whatsapp' }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3)'
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
                CA SaaS
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Specialized SaaS solution for Chartered Accountants with client management, work order tracking, and compliance automation
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
                  <i className="fas fa-calculator mr-2"></i>
                  CA Portal
                </motion.button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* CA Services Overview */}
      <section className="py-20 bg-gradient-to-br from-light-color to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Complete CA Practice Management
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Streamline your CA practice with our comprehensive digital solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="p-8 text-center bg-white/60 backdrop-blur-xl border-white/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i className={`${service.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 text-left">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-text-secondary">
                        <i className="fas fa-check text-accent mr-2"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Process */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Streamlined CA Workflow
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              From client walk-in to service delivery - manage the entire process digitally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="p-8 text-center bg-white/10 backdrop-blur-xl border-white/20">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${step.icon} text-lg text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/90 leading-relaxed">{step.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Comprehensive Features
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Everything you need to run a modern CA practice efficiently
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
                <GlassCard className="p-8 h-full bg-light-color/50 backdrop-blur-sm border-white/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                    <i className={`${feature.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-text-secondary">
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

      {/* Client Management Dashboard */}
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
                Digital Client Management
              </h2>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Transform your client interactions with our digital-first approach to CA practice management.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-user-plus text-white text-sm"></i>
                  </div>
                  <span className="text-text-secondary">Digital client onboarding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-tasks text-white text-sm"></i>
                  </div>
                  <span className="text-text-secondary">Automated work order tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-file-alt text-white text-sm"></i>
                  </div>
                  <span className="text-text-secondary">Document management system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-bell text-white text-sm"></i>
                  </div>
                  <span className="text-text-secondary">Real-time notifications</span>
                </div>
              </div>

              <motion.button
                onClick={() => setShowDemoForm(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
              >
                <i className="fas fa-eye mr-2"></i>
                See Client Portal Demo
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-8 bg-white/60 backdrop-blur-xl border-white/30">
                <h3 className="text-xl font-bold text-primary mb-6">Client Dashboard</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-blue-800">Income Tax Return</p>
                        <p className="text-sm text-blue-600">Due: March 31, 2024</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">In Progress</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-green-800">GST Filing</p>
                        <p className="text-sm text-green-600">Due: March 20, 2024</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Completed</span>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-orange-800">TDS Return</p>
                        <p className="text-sm text-orange-600">Due: March 15, 2024</p>
                      </div>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Pending</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-800">Outstanding Fees</p>
                        <p className="text-sm text-gray-600">₹15,000</p>
                      </div>
                      <button className="bg-primary text-white px-3 py-1 rounded text-xs hover:bg-secondary transition-colors">
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits & Integrations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Why Choose Our CA SaaS?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Proven benefits and seamless integrations for modern CA practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
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

          {/* Government & System Integrations */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-8">Government Portal & System Integrations</h3>
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
              Modernize Your CA Practice Today
            </h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Join progressive CA firms that have digitized their operations and improved client satisfaction
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
            productName="CA SaaS"
            onClose={() => setShowDemoForm(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default CASaaS