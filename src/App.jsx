import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';
import PGPSection from './components/PGPSection';
import Cryptography from './components/Cryptography';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-crypto-dark dark:bg-crypto-dark transition-colors">
        <Navbar />
        <main>
          <Hero />
          <Education />
          <Experience />
          <Hobbies />
          <PGPSection />
          <Cryptography />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
