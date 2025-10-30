import React from 'react'
import { motion } from 'framer-motion'
import { Scissors, Sparkles, Gem, Heart, Zap, Shield } from 'lucide-react'

const Services: React.FC = () => {
  const services = [
    {
      icon: Scissors,
      title: "Hair & Styling",
      description: "Precision cuts, creative styles, and color treatments by our expert stylists using premium products.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Precision Cuts", "Creative Styling", "Color Treatments", "Blow Drys"]
    },
    {
      icon: Sparkles,
      title: "Skin & Facial Treatments",
      description: "Hydrating facials, acne care, anti-aging treatments and more to keep your skin glowing.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Hydrating Facials", "Acne Care", "Anti-Aging", "Detox Treatments"]
    },
    {
      icon: Gem,
      title: "Men's Grooming",
      description: "Dedicated beard trims, hot-towel shaves, and men's haircuts in a gentleman's atmosphere.",
      image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Beard Trims", "Hot Towel Shaves", "Haircuts", "Scalp Treatments"]
    },
    {
      icon: Heart,
      title: "Spa & Massage",
      description: "Soothing body massages and relaxing spa rituals to melt away stress and rejuvenate your senses.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Swedish Massage", "Deep Tissue", "Aromatherapy", "Relaxation"]
    },
    {
      icon: Zap,
      title: "Nail Care",
      description: "Professional manicure, pedicure, and nail art to pamper your hands and feet with precision.",
      image: "https://images.unsplash.com/photo-1607778833979-4f87c81196c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Manicure", "Pedicure", "Nail Art", "Gel Polish"]
    },
    {
      icon: Shield,
      title: "Bridal & Events",
      description: "Glamour packages for weddings, parties, and special occasions with professional makeup and styling.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Bridal Makeup", "Event Styling", "Trial Sessions", "Group Packages"]
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
    <section id="services" className="py-20 bg-slate-50">
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
            className="inline-flex items-center space-x-2 bg-gold-500/10 rounded-full px-4 py-2 mb-4 border border-gold-500/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Sparkles size={16} className="text-gold-600" />
            <span className="text-gold-700 text-sm font-medium tracking-wide">
              PREMIUM SERVICES
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Luxury Grooming Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Experience world-class grooming with our comprehensive range of premium services 
            designed to enhance your natural beauty and confidence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <motion.div
                    className="p-3 bg-white/90 backdrop-blur-sm rounded-full"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon size={24} className="text-gold-600" />
                  </motion.div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-center space-x-2 text-sm text-slate-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * featureIndex }}
                      viewport={{ once: true }}
                    >
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-gold-600 transition-all duration-300 group-hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book This Service
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-slate-900 to-purple-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready for Your Transformation?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Book your appointment today and experience the NOWMI OMR difference. 
              Our expert team is ready to help you look and feel your absolute best.
            </p>
            <motion.button
              className="bg-gold-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gold-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Appointment Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services