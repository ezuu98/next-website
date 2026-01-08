import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Director of International Admissions',
      company: 'University of Excellence',
      quote: 'ApplyNext has transformed our international recruitment process. The commission transfers are lightning fast, and their support team is incredibly responsive. We\'ve seen a 150% increase in quality applications.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      title: 'Recruitment Partner',
      company: 'Global Education Consultants',
      quote: 'Working with ApplyNext has been a game-changer for our business. The 80% commission rate and swift processing times have significantly improved our revenue and student satisfaction rates.',
      rating: 5
    },
    {
      name: 'Dr. Emily Rodriguez',
      title: 'International Office Head',
      company: 'Metropolitan University',
      quote: 'The platform\'s efficiency and the quality of recruitment partners in ApplyNext\'s network have exceeded our expectations. Our international student enrollment has grown by 200% in just one year.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-navy-900">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our Partners Say
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Hear from educational institutions and recruitment partners who have transformed their international student recruitment with ApplyNext.
            </p>
          </motion.div>

          {/* Testimonials Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <Quote className="h-8 w-8 text-teal-500 flex-shrink-0 mt-1" />
                  <p className="text-lg lg:text-xl text-navy-700 leading-relaxed italic">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-navy-900 text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-navy-600 font-medium">
                      {testimonials[currentIndex].title}
                    </p>
                    <p className="text-teal-600 font-semibold">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 group"
              >
                <ChevronLeft className="h-6 w-6 text-white group-hover:text-teal-300" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      currentIndex === index ? 'bg-teal-500' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 group"
              >
                <ChevronRight className="h-6 w-6 text-white group-hover:text-teal-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;