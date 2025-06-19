import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { socialLinks } from '../data/social';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  const nameParts = ["Subham", "Kumar", "Shee"];

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'GitHub':
        return <Github className="w-6 h-6" />;
      case 'LinkedIn':
        return <Linkedin className="w-6 h-6" />;
      default:
        return null;
    }
  };

  const mainSocials = socialLinks.filter(
    social => social.name === 'GitHub' || social.name === 'LinkedIn'
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center overflow-hidden relative">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary-300/30 dark:bg-primary-900/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-24 w-96 h-96 bg-secondary-300/30 dark:bg-secondary-900/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-300/20 dark:bg-accent-900/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div
            className="mb-6 overflow-hidden rounded-full p-2 bg-gradient-to-r from-primary-500 to-secondary-500"
            variants={itemVariants}
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-900">
              <img
                src="https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_350,h_400,g_auto/v1743426464/A-20250216-WA0006_-_Subham_kumar_fhw4hr.jpg"
                alt="Subham Kumar Shee"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name Typing Animation */}
          <motion.div
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 flex flex-wrap justify-center">
              {nameParts.map((word, i) => (
                <motion.span
                  key={i}
                  className={`${word === 'Shee' ? 'whitespace-nowrap' : ''} mr-2`}
                  style={{ display: 'inline-block' }}
                  variants={charVariants}
                  custom={i}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 max-w-2xl"
            variants={itemVariants}
          >
            IT Student & Aspiring Full-Stack Developer passionate about creating innovative web solutions.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex space-x-4 mb-8"
            variants={itemVariants}
          >
            {mainSocials.map(social => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={social.name}
              >
                {getSocialIcon(social.name)}
              </a>
            ))}
          </motion.div>

          {/* Buttons + Arrow */}
          <motion.div
            className="flex flex-col items-center space-y-6"
            variants={itemVariants}
          >
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-outline dark:text-white">
                Get In Touch
              </a>
            </div>

            <motion.a
              href="#projects"
              className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <span className="text-sm mb-1">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowDown size={20} />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
