import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Play, Camera } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { profileData } from '../data/profileData';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const HobbyCard = ({ hobby, index }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative h-80 rounded-2xl overflow-hidden group cursor-pointer ${
        isDark ? 'glass-card' : 'bg-white border border-gray-200 shadow-lg'
      }`}
    >
      <img
        src={hobby.image}
        alt={hobby.name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${
        isDark 
          ? 'from-crypto-dark via-crypto-dark/50 to-transparent' 
          : 'from-gray-900 via-gray-900/50 to-transparent'
      } opacity-80 group-hover:opacity-90 transition-opacity`} />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h4 className="text-xl font-bold text-white mb-2">
          {hobby.name}
        </h4>
        <p className="text-gray-300 text-sm">
          {hobby.description}
        </p>
      </div>

      {/* Hover Effect */}
      <div className={`absolute inset-0 border-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity ${
        isDark ? 'border-crypto-accent/50' : 'border-crypto-accentDark/50'
      }`} />
    </motion.div>
  );
};

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

const VideoPlaceholder = ({ title, description, youtubeUrl }) => {
  const { isDark } = useTheme();
  const embedUrl = getYouTubeEmbedUrl(youtubeUrl);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative aspect-video rounded-2xl overflow-hidden group cursor-pointer ${
        isDark ? 'glass-card' : 'bg-white border border-gray-200 shadow-lg'
      }`}
    >
      {embedUrl ? (
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className={`absolute inset-0 flex items-center justify-center ${
          isDark
            ? 'bg-gradient-to-br from-crypto-dark to-crypto-darker'
            : 'bg-gradient-to-br from-gray-100 to-gray-200'
        }`}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-20 h-20 rounded-full flex items-center justify-center ${
              isDark
                ? 'bg-crypto-accent/20 border-2 border-crypto-accent/50'
                : 'bg-crypto-accentDark/20 border-2 border-crypto-accentDark/50'
            } group-hover:scale-110 transition-transform`}
          >
            <Play className={`w-8 h-8 ml-1 ${
              isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'
            }`} />
          </motion.div>
        </div>
      )}

      {/* Video Info Overlay */}
      <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t ${
        isDark ? 'from-crypto-dark' : 'from-gray-900'
      }`}>
        <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-300'}`}>
          {description}
        </p>
      </div>

      {/* Camera Icon */}
      <div className={`absolute top-4 right-4 p-2 rounded-lg ${
        isDark ? 'bg-crypto-dark/80' : 'bg-white/80'
      }`}>
        <Camera className={`w-5 h-5 ${
          isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'
        }`} />
      </div>
    </motion.div>
  );
};

export default function Hobbies() {
  const { isDark } = useTheme();

  return (
    <section id="hobbies" className={`py-20 md:py-32 relative overflow-hidden ${
      isDark 
        ? 'bg-crypto-dark' 
        : 'bg-gray-50'
    }`}>
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-crypto-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-crypto-cyan/10 rounded-full blur-3xl" />

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
            <span className="text-gradient">Hobbies & Interests</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Beyond coding - my passions and extracurricular activities
          </p>
        </motion.div>

        {/* Hobbies Carousel */}
        <div className="mb-20">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 5,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {profileData.hobbies.map((hobby, index) => (
              <SwiperSlide key={hobby.name}>
                <HobbyCard hobby={hobby} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h3 className={`text-2xl md:text-3xl font-bold text-center mb-10 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Videos
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <VideoPlaceholder 
              title="My Hobbies & Interests"
              description="A video explaining my hobbies and what I'm passionate about"
              youtubeUrl="https://youtu.be/GlqVPboaC5U"
            />
            <VideoPlaceholder 
              title="Extracurricular Activities"
              description="Overview of my activities beyond academics and work"
              youtubeUrl="https://youtu.be/xhF5qklFRRU"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
