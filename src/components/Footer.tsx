import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, X } from 'lucide-react';
import { socialLinks } from '../data/social';

const iconComponents: Record<string, React.ReactNode> = {
  Github: <Github size={20} />,
  Linkedin: <Linkedin size={20} />,
  Instagram: <Instagram size={20} />
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [modalContent, setModalContent] = useState<null | 'privacy' | 'terms'>(null);

  return (
    <>
      {/* MODAL */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-[90%] max-w-lg shadow-lg relative text-left">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
              onClick={() => setModalContent(null)}
              aria-label="Close modal"
            >
              <X size={22} />
            </button>
            <h2 className="text-xl font-bold mb-2 text-primary-600 dark:text-primary-400">
              {modalContent === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {modalContent === 'privacy'
                ? 'This portfolio does not collect personal data except for your name and email through contact form to respond your queries. No cookies, no tracking, just code and creativity.'
                : 'By using this site, you agree not to reproduce or republish any content without permission. All projects are personal and educational.'}
            </p>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <motion.footer
        className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
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
              {socialLinks.map((social,) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
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
              <button
                onClick={() => setModalContent('privacy')}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setModalContent('terms')}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
