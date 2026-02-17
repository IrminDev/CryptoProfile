import { motion } from 'framer-motion';
import { Binary, Hash, KeyRound, ShieldCheck, Fingerprint, Lock, Blocks, AlertCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const cryptoTopics = [
  {
    icon: Hash,
    title: 'Hash Functions',
    description: 'One-way functions that convert data into fixed-size outputs, essential for password storage and data integrity.',
    color: 'crypto-accent',
  },
  {
    icon: KeyRound,
    title: 'Symmetric Encryption',
    description: 'AES, DES, and other algorithms where the same key encrypts and decrypts data.',
    color: 'crypto-purple',
  },
  {
    icon: Lock,
    title: 'Asymmetric Encryption',
    description: 'RSA, ECC - public/private key pairs enabling secure key exchange and digital signatures.',
    color: 'crypto-cyan',
  },
  {
    icon: Blocks,
    title: 'Blockchain',
    description: 'Distributed ledger technology using cryptographic hashing and consensus mechanisms.',
    color: 'crypto-blue',
  },
  {
    icon: Fingerprint,
    title: 'Digital Signatures',
    description: 'Mathematical schemes for verifying authenticity and integrity of digital messages.',
    color: 'crypto-accent',
  },
  {
    icon: ShieldCheck,
    title: 'Zero-Knowledge Proofs',
    description: 'Prove knowledge of information without revealing the information itself.',
    color: 'crypto-purple',
  },
];

const CryptoCard = ({ topic, index }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`p-6 rounded-2xl cursor-default ${
        isDark 
          ? 'glass-card hover:border-crypto-accent/30' 
          : 'bg-white border border-gray-200 shadow-lg hover:border-crypto-accentDark/30'
      } transition-all duration-300`}
    >
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
        isDark 
          ? `bg-${topic.color}/10` 
          : `bg-${topic.color}/10`
      }`}
        style={{
          backgroundColor: isDark 
            ? `rgba(${topic.color === 'crypto-accent' ? '0,255,136' : topic.color === 'crypto-purple' ? '139,92,246' : topic.color === 'crypto-cyan' ? '6,182,212' : '59,130,246'},0.1)`
            : `rgba(${topic.color === 'crypto-accent' ? '0,204,106' : topic.color === 'crypto-purple' ? '139,92,246' : topic.color === 'crypto-cyan' ? '6,182,212' : '59,130,246'},0.1)`
        }}
      >
        <topic.icon 
          className="w-7 h-7"
          style={{
            color: topic.color === 'crypto-accent' 
              ? (isDark ? '#00ff88' : '#00cc6a')
              : topic.color === 'crypto-purple' 
                ? '#8b5cf6' 
                : topic.color === 'crypto-cyan'
                  ? '#06b6d4'
                  : '#3b82f6'
          }}
        />
      </div>
      <h3 className={`text-xl font-bold mb-2 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        {topic.title}
      </h3>
      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        {topic.description}
      </p>
    </motion.div>
  );
};

export default function Cryptography() {
  const { isDark } = useTheme();

  return (
    <section id="cryptography" className={`py-20 md:py-32 relative overflow-hidden ${
      isDark 
        ? 'bg-crypto-darker' 
        : 'bg-gray-50'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0" 
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, ${isDark ? 'rgba(0,255,136,0.05)' : 'rgba(0,200,100,0.05)'} 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, ${isDark ? 'rgba(139,92,246,0.05)' : 'rgba(139,92,246,0.05)'} 0%, transparent 50%)
          `,
        }}
      />

      {/* Binary Background Animation */}
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${isDark ? 'opacity-10' : 'opacity-5'}`}>
        <div className="font-mono text-xs leading-none whitespace-nowrap animate-matrix"
          style={{
            transform: 'rotate(-5deg) translateY(-10%)',
            width: '200%',
          }}
        >
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className={isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'}>
              {Array.from({ length: 200 }).map(() => Math.random() > 0.5 ? '1' : '0').join('')}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Binary className={`w-12 h-12 ${isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'}`} />
            <h2 className={`section-title mb-0 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <span className="text-gradient">Cryptography</span>
            </h2>
          </div>
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Exploring the mathematics and algorithms that secure our digital world
          </p>
        </motion.div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {cryptoTopics.map((topic, index) => (
            <CryptoCard key={topic.title} topic={topic} index={index} />
          ))}
        </div>

        {/* Detailed Topic Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`max-w-4xl mx-auto p-8 md:p-12 rounded-3xl ${
            isDark 
              ? 'glass-card border-crypto-accent/20' 
              : 'bg-white border border-gray-200 shadow-xl'
          }`}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className={`p-3 rounded-xl ${
              isDark ? 'bg-crypto-accent/10' : 'bg-crypto-accentDark/10'
            }`}>
              <AlertCircle className={`w-6 h-6 ${
                isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'
              }`} />
            </div>
            <div>
              <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Deep Dive: Extended Euclidean Algorithm (EEA)
              </h3>
              <p className={`${isDark ? 'text-crypto-accent' : 'text-crypto-accentDark'}`}>
                Computing gcd(a, b), Bézout coefficients, and modular inverses for RSA
              </p>
            </div>
          </div>

          <div className={`p-6 rounded-xl ${
            isDark ? 'bg-white/5' : 'bg-gray-50'
          }`}>
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              The Extended Euclidean Algorithm improves the classic Euclidean algorithm by also finding integers x and y such that:
              a·x + b·y = gcd(a, b). These coefficients are the foundation of modular inverse computation, which is critical in public-key cryptography.
            </p>
            <ul className={`mt-4 space-y-2 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <li className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${
                  isDark ? 'bg-crypto-accent' : 'bg-crypto-accentDark'
                }`} />
                Repeatedly divide: a = q·b + r, then continue with (b, r) until r = 0.
              </li>
              <li className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${
                  isDark ? 'bg-crypto-accent' : 'bg-crypto-accentDark'
                }`} />
                Back-substitute remainders to recover coefficients x and y (Bézout identity).
              </li>
              <li className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${
                  isDark ? 'bg-crypto-accent' : 'bg-crypto-accentDark'
                }`} />
                If gcd(a, m) = 1, then x is the modular inverse of a mod m: a·x ≡ 1 (mod m).
              </li>
              <li className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${
                  isDark ? 'bg-crypto-accent' : 'bg-crypto-accentDark'
                }`} />
                In RSA key generation, EEA is used to compute d = e⁻¹ mod φ(n).
              </li>
              <li className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${
                  isDark ? 'bg-crypto-accent' : 'bg-crypto-accentDark'
                }`} />
                Time complexity is O(log(min(a, b))), making it efficient even for large integers.
              </li>
            </ul>
          </div>

          {/* Code Example Placeholder */}
          <div className={`mt-6 p-4 rounded-xl font-mono text-sm overflow-x-auto ${
            isDark ? 'bg-crypto-dark border border-white/10' : 'bg-gray-900 text-gray-100'
          }`}>
            <pre className={isDark ? 'text-gray-300' : 'text-gray-100'}>
{`// Extended Euclidean Algorithm + Modular Inverse (Java)
public class EEAExample {

  // returns {gcd, x, y} where a*x + b*y = gcd(a, b)
  static long[] extendedGcd(long a, long b) {
    if (b == 0) {
      return new long[]{a, 1, 0};
    }

    long[] next = extendedGcd(b, a % b);
    long gcd = next[0];
    long x1 = next[1];
    long y1 = next[2];

    long x = y1;
    long y = x1 - (a / b) * y1;
    return new long[]{gcd, x, y};
  }

  static long modInverse(long a, long m) {
    long[] result = extendedGcd(a, m);
    long gcd = result[0];
    long x = result[1];

    if (gcd != 1) {
      throw new IllegalArgumentException("Inverse does not exist");
    }

    return (x % m + m) % m;
  }

  public static void main(String[] args) {
    long e = 17;
    long phi = 3120;
    long d = modInverse(e, phi);

    System.out.println("gcd(e, phi) = " + extendedGcd(e, phi)[0]);
    System.out.println("Private exponent d = " + d); // 2753
  }
}`}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
