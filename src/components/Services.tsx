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
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Signature Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From precision cuts to revitalizing treatments, we offer services to make you look and feel your best.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col text-center items-center"
              variants={itemVariants}
            >
              <div className="p-4 bg-accent/10 rounded-full mb-4">
                <service.icon size={32} className="text-accent" />
              </div>

              <h3 className="font-display text-xl font-bold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {service.description}
              </p>

              <div className="w-full pt-4 border-t border-border">
                <a href="#contact">
                  <button
                    className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
                  >
                    Book Now
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-primary rounded-xl p-8 text-primary-foreground">
            <h3 className="font-display text-2xl font-bold mb-2">Ready for Your Transformation?</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Book your appointment today and let our expert team help you shine.
            </p>
            <a href="#contact">
              <motion.button
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-bold text-base hover:bg-accent/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Appointment
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services