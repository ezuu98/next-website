import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Clock, TrendingUp } from 'lucide-react';

const CTA = () => {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-teal-500 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-400 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-navy-600 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Ready For Blazing Fast{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-300">
                Offer Letters?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Join ApplyNext today and streamline your student recruitment with our cutting-edge platform and global network.
            </p>
          </motion.div>

          {/* Benefits Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Zap className="h-8 w-8 text-teal-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-300 text-sm">Instant application processing</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Clock className="h-8 w-8 text-teal-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Quick Setup</h3>
              <p className="text-gray-300 text-sm">Start recruiting in 24 hours</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <TrendingUp className="h-8 w-8 text-teal-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">High Returns</h3>
              <p className="text-gray-300 text-sm">Up to 80% commission rates</p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={() => window.location.href = '/register'}
              className="group bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-400 hover:to-teal-300 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center space-x-3 mx-auto"
            >
              <span>Register Now</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <p className="text-gray-300 mt-6 text-sm">
              Free registration • No setup fees • Start recruiting today
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;