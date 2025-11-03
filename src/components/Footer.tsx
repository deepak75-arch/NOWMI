import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import NowmiLogo from '@/assets/nowmi-logo.jpg'; // Corrected import path
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Core Grooming', href: '#services' },
        { name: 'Style & Treatments', href: '#services' },
        { name: 'Skin & Nail Care', href: '#services' },
        { name: 'Premium Packages', href: '#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
        { name: 'Franchise', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
      ],
    },
  ];

  return (
    <footer className="w-full bg-primary text-white font-display">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Social */}
          <motion.div 
            className="md:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <a href="#home" className="inline-flex items-center space-x-3 mb-6">
              <img src={NowmiLogo} alt="NOWMI OMR Logo" className="h-10 w-10 rounded-full object-cover" />
              <span className="text-2xl font-bold text-white">NOWMI OMR</span>
            </a>
            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              Chennai's premier men's salon, delivering affordable expert grooming for tech professionals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-accent hover:bg-accent hover:text-primary transition-colors"
                >
                  <social.icon size={20} />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1), ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-accent mb-6 uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-background-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} NOWMI OMR. All Rights Reserved. Your Growth, Our Expertise.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


