import { motion } from 'framer-motion';
import skills from '../../data/skills.json';
import history from '../../data/history.json';
import getImageUrl from '../../utils';

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center mt-20 mx-6 md:mx-[10%] text-white"
    >
      <h2 className="text-[35px] font-bold tracking-[1.75px] uppercase text-center flex justify-center md:text-left">
        Experience
      </h2>

      <div className="flex flex-col md:flex-row justify-evenly gap-8 mt-10">
        {/* Skills */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 w-full md:w-[30%]">
          {skills.map((skill, id) => (
            <motion.div
              key={id}
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: id * 0.2 }}
            >
              <motion.div
                className="bg-white rounded-full w-[116px] h-[116px] flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={getImageUrl(skill.imageSrc)}
                  alt={skill.title}
                  className="w-[70px]"
                />
              </motion.div>
              <p className="text-[20px] font-normal font-['Roboto']">{skill.title}</p>
            </motion.div>
          ))}
        </div>

        {/* History */}
        <ul className="flex flex-col gap-8 w-full md:w-[45%]">
          {history.map((item, id) => (
            <motion.li
              key={id}
              className="flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-[#19376d] to-transparent"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: id * 0.3 }}
            >
              <motion.img
                src={getImageUrl(item.imageSrc)}
                alt={`${item.role} Logo`}
                className="w-[50px]"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                }}
              />
              <div className="font-['Roboto']">
                <h3 className="text-[20px] font-normal">
                  {item.role}, {item.organization}
                </h3>
                <p className="text-[20px] font-light">
                  {item.startDate}, {item.endDate}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}