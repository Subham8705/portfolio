import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Certificates from './sections/Certificates';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Check if user prefers dark mode
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  // Update document class when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AnimatePresence>
      <div className="relative">
        <CustomCursor />
        <ScrollProgress />
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Certificates />
          <About />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;