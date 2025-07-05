import React from 'react'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import AnimatedSection from '../components/AnimatedSection'

const About = () => {
  const values = [
    {
      icon: 'fas fa-handshake',
      title: 'Integrity',
      description: 'We uphold honesty and transparency in every interaction, building trust with our clients and team.',
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'We embrace creativity and continuously seek better ways to solve business challenges through smart solutions.',
    },
    {
      icon: 'fas fa-rocket',
      title: 'Commitment',
      description: 'We are dedicated to our clients\' success, going above and beyond to achieve their goals.',
    },
    {
      icon: 'fas fa-award',
      title: 'Excellence',
      description: 'We strive for the highest standards in every project, ensuring quality and reliability in all our systems.',
    },
    {
      icon: 'fas fa-users',
      title: 'Collaboration',
      description: 'We believe in teamwork—working closely with clients and within our team to create impactful solutions.',
    },
    {
      icon: 'fas fa-heart',
      title: 'Client-Centric Approach',
      description: 'Our clients are at the heart of everything we do. We focus on understanding their unique needs and delivering results that exceed expectations.',
    },
  ]

  const achievements = [
    {
      icon: 'fas fa-book-open',
      title: 'Published Author',
      description: '2 Business Transformation Books',
    },
    {
      icon: 'fas fa-trophy',
      title: 'Industry Recognition',
      description: 'Multiple Awards for Business Excellence',
    },
    {
      icon: 'fas fa-users',
      title: 'Client Success',
      description: '300+ Businesses Transformed',
    },
  ]

  const expertise = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Technical Skills',
      description: 'Advanced expertise in business analysis tools and financial modeling',
    },
    {
      icon: 'fas fa-comments',
      title: 'Consulting Skills',
      description: 'Expert guidance in business strategy and growth planning',
    },
    {
      icon: 'fas fa-sitemap',
      title: 'System Design',
      description: 'Creating efficient business systems and workflows',
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Problem-Solving',
      description: 'Innovative solutions for complex business challenges',
    },
    {
      icon: 'fas fa-users',
      title: 'Group Training',
      description: 'Effective workshop facilitation and team development',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Growth Strategy',
      description: 'Long-term business development and scaling expertise',
    },
  ]

  const mvv = [
    {
      icon: 'fas fa-bullseye',
      title: 'Mission',
      description: 'Empowering businesses with innovative solutions and systems that streamline operations, enhance profitability, and drive sustainable growth.',
    },
    {
      icon: 'fas fa-eye',
      title: 'Vision',
      description: 'To become a trusted leader in transforming businesses by creating a world where every organization operates efficiently and thrives.',
    },
    {
      icon: 'fas fa-star',
      title: 'Values',
      description: 'Excellence, Innovation, Integrity, and Commitment to delivering measurable results for our clients.',
    },
  ]

  const stats = [
    { number: '10+', label: 'Years of Excellence' },
    { number: '500+', label: 'Happy Clients' },
    { number: '25+', label: 'Countries Served' },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroSection
        title="About Finamite Solutions"
        description="Empowering businesses with innovative solutions and transformative technologies"
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3"
      />

      {/* Values Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-light-color to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              At Finamite Solutions, our core values guide everything we do, ensuring we deliver exceptional service and create lasting partnerships with our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${value.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{value.title}</h3>
                <p className="text-text-secondary leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Founder Quote Section */}
      <section className="py-20 gradient-bg text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                "At Finamite Solutions, we believe in transforming businesses through innovative solutions and strategic thinking. Our journey began with a vision to help SMEs achieve their full potential and create lasting impact in their industries."
              </blockquote>
              <div>
                <h3 className="text-xl font-semibold mb-1">Arsh Gaur</h3>
                <p className="text-white/80">Founder & Business Profit Coach</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/img/arshsir's image.png"
                alt="Arsh Gaur"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl float-animation"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Story</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-6">A Journey of Innovation</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Founded with a vision to transform the financial technology landscape, Finamite Solutions emerged from a simple yet powerful idea: to make financial operations seamless, efficient, and accessible to businesses of all sizes.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Our journey began with a deep understanding of the challenges faced by modern businesses in managing their financial processes. Through years of dedication, innovation, and collaboration with industry experts, we've developed cutting-edge solutions that address these challenges head-on.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3"
                alt="Our Journey"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-light-color p-8 rounded-2xl text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-text-secondary text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center bg-light-color p-12 rounded-2xl"
          >
            <blockquote className="text-2xl font-medium text-primary mb-4 italic">
              "Our mission is to empower businesses with innovative financial solutions that drive growth and success in the digital age."
            </blockquote>
            <cite className="text-text-secondary">- Leadership Team, Finamite Solutions</cite>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Achievements Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center card-hover"
              >
                <i className={`${achievement.icon} text-4xl mb-6 text-accent`}></i>
                <h3 className="text-xl font-semibold mb-4">{achievement.title}</h3>
                <p className="text-white/90">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Mission, Vision, Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mvv.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-light-color p-8 rounded-2xl text-center card-hover"
              >
                <i className={`${item.icon} text-4xl text-primary mb-6`}></i>
                <h3 className="text-xl font-semibold text-secondary mb-4">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Our Expertise Section */}
      <section className="py-20 bg-light-color">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover text-center"
              >
                <i className={`${skill.icon} text-3xl text-primary mb-6`}></i>
                <h3 className="text-xl font-semibold text-secondary mb-4">{skill.title}</h3>
                <p className="text-text-secondary leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About