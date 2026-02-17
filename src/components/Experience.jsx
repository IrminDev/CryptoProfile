import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building2, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { profileData } from '../data/profileData';

const ExperienceCard = ({ exp, index }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline Line */}
      {index < profileData.experience.length - 1 && (
        <div className={`absolute left-6 top-20 w-0.5 h-full ${
          isDark ? 'bg-crypto-accent/20' : 'bg-crypto-accentDark/20'
        }`} />
      )}

      <div className={`flex gap-6 ${
        isDark ? '' : ''
      }`}>
        {/* Timeline Dot */}
        <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
          isDark 
            ? 'bg-crypto-accent/20 border border-crypto-accent/30' 
            : 'bg-crypto-accentDark/20 border border-crypto-accentDark/30'
        }`}>
          <Briefcase className={`w-5 h-5 ${
            isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'
          }`} />
        </div>

        {/* Content */}
        <div className={`flex-1 p-6 md:p-8 rounded-2xl mb-8 card-hover ${
          isDark 
            ? 'glass-card' 
            : 'bg-white border border-gray-200 shadow-lg'
        }`}>
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 className={`text-xl md:text-2xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {exp.position}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <Building2 size={16} className={isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'} />
                <span className={`font-medium ${
                  isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'
                }`}>
                  {exp.company}
                </span>
              </div>
            </div>
            <div className={`flex flex-wrap gap-2 text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <span className={`px-3 py-1 rounded-full ${
                isDark ? 'bg-white/5' : 'bg-gray-100'
              }`}>
                <Calendar size={12} className="inline mr-1" />
                {exp.period}
              </span>
              <span className={`px-3 py-1 rounded-full ${
                isDark ? 'bg-white/5' : 'bg-gray-100'
              }`}>
                <MapPin size={12} className="inline mr-1" />
                {exp.type}
              </span>
            </div>
          </div>

          {/* Responsibilities */}
          <ul className="space-y-3">
            {exp.responsibilities.map((resp, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`flex items-start gap-3 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                <ChevronRight className={`w-4 h-4 mt-1 flex-shrink-0 ${
                  isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'
                }`} />
                <span>{resp}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const { isDark } = useTheme();

  return (
    <section id="experience" className={`py-20 md:py-32 relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-b from-crypto-darker to-crypto-dark' 
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-crypto-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-crypto-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`section-title ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="text-gradient">Experience</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Professional experience in security and platform engineering
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {profileData.experience.map((exp, index) => (
            <ExperienceCard key={`${exp.company}-${exp.position}`} exp={exp} index={index} />
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <h3 className={`text-2xl md:text-3xl font-bold text-center mb-10 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Technical Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {profileData.skills.technical.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className={`px-4 py-2 rounded-xl text-sm font-medium cursor-default ${
                  isDark 
                    ? 'bg-white/5 text-gray-300 border border-white/10 hover:border-crypto-accent/50 hover:text-crypto-accent' 
                    : 'bg-gray-100 text-gray-700 border border-gray-200 hover:border-crypto-accentDark/50 hover:text-crypto-accentDark'
                } transition-all duration-300`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
