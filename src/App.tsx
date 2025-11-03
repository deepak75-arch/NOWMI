import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header.tsx';
import LuxuryLoader from './components/LuxuryLoader.tsx';
import Footer from './components/Footer.tsx';
import './App.css';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LuxuryLoader />;
  }

  return (
    <div className="App min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main>
        <Suspense fallback={<LuxuryLoader />}>
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