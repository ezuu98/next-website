import React from 'react';
import { motion } from 'framer-motion';
import { Target, Network, Handshake, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <motion.h2
                  className="text-4xl lg:text-5xl font-bold text-navy-900"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  About ApplyNext
                </motion.h2>
                
                <motion.p
                  className="text-lg text-navy-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  ApplyNext is dedicated to revolutionizing international student recruitment by creating seamless connections between world-class educational institutions and trusted recruitment specialists. Our mission is to streamline the admissions process, maximize recruitment efficiency, and ensure quality outcomes for all stakeholders in the global education ecosystem.
                </motion.p>
              </div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Target className="h-6 w-6 text-teal-500" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-1">Mission</h3>
                  <p className="text-sm text-navy-600">Streamline global recruitment</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Network className="h-6 w-6 text-navy-500" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-1">Vision</h3>
                  <p className="text-sm text-navy-600">Global education network</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Handshake className="h-6 w-6 text-teal-500" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-1">Values</h3>
                  <p className="text-sm text-navy-600">Trust and reliability</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-80 bg-gradient-to-br from-navy-50 to-teal-50 rounded-3xl overflow-hidden">
                {/* Network visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Central hub */}
                    <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
                      <Network className="h-10 w-10 text-white" />
                    </div>
                    
                    {/* Connecting nodes */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center"
                        style={{
                          top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 6)}%`,
                          left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 6)}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut"
                        }}
                      >
                        <Globe className="h-6 w-6 text-navy-500" />
                      </motion.div>
                    ))}
                    
                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      {[...Array(6)].map((_, i) => (
                        <motion.line
                          key={i}
                          x1="50%"
                          y1="50%"
                          x2={`${50 + 40 * Math.cos((i * Math.PI * 2) / 6)}%`}
                          y2={`${50 + 40 * Math.sin((i * Math.PI * 2) / 6)}%`}
                          stroke="#17A2B8"
                          strokeWidth="2"
                          opacity="0.3"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: i * 0.2 }}
                        />
                      ))}
                    </svg>
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

export default About;