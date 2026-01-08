import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, BookOpen } from 'lucide-react';

const Hero = () => {
  const scrollToCTA = () => {
    window.location.href = '/register';
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-navy-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <motion.h1
                  className="text-5xl lg:text-6xl font-bold text-navy-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Welcome to{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">
                    ApplyNext
                  </span>
                </motion.h1>
                
                <motion.h2
                  className="text-2xl lg:text-3xl text-navy-700 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Your trusted & reliable global admissions partner
                </motion.h2>
                
                <motion.p
                  className="text-lg text-navy-600 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Maximising international student recruitment by connecting top educational institutions with quality recruitment specialists.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <button
                  onClick={scrollToCTA}
                  className="group bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center space-x-2"
                >
                  <span>Register Now</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </motion.div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-full h-96 bg-gradient-to-br from-teal-50 to-navy-50 rounded-3xl overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-teal-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-32 right-16 w-16 h-16 bg-navy-500 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute bottom-20 left-20 w-12 h-12 bg-teal-600 rounded-full animate-pulse delay-2000"></div>
                </div>

                {/* Central Icons */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <motion.div
                      className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Globe className="h-12 w-12 text-teal-500" />
                    </motion.div>
                    
                    <motion.div
                      className="absolute -top-4 -right-4 w-16 h-16 bg-navy-500 rounded-xl shadow-lg flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <Users className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    <motion.div
                      className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <BookOpen className="h-8 w-8 text-navy-500" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;