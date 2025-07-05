import React from 'react'
import { motion } from 'framer-motion'

const Terms = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By using our website and services, you accept and agree to be bound by these Terms, along with our Privacy Policy. If you\'re using our services on behalf of a business or other entity, you confirm that you have the authority to bind that entity to these Terms.'
    },
    {
      title: 'Services',
      content: 'Finamite Solutions provides system consulting, business solutions, and implementation services designed to assist small and medium-sized enterprises (SMEs) in improving operations. We reserve the right to modify or discontinue any service at any time without prior notice.'
    },
    {
      title: 'Use of Our Website and Services',
      content: 'You agree to use our website and services only for lawful purposes. Any unauthorized use of our website or services may lead to termination of your access.'
    },
    {
      title: 'Intellectual Property',
      content: 'All content on our website, including text, graphics, logos, images, and software, is the property of Finamite Solutions or its content suppliers and is protected by copyright and other intellectual property laws. You may not use our content without permission.'
    },
    {
      title: 'User Accounts',
      content: 'If you create an account with us, you are responsible for maintaining the confidentiality of your login information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.'
    },
    {
      title: 'Fees and Payments',
      content: 'Certain services may require fees. If fees apply, they will be specified at the time of purchase. Payments are due as outlined in the billing details provided, and failure to pay may result in suspension or termination of services.'
    },
    {
      title: 'Refunds',
      content: 'Refunds are issued at our discretion and as agreed upon in our service agreements. Please contact us directly if you have concerns about any payments or refunds.'
    },
    {
      title: 'Disclaimer of Warranties',
      content: 'Our website and services are provided on an "as-is" and "as-available" basis. While we strive to ensure accuracy, we do not guarantee that our website or services will be error-free, secure, or uninterrupted. We disclaim any warranties of any kind, whether express or implied.'
    },
    {
      title: 'Limitation of Liability',
      content: 'To the fullest extent allowed by law, Finamite Solutions will not be liable for any damages arising out of or related to your use of our website or services. This includes direct, indirect, incidental, punitive, or consequential damages.'
    },
    {
      title: 'Indemnification',
      content: 'You agree to indemnify and hold Finamite Solutions harmless from any claims, losses, liabilities, and expenses arising from your use of our website or services or from your violation of these Terms.'
    },
    {
      title: 'Third-Party Links',
      content: 'Our website may contain links to third-party websites. We are not responsible for the content or practices of these third-party websites. We encourage you to review their terms and policies separately.'
    },
    {
      title: 'Termination',
      content: 'We reserve the right to suspend or terminate your access to our website and services at our discretion if we believe you have violated these Terms or engaged in any unlawful activity.'
    },
    {
      title: 'Governing Law',
      content: 'These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes will be resolved in the courts of [Your Jurisdiction].'
    },
    {
      title: 'Changes to Terms',
      content: 'We may update these Terms periodically. The updated Terms will be posted on our website, and by continuing to use our services, you agree to any changes.'
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-light-color">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="gradient-bg text-white p-8 text-center">
            <h1 className="text-4xl font-bold">Terms of Service</h1>
          </div>

          {/* Introduction */}
          <div className="p-8 bg-blue-50 border-l-4 border-primary">
            <p className="text-lg text-text-secondary leading-relaxed">
              Welcome to Finamite Solutions! These Terms of Service ("Terms") outline the rules and regulations for using our website and services. By accessing our website, you agree to these Terms. If you do not agree, please do not use our website or services.
            </p>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="border-b border-gray-200 pb-6 last:border-b-0"
              >
                <h2 className="text-2xl font-bold text-primary mb-4">
                  {index + 1}. {section.title}
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-light-color p-6 rounded-xl"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
              <p className="text-text-secondary mb-4">
                If you have questions or concerns about these Terms or our services, please contact us at:
              </p>
              <div className="text-center">
                <p className="font-semibold text-primary text-lg">Finamite Solutions</p>
                <address className="not-italic text-text-secondary mt-2">
                  HOUSE NO. 3614,<br />
                  SECTOR 32A KIRTI NAGAR LUDHIANA,<br />
                  Punjab, India - 141010
                </address>
                <p className="text-text-secondary mt-2">
                  Phone: 9988600362<br />
                  Email: info@finamite.in
                </p>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <div className="bg-light-color p-6 text-center">
            <p className="text-text-secondary">
              &copy; 2025 Finamite Solutions. All Rights Reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Terms