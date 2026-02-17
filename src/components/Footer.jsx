import { motion } from 'framer-motion';
import { Heart, Code, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 border-t ${
      isDark 
        ? 'bg-crypto-darker border-white/10' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <Shield className={`w-5 h-5 ${
              isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'
            }`} />
            <span className={`font-mono font-bold ${
              isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'
            }`}>
              &lt;IH /&gt;
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`flex items-center gap-1 text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Built with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            and
            <Code className={`w-4 h-4 ${
              isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'
            }`} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`text-sm ${
              isDark ? 'text-gray-500' : 'text-gray-500'
            }`}
          >
            © {currentYear} Irmin Hernandez. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
