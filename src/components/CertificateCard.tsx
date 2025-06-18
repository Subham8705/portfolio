import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, Calendar, X } from 'lucide-react';
import { Certificate } from '../types';

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, index }) => {
  const [showModal, setShowModal] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <>
      {/* Certificate Card */}
      <motion.div
        className="card group h-full flex flex-col"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        custom={index}
        whileHover={{ y: -10, transition: { duration: 0.3 } }}
      >
        {/* Image container */}
        <div className="relative overflow-hidden h-48 md:h-56">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

          <img
            src={certificate.image || 'https://via.placeholder.com/400x300.png?text=Certificate'}
            alt={certificate.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />

          {/* View Certificate Button */}
          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 z-20 transition-opacity">
            <button
              onClick={() => setShowModal(true)}
              className="bg-white text-sm font-medium px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition"
            >
              View Certificate
            </button>
          </div>

          {/* Credential link (external) */}
          {certificate.credentialUrl && (
            <div className="absolute bottom-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition"
                aria-label={`View ${certificate.title} credential`}
              >
                <ExternalLink size={18} className="text-gray-800 pointer-events-none" />
              </a>
            </div>
          )}

          {certificate.featured && (
            <div className="absolute top-3 left-3 bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded z-20">
              Featured
            </div>
          )}
        </div>

        {/* Text content */}
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

      {/* Modal for full image view */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="relative max-w-3xl w-full mx-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 bg-white p-1 rounded-full shadow-md z-50"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-black" />
              </button>
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CertificateCard;
