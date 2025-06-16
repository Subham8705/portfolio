import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Check, BookOpen, Code, User } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <SectionHeader
          title="About Me"
          subtitle="Learn more about my background, education, and what drives me as a developer."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 dark:bg-primary-900 rounded-lg -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary-200 dark:bg-secondary-900 rounded-lg -z-10"></div>
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img
                  src="https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_777,h_900,g_auto/v1743426464/A-20250216-WA0006_-_Subham_kumar_fhw4hr.jpg"
                  alt="About Me"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="flex items-center mb-6"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center bg-primary-100 dark:bg-primary-900 rounded-full w-12 h-12 mr-4">
                <User className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Who I Am</h3>
            </motion.div>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-400 mb-6"
              variants={itemVariants}
            >
              I'm Subham Kumar Shee, a passionate IT student at Gokaraju Rangaraju Institute of Engineering & Technology. My journey in technology began with curiosity about how websites work, which has evolved into a deep passion for full-stack development and creating innovative digital solutions.
            </motion.p>
            
            <motion.div 
              className="flex items-center mb-6"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center bg-secondary-100 dark:bg-secondary-900 rounded-full w-12 h-12 mr-4">
                <Code className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Approach</h3>
            </motion.div>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-400 mb-6"
              variants={itemVariants}
            >
              I believe in writing clean, efficient code and creating user-friendly applications. My focus is on modern web technologies like React, TypeScript, and Node.js, combined with a strong foundation in computer science principles and problem-solving skills.
            </motion.p>
            
            <motion.div 
              className="flex items-center mb-6"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center bg-accent-100 dark:bg-accent-900 rounded-full w-12 h-12 mr-4">
                <BookOpen className="w-5 h-5 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Continuous Learning</h3>
            </motion.div>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-400 mb-8"
              variants={itemVariants}
            >
              As a student, I'm constantly learning and exploring new technologies. I dedicate time to building projects, contributing to open-source, and staying updated with the latest trends in web development and software engineering.
            </motion.p>
            
            <motion.div 
              className="flex justify-center lg:justify-start"
              variants={itemVariants}
            >
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;