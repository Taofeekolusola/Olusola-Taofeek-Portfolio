import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-primary to-blue-900 text-white px-6 text-center overflow-hidden">
      <motion.h1
        className="text-4xl md:text-6xl font-bold font-roboto mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to My Portfolio
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl font-light tracking-wide max-w-xl mb-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        I'm <span className="text-white font-semibold">Taofeek Olusola</span>,
        a passionate frontend developer specializing in building sleek,
        high-performance React applications.
      </motion.p>

      {/* Image Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {[
          'https://images.unsplash.com/photo-1518770660439-4636190af475', // Coding
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c', // Laptop/dev
          'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d', // Developer at work
        ].map((url, index) => (
          <motion.img
            key={index}
            src={`${url}?auto=format&fit=crop&w=400&q=80`}
            alt="Tech"
            className="rounded-xl shadow-lg w-full h-60 object-cover"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
          />
        ))}
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="flex flex-col md:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <Link
          to="/hero"
          className="bg-white text-primary hover:bg-secondary hover:text-blue-900 font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg transform hover:scale-105"
        >
          Who I Am
        </Link>
        <Link
          to="/contact"
          className="bg-white text-primary hover:bg-secondary hover:text-blue-900 font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg transform hover:scale-105"
        >
          Let's Connect
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;