import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Arjun Patel",
      role: "Software Engineer",
      rating: 5,
      text: "NOWMI OMR has completely transformed my grooming experience. The attention to detail and professional service is unmatched in Chennai. My hair has never looked better!",
    },
    {
      name: "Priya Sharma",
      role: "Marketing Manager",
      rating: 5,
      text: "I brought my mother here for a facial and we were both blown away by the exceptional care. The staff is incredibly professional and the ambiance is so relaxing.",
    },
    {
      name: "Rahul Kumar",
      role: "Entrepreneur",
      rating: 5,
      text: "The spa treatment felt like a mini vacation. The men's haircut I got was absolutely perfect. Highly recommended for busy professionals!",
    },
    {
      name: "Deepa Nair",
      role: "College Student",
      rating: 5,
      text: "As a student, I appreciate their affordable pricing without compromising on quality. The stylists really listen to what you want and deliver amazing results.",
    },
    {
      name: "Vikram Singh",
      role: "IT Professional",
      rating: 5,
      text: "The convenience of online booking and their flexible hours make it perfect for my busy schedule. Always leave feeling refreshed and looking sharp.",
    },
    {
      name: "Ananya Reddy",
      role: "HR Manager",
      rating: 5,
      text: "Their bridal packages are exceptional! The team made me feel so special on my wedding day. The makeup and hairstyle were exactly what I wanted.",
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    // Updated bg-primary to bg-slate-900 and text-primary-foreground to text-slate-100
    <section id="testimonials" className="py-20 bg-slate-900 text-slate-100">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          {/* Updated text-primary-foreground/80 to text-slate-300 */}
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Real stories from our valued clients who trust us with their style.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              // Updated background and border colors
              className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    // Updated text-accent to text-gold-500
                    className="text-gold-500 fill-gold-500" 
                  />
                ))}
              </div>

              {/* Updated text colors */}
              <p className="text-slate-200 mb-6 leading-relaxed flex-grow">
                <Quote size={16} className="inline-block text-gold-500 mr-2" />
                {testimonial.text}
              </p>

              <div className="flex items-center space-x-4">
                {/* Updated icon background and text */}
                <div className="w-12 h-12 bg-gold-500 text-slate-900 rounded-full flex items-center justify-center">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Overall Rating */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Updated background and border colors */}
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-gold-500 fill-gold-500"
                />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">Rated 4.9/5 Stars</h3>
            <p className="text-slate-300">
              Based on 500+ reviews from our satisfied clients.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials;
