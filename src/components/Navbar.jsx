import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Hobbies', href: '#hobbies' },
  { name: 'Cryptography', href: '#cryptography' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className={`max-w-7xl mx-auto rounded-2xl px-6 py-3 ${
        isDark 
          ? 'bg-crypto-dark/80 backdrop-blur-xl border border-white/10' 
          : 'bg-white/80 backdrop-blur-xl border border-gray-200'
      }`}>
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className={`font-mono font-bold text-xl ${
              isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            &lt;IH /&gt;
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isDark 
                    ? 'text-gray-300 hover:text-crypto-accent' 
                    : 'text-gray-600 hover:text-crypto-accentDark'
                }`}
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-colors ${
                isDark 
                  ? 'bg-white/10 hover:bg-white/20 text-crypto-accent' 
                  : 'bg-gray-100 hover:bg-gray-200 text-crypto-accentDark'
              }`}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-xl ${
                isDark 
                  ? 'bg-white/10 text-white' 
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-white/10"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  isDark 
                    ? 'text-gray-300 hover:text-crypto-accent' 
                    : 'text-gray-600 hover:text-crypto-accentDark'
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
