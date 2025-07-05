import React from 'react'
import { motion } from 'framer-motion'

const Cancellation = () => {
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
            <h1 className="text-4xl font-bold">Refund & Cancellation Policy</h1>
          </div>

          {/* Introduction */}
          <div className="p-8 bg-blue-50 border-l-4 border-primary">
            <p className="text-lg text-text-secondary leading-relaxed">
              At Finamite Solutions, we strive to ensure complete satisfaction with our services. This Refund & Cancellation Policy outlines the terms and conditions related to refunds and cancellations of our various offerings.
            </p>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Coaching & Consultancy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-b border-gray-200 pb-6"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">
                1. Coaching & Consultancy Services
              </h2>
              <ul className="space-y-2 text-text-secondary ml-4">
                <li>• Payments for coaching and consultancy sessions are non-refundable once the session has commenced.</li>
                <li>• If you need to reschedule, please notify us at least 48 hours in advance. Rescheduling requests made less than 48 hours before the session may not be accommodated.</li>
              </ul>
            </motion.div>

            {/* Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-b border-gray-200 pb-6"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">
                2. Courses
              </h2>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <p className="text-text-secondary leading-relaxed">
                  At Finamite, we are committed to delivering transformational learning through our courses like Profit Captains 2025. That's why we offer a 100% Money-Back Guarantee – with a few important conditions to ensure fairness and clarity.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-3">Eligibility Criteria</h3>
                  <p className="text-text-secondary mb-2">To be eligible for a refund under our guarantee:</p>
                  <ul className="space-y-2 text-text-secondary ml-4">
                    <li>• You must attend and complete all course sessions.</li>
                    <li>• A written refund request must be submitted within 7 days of completing the course.</li>
                    <li>• Refund requests should be sent via email to Caarshgaur@pks94.com and Info@finamite.in with the subject line: <strong>Refund Request - Course Name - Batch or Month</strong></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-3">Exclusions – Refunds Will Not Be Provided If:</h3>
                  <ul className="space-y-2 text-text-secondary ml-4">
                    <li>• You miss any part of the course.</li>
                    <li>• The request is made after 7 days from course completion.</li>
                    <li>• You violate course conduct rules.</li>
                    <li>• Your reason is unrelated to course content (e.g. personal issues, schedule changes, loss of interest).</li>
                    <li>• You share course materials or login details without written permission.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-3">Refund Process</h3>
                  <ul className="space-y-2 text-text-secondary ml-4">
                    <li>• Once the refund request is reviewed and approved, the refund will be processed within 14 business days.</li>
                    <li>• Refunds are issued through the original payment method used at registration.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-3">Final Decision Clause</h3>
                  <p className="text-text-secondary">
                    All refund decisions are at the sole discretion of Finamite Solutions LLP, and are considered final and binding.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Digital Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-b border-gray-200 pb-6"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">
                3. Digital Products
              </h2>
              <ul className="space-y-2 text-text-secondary ml-4">
                <li>• Due to the nature of digital products, all sales are final.</li>
                <li>• If you experience any issues accessing or using a digital product, please contact our support team for assistance.</li>
              </ul>
            </motion.div>

            {/* General Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-b border-gray-200 pb-6"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">
                4. General Terms
              </h2>
              <ul className="space-y-2 text-text-secondary ml-4">
                <li>• All refund or rescheduling requests must be submitted in writing to Info@finamite.in</li>
                <li>• We reserve the right to modify this refund policy at any time. Any changes will be posted on this page.</li>
              </ul>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                <p className="text-text-secondary">
                  <strong>Important Note:</strong> Please ensure that this policy is tailored to your specific services and business model. It's also recommended to consult with a legal professional to ensure compliance with applicable laws and regulations.
                </p>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-light-color p-6 rounded-xl"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
              <p className="text-text-secondary mb-4">
                If you have any questions or concerns about this Refund & Cancellation Policy, please contact us at:
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

export default Cancellation