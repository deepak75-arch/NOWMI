import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Scissors, Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'Services', 'About', 'Testimonials', 'Contact']

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className={`p-2 rounded-full ${
              isScrolled ? 'bg-gold-500' : 'bg-white'
            }`}>
              <Scissors 
                size={20} 
                className={isScrolled ? 'text-slate-900' : 'text-slate-900'} 
              />
            </div>
            <span className={`text-xl font-bold ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              NOWMI OMR
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-gold-600' 
                    : 'text-white hover:text-gold-300'
                }`}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                isScrolled
                  ? 'bg-gold-500 text-slate-900 hover:bg-gold-600'
                  : 'bg-white text-slate-900 hover:bg-gold-500'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          className={`md:hidden overflow-hidden ${
            isMobileMenuOpen ? 'max-h-64' : 'max-h-0'
          } transition-all duration-300`}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block font-medium transition-colors ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-gold-600' 
                    : 'text-white hover:text-gold-300'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-gold-500 text-slate-900 py-2 rounded-full font-semibold hover:bg-gold-600 transition-colors">
              Book Now
            </button>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  )
}

export default Header