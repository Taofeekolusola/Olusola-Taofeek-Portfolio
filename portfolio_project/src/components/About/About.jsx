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
            className="w-72 h-72 object-contain rounded-full shadow-xl border-4 border-cyan-500"
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
            I’m Olusola Taofeek, a passionate and dedicated Fullstack Engineer with a strong foundation in building efficient, scalable, and user-friendly applications. With expertise in <span className="text-cyan-300 font-semibold">JavaScript</span>, <span className="text-cyan-300 font-semibold">TypeScript</span>, <span className="text-cyan-300 font-semibold">Node.js</span>, <span className="text-cyan-300 font-semibold">Express</span>, and <span className="text-cyan-300 font-semibold">React</span>, I create solutions that bridge the gap between seamless user experiences and robust backend architectures.
          </p>

          <p className="text-base md:text-lg leading-8 tracking-wide space-y-4 mt-6">
            Over the years, I have developed a portfolio of projects that showcase my proficiency in frameworks like <span className="text-cyan-300 font-semibold">React</span>, <span className="text-cyan-300 font-semibold">Redux</span>, <span className="text-cyan-300 font-semibold">Node.js</span>, and <span className="text-cyan-300 font-semibold">Express</span>. Whether it’s crafting responsive web interfaces, deploying backend APIs with <span className="text-cyan-300 font-semibold">PostgreSQL</span> and <span className="text-cyan-300 font-semibold">MongoDB</span>, or containerizing applications with <span className="text-cyan-300 font-semibold">Docker</span>, I thrive on turning ideas into functional, impactful solutions.
          </p>

          <p className="text-base md:text-lg leading-8 tracking-wide space-y-4 mt-6">
            I’m a fast learner and always eager to take on challenges that help me grow technically and personally. My journey in software engineering has been marked by internships, collaborations, and hands-on experiences that have honed my problem-solving skills and adaptability.
          </p>

          <p className="text-base md:text-lg leading-8 tracking-wide space-y-4 mt-6">
            Some highlights of my journey:
            <ul className="list-disc pl-6">
              <li>Developed and deployed multiple full-stack applications, including real estate, movie recommendation, and simple blog applications.</li>
              <li>Designed responsive front-end solutions and implemented dynamic functionalities using <span className="text-cyan-300 font-semibold">React</span>.</li>
              <li>Containerized and deployed applications using <span className="text-cyan-300 font-semibold">Docker</span> for seamless integration and scalability.</li>
              <li>Earned certifications in <span className="text-cyan-300 font-semibold">Python</span>, <span className="text-cyan-300 font-semibold">Backend Development</span>, <span className="text-cyan-300 font-semibold">Responsive Web Design</span>, and <span className="text-cyan-300 font-semibold">Software Development</span>.</li>
            </ul>
            I’m deeply motivated by the opportunity to contribute to impactful projects and be part of a team where I can make a difference. My long-term goal is to continue mastering fullstack development while leveraging my skills to drive organizational success.
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