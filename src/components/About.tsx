import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Star, MapPin, Phone, Clock as ClockIcon } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Clock, value: "20+", label: "Years of Excellence" },
    { icon: Users, value: "50K+", label: "Satisfied Clients" },
    { icon: Award, value: "15+", label: "Awards Won" },
    { icon: Star, value: "4.9/5", label: "Customer Rating" }
  ];

  return (
    <section id="about" className="w-full bg-background-light dark:bg-background-dark py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* UPDATED: Changed padding, background, and text color */}
            <div className="inline-flex items-center space-x-2 bg-accent rounded-full px-3 py-1 mb-4">
              {/* Using accent color from theme */}
              <Star size={16} className="text-background-dark" />
              <span className="font-display text-sm font-bold text-background-dark tracking-wide">YOUR GROWTH, OUR EXPERTISE</span>
            </div>
            
            {/* UPDATED: Swapped text-primary and text-accent colors */}
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary ">
              India's #1 Affordable <span className=" text-accent">Salon Franchise</span>
            </h2>
            
            {/* Updated text to align with men's grooming brand guidelines */}
            <p className="font-display text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              At NOWMI OMR, we are the go-to destination for affordable, expert men's grooming in the heart of the tech corridor. We blend NOWMI's global expertise with the confident, friendly warmth of a neighborhood salon.
            </p>
            
            <p className="font-display text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Our mission is to be OMR's premier salon for working-age men, delivering confidence, style, and value with every visit. We are your convenient partner for looking sharp and feeling your best.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  // Updated background color to be theme-compliant
                  className="bg-gray-100 dark:bg-background-dark p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-accent/10 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-display text-2xl font-bold text-primary">{stat.value}</div>
                      {/* Updated text color to be theme-compliant */}
                      <div className="font-display text-sm text-gray-700 dark:text-gray-300">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative h-full min-h-[500px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.pixabay.com/photo/2019/03/08/20/17/beauty-salon-4043096_1280.jpg"
                alt="NOWMI OMR Salon Interior"
                className="w-full h-full object-cover"
              />
              {/* Updated gradient to match Hero section */}
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-display text-2xl font-bold mb-3">Visit Us Today</h3>
                <div className="space-y-3 text-white/90 text-sm">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                    <p className="font-display">Shop No. 8, Ground Floor, Tech Park Avenue, OMR, Sholinganallur, Chennai - 600119</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                    <a href="tel:+914412345678" className="font-display hover:text-accent transition-colors">+91 44 1234 5678</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ClockIcon className="w-4 h-4 flex-shrink-0 text-accent" />
                    <p className="font-display">Mon-Sat: 9 AM - 9 PM | Sun: 10 AM - 7 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

