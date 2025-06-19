import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  const barVariants = {
    hidden: { width: 0 },
    visible: (i: number) => ({
      width: `${skill.level}%`,
      transition: {
        delay: i * 0.1,
        duration: 1,
        ease: "easeOut"
      }
    })
  };

  const categoryColors = {
    frontend: "bg-primary-500 dark:bg-primary-600",
    backend: "bg-secondary-500 dark:bg-secondary-600",
    design: "bg-accent-500 dark:bg-accent-600",
    other: "bg-pink-500 dark:bg-pink-600", // vibrant color
  };

  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1 items-center">
        <span className="text-base font-medium text-gray-800 dark:text-gray-200">
          {skill.name}
        </span>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className={`h-2.5 rounded-full ${categoryColors[skill.category]}`}
          variants={barVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          custom={index}
        />
      </div>
    </div>
  );
};

export default SkillBar;
