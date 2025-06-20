import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import countapi from 'countapi-js'; 

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // // CountAPI: increment and get visitor count
  // useEffect(() => {
  //   countapi.hit('subham-portfolio', 'visits').then((res) => {
  //     setVisitorCount(res.value);
  //   }).catch(console.error);
  // }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
         <a
  href="#home"
  className="text-3xl text-bold md:text-4xl text-primary-600 dark:text-primary-400"
  style={{ fontFamily: 'The Season' }}
>
  Portfolio
</a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Visitor Count */}
            {/* <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">
              Visitors: {visitorCount !== null ? visitorCount : '...'}
            </span> */}

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Nav Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="text-gray-700 dark:text-gray-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-y-0 right-0 z-50 w-full md:hidden bg-white dark:bg-gray-900 shadow-xl transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        variants={mobileMenuVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
      >
        <div className="flex flex-col p-8 h-full">
          <div className="flex justify-end mb-8">
            <button
              className="text-gray-700 dark:text-gray-300"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}

            {/* Visitor Count in Mobile */}
            {/* <span className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Visitors: {visitorCount !== null ? visitorCount : '...'}
            </span> */}
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
