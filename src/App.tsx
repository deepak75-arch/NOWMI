import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header.tsx';
import LoadingScreen from './components/LoadingScreen.tsx';
import Footer from './components/Footer.tsx';
import './App.css';
import './index.css';

// Ensure dark theme is applied to the root element
if (!document.documentElement.classList.contains('dark')) {
  document.documentElement.classList.add('dark');
}

const Hero = lazy(() => import('./components/Hero.tsx'));
const About = lazy(() => import('./components/About.tsx'));
const Services = lazy(() => import('./components/Services.tsx'));
const Testimonials = lazy(() => import('./components/Testimonials.tsx'));
const Contact = lazy(() => import('./components/Contact.tsx'));

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentLoading, setContentLoading] = useState(true);

  useEffect(() => {
    // Initial loading timeout (minimum time to show loading screen)
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Content loading simulation (can be replaced with actual API calls)
    const contentTimer = setTimeout(() => {
      setContentLoading(false);
    }, 2500);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow relative">
        {contentLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
            <div className="loading-logo"></div>
          </div>
        )}
        <Suspense fallback={
          <div className="w-full h-screen flex items-center justify-center">
            <div className="loading-logo"></div>
          </div>
        }>
          <Hero />
          <About />
          <Services />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;