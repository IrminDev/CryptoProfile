import { motion } from 'framer-motion';
import { Play, Shield, Key, Lock, FileKey, Video } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const getYouTubeEmbedUrl = (url) => {
  if (!url) return '';

  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch?.[1]) {
    return `https://www.youtube.com/embed/${shortMatch[1]}`;
  }

  const longMatch = url.match(/[?&]v=([^?&]+)/);
  if (longMatch?.[1]) {
    return `https://www.youtube.com/embed/${longMatch[1]}`;
  }

  const embedMatch = url.match(/youtube\.com\/embed\/([^?&]+)/);
  if (embedMatch?.[1]) {
    return `https://www.youtube.com/embed/${embedMatch[1]}`;
  }

  return '';
};

export default function PGPSection() {
  const { isDark } = useTheme();
  const youtubeUrl = 'https://youtu.be/5ApwVXE-cVY';
  const embedUrl = getYouTubeEmbedUrl(youtubeUrl);

  return (
    <section id="pgp" className={`py-20 md:py-32 relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-b from-crypto-dark to-crypto-darker' 
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className={`absolute inset-0 opacity-30 ${isDark ? 'opacity-100' : ''}`}
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 40%, ${isDark ? 'rgba(0,255,136,0.03)' : 'rgba(0,200,100,0.05)'} 45%, transparent 50%),
              linear-gradient(-45deg, transparent 40%, ${isDark ? 'rgba(139,92,246,0.03)' : 'rgba(139,92,246,0.05)'} 45%, transparent 50%)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-[10%]"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Key className={`w-10 h-10 ${isDark ? 'text-crypto-accent/20' : 'text-crypto-accentDark/20'}`} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-[15%]"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Lock className={`w-10 h-10 ${isDark ? 'text-crypto-purple/20' : 'text-crypto-purple/20'}`} />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Shield className={`w-12 h-12 ${isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'}`} />
            <h2 className={`section-title mb-0 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <span className="text-gradient">PGP & Digital Security</span>
            </h2>
          </div>
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Understanding Pretty Good Privacy and secure communication
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Video */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative aspect-video rounded-2xl overflow-hidden group cursor-pointer ${
                isDark ? 'glass-card' : 'bg-white border border-gray-200 shadow-xl'
              }`}
            >
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title="PGP Explained"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className={`absolute inset-0 flex items-center justify-center ${
                  isDark
                    ? 'bg-gradient-to-br from-crypto-dark via-crypto-darker to-crypto-dark'
                    : 'bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100'
                }`}>
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                      className={`absolute -top-1/2 -left-1/2 w-full h-full border ${
                        isDark ? 'border-crypto-accent/10' : 'border-crypto-accentDark/10'
                      } rounded-full`}
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                      className={`absolute -bottom-1/2 -right-1/2 w-full h-full border ${
                        isDark ? 'border-crypto-purple/10' : 'border-crypto-purple/10'
                      } rounded-full`}
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center ${
                      isDark
                        ? 'bg-crypto-accent/20 border-2 border-crypto-accent'
                        : 'bg-crypto-accentDark/20 border-2 border-crypto-accentDark'
                    } shadow-lg shadow-crypto-accent/20 group-hover:shadow-crypto-accent/40 transition-all`}
                  >
                    <Play className={`w-10 h-10 ml-1 ${
                      isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'
                    }`} />
                  </motion.div>
                </div>
              )}

              {/* Video Badge */}
              <div className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg ${
                isDark ? 'bg-crypto-dark/80 text-crypto-accent' : 'bg-white/80 text-crypto-accentDark'
              }`}>
                <Video size={16} />
                <span className="text-sm font-medium">PGP Explained</span>
              </div>

              {/* Duration Placeholder */}
              <div className={`absolute bottom-4 right-4 px-3 py-1.5 rounded-lg text-sm ${
                isDark ? 'bg-crypto-dark/80 text-gray-300' : 'bg-white/80 text-gray-700'
              }`}>
                --:--
              </div>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                {
                  icon: Key,
                  title: 'Public Key Cryptography',
                  description: 'PGP uses asymmetric encryption with public and private key pairs for secure communication.',
                },
                {
                  icon: Lock,
                  title: 'End-to-End Encryption',
                  description: 'Messages are encrypted on your device and can only be decrypted by the intended recipient.',
                },
                {
                  icon: FileKey,
                  title: 'Digital Signatures',
                  description: 'Verify message authenticity and ensure content hasn\'t been tampered with.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-5 rounded-xl flex items-start gap-4 ${
                    isDark 
                      ? 'bg-white/5 border border-white/10 hover:border-crypto-accent/30' 
                      : 'bg-white border border-gray-200 shadow-md hover:border-crypto-accentDark/30'
                  } transition-colors`}
                >
                  <div className={`p-2 rounded-lg ${
                    isDark ? 'bg-crypto-accent/10' : 'bg-crypto-accentDark/10'
                  }`}>
                    <item.icon className={`w-5 h-5 ${
                      isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'
                    }`} />
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.title}
                    </h4>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
