import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HeroSection from '../components/HeroSection'
import AnimatedSection from '../components/AnimatedSection'

const Home = () => {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const [clientStatsRef, clientStatsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const whySmesReasons = [
    {
      icon: 'fas fa-user-tie',
      title: 'Personal Experience',
      description: 'I am a SME myself.'
    },
    {
      icon: 'fas fa-chart-line',
      title: '14 Years Expertise',
      description: 'With 14 years of experience, I deeply understand SMEs and their essence.'
    },
    {
      icon: 'fas fa-building',
      title: 'Economic Backbone',
      description: 'SMEs are the backbone of our economy, yet they remain the most neglected when it comes to training.'
    },
    {
      icon: 'fas fa-dollar-sign',
      title: 'Affordable Coaching',
      description: 'Business coaching has become so expensive that most SMEs can\'t afford it. I want to make it accessible and affordable for everyone.'
    }
  ]

  const keyProblems = [
    {
      icon: 'fas fa-money-bill-wave',
      title: 'Poor Cash Flow Management',
      description: 'Streamline your cash flow and payment processes for better financial control.'
    },
    {
      icon: 'fas fa-expand-arrows-alt',
      title: 'Scaling Challenges',
      description: 'Overcome barriers to growth with scalable business solutions.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Inefficient Processes',
      description: 'Optimize workflows and business processes for maximum efficiency.'
    },
    {
      icon: 'fas fa-robot',
      title: 'Lack of Automation',
      description: 'Automate repetitive tasks to save time and reduce errors.'
    },
    {
      icon: 'fas fa-file-invoice',
      title: 'Invoice Management',
      description: 'Simplify invoice tracking and management processes.'
    },
    {
      icon: 'fas fa-users-cog',
      title: 'Team Coordination',
      description: 'Improve team management and collaboration efficiency.'
    },
    {
      icon: 'fas fa-boxes',
      title: 'Inventory Control',
      description: 'Better manage your stock and inventory systems.'
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Marketing Strategy',
      description: 'Develop effective marketing strategies for business growth.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Customer Retention',
      description: 'Implement strategies to improve customer loyalty and satisfaction.'
    },
    {
      icon: 'fas fa-tasks',
      title: 'Resource Allocation',
      description: 'Optimize resource distribution for maximum efficiency.'
    },
    {
      icon: 'fas fa-clipboard-list',
      title: 'Business Planning',
      description: 'Create effective strategies for sustainable growth.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Risk Management',
      description: 'Identify and mitigate business risks effectively.'
    }
  ]

  const services = [
    {
      icon: 'fas fa-handshake',
      title: 'Coaching & Consultancy',
      description: 'We collaborate with business owners to uncover growth opportunities and streamline operations through expert advice and actionable strategies.',
      features: ['Profit Optimization', 'Business Efficiency', 'Strategic Planning']
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Courses',
      description: 'We offer courses to empower your Team with the skills and knowledge they need to implement new systems and strategies effectively.',
      features: ['Team Development', 'Skill Enhancement', 'Strategic Implementation']
    },
    {
      icon: 'fas fa-cogs',
      title: 'Systems Creation',
      description: 'We design and implement custom business systems that enhance productivity, automate workflows, and ensure scalability across all departments.',
      features: ['Process Automation', 'Scalable Workflows', 'Custom System Design']
    }
  ]

  const uniqueFeatures = [
    {
      icon: 'fas fa-puzzle-piece',
      title: 'Customized Solutions',
      description: 'We create systems and strategies tailored to your specific business needs, not one-size-fits-all approaches.'
    },
    {
      icon: 'fas fa-tools',
      title: 'Practical Approach',
      description: 'Our solutions are easy to implement and focus on achieving measurable outcomes.'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Proven Success',
      description: 'We\'ve helped many businesses grow their profits by 2x to 6x using our proven methods.'
    },
    {
      icon: 'fas fa-headset',
      title: 'Strong Support',
      description: 'Our team provides ongoing technical support to ensure everything runs smoothly even after implementation.'
    },
    {
      icon: 'fas fa-user-graduate',
      title: 'Expert Team',
      description: 'With years of experience in business consulting and profit coaching, we bring knowledge and passion to every project.'
    },
    {
      icon: 'fas fa-bullseye',
      title: 'Client-Centric Focus',
      description: 'Your success is our priority. We work closely with you to understand your goals and help you achieve them.'
    }
  ]

  const industries = [
    {
      title: 'MANUFACTURERS & TRADERS',
      subtitle: 'Manufacturing Industry',
      description: 'Streamline operations and boost productivity with our tailored solutions',
      image: '/img/industries/Manufacturing.jpg'
    },
    {
      title: 'INTERIOR DESIGNERS',
      subtitle: 'Interior Design Industry',
      description: 'Transform your work with our innovative design management solutions',
      image: '/img/industries/ID.jpg'
    },
    {
      title: 'RETAILER & WHOLESELLERS',
      subtitle: 'Retail Industry',
      description: 'Enhance customer experience and optimize inventory management with our solutions',
      image: '/img/industries/Retail.jpg'
    },
    {
      title: 'ARCHITECTS & REAL ESTATE',
      subtitle: 'Real Estate Industry',
      description: 'Revolutionize property management and architectural workflows',
      image: '/img/industries/real estate.jpg'
    },
    {
      title: 'CAs',
      subtitle: 'Finance Industry',
      description: 'Secure and efficient financial management solutions',
      image: '/img/industries/Fintech.jpg'
    },
    {
      title: 'FINANCIAL SEVICES',
      subtitle: 'Travel Industry',
      description: 'Optimize routes and manage fleet operations effectively',
      image: '/img/industries/travel.jpg'
    },
    {
      title: 'LOGISTICS & TRANSPORT',
      subtitle: 'Healthcare Industry',
      description: 'Modernize patient care and medical practice management',
      image: '/img/industries/Healthcare.jpg'
    },
    {
      title: 'SERVICE PROVIDERS',
      subtitle: 'Service Providers Industry',
      description: 'Enhance service delivery and customer satisfaction',
      image: '/img/industries/sp.jpg'
    }
  ]

  const journeyStats = [
    { number: '500', label: 'HAPPY CLIENTS', suffix: '+' },
    { number: '300', label: 'TRAINED BUSINESSES', suffix: '+' },
    { number: '100', label: 'CRORES OF CLIENT REVENUE', suffix: '+' },
    { number: '15', label: 'TEAM SIZE', suffix: '' },
    { number: '14', label: 'YEARS IN BUSINESS', suffix: '+' },
    { number: '50', label: 'PRODUCTS', suffix: '+' }
  ]

  const clientLogos = [
    '/img/clients/client-1.png',
    '/img/clients/client-2.png',
    '/img/clients/client-3.png',
    '/img/clients/client-4.png',
    '/img/clients/client-5.png',
    '/img/clients/client-6.png',
    '/img/clients/client-7.png',
    '/img/clients/client-8.png',
    '/img/clients/client-9.png',
    '/img/clients/client-10.png',
    '/img/clients/client-11.png',
    '/img/clients/client-12.png',
    '/img/clients/client-13.png',
    '/img/clients/client-15.png',
    '/img/clients/client-16.png',
    '/img/clients/client-17.png',
    '/img/clients/MEW.png',
    '/img/clients/magnacore_india_logo.jpg'
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroSection
        title="Partners in SME Business Growth."
        description="We see ourselves as Partners to SME Business Owners, in which we help them face the Challenges, foresee the challenges, and solve them through the Science of Business. We are on a Mission to Help SME business owners, create a life of Abundant in TIME and MONEY."
        backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3"
        showButtons={true}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8"
        >
          <button className="btn-outline">
            <i className="fas fa-book-open mr-2"></i>
            Read more
          </button>
        </motion.div>
      </HeroSection>

      {/* Why SMEs Only Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Why SMEs Only?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whySmesReasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-light-color p-8 rounded-2xl shadow-lg card-hover text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${reason.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{reason.title}</h3>
                <p className="text-text-secondary leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Key Problems We Solve Section */}
      <section className="py-20 bg-light-color">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Key Problems We Solve</h2>
            <p className="section-subtitle">
              Addressing Your Business Challenges with Innovative Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {keyProblems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md card-hover text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${problem.icon} text-lg text-white`}></i>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">{problem.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Finamite Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">About Finamite</h2>
              <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                "Founded with a vision to transform businesses, Finamite has grown from a small consultancy to a trusted partner for companies seeking sustainable growth. Our journey is marked by countless success stories of businesses we've helped flourish."
              </p>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">10+</div>
                  <div className="text-text-secondary">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-text-secondary">Satisfied Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">2-6x</div>
                  <div className="text-text-secondary">Growth Achievement</div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary mt-8"
              >
                Learn More About Us
              </motion.button>
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
                alt="Arsh Gaur - Founder"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto float-animation"
              />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Services we Offer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl card-hover"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-white/90 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-white/80">
                      <i className="fas fa-check text-accent mr-3"></i>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline"
            >
              Learn More About Our Services
            </motion.button>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique Section */}
      <AnimatedSection className="py-20 bg-light-color">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">What Makes Us Unique</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uniqueFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">
              Empowering Businesses Across Multiple Sectors with Innovative Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.subtitle}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold text-sm">{industry.title}</h4>
                    <h3 className="text-lg font-semibold">{industry.subtitle}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-text-secondary leading-relaxed">{industry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Stats Section */}
      <section ref={clientStatsRef} className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our journey through the years</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Creating stellar products for our users comes first. In the long run, it's not the big wins that matter, but the little ones, and the determination to keep trying.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {journeyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={clientStatsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={clientStatsInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                  className="text-4xl md:text-5xl font-bold mb-2 text-accent"
                >
                  {stat.number}{stat.suffix}
                </motion.div>
                <div className="text-sm md:text-base text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <AnimatedSection className="py-20 bg-light-color">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Clients</h2>
            <p className="section-subtitle">Trusted by Leading Businesses</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="bg-white p-4 rounded-xl shadow-md card-hover flex items-center justify-center h-20"
              >
                <img
                  src={logo}
                  alt="Client Logo"
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">We are here to help you grow your business!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-map-marker-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Finamite Solutions LLP</h3>
              <p className="text-text-secondary">
                HOUSE NO. 3614,<br />
                SECTOR 32A KIRTI NAGAR LUDHIANA,<br />
                Punjab, India - 141010
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-phone text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Call us on</h3>
              <p className="text-text-secondary">
                <a href="tel:+919592500362" className="hover:text-accent transition-colors">
                  +91 9592500362
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-envelope text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Email your Query</h3>
              <p className="text-text-secondary">
                <a href="mailto:Info@finamite.in" className="hover:text-accent transition-colors">
                  Info@finamite.in
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home