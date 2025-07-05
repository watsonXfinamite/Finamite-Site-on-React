import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import GlassCard from '../components/GlassCard'
import DemoRequestForm from '../components/DemoRequestForm'

const HRMS = () => {
  const [showDemoForm, setShowDemoForm] = useState(false)

  const features = [
    {
      icon: 'fas fa-fingerprint',
      title: 'eSSL Integration',
      description: 'Seamless integration with eSSL biometric devices for accurate attendance tracking',
      details: ['Biometric attendance', 'Face recognition', 'RFID card support', 'Mobile punch-in']
    },
    {
      icon: 'fas fa-calculator',
      title: 'Auto Salary Calculation',
      description: 'Automated salary calculation with tax deductions and compliance',
      details: ['Tax calculations', 'Overtime computation', 'Bonus management', 'Deduction handling']
    },
    {
      icon: 'fas fa-file-invoice',
      title: 'Digital Salary Slips',
      description: 'Automated generation and distribution of salary slips to employees',
      details: ['Email delivery', 'PDF generation', 'Custom templates', 'Secure access']
    },
    {
      icon: 'fas fa-calendar-check',
      title: 'Leave Management',
      description: 'Complete leave approval and request system with real-time notifications',
      details: ['Leave requests', 'Approval workflow', 'Leave balance', 'Holiday calendar']
    },
    {
      icon: 'fas fa-user-edit',
      title: 'Employee Self-Service',
      description: 'Employees can view payslips and update personal details independently',
      details: ['Profile management', 'Document upload', 'Contact updates', 'Emergency contacts']
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Training System',
      description: 'Apply for training programs and track professional development',
      details: ['Training requests', 'Skill tracking', 'Certification management', 'Progress monitoring']
    }
  ]

  const employeeFeatures = [
    {
      icon: 'fas fa-eye',
      title: 'View PaySlips',
      description: 'Access current and historical salary slips anytime'
    },
    {
      icon: 'fas fa-edit',
      title: 'Update Personal Details',
      description: 'Modify contact information and personal data'
    },
    {
      icon: 'fas fa-calendar-plus',
      title: 'Apply for Leave',
      description: 'Submit leave requests with approval tracking'
    },
    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'Training Applications',
      description: 'Apply for training programs and workshops'
    }
  ]

  const hrFeatures = [
    {
      icon: 'fas fa-birthday-cake',
      title: 'Birthday Reminders',
      description: 'Automated birthday and work anniversary notifications'
    },
    {
      icon: 'fas fa-check-circle',
      title: 'Payroll Approval',
      description: 'Streamlined payroll and leave approval processes'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Turnover Reports',
      description: 'Employee turnover analysis and trend tracking'
    },
    {
      icon: 'fas fa-chart-bar',
      title: 'Leave Analytics',
      description: 'Comprehensive leave and absence trend analysis'
    },
    {
      icon: 'fas fa-money-check-alt',
      title: 'Payroll Summary',
      description: 'Detailed payroll summaries and cost analysis'
    }
  ]

  const integrations = [
    { name: 'eSSL', icon: 'fas fa-fingerprint' },
    { name: 'Tally', icon: 'fas fa-calculator' },
    { name: 'Zoho', icon: 'fas fa-cloud' },
    { name: 'Gmail', icon: 'fab fa-google' },
    { name: 'Outlook', icon: 'fab fa-microsoft' },
    { name: 'WhatsApp', icon: 'fab fa-whatsapp' }
  ]

  const benefits = [
    {
      icon: 'fas fa-clock',
      title: '80% Time Savings',
      description: 'Automate HR processes and reduce manual work significantly'
    },
    {
      icon: 'fas fa-shield-alt',
      title: '100% Compliance',
      description: 'Ensure full compliance with labor laws and regulations'
    },
    {
      icon: 'fas fa-users',
      title: 'Better Employee Experience',
      description: 'Self-service portal improves employee satisfaction'
    },
    {
      icon: 'fas fa-chart-pie',
      title: 'Data-Driven Insights',
      description: 'Make informed HR decisions with comprehensive analytics'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3)'
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
                HRMS
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Complete Human Resource Management System with eSSL integration, automated payroll, and employee self-service portal
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
                  <i className="fas fa-users mr-2"></i>
                  Employee Portal
                </motion.button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-gradient-to-br from-light-color to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Comprehensive HR Features
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Everything you need to manage your human resources efficiently and effectively
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
                <GlassCard className="p-8 h-full bg-white/60 backdrop-blur-xl border-white/30">
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

      {/* Employee Self-Service Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Employee Self-Service Portal
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Empower your employees with easy access to their HR information and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {employeeFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="p-8 text-center bg-white/10 backdrop-blur-xl border-white/20">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i className={`${feature.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/90 leading-relaxed">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HR Management Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Advanced HR Management
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Powerful tools for HR professionals to manage workforce effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {hrFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="p-8 text-center bg-light-color/50 backdrop-blur-sm border-white/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i className={`${feature.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="p-8 text-center bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i className={`${benefit.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{benefit.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{benefit.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* eSSL Integration Section */}
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
                eSSL Biometric Integration
              </h2>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Seamlessly integrate with eSSL biometric devices for accurate attendance tracking and automated payroll processing.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-fingerprint text-white text-sm"></i>
                  </div>
                  <span className="text-text-secondary">Fingerprint and face recognition</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-clock text-white text-sm"></i>
                  </div>
                  <span className="text-text-secondary">Real-time attendance tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-calculator text-white text-sm"></i>
                  </div>
                  <span className="text-text-secondary">Automated salary calculations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-mobile-alt text-white text-sm"></i>
                  </div>
                  <span className="text-text-secondary">Mobile app integration</span>
                </div>
              </div>

              <motion.button
                onClick={() => setShowDemoForm(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
              >
                <i className="fas fa-fingerprint mr-2"></i>
                See eSSL Integration
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-8 bg-white/60 backdrop-blur-xl border-white/30">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-fingerprint text-4xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Biometric Attendance</h3>
                  <p className="text-text-secondary">Secure and accurate attendance tracking</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-green-800">John Doe</span>
                      <span className="text-sm text-green-600">09:00 AM</span>
                    </div>
                    <p className="text-sm text-green-600">Check-in successful</p>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-blue-800">Jane Smith</span>
                      <span className="text-sm text-blue-600">09:15 AM</span>
                    </div>
                    <p className="text-sm text-blue-600">Check-in successful</p>
                  </div>
                  
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-orange-800">Mike Johnson</span>
                      <span className="text-sm text-orange-600">09:30 AM</span>
                    </div>
                    <p className="text-sm text-orange-600">Late arrival</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Connect with your existing tools and platforms for a unified HR experience
            </p>
          </div>

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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-light-color to-white">
        <div className="container mx-auto px-4 text-center">
          <GlassCard className="p-12 bg-white/60 backdrop-blur-xl border-white/30 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Transform Your HR Operations
            </h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Join organizations that have streamlined their HR processes with our comprehensive HRMS solution
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
            productName="HRMS"
            onClose={() => setShowDemoForm(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default HRMS