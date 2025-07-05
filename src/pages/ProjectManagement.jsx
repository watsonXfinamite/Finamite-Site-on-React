import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import GlassCard from '../components/GlassCard'
import DemoRequestForm from '../components/DemoRequestForm'

const ProjectManagement = () => {
  const [showDemoForm, setShowDemoForm] = useState(false)

  const features = [
    {
      icon: 'fas fa-tachometer-alt',
      title: 'Dashboard',
      description: 'Comprehensive project overview with real-time insights and analytics',
      details: ['Project status overview', 'Team performance metrics', 'Resource utilization', 'Timeline tracking']
    },
    {
      icon: 'fas fa-project-diagram',
      title: 'Project Management',
      description: 'Complete project lifecycle management from initiation to closure',
      details: ['Project planning', 'Milestone tracking', 'Gantt charts', 'Progress monitoring']
    },
    {
      icon: 'fas fa-tasks',
      title: 'Task Management',
      description: 'Detailed task assignment, tracking, and collaboration features',
      details: ['Task assignment', 'Priority management', 'Deadline tracking', 'Subtask creation']
    },
    {
      icon: 'fas fa-users-cog',
      title: 'Resource Management',
      description: 'Optimize resource allocation and track team capacity',
      details: ['Resource allocation', 'Capacity planning', 'Skill matching', 'Workload balancing']
    },
    {
      icon: 'fas fa-dollar-sign',
      title: 'Budget Management',
      description: 'Track project costs, budgets, and financial performance',
      details: ['Budget planning', 'Cost tracking', 'Expense management', 'Financial reporting']
    },
    {
      icon: 'fas fa-chart-bar',
      title: 'Reports & Analytics',
      description: 'Comprehensive reporting and business intelligence for informed decisions',
      details: ['Custom reports', 'Performance analytics', 'Time tracking', 'ROI analysis']
    }
  ]

  const dashboardMetrics = [
    { title: 'Active Projects', value: '24', icon: 'fas fa-project-diagram', color: 'bg-blue-500' },
    { title: 'Completed Tasks', value: '156', icon: 'fas fa-check-circle', color: 'bg-green-500' },
    { title: 'Team Members', value: '32', icon: 'fas fa-users', color: 'bg-purple-500' },
    { title: 'Budget Utilization', value: '78%', icon: 'fas fa-chart-pie', color: 'bg-orange-500' }
  ]

  const projectTypes = [
    {
      title: 'Software Development',
      description: 'Agile project management for software teams',
      icon: 'fas fa-code',
      features: ['Sprint planning', 'User stories', 'Bug tracking', 'Code reviews']
    },
    {
      title: 'Marketing Campaigns',
      description: 'Campaign planning and execution tracking',
      icon: 'fas fa-bullhorn',
      features: ['Campaign timeline', 'Asset management', 'Performance tracking', 'ROI measurement']
    },
    {
      title: 'Construction Projects',
      description: 'Project management for construction industry',
      icon: 'fas fa-hard-hat',
      features: ['Phase management', 'Resource scheduling', 'Safety tracking', 'Quality control']
    },
    {
      title: 'Event Management',
      description: 'Complete event planning and coordination',
      icon: 'fas fa-calendar-alt',
      features: ['Vendor management', 'Timeline coordination', 'Budget tracking', 'Guest management']
    }
  ]

  const integrations = [
    { name: 'Slack', icon: 'fab fa-slack' },
    { name: 'Microsoft Teams', icon: 'fab fa-microsoft' },
    { name: 'Google Workspace', icon: 'fab fa-google' },
    { name: 'Jira', icon: 'fab fa-atlassian' },
    { name: 'Trello', icon: 'fab fa-trello' },
    { name: 'GitHub', icon: 'fab fa-github' }
  ]

  const benefits = [
    {
      icon: 'fas fa-rocket',
      title: '40% Faster Delivery',
      description: 'Streamlined workflows and better coordination accelerate project completion'
    },
    {
      icon: 'fas fa-eye',
      title: 'Complete Visibility',
      description: 'Real-time insights into project status, resources, and performance'
    },
    {
      icon: 'fas fa-users',
      title: 'Better Collaboration',
      description: 'Enhanced team communication and collaboration tools'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Improved ROI',
      description: 'Better resource utilization and cost control increase profitability'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3)'
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
                Project Management System
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Complete project management solution with dashboard, task management, resource planning, and comprehensive reporting
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
                  <i className="fas fa-tachometer-alt mr-2"></i>
                  View Dashboard
                </motion.button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 bg-gradient-to-br from-light-color to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Powerful Dashboard Overview
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Get real-time insights into your projects, resources, and team performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {dashboardMetrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="p-8 text-center bg-white/60 backdrop-blur-xl border-white/30">
                  <div className={`w-16 h-16 ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <i className={`${metric.icon} text-2xl text-white`}></i>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-text-secondary font-medium">{metric.title}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <GlassCard className="p-8 bg-white/60 backdrop-blur-xl border-white/30">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Project Timeline View</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-blue-800">Website Redesign</h4>
                    <p className="text-sm text-blue-600">Due: March 15, 2024</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-blue-800">75% Complete</div>
                  <div className="w-24 h-2 bg-blue-200 rounded-full mt-1">
                    <div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-green-800">Mobile App Development</h4>
                    <p className="text-sm text-green-600">Due: April 20, 2024</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-green-800">45% Complete</div>
                  <div className="w-24 h-2 bg-green-200 rounded-full mt-1">
                    <div className="w-2/5 h-full bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-orange-800">Marketing Campaign</h4>
                    <p className="text-sm text-orange-600">Due: March 30, 2024</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-orange-800">90% Complete</div>
                  <div className="w-24 h-2 bg-orange-200 rounded-full mt-1">
                    <div className="w-11/12 h-full bg-orange-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Core Features Section */}
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
              Complete Project Management Suite
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Everything you need to plan, execute, and deliver successful projects
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

      {/* Project Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Versatile Project Management
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Adaptable to various industries and project types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="p-8 text-center bg-light-color/50 backdrop-blur-sm border-white/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i className={`${type.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{type.title}</h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">{type.description}</p>
                  <ul className="space-y-2 text-left">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-text-secondary">
                        <i className="fas fa-check text-accent mr-2"></i>
                        {feature}
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
      <section className="py-20 bg-gradient-to-br from-light-color to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              See the impact our project management system has on business performance
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
                <GlassCard className="p-8 text-center bg-white/60 backdrop-blur-xl border-white/30">
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
          <div className="text-center">
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
                  <GlassCard className="p-6 text-center bg-white/60 backdrop-blur-sm border-white/30">
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
              Ready to Transform Your Projects?
            </h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Join successful teams who have streamlined their project management with our comprehensive solution
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
            productName="Project Management System"
            onClose={() => setShowDemoForm(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectManagement