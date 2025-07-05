import React from 'react'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import AnimatedSection from '../components/AnimatedSection'

const Services = () => {
  const services = [
    {
      icon: 'fas fa-users',
      title: 'Coaching & Mentoring',
      description: 'Personalized guidance tailored to your unique business journey',
      class: 'coaching'
    },
    {
      icon: 'fas fa-book-open',
      title: 'Business Courses',
      description: 'Comprehensive training programs designed to accelerate your success',
      class: 'business'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Strategic Consulting',
      description: 'Expert insights to transform your business strategy',
      class: 'consulting'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Implementation Support',
      description: 'Hands-on execution to turn your vision into reality',
      class: 'implementation'
    }
  ]

  const courses = [
    {
      title: 'Profit Masters 2025',
      description: 'Master the art of sustainable profit generation with cutting-edge strategies',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3',
      benefits: ['Includes free access to our exclusive business books']
    },
    {
      title: 'Advance Business Masters 2025',
      description: 'Elevate your business acumen to new heights with advanced methodologies',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3',
      benefits: ['Includes free access to our exclusive business books']
    },
    {
      title: 'ABM Mentoring 2025',
      description: 'Get personalized guidance to accelerate your business growth journey',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3',
      benefits: ['Includes free access to our exclusive business books']
    }
  ]

  const books = [
    {
      title: 'Business Transformation Guide',
      description: 'A comprehensive guide to transforming your business for sustainable growth',
      points: [
        'Strategic business transformation',
        'Growth methodologies',
        'Success case studies'
      ],
      image: '/Books/arsh-book1.png'
    },
    {
      title: 'Profit Mastery Handbook',
      description: 'Master the art of sustainable profit generation with proven strategies',
      points: [
        'Profit optimization techniques',
        'Financial management',
        'Business analytics'
      ],
      image: '/Books/arsh-book2.png'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        backgroundImage="/img/test.png"
      />

      {/* Services Introduction */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            What core services do we offer, and what does each service aim to achieve?
          </h2>
          <p className="text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed">
            At Finamite Solutions, we provide a comprehensive suite of services designed to transform your business journey. Our integrated approach combines personalized guidance, structured learning, strategic insights, and practical implementation support to help you achieve sustainable growth and success.
          </p>
        </div>
      </AnimatedSection>

      {/* Services Overview */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{service.title}</h3>
                <p className="text-text-secondary leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <AnimatedSection className="py-20 bg-light-color">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Group Courses</h2>
            <p className="section-subtitle">
              Transform your business journey with our expert-led courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">{course.title}</h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">{course.description}</p>
                  
                  <div className="mb-6">
                    {course.benefits.map((benefit, idx) => (
                      <p key={idx} className="text-accent text-sm flex items-center">
                        <i className="fas fa-check mr-2"></i>
                        {benefit}
                      </p>
                    ))}
                  </div>
                  
                  <button className="w-full bg-accent hover:bg-secondary text-white py-3 px-6 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Books Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Exclusive Books</h2>
            <p className="text-xl text-white/90">
              Free access with any course enrollment or workshop participation
            </p>
          </div>

          <div className="space-y-12">
            {books.map((book, index) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden card-hover"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-6">{book.title}</h3>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                      {book.description}
                    </p>
                    <ul className="space-y-3">
                      {book.points.map((point, idx) => (
                        <li key={idx} className="flex items-center text-white/90">
                          <i className="fas fa-check text-accent mr-3"></i>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 flex items-center justify-center">
                    <motion.img
                      whileHover={{ scale: 1.05, rotate: 3 }}
                      src={book.image}
                      alt={book.title}
                      className="max-w-xs h-auto shadow-2xl"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-text-secondary mb-10 max-w-3xl mx-auto">
            Transform your business potential into reality. Join our community of successful entrepreneurs and take the first step towards sustainable growth and success.
          </p>
          <motion.a
            href="https://thesalesrevolution.in/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-block text-lg px-12 py-4"
          >
            Get Started Now
          </motion.a>
        </div>
      </AnimatedSection>
    </div>
  )
}

export default Services