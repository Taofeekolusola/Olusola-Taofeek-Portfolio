import React from 'react';
import { motion } from 'framer-motion';
import getImageUrl from '../../utils';

export default function About() {
  return (
    <section
      id="about"
      className="bg-black/60 text-white px-6 py-12 mt-32 mx-6 md:mx-32 rounded-2xl shadow-lg"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center uppercase tracking-widest mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-[40%] flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={getImageUrl('taofeek.png')}
                    alt="image of me"
            className="w-60 h-60 object-contain rounded-full shadow-xl border-4 border-cyan-500"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-[60%]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-base md:text-lg leading-8 tracking-wide space-y-4">
            I am a dedicated and fast-learning Frontend Engineer with a strong passion for crafting visually appealing, user-friendly, and responsive web applications. My expertise lies in leveraging modern JavaScript frameworks and libraries like{' '}
            <span className="text-cyan-300 font-semibold">React</span> and{' '}
            <span className="text-cyan-300 font-semibold">Redux</span> to build interactive user interfaces that deliver seamless experiences.
          </p>

          <p className="text-base md:text-lg leading-8 tracking-wide space-y-4 mt-6">
            With hands-on experience in{' '}
            <span className="text-cyan-300 font-semibold">HTML</span>,{' '}
            <span className="text-cyan-300 font-semibold">CSS</span>, and{' '}
            <span className="text-cyan-300 font-semibold">JavaScript</span>, I have developed and deployed various frontend applications including responsive websites, to-do list apps, recipe app and E-commerce app.
          </p>

          <p className="text-base md:text-lg leading-8 tracking-wide space-y-4 mt-6">
            I thrive in collaborative environments and have contributed to team projects like AirBnB clones and creative frontend solutions. I’ve earned certifications in Responsive Web Design and Python to strengthen my skills.
          </p>

          <p className="text-base md:text-lg leading-8 tracking-wide space-y-4 mt-6">
            My long-term goal is to master frontend development and build impactful digital solutions that elevate user experiences.
          </p>
        </motion.div>
      </div>

      {/* Tech Stack Icons */}
      <motion.div
        className="mt-10 flex justify-center flex-wrap gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {[
          'html5',
          'css3',
          'javascript',
          'react',
          'redux',
          'tailwindcss',
          'git',
        ].map((tech, index) => (
          <img
            key={index}
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
            alt={tech}
            className="w-12 h-12 transition transform hover:scale-110"
          />
        ))}
      </motion.div>
    </section>
  );
}