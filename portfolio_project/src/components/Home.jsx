import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-primary to-blue-900 text-white px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold font-roboto mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-xl md:text-2xl font-light tracking-wide max-w-xl mb-6">
        I'm <span className="text-white font-semibold">Taofeek Olusola</span>, a passionate frontend developer specializing in building sleek, high-performance React applications.
          </p>
        <Link to="/hero"
          className="mt-4 bg-white text-primary hover:bg-secondary hover:text-blue-900 font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg">
              Hero
        </Link>
      <Link
        to="/contact"
        className="mt-4 bg-white text-primary hover:bg-secondary hover:text-blue-900 font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg"
      >
        Let's Connect
          </Link>
    </section>
  );
};

export default Home;