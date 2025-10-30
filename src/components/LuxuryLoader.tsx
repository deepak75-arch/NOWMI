import React from 'react'
import { motion } from 'framer-motion'
import { Scissors, Sparkles, Gem } from 'lucide-react'

const LuxuryLoader: React.FC = () => {
  const floatingElements = [
    { icon: Scissors, delay: 0 },
    { icon: Sparkles, delay: 0.3 },
    { icon: Gem, delay: 0.6 },
  ]

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold-500 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Loader Content */}
      <div className="relative z-10 text-center">
        {/* Central Logo Animation */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ 
            scale: 1, 
            rotate: 0,
            transition: { 
              type: "spring", 
              stiffness: 100, 
              damping: 15,
              duration: 1.5 
            }
          }}
        >
          <div className="relative">
            {/* Outer Ring */}
            <motion.div
              className="w-32 h-32 border-2 border-gold-500 rounded-full absolute inset-0"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
            
            {/* Inner Diamond */}
            <motion.div
              className="w-24 h-24 bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center rounded-lg transform rotate-45 mx-auto relative"
              animate={{
                rotate: [45, 405],
                boxShadow: [
                  "0 0 20px rgba(255,215,0,0.3)",
                  "0 0 40px rgba(255,215,0,0.6)",
                  "0 0 20px rgba(255,215,0,0.3)"
                ]
              }}
              transition={{
                rotate: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                },
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <motion.div
                className="transform -rotate-45 text-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <Scissors size={32} />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="relative h-20">
          {floatingElements.map((Element, index) => (
            <motion.div
              key={index}
              className="absolute text-gold-400"
              initial={{ 
                x: -100, 
                y: 0, 
                opacity: 0,
                scale: 0 
              }}
              animate={{ 
                x: 100, 
                y: Math.sin(index) * 50, 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.8,
                ease: "easeInOut",
              }}
            >
              <Element.icon size={24} />
            </motion.div>
          ))}
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h2 className="text-2xl font-light text-white mb-4 tracking-widest">
            NOWMI OMR
          </h2>
          <motion.div
            className="flex justify-center space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-gold-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Subtle Slogan */}
        <motion.p
          className="text-gold-200 text-sm mt-6 font-light tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Luxury Grooming Experience
        </motion.p>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 h-0.5 bg-slate-700 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: 256 }}
        transition={{ duration: 4, ease: "linear" }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-gold-400 to-gold-600"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 4, ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  )
}

export default LuxuryLoader