import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Facebook, Download, ExternalLink, FileText, Key } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { profileData } from '../data/profileData';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
  email: Mail,
};

const SocialLink = ({ platform, url }) => {
  const { isDark } = useTheme();
  const Icon = socialIcons[platform] || ExternalLink;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className={`p-4 rounded-2xl flex items-center justify-center transition-all ${
        isDark 
          ? 'bg-white/5 hover:bg-crypto-accent/20 text-gray-300 hover:text-crypto-accent border border-white/10 hover:border-crypto-accent/50' 
          : 'bg-gray-100 hover:bg-crypto-accentDark/20 text-gray-700 hover:text-crypto-accentDark border border-gray-200 hover:border-crypto-accentDark/50'
      }`}
    >
      <Icon className="w-6 h-6" />
    </motion.a>
  );
};

export default function Contact() {
  const { isDark } = useTheme();

  return (
    <section id="contact" className={`py-20 md:py-32 relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-b from-crypto-dark to-crypto-darker' 
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-crypto-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-crypto-purple/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`section-title ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className={`text-2xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: 'Email', value: profileData.email },
                    { icon: Phone, label: 'Phone', value: profileData.phone },
                    { icon: MapPin, label: 'Location', value: profileData.location },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-center gap-4 p-4 rounded-xl ${
                        isDark 
                          ? 'bg-white/5 border border-white/10' 
                          : 'bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <div className={`p-3 rounded-xl ${
                        isDark ? 'bg-crypto-accent/10' : 'bg-crypto-accentDark/10'
                      }`}>
                        <item.icon className={`w-5 h-5 ${
                          isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'
                        }`} />
                      </div>
                      <div>
                        <p className={`text-sm ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {item.label}
                        </p>
                        <p className={`font-medium ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className={`text-lg font-semibold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Connect With Me
                </h4>
                <div className="flex gap-4">
                  {Object.entries(profileData.socialLinks).map(([platform, url]) => (
                    <SocialLink key={platform} platform={platform} url={url} />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Download CV */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* CV Card */}
              <div className={`p-8 rounded-3xl flex flex-col items-center justify-center text-center ${
                isDark 
                  ? 'glass-card' 
                  : 'bg-white border border-gray-200 shadow-xl'
              }`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                  isDark ? 'bg-crypto-accent/10' : 'bg-crypto-accentDark/10'
                }`}>
                  <FileText className={`w-8 h-8 ${
                    isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'
                  }`} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Download My CV
                </h3>
                <p className={`mb-4 text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Get a detailed overview of my experience and qualifications.
                </p>
                <motion.a
                  href="/CV/CV_IrminHernandez.pdf"
                  download="CV_IrminHernandez.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                    isDark 
                      ? 'bg-crypto-accent text-crypto-dark hover:bg-crypto-accent/90' 
                      : 'bg-crypto-accentDark text-white hover:bg-crypto-accentDark/90'
                  } shadow-lg shadow-crypto-accent/25`}
                >
                  <Download size={18} />
                  Download CV
                </motion.a>
              </div>

              {/* Public Key Card */}
              <div className={`p-8 rounded-3xl flex flex-col items-center justify-center text-center ${
                isDark 
                  ? 'glass-card' 
                  : 'bg-white border border-gray-200 shadow-xl'
              }`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                  isDark ? 'bg-crypto-purple/10' : 'bg-crypto-purple/10'
                }`}>
                  <Key className={`w-8 h-8 text-crypto-purple`} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  PGP Public Key
                </h3>
                <p className={`mb-4 text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Use my public key for encrypted communication.
                </p>
                <motion.a
                  href="/keys/public_key.asc"
                  download="irmin_public_key.asc"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all border-2 ${
                    isDark 
                      ? 'border-crypto-purple text-crypto-purple hover:bg-crypto-purple/10' 
                      : 'border-crypto-purple text-crypto-purple hover:bg-crypto-purple/10'
                  }`}
                >
                  <Download size={18} />
                  Download Public Key
                </motion.a>
                <p className={`mt-4 text-xs font-mono ${
                  isDark ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  Fingerprint: XXXX XXXX XXXX XXXX XXXX
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
