import React from 'react';
import { motion } from 'framer-motion';
import { Building, TrendingUp, Globe, Users } from 'lucide-react';

const Metrics = () => {
  const metrics = [
    {
      icon: Building,
      value: '500+',
      label: 'Partner Institutions',
      color: 'text-teal-500'
    },
    {
      icon: TrendingUp,
      value: '80%',
      label: 'Commissions',
      color: 'text-navy-500'
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Countries',
      color: 'text-teal-500'
    },
    {
      icon: Users,
      value: '10,000+',
      label: 'Students Recruited',
      color: 'text-navy-500'
    }
  ];

  return (
    <section className="py-16 bg-navy-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    <metric.icon className={`h-8 w-8 ${metric.color}`} />
                  </div>
                </div>
                <motion.h3
                  className="text-3xl lg:text-4xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {metric.value}
                </motion.h3>
                <p className="text-gray-300 font-medium">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;