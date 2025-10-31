import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import nowmiLogo from '@/assets/nowmi-logo.jpg'; // Assuming your logo is here

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-lg z-50 border-b border-border shadow-sm">
      <nav className="container flex items-center justify-between h-20 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#hero" onClick={() => scrollToSection('hero')} className="cursor-pointer">
            <img src={nowmiLogo} alt="NOWMI OMR Logo" className="h-9" />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground hover:text-accent font-medium transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a href="https://wa.me/914412345678" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-accent/30">
              Book Now
            </Button>
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(true)}
            className="text-foreground hover:bg-muted"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-background z-50 p-6 md:hidden"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex justify-between items-center mb-8">
            <img src={nowmiLogo} alt="NOWMI OMR Logo" className="h-9" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground hover:bg-muted"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-foreground hover:text-accent transition-colors py-2 text-lg font-medium"
              >
                {item.label}
              </button>
            ))}
            <a href="https://wa.me/914412345678" target="_blank" rel="noopener noreferrer" className="mt-4">
              <Button className="w-full text-lg py-6 bg-accent text-accent-foreground hover:bg-accent/90">
                Book Now
              </Button>
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;