// About.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Star, Scissors, Palette, Sparkles, MapPin, Phone, Clock as ClockIcon, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const services = [
    {
      icon: Scissors,
      title: "Hair Styling",
      description: "From classic cuts to modern styles, our expert stylists deliver precision cuts for all hair types.",
      category: "Core Services"
    },
    {
      icon: Palette,
      title: "Beauty Treatments",
      description: "Pamper yourself with our range of facials, waxing, and skincare treatments.",
      category: "Treatment Services"
    },
    {
      icon: Sparkles,
      title: "Spa Services",
      description: "Relax and rejuvenate with our premium spa and massage treatments.",
      category: "Premium Packages"
    }
  ];

  const stats = [
    { icon: Clock, value: "20+", label: "Years of Excellence" },
    { icon: Users, value: "50K+", label: "Satisfied Clients" },
    { icon: Award, value: "15+", label: "Awards Won" },
    { icon: Star, value: "4.9/5", label: "Customer Rating" }
  ];

  return (
    <section id="about" className="w-full bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
              <Sparkles size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent tracking-wide">YOUR GROWTH, OUR EXPERTISE</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              India's #1 Affordable <span className="text-accent">Salon Franchise</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At NOWMI OMR, we're more than just a salon—we're your neighborhood hub for professional grooming in the heart of the tech corridor. We blend global salon expertise with the warmth of local service.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is simple: to provide high-quality, affordable grooming in a welcoming environment that makes every customer look and feel their best.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-secondary p-4 rounded-lg"
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
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
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
                src="https://images.unsplash.com/photo-1562322140-2d5ee5b2b5e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="NOWMI OMR Salon Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-display text-2xl font-bold mb-3">Visit Us Today</h3>
                <div className="space-y-3 text-white/90 text-sm">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                    <p>Shop No. 8, Ground Floor, Tech Park Avenue, OMR, Sholinganallur, Chennai - 600119</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                    <a href="tel:+914412345678" className="hover:text-accent transition-colors">+91 44 1234 5678</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ClockIcon className="w-4 h-4 flex-shrink-0 text-accent" />
                    <p>Mon-Sat: 9 AM - 9 PM | Sun: 10 AM - 7 PM</p>
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