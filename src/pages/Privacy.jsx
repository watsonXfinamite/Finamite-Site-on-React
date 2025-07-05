import React from 'react'
import { motion } from 'framer-motion'

const Privacy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      subsections: [
        {
          title: 'Personal Information',
          content: 'When you interact with our website, we may collect certain personal information that you provide voluntarily, such as your name, email address, phone number, and any other details you choose to share with us.'
        },
        {
          title: 'Non-Personal Information',
          content: 'We also gather non-personal information like your browser type, device details, IP address, and website usage data. This information is collected automatically through cookies, log files, and similar tools.'
        }
      ]
    },
    {
      title: 'How We Use Your Information',
      subsections: [
        {
          title: 'Personal Information',
          content: 'We may use your personal information to:',
          list: [
            'Respond to your questions and provide the services you\'ve requested.',
            'Send you updates and marketing messages, if you\'ve opted in to receive them.',
            'Enhance our website, services, and offerings.',
            'Protect against fraud and secure our website.',
            'Fulfill legal obligations and enforce our policies.'
          ]
        },
        {
          title: 'Non-Personal Information',
          content: 'Non-personal information helps us analyze trends, manage our website, understand user preferences, and improve the user experience.'
        }
      ]
    },
    {
      title: 'Sharing Your Information',
      subsections: [
        {
          title: 'Service Providers',
          content: 'We may share your information with third-party service providers who assist us in running our website and delivering services. These providers are bound by contracts to keep your information secure and use it only as directed by us.'
        },
        {
          title: 'Legal Obligations',
          content: 'We may disclose your information if legally required or if necessary to protect our rights, property, or the safety of others.'
        }
      ]
    },
    {
      title: 'Data Security',
      content: 'We use reasonable security measures to protect your information from unauthorized access or misuse. However, please be aware that no internet transmission or storage method is entirely secure.'
    },
    {
      title: 'Links to Other Websites',
      content: 'Our website may link to third-party websites. We are not responsible for their privacy practices, and we recommend reviewing their policies separately.'
    },
    {
      title: 'Children\'s Privacy',
      content: 'Our website is not intended for children under 18. We do not knowingly collect information from children. If you believe we have collected a child\'s information, please contact us so we can remove it.'
    },
    {
      title: 'Changes to This Privacy Policy',
      content: 'We may update this policy occasionally. Updates will be posted on our website, and we encourage you to review this policy to stay informed about our privacy practices.'
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
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>

          {/* Introduction */}
          <div className="p-8 bg-blue-50 border-l-4 border-primary">
            <p className="text-lg text-text-secondary leading-relaxed">
              Thank you for visiting Finamite Solutions. This Privacy Policy explains how we handle your information when you use our website. We prioritize your privacy and are committed to safeguarding your personal information.
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b border-gray-200 pb-6 last:border-b-0"
              >
                <h2 className="text-2xl font-bold text-primary mb-4">
                  {index + 1}. {section.title}
                </h2>
                
                {section.content && (
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {section.content}
                  </p>
                )}

                {section.subsections && (
                  <div className="space-y-4">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="ml-4">
                        <h3 className="text-lg font-semibold text-secondary mb-2">
                          {index + 1}.{subIndex + 1} {subsection.title}
                        </h3>
                        <p className="text-text-secondary leading-relaxed mb-2">
                          {subsection.content}
                        </p>
                        {subsection.list && (
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            {subsection.list.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-text-secondary">
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
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
                If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us at:
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

export default Privacy