// Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="NOWMI OMR Salon Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90"></div>
      </div>
      
      {/* Top Bar with Contact Info */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between text-white/90 text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:+914412345678" className="flex items-center hover:text-accent transition-colors">
              <Phone className="w-4 h-4 mr-1.5" />
              <span>+91 44 1234 5678</span>
            </a>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center hover:text-accent transition-colors"
            >
              <MapPin className="w-4 h-4 mr-1.5" />
              <span>Tech Park Avenue, OMR, Sholinganallur</span>
            </a>
          </div>
          <div className="hidden md:flex items-center">
            <Clock className="w-4 h-4 mr-1.5" />
            <span>Mon-Sat: 9 AM - 9 PM | Sun: 10 AM - 7 PM</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center p-4 pt-20">
        <div className="w-full max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
              Chennai's Premier Unisex <span className="text-accent">Grooming Lounge</span>
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Where global salon expertise meets local warmth for the modern tech professional.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center h-12 px-8 bg-accent text-accent-foreground text-base font-bold rounded-full hover:bg-accent/90 transition-all shadow-lg"
              >
                <span>Book Appointment</span>
                <ArrowRight className="ml-2" size={20} />
              </motion.a>
              
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center h-12 px-8 bg-secondary text-secondary-foreground text-base font-bold rounded-full hover:bg-secondary/90 transition-all shadow-lg"
              >
                <span>Our Services</span>
              </motion.a>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mt-16">
              {[
                { value: "500+", label: "Outlets Globally" },
                { value: "Top 1%", label: "Expert Stylists" },
                { value: "Premium", label: "Budget-Friendly" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-black/20 backdrop-blur-sm p-4 rounded-lg border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.15 }}
                >
                  <div className="font-display text-3xl font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;