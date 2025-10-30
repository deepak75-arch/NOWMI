import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Arjun Patel",
      role: "Software Engineer",
      rating: 5,
      text: "NOWMI OMR has completely transformed my grooming experience. The attention to detail and professional service is unmatched in Chennai. My hair has never looked better!",
      avatar: "A"
    },
    {
      name: "Priya Sharma",
      role: "Marketing Manager",
      rating: 5,
      text: "I brought my mother here for a facial and we were both blown away by the exceptional care. The staff is incredibly professional and the ambiance is so relaxing.",
      avatar: "P"
    },
    {
      name: "Rahul Kumar",
      role: "Entrepreneur",
      rating: 5,
      text: "The spa treatment felt like a mini vacation in the middle of the city. Plus, the men's haircut I got was absolutely perfect. Highly recommended for busy professionals!",
      avatar: "R"
    },
    {
      name: "Deepa Nair",
      role: "College Student",
      rating: 5,
      text: "As a student, I appreciate their affordable pricing without compromising on quality. The stylists really listen to what you want and deliver amazing results every time.",
      avatar: "D"
    },
    {
      name: "Vikram Singh",
      role: "IT Professional",
      rating: 5,
      text: "The convenience of online booking and their flexible hours make it perfect for my busy schedule. Always leave feeling refreshed and looking sharp for meetings.",
      avatar: "V"
    },
    {
      name: "Ananya Reddy",
      role: "HR Manager",
      rating: 5,
      text: "Their bridal packages are exceptional! The team made me feel so special on my wedding day. The makeup lasted all day and the hairstyle was exactly what I wanted.",
      avatar: "A"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gold-500/20 rounded-full px-4 py-2 mb-4 border border-gold-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Star size={16} className="text-gold-400" />
            <span className="text-gold-300 text-sm font-medium tracking-wide">
              CLIENT TESTIMONIALS
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued clients have to say 
            about their experiences at NOWMI OMR.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-gold-500/30 transition-all duration-500 group"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote size={24} className="text-gold-500 opacity-50" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-gold-500 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.avatar}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gold-500/10 to-purple-500/10 rounded-2xl p-8 border border-gold-500/20 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="text-gold-500 fill-current"
                />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Rated 4.9/5 Stars</h3>
            <p className="text-slate-300">
              Based on 500+ reviews from our satisfied clients across Chennai
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials