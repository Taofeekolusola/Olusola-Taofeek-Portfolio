import React from 'react';
import getImageUrl from '../../utils';

export default function About() {
  return (
    <section
      id="about"
      className="bg-black/60 text-white px-6 py-12 mt-32 mx-6 md:mx-32 rounded-2xl shadow-lg"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center uppercase tracking-widest mb-8">
        About Me
      </h2>

      <p className="text-base md:text-lg leading-8 tracking-wide space-y-4">
        I am a dedicated and fast-learning Frontend Engineer with a strong passion for crafting visually appealing, user-friendly, and responsive web applications. My expertise lies in leveraging modern JavaScript frameworks and libraries like <span className="text-cyan-300 font-semibold">React</span> and <span className="text-cyan-300 font-semibold">Redux</span> to build interactive user interfaces that deliver seamless experiences.
      </p>

      <p className="text-base md:text-lg leading-8 tracking-wide space-y-4 mt-6">
        With hands-on experience in <span className="text-cyan-300 font-semibold">HTML</span>, <span className="text-cyan-300 font-semibold">CSS</span>, and <span className="text-cyan-300 font-semibold">JavaScript</span>, I have developed and deployed various frontend applications, including responsive websites, to-do list apps, and survey forms. I excel at turning ideas into functional, visually appealing digital products while ensuring responsiveness and accessibility across devices.
      </p>

      <p className="text-base md:text-lg leading-8 tracking-wide space-y-4 mt-6">
        I thrive in collaborative environments and have contributed to team projects, including AirBnB clones and creative frontend solutions. My commitment to continuous learning has led me to earn certifications in Responsive Web Design and Python, further strengthening my technical skills.
      </p>

      <p className="text-base md:text-lg leading-8 tracking-wide space-y-4 mt-6">
        My long-term aspiration is to master frontend development, expand my knowledge of cutting-edge technologies, and create impactful digital solutions that enhance user experiences. I am eager to bring my creativity, problem-solving abilities, and passion for frontend development to your team.
          </p>
    </section>
  );
}