import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="min-h-screen bg-particle flex flex-col justify-center items-center text-white px-6 md:px-12 overflow-hidden relative">
      {/* Particle Background */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="particle"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Hero Content */}
      <div className="text-center z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Taofeek Olusola
        </motion.h1>
        <motion.p
          className="text-xl md:text-3xl font-light max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafting <span className="font-semibold text-cyan-300">pixel-perfect</span> React applications with passion and precision.
        </motion.p>

        {/* Skill Highlights */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {['React', 'Next', 'Tailwind', 'NodeJs', 'Express', 'JavaScript', 'Typescript', 'Postgres', 'Mongodb', 'Mysql', 'Docker', 'Render'].map((skill, index) => (
            <motion.div
              key={`skill-${index}`}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 text-center"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-lg font-medium">{skill}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Showcase */}
        <motion.div
          className="image-grid grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {[
            '/images/image1.jpg',
            '/images/image2.jpg',
          ].map((url, index) => (
            <motion.img
              key={`image-${index}`}
              src={url}
              alt={`Portfolio Showcase ${index + 1}`}
              className="rounded-xl shadow-2xl w-full h-64 object-cover border-2 border-cyan-500/30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onError={(e) => {
                console.error(`Failed to load image: ${url}`);
                e.target.src = '/images/fallback.jpg'; // Optional: Add a fallback image
              }}
            />
          ))}
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/hero"
            className="bg-cyan-500 text-gray-900 font-semibold px-8 py-4 rounded-full hover:bg-cyan-400 transition duration-300 shadow-lg transform hover:scale-105"
          >
            Who I Am
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold px-8 py-4 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition duration-300 shadow-lg transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Placeholder components for /hero and /contact routes
const Hero = () => (
  <div className="min-h-screen bg-particle flex justify-center items-center text-white">
    <h1 className="text-4xl">Hero Page (Work in Progress)</h1>
  </div>
);

const Contact = () => (
  <div className="min-h-screen bg-particle flex justify-center items-center text-white">
    <h1 className="text-4xl">Contact Page (Work in Progress)</h1>
  </div>
);

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/hero" element={<Hero />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default App;