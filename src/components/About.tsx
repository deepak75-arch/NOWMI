import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Clock, Star, Target, Heart } from 'lucide-react'

const About: React.FC = () => {
  const stats = [
    { icon: Clock, value: "20+", label: "Years Experience" },
    { icon: Users, value: "50K+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Awards Won" },
    { icon: Star, value: "4.9/5", label: "Customer Rating" }
  ]

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every service, ensuring you receive nothing but the best."
    },
    {
      icon: Heart,
      title: "Care",
      description: "Your comfort and satisfaction are our top priorities in every interaction."
    },
    {
      icon: Award,
      title: "Quality",
      description: "Using only premium products and latest techniques for exceptional results."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Section Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-gold-500/10 rounded-full px-4 py-2 mb-6 border border-gold-500/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Award size={16} className="text-gold-600" />
              <span className="text-gold-700 text-sm font-medium tracking-wide">
                ABOUT NOWMI OMR
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Redefining Luxury Grooming in Chennai
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              NOWMI is a trendsetter in Indian grooming. Founded over two decades ago, 
              we've grown from a single salon into one of the country's most trusted beauty brands.
            </p>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At NOWMI OMR, we combine global salon expertise with local warmth, making every visit 
              a refreshing escape. Our team carries forward NOWMI's reputation for excellence and innovation, 
              bringing you world-class grooming experiences right in the heart of Chennai's tech corridor.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-slate-50 rounded-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <stat.icon size={32} className="text-gold-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-slate-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              className="bg-gold-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gold-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn Our Story
            </motion.button>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <motion.img
                src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="NOWMI OMR Salon Interior"
                className="w-full h-[600px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              
              {/* Floating Card */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Values</h3>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <value.icon size={20} className="text-gold-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">{value.title}</h4>
                        <p className="text-slate-600 text-sm">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          className="mt-20 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gold-500/10 to-purple-500/10 rounded-2xl p-8 border border-gold-500/20">
            <Target size={48} className="text-gold-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              "To be OMR's go-to destination for affordable, expert grooming – delivering confidence, 
              style, and value every visit. We believe that looking great should be easy and fun, 
              which is why we've created a space where global expertise meets local warmth."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About