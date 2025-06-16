import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, CheckCircle2 } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex items-start ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
    >
      {/* Timeline line and dot */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2" />
      
      <div className={`hidden md:flex absolute left-1/2 top-5 transform -translate-x-1/2 items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 border-4 border-white dark:border-gray-900 z-10`}>
        <BriefcaseIcon size={18} className="text-primary-600 dark:text-primary-400" />
      </div>
      
      <div className={`flex-1 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {experience.position}
            </h3>
            <span className="mt-2 md:mt-0 text-sm font-medium px-3 py-1 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300">
              {experience.duration}
            </span>
          </div>
          
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
            {experience.company}
          </p>
          
          <ul className="space-y-3 mb-4">
            {experience.description.map((item, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle2 size={18} className="text-accent-500 dark:text-accent-400 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {experience.skills.map((skill) => (
              <span 
                key={skill} 
                className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;