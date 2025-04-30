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

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 w-full max-w-3xl px-4">
        {[
          {
            icon: 'contact/email.png',
            label: 'olusolataofeek@gmail.com',
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
            label: 'X.com//Taofeekolusola',
            link: 'https://x.com/TaofeekOlusola1/',
          },
          {
            icon: 'contact/tel.png',
            label: 'Tel - 09063659635',
            link: 'tel:09063659635',
          },
        ].map((item, index) => (
          <li
            key={index}
            className={`flex flex-col items-center text-center ${index === 4 ? 'col-span-2' : ''}`}
          >
            <img
              src={getImageUrl(item.icon)}
              alt="icon"
              className="w-10 h-10 mb-2"
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