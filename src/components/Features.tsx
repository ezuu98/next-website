import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Zap, 
  Users, 
  FileText, 
  BookOpen, 
  Award, 
  MessageSquare, 
  TrendingUp 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Institutional Access',
      description: 'Connect your students with over 500 top institutions worldwide for maximum opportunities.',
      color: 'bg-teal-100 text-teal-600'
    },
    {
      icon: Zap,
      title: 'Swift Commission Transfers',
      description: 'Fast commission transfers as soon as universities release funds with transparent tracking.',
      color: 'bg-navy-100 text-navy-600'
    },
    {
      icon: Users,
      title: 'Efficient Student Recruitment',
      description: 'Speed up the application process with streamlined workflows and automated systems.',
      color: 'bg-teal-100 text-teal-600'
    },
    {
      icon: FileText,
      title: 'Application Processing',
      description: 'Simplified workflows for faster offers with real-time status tracking and updates.',
      color: 'bg-navy-100 text-navy-600'
    },
    {
      icon: BookOpen,
      title: 'Learning Resources',
      description: 'Access comprehensive country guides, university toolkits, and recruitment best practices.',
      color: 'bg-teal-100 text-teal-600'
    },
    {
      icon: Award,
      title: 'Scholarships & Visa Support',
      description: 'Exclusive scholarships opportunities and expert visa guidance for your students.',
      color: 'bg-navy-100 text-navy-600'
    },
    {
      icon: MessageSquare,
      title: 'Account Manager Support',
      description: 'Instant help via email & WhatsApp from dedicated account managers.',
      color: 'bg-teal-100 text-teal-600'
    },
    {
      icon: TrendingUp,
      title: 'Highest Commissions',
      description: 'Up to 80% of commissions disbursed to partners with transparent fee structures.',
      color: 'bg-navy-100 text-navy-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
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
              Why Choose ApplyNext?
            </h2>
            <p className="text-lg text-navy-600 max-w-3xl mx-auto leading-relaxed">
              Discover the comprehensive features that make ApplyNext the preferred choice for educational institutions and recruitment partners worldwide.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform duration-200`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-teal-600 transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="text-navy-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;