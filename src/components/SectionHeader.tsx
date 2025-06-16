import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  align = 'center' 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className={`max-w-3xl mb-12 md:mb-16 ${alignmentClasses[align]}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      
      <div className="w-20 h-1 bg-primary-600 dark:bg-primary-500 mt-6 mb-1 rounded-full mx-auto"></div>
      <div className="w-10 h-1 bg-secondary-500 dark:bg-secondary-400 rounded-full mx-auto"></div>
    </motion.div>
  );
};

export default SectionHeader;