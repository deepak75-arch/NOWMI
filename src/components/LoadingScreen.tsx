import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NowmiLogo from '@/assets/nowmi-logo.jpg'; // Use alias path

const LuxuryLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
    
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        // Approach 100, but slow down
        const newProgress = prev + (100 - prev) * 0.1;
        return newProgress > 99.9 ? 99.9 : newProgress;
      });
    }, 150);

    // Simulate loading time
    const timer = setTimeout(() => {
      setProgress(100);
      clearInterval(progressInterval);
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = 'auto';
      }, 500); // Wait for fade out
    }, 3000); // 3-second minimum load time

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* New Luxury Animation Section */}
          <div className="relative w-48 h-48 flex items-center justify-center mb-8">
            
            {/* 1. Pulsing Glow (behind) */}
            <motion.div
              className="absolute w-48 h-32 rounded-lg bg-accent blur-2xl" // Changed to match logo aspect ratio
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            />

            {/* 2. Logo Container (with shimmer) */}
            <motion.div
              className="relative w-32 rounded-lg overflow-hidden shadow-2xl shadow-accent/20" // Use rectangle
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <img
                src={NowmiLogo}
                alt="NOWMI OMR Logo"
                className="w-full h-auto" // Use auto height
              />
              {/* 3. The Shimmer Effect (inside) */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  background: 'linear-gradient(110deg, transparent 30%, rgba(255, 219, 112, 0.4) 50%, transparent 70%)',
                  transform: 'translateX(-100%)',
                }}
                animate={{
                  translateX: ['-100%', '200%'], // Move from off-screen left to off-screen right
                }}
                transition={{
                  duration: 2.5,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  delay: 1,
                }}
              />
            </motion.div>
          </div>
          
          {/* Loading Text */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-display font-bold text-white mb-1">NOWMI OMR</h2>
            <p className="text-sm tracking-wider font-light text-accent/80">
              Chennai's Premier Men's Salon
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.15, ease: 'linear' }}
            />
          </div>

          {/* Percentage - REMOVED */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LuxuryLoader;




