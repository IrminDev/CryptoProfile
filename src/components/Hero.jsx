import { motion } from 'framer-motion';
import { ChevronDown, Shield, Lock, Key } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { profileData } from '../data/profileData';

const FloatingIcon = ({ icon: Icon, className, delay = 0 }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <Icon className="w-8 h-8 text-crypto-accent/30" />
  </motion.div>
);

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section id="about" className={`min-h-screen relative overflow-hidden flex items-center justify-center pt-20 ${
      isDark 
        ? 'bg-gradient-to-br from-crypto-darker via-crypto-dark to-crypto-darker' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      {/* Animated Background Grid */}
      <div className={`absolute inset-0 ${isDark ? 'opacity-100' : 'opacity-30'}`}
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating Crypto Icons */}
      <FloatingIcon icon={Shield} className="top-1/4 left-[10%]" delay={0} />
      <FloatingIcon icon={Lock} className="top-1/3 right-[15%]" delay={1} />
      <FloatingIcon icon={Key} className="bottom-1/4 left-[20%]" delay={2} />
      <FloatingIcon icon={Shield} className="bottom-1/3 right-[10%]" delay={1.5} />

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-crypto-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-crypto-purple/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1 }}
            className="relative inline-block mb-8"
          >
            <div className={`w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 ${
              isDark ? 'border-crypto-accent/50' : 'border-crypto-accentDark/50'
            } shadow-2xl shadow-crypto-accent/20`}>
              <img
                src="/assets/profile.jpg"
                alt={profileData.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Rotating Border */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-dashed border-crypto-accent/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            <span className="text-gradient">{profileData.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`text-xl md:text-2xl font-mono mb-6 ${
              isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'
            }`}
          >
            {profileData.title}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className={`text-lg max-w-3xl mx-auto mb-8 leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {profileData.about}
          </motion.p>

          {/* Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {profileData.skills.interests.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  isDark 
                    ? 'bg-crypto-accent/10 text-crypto-accent border border-crypto-accent/20' 
                    : 'bg-crypto-accentDark/10 text-crypto-accentDark border border-crypto-accentDark/20'
                }`}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#contact"
              className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                isDark 
                  ? 'bg-crypto-accent text-crypto-dark hover:bg-crypto-accent/90' 
                  : 'bg-crypto-accentDark text-white hover:bg-crypto-accentDark/90'
              } shadow-lg shadow-crypto-accent/25`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#experience"
              className={`px-8 py-4 rounded-xl font-semibold transition-all border-2 ${
                isDark 
                  ? 'border-crypto-accent/50 text-crypto-accent hover:bg-crypto-accent/10' 
                  : 'border-crypto-accentDark/50 text-crypto-accentDark hover:bg-crypto-accentDark/10'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Experience
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className={`w-8 h-8 ${
            isDark ? 'text-crypto-accent/50' : 'text-crypto-accentDark/50'
          }`} />
        </motion.div>
      </div>
    </section>
  );
}
