import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CertificateCard from '../components/CertificateCard';
import SectionHeader from '../components/SectionHeader';
import { certificates } from '../data/certificates';

const Certificates: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [showAll, setShowAll] = useState<boolean>(false);

  // Get unique issuers
  const allIssuers = Array.from(new Set(certificates.map(cert => cert.issuer)));

  // Filtered certificates based on issuer
  const filteredCertificates = filter === 'all'
    ? certificates
    : certificates.filter(cert => cert.issuer === filter);

  const featuredCertificates = certificates.filter(cert => cert.featured);

  // Limit to 6 if not showing all
  const visibleCertificates = showAll ? filteredCertificates : filteredCertificates.slice(0, 6);

  const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
    })
  };

  return (
    <section id="certificates" className="section">
      <div className="container">
        <SectionHeader
          title="Certifications & Achievements"
          subtitle="Professional certifications and courses that showcase my commitment to continuous learning and skill development."
        />

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg" variants={statsVariants} custom={0}>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {certificates.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Total Certificates</div>
          </motion.div>

          <motion.div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg" variants={statsVariants} custom={1}>
            <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">
              {featuredCertificates.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Featured Certificates</div>
          </motion.div>

          <motion.div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg" variants={statsVariants} custom={2}>
            <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">
              {allIssuers.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Learning Platforms</div>
          </motion.div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={filterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'all'
              ? 'bg-primary-600 text-white'
              : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            onClick={() => {
              setFilter('all');
              setShowAll(false);
            }}
          >
            All Certificates
          </button>
          {allIssuers.map(issuer => (
            <button
              key={issuer}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === issuer
                ? 'bg-primary-600 text-white'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              onClick={() => {
                setFilter(issuer);
                setShowAll(false);
              }}
            >
              {issuer}
            </button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCertificates.map((certificate, index) => (
            <CertificateCard key={certificate.id} certificate={certificate} index={index} />
          ))}
        </div>

        {/* No Certificates Message */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No certificates found for the selected filter.
            </p>
          </div>
        )}

         {/* View All / Show Less Button */}
        {filteredCertificates.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 rounded-full bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition"
            >
              {showAll ? 'Show Less' : 'View All Certificates'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
