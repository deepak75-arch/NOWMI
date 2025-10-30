import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LuxuryLoader from './components/LuxuryLoader.tsx'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import Services from './components/Services.tsx'
import About from './components/About.tsx'
import Testimonials from './components/Testimonials.tsx'
import Contact from './components/Contact.tsx'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LuxuryLoader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Header />
            <Hero />
            <Services />
            <About />
            <Testimonials />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App