import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { socialLinks } from '../data/social';

const iconComponents: Record<string, React.ReactNode> = {
  Github: <Github size={20} />,
  Linkedin: <Linkedin size={20} />,
  Instagram: <Instagram size={20} />
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 } 
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: (i: number) => ({ 
      scale: 1,
      transition: { 
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }),
    hover: { 
      scale: 1.2,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.footer 
      className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold font-serif text-primary-600 dark:text-primary-400">
              Subham Kumar Shee
            </a>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
              IT Student & Aspiring Full-Stack Developer passionate about creating innovative web solutions.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                custom={index}
                aria-label={social.name}
              >
                {iconComponents[social.icon]}
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Subham Kumar Shee. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;