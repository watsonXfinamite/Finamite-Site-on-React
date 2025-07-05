import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: 'fab fa-facebook', url: 'https://www.facebook.com/finamite/' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/arshgaur_official/' },
    { name: 'WhatsApp', icon: 'fab fa-whatsapp', url: 'https://whatsapp.com/channel/0029VaiubWG2UPBGt0SiWt1L' },
    { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://www.youtube.com/@caarshgaurbusinessprofitco4182' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/company/finamite-solutions-llp-arsh-gaur' },
  ]

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'Our Founder', url: '#' },
        { name: 'Testimonials', url: '#' },
        { name: 'Our Values', url: '#' },
        { name: 'Blogs', url: '#' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Business Consulting', url: '#' },
        { name: 'Profit Coaching', url: '#' },
        { name: 'Training', url: '#' },
        { name: 'Implementation', url: '#' },
      ]
    },
    {
      title: 'Mastery Protocols',
      links: [
        { name: 'Profit Captains', url: '#' },
        { name: 'Sales Mastery', url: '#' },
        { name: 'Advance Business Mastery', url: '#' },
        { name: 'Advance Business Mastery 2.0', url: '#' },
      ]
    }
  ]

  return (
    <footer className="gradient-bg text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold mb-4">Finamite Solutions</h2>
            <p className="text-white/80 mb-6 leading-relaxed">
              Transforming businesses through innovative technology solutions across industries.
            </p>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      className="text-white/80 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Find Us On</h3>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300"
                >
                  <i className={`${social.icon} text-lg`}></i>
                  <span className="text-sm">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/terms" className="text-white/80 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cancellation" className="text-white/80 hover:text-white transition-colors">
                Refund & Cancellation Policy
              </Link>
            </div>
            <div className="text-sm text-white/80">
              &copy; 2024 Finamite Solutions LLP. All Rights Reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer