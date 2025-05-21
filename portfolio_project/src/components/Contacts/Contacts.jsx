import { motion } from 'framer-motion';
import getImageUrl from '../../utils';

const contactItems = [
  {
    icon: 'contact/email.png',
    label: 'Email',
    link: 'mailto:olusolataofeek@gmail.com',
  },
  {
    icon: 'contact/github.png',
    label: 'Github',
    link: 'https://github.com/Taofeekolusola',
  },
  {
    icon: 'contact/linkedin.png',
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/adeshina123/',
  },
  {
    icon: 'contact/X.png',
    label: 'X(twitter)',
    link: 'https://x.com/TaofeekOlusola1/',
  },
  {
    icon: 'contact/tel.png',
    label: 'WhatsApp',
    link: 'https://wa.me/+2349063659635',
  },
];

export default function Contact() {
  return (
    <footer
      id="contact"
      className="min-h-screen w-full bg-primary text-white flex flex-col items-center justify-center px-4 py-12"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold tracking-wide">Contact</h2>
        <p className="text-2xl font-light mt-4">Feel free to reach out</p>
      </motion.div>

      <ul className="flex flex-col items-center gap-8 w-full max-w-md">
        {contactItems.map((item, index) => (
          <motion.li
            key={index}
            className="flex flex-col items-center gap-2 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.img
              src={getImageUrl(item.icon)}
              alt={`${item.label} icon`}
              className="w-12 h-12 rounded-full shadow-md"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <a
              href={item.link}
              className="text-lg hover:underline break-words transition-all duration-200 hover:text-cyan-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          </motion.li>
        ))}
      </ul>
    </footer>
  );
}