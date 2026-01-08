import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How quickly can I start recruiting students through ApplyNext?',
      answer: 'You can start recruiting immediately after registration approval. Our onboarding process typically takes 24-48 hours, and you\'ll have access to our full network of 500+ partner institutions right away.'
    },
    {
      question: 'What commission rates does ApplyNext offer?',
      answer: 'We offer industry-leading commission rates of up to 80% disbursed to our recruitment partners. The exact rate depends on the institution and program, but we ensure transparent and competitive compensation structures.'
    },
    {
      question: 'How are commission payments processed?',
      answer: 'Commission payments are processed swiftly as soon as universities release funds. We provide real-time tracking of your commissions and offer multiple payment methods including bank transfers and digital payment platforms.'
    },
    {
      question: 'What support do you provide for visa applications?',
      answer: 'We offer comprehensive visa support including expert guidance, document preparation assistance, and direct connections with visa specialists. Our team helps streamline the entire visa application process for your students.'
    },
    {
      question: 'Can I access learning resources and training materials?',
      answer: 'Yes! All partners get access to our extensive library of country guides, university toolkits, recruitment best practices, and ongoing training webinars to help you succeed in international student recruitment.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto leading-relaxed">
              Get answers to common questions about our platform, processes, and partnership opportunities.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200 group"
                >
                  <h3 className="text-lg font-semibold text-navy-900 pr-4 group-hover:text-teal-600 transition-colors duration-200">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="h-6 w-6 text-teal-500" />
                    ) : (
                      <Plus className="h-6 w-6 text-navy-500 group-hover:text-teal-500 transition-colors duration-200" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-6">
                        <p className="text-navy-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact for more questions */}
          <motion.div
            className="text-center mt-12 p-8 bg-gradient-to-r from-navy-50 to-teal-50 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-navy-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-navy-600 mb-4">
              Our team is here to help you get started with ApplyNext.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg">
              Contact Support
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;