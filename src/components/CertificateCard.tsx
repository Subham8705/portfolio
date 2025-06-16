import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import { Certificate } from '../types';

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, index }) => {
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

  return (
    <motion.div
      className="card group h-full flex flex-col"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="relative overflow-hidden h-48 md:h-56">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        <img 
          src={certificate.image || 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} 
          alt={certificate.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        
        {certificate.credentialUrl && (
          <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a 
              href={certificate.credentialUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              aria-label={`View ${certificate.title} credential`}
            >
              <ExternalLink size={18} className="text-gray-800" />
            </a>
          </div>
        )}
        
        {certificate.featured && (
          <div className="absolute top-3 left-3 bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center">
            <Award className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
              {certificate.title}
            </h3>
          </div>
        </div>
        
        <div className="flex items-center mb-3 text-gray-600 dark:text-gray-400">
          <span className="font-medium text-primary-600 dark:text-primary-400">
            {certificate.issuer}
          </span>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span className="text-sm">{certificate.date}</span>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow text-sm leading-relaxed">
          {certificate.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {certificate.skills.map((skill) => (
            <span 
              key={skill} 
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;