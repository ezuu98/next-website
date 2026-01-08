import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    'BPP University',
    'Keele University',
    'London South Bank University',
    'Cardiff University',
    'University of Essex',
    'Coventry University',
    'Birmingham City University',
    'University of Greenwich',
    'Robert Gordon University',
    'University of Hertfordshire',
    'Nottingham Trent University',
    'University of Portsmouth'
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              Trusted by Leading Institutions
            </h2>
            <p className="text-lg text-navy-600 max-w-3xl mx-auto leading-relaxed">
              Join a prestigious network of world-class educational institutions that trust ApplyNext for their international student recruitment needs.
            </p>
          </motion.div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-navy-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-teal-100 group-hover:to-navy-100 transition-all duration-300">
                  <span className="text-2xl font-bold text-navy-700 group-hover:text-teal-600 transition-colors duration-300">
                    {partner.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <h3 className="font-semibold text-navy-800 text-sm leading-tight group-hover:text-navy-900 transition-colors duration-300">
                  {partner}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-navy-600 mb-6">Ready to join this prestigious network?</p>
            <button className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg">
              Become a Partner Institution
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;