import getImageUrl from '../../utils';

export default function Contact() {
  return (
    <footer
      id="contact"
      className="min-h-screen w-full bg-primary text-white flex flex-col items-center justify-center px-4 py-12"
    >
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold tracking-wide">Contact</h2>
        <p className="text-2xl font-light mt-4">Feel free to reach out</p>
      </div>

      <ul className="flex flex-col items-center gap-8 w-full max-w-md">
        {[
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
            label: '09063659635',
            link: 'https://wa.me/+2349063659635',
          },
        ].map((item, index) => (
          <li
            key={index}
            className="flex flex-col items-center gap-2 text-center"
          >
            <img
              src={getImageUrl(item.icon)}
              alt="icon"
              className="w-10 h-10"
            />
            <a
              href={item.link}
              className="text-lg hover:underline break-words"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}