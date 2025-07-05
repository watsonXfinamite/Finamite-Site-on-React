import React, { useState } from 'react'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import AnimatedSection from '../components/AnimatedSection'

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Us',
      content: 'HOUSE NO. 3614, SECTOR 32A KIRTI NAGAR LUDHIANA, Punjab, India - 141010',
      link: 'https://maps.app.goo.gl/w9JnYnYz8YDWo9NZ9'
    },
    {
      icon: 'fas fa-phone',
      title: 'Call Us',
      content: '+91 9592500362',
      link: 'tel:+919592500362'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      content: 'Info@finamite.in',
      link: 'mailto:Info@finamite.in'
    }
  ]

  const faqs = [
    {
      question: 'What services does Finamite Solutions offer?',
      answer: 'We provide standard and customized business solutions, including systems for operations management, profitability enhancement, compliance handling, and technical support for seamless integration into your workflow.'
    },
    {
      question: 'How do you help businesses grow?',
      answer: 'We analyze your business needs in 1-2-1 discussion, identify bottlenecks, and implement tailored strategies and systems that streamline operations, improve efficiency, and boost profitability.'
    },
    {
      question: 'What industries do you work with?',
      answer: 'We cater to a wide range of industries, including SMEs, service providers, traders, retailers, manufacturers, and financial planners.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Results vary depending on the complexity of your business, but many clients start seeing significant improvements within a few months of implementing our systems.'
    },
    {
      question: 'Do you provide ongoing support after implementation?',
      answer: 'Absolutely! We offer continuous technical support and regular updates to ensure the systems run smoothly and adapt to your evolving business needs.'
    },
    {
      question: 'Is your team experienced in handling my business size and challenges?',
      answer: 'Yes, our team has expertise in working with SME businesses of all sizes and across various industries, offering solutions tailored to your unique challenges and goals.'
    },
    {
      question: 'What makes Finamite Solutions different from other consulting firms?',
      answer: 'We focus on creating practical, easy-to-implement systems and strategies, backed by technical expertise and personalized support to deliver measurable results.'
    },
    {
      question: 'How do I get started with Finamite Solutions?',
      answer: 'Simply reach out to us through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and develop a customized plan for your business, or you may register for our upcoming workshop.'
    },
    {
      question: 'I am about to start business, is it for me?',
      answer: 'YES, it\'s the best time. These systems are suitable for beginner or an experienced entrepreneur Both.'
    }
  ]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroSection
        title="Contact"
        subtitle="Get in Touch"
        description="Let's discuss how we can help transform your business with our innovative solutions."
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3"
      />

      {/* Contact Info Cards */}
      <section className="py-20 bg-light-color relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-10">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-xl card-hover text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${info.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                      {info.title}
                    </a>
                  ) : (
                    info.title
                  )}
                </h3>
                <p className="text-text-secondary">
                  {info.link ? (
                    <a href={info.link} className="hover:text-accent transition-colors">
                      {info.content}
                    </a>
                  ) : (
                    info.content
                  )}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
              >
                <motion.button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  whileHover={{ backgroundColor: '#f9fafb' }}
                >
                  <h3 className="text-lg font-semibold text-primary pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <i className="fas fa-plus text-white text-sm"></i>
                  </motion.div>
                </motion.button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-text-secondary leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Map Section */}
      <AnimatedSection className="py-20 bg-light-color">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3423.6951134838278!2d75.867021!3d30.895188999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDUzJzQyLjciTiA3NcKwNTInMDEuMyJF!5e0!3m2!1sen!2sin!4v1732779889902!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

export default Contact