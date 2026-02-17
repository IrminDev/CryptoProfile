import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { profileData } from '../data/profileData';

const EducationCard = ({ edu, index }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className={`relative p-6 md:p-8 rounded-2xl card-hover ${
        isDark 
          ? 'glass-card' 
          : 'bg-white border border-gray-200 shadow-lg'
      }`}
    >
      {/* GPA Badge */}
      <div className={`absolute -top-3 -right-3 px-4 py-2 rounded-xl font-bold ${
        isDark 
          ? 'bg-crypto-accent text-crypto-dark' 
          : 'bg-crypto-accentDark text-white'
      }`}>
        GPA: {edu.gpa}
      </div>

      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-xl ${
          isDark ? 'bg-crypto-accent/10' : 'bg-crypto-accentDark/10'
        }`}>
          <GraduationCap className={`w-6 h-6 ${
            isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'
          }`} />
        </div>
        <div>
          <h3 className={`text-xl md:text-2xl font-bold mb-1 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {edu.institution}
          </h3>
          <p className={`font-medium ${
            isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'
          }`}>
            {edu.degree}
          </p>
        </div>
      </div>

      <div className={`flex flex-wrap gap-4 mb-4 text-sm ${
        isDark ? 'text-gray-400' : 'text-gray-600'
      }`}>
        <span className="flex items-center gap-1">
          <MapPin size={14} />
          {edu.location}
        </span>
        <span className="flex items-center gap-1">
          <Calendar size={14} />
          {edu.graduationDate}
        </span>
      </div>

      <div className="space-y-2">
        {edu.highlights.map((highlight, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className={`flex items-start gap-2 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            <Award className={`w-4 h-4 mt-1 flex-shrink-0 ${
              isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'
            }`} />
            <span>{highlight}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default function Education() {
  const { isDark } = useTheme();

  return (
    <section id="education" className={`py-20 md:py-32 relative ${
      isDark 
        ? 'bg-crypto-dark' 
        : 'bg-gray-50'
    }`}>
      {/* Background Pattern */}
      <div className={`absolute inset-0 opacity-30 ${isDark ? 'opacity-100' : ''}`}
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? 'rgba(0,255,136,0.03)' : 'rgba(0,200,100,0.05)'} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

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
            <span className="text-gradient">Education</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            My academic journey in Computer Science and Engineering
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {profileData.education.map((edu, index) => (
            <EducationCard key={edu.institution} edu={edu} index={index} />
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className={`text-2xl md:text-3xl font-bold text-center mb-10 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {profileData.certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl card-hover ${
                  isDark 
                    ? 'glass-card' 
                    : 'bg-white border border-gray-200 shadow-lg'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  isDark ? 'bg-crypto-purple/20' : 'bg-crypto-purple/10'
                }`}>
                  <Award className="w-6 h-6 text-crypto-purple" />
                </div>
                <h4 className={`font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {cert.name}
                </h4>
                <p className={`text-sm mb-2 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {cert.period}
                </p>
                <p className={`text-sm ${
                  isDark ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
