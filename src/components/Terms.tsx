import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Shield, Users, Globe } from 'lucide-react';

const Terms = () => {
  const goHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button
            onClick={goHome}
            className="flex items-center space-x-2 text-navy-600 hover:text-teal-600 transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
          
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <FileText className="h-8 w-8 text-teal-500" />
              <h1 className="text-4xl lg:text-5xl font-bold text-navy-900">
                Terms and Conditions
              </h1>
            </div>
            <p className="text-lg text-navy-600">
              ApplyNext Partner Agreement
            </p>
            <p className="text-sm text-navy-500 mt-2">
              Last updated: January 2025
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-teal-500 mr-2" />
                1. Introduction
              </h2>
              <p className="text-navy-700 leading-relaxed mb-4">
                Welcome to ApplyNext ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of our platform and services as a recruitment partner. By registering with ApplyNext, you agree to be bound by these Terms.
              </p>
              <p className="text-navy-700 leading-relaxed">
                ApplyNext is a global student recruitment platform that connects educational institutions with qualified recruitment partners to facilitate international student admissions.
              </p>
            </section>

            {/* Definitions */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Definitions</h2>
              <div className="space-y-3">
                <p className="text-navy-700"><strong>"Partner"</strong> refers to recruitment agents, consultants, or agencies registered with ApplyNext.</p>
                <p className="text-navy-700"><strong>"Institution"</strong> refers to educational institutions partnered with ApplyNext.</p>
                <p className="text-navy-700"><strong>"Student"</strong> refers to prospective students seeking admission through our platform.</p>
                <p className="text-navy-700"><strong>"Platform"</strong> refers to ApplyNext's website, portal, and related services.</p>
                <p className="text-navy-700"><strong>"Commission"</strong> refers to payments made to Partners for successful student enrollments.</p>
              </div>
            </section>

            {/* Partner Obligations */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                <Users className="h-6 w-6 text-teal-500 mr-2" />
                3. Partner Obligations
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-2">3.1 Registration Requirements</h3>
                  <ul className="list-disc list-inside space-y-2 text-navy-700">
                    <li>Provide accurate and complete registration information</li>
                    <li>Maintain valid business registration and relevant licenses</li>
                    <li>Update profile information promptly when changes occur</li>
                    <li>Comply with all applicable laws and regulations in your jurisdiction</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-2">3.2 Professional Standards</h3>
                  <ul className="list-disc list-inside space-y-2 text-navy-700">
                    <li>Maintain professional conduct in all interactions</li>
                    <li>Provide accurate information to students and institutions</li>
                    <li>Respond to inquiries and communications promptly</li>
                    <li>Adhere to ethical recruitment practices</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-2">3.3 Student Counseling</h3>
                  <ul className="list-disc list-inside space-y-2 text-navy-700">
                    <li>Provide honest and transparent guidance to students</li>
                    <li>Ensure students meet admission requirements before application</li>
                    <li>Assist with accurate document preparation and submission</li>
                    <li>Support students throughout the application process</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Commission Structure */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">4. Commission Structure and Payments</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-2">4.1 Commission Rates</h3>
                  <ul className="list-disc list-inside space-y-2 text-navy-700">
                    <li>Commission rates vary by institution and program</li>
                    <li>Partners may receive up to 80% of total commission disbursed</li>
                    <li>Specific rates are communicated upon partnership approval</li>
                    <li>Rates may be subject to change with 30 days' notice</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-2">4.2 Payment Terms</h3>
                  <ul className="list-disc list-inside space-y-2 text-navy-700">
                    <li>Commissions are paid after student enrollment confirmation</li>
                    <li>Payments are processed within 30 days of institution fund release</li>
                    <li>Partners must provide valid banking information for payments</li>
                    <li>Tax obligations are the responsibility of the Partner</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-2">4.3 Commission Eligibility</h3>
                  <ul className="list-disc list-inside space-y-2 text-navy-700">
                    <li>Student must complete enrollment and commence studies</li>
                    <li>All required documentation must be properly submitted</li>
                    <li>Partner must comply with all terms and conditions</li>
                    <li>No commission for withdrawn or cancelled applications</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Platform Usage */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                <Globe className="h-6 w-6 text-teal-500 mr-2" />
                5. Platform Usage
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-2">5.1 Account Security</h3>
                  <ul className="list-disc list-inside space-y-2 text-navy-700">
                    <li>Partners are responsible for maintaining account security</li>
                    <li>Login credentials must not be shared with unauthorized persons</li>
                    <li>Suspicious activity must be reported immediately</li>
                    <li>ApplyNext reserves the right to suspend accounts for security reasons</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-2">5.2 Acceptable Use</h3>
                  <ul className="list-disc list-inside space-y-2 text-navy-700">
                    <li>Platform must be used for legitimate recruitment purposes only</li>
                    <li>No fraudulent, misleading, or deceptive practices</li>
                    <li>Respect intellectual property rights</li>
                    <li>No unauthorized access to system components</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">6. Data Protection and Privacy</h2>
              <div className="space-y-3">
                <p className="text-navy-700">
                  Partners must comply with all applicable data protection laws, including GDPR where applicable. Student personal data must be handled with appropriate security measures and used only for legitimate recruitment purposes.
                </p>
                <p className="text-navy-700">
                  ApplyNext's Privacy Policy governs the collection and use of personal information on our platform. By using our services, you consent to our privacy practices as outlined in our Privacy Policy.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">7. Intellectual Property</h2>
              <div className="space-y-3">
                <p className="text-navy-700">
                  All content, trademarks, and intellectual property on the ApplyNext platform remain the property of ApplyNext or its licensors. Partners may use provided materials solely for authorized recruitment activities.
                </p>
                <p className="text-navy-700">
                  Partners grant ApplyNext a non-exclusive license to use their business name and logo for marketing and promotional purposes related to the partnership.
                </p>
              </div>
            </section>

            {/* Termination */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">8. Termination</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-2">8.1 Termination by Partner</h3>
                  <p className="text-navy-700">
                    Partners may terminate this agreement at any time by providing 30 days' written notice to ApplyNext.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-2">8.2 Termination by ApplyNext</h3>
                  <p className="text-navy-700">
                    ApplyNext may terminate partnerships immediately for breach of terms, fraudulent activity, or failure to maintain professional standards.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-2">8.3 Effect of Termination</h3>
                  <ul className="list-disc list-inside space-y-2 text-navy-700">
                    <li>Access to the platform will be revoked</li>
                    <li>Outstanding commissions for completed enrollments will be honored</li>
                    <li>Confidential information must be returned or destroyed</li>
                    <li>Ongoing student applications may be transferred</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">9. Limitation of Liability</h2>
              <div className="space-y-3">
                <p className="text-navy-700">
                  ApplyNext's liability is limited to the maximum extent permitted by law. We are not liable for indirect, incidental, or consequential damages arising from platform use or partnership activities.
                </p>
                <p className="text-navy-700">
                  Partners acknowledge that student admission decisions are made solely by educational institutions, and ApplyNext cannot guarantee admission outcomes.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">10. Governing Law</h2>
              <p className="text-navy-700">
                These Terms are governed by the laws of the United Kingdom. Any disputes will be resolved through binding arbitration in London, England.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">11. Changes to Terms</h2>
              <p className="text-navy-700">
                ApplyNext reserves the right to modify these Terms at any time. Partners will be notified of significant changes via email. Continued use of the platform constitutes acceptance of modified terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">12. Contact Information</h2>
              <div className="bg-gray-50 rounded-2xl p-6">
                <p className="text-navy-700 mb-2">
                  For questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-1 text-navy-700">
                  <p><strong>Email:</strong> legal@applynext.com</p>
                  <p><strong>Phone:</strong> +44 20 7946 0958</p>
                  <p><strong>Address:</strong> ApplyNext Ltd, London, United Kingdom</p>
                </div>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="border-t border-gray-200 pt-8">
              <div className="bg-teal-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Acknowledgment</h3>
                <p className="text-navy-700">
                  By registering as a partner with ApplyNext, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. You also confirm that you have the authority to enter into this agreement on behalf of your organization.
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;