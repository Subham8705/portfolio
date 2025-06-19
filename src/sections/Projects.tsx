import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [showAll, setShowAll] = useState<boolean>(false);

  // Get unique tags from projects
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  // Filter projects based on selected tag
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(filter));

  // Slice projects to show only 6 if showAll is false
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of my recent work, showcasing my skills and expertise in web development."
        />

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={filterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-primary-600 text-white'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
            onClick={() => { setFilter('all'); setShowAll(false); }}
          >
            All
          </button>

          {allTags.map(tag => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tag
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
              onClick={() => { setFilter(tag); setShowAll(false); }}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {filteredProjects.length > 6 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="px-6 py-2 bg-primary-600 text-white rounded-full text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
