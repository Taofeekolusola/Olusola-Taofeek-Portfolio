import getImageUrl from '../../utils';

export default function Hero() {
  return (
    <section className="relative flex justify-between items-center mt-[49px] mx-[10%] z-[1] flex-col-reverse md:flex-row min-h-screen">
      <div className="flex flex-col items-center md:items-start text-white z-[1]">
        <h1 className="text-[30px] md:text-[40px] font-bold font-roboto bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent max-w-[100%] sm:max-w-[90%] md:max-w-[60%] text-center md:text-left">
          Hi, I'm Taofeek O.A
        </h1>
        <p className="text-[18px] md:text-[30px] font-roboto mb-[52px] text-center md:text-left max-w-[100%] sm:max-w-[90%] md:max-w-[60%]">
          I'm a Fullstack Developer with three years of experience using React and Node. Reach out if you'd like to learn more about me.
        </p>
        <a
          className="no-underline bg-primary text-white rounded-full text-[20px] font-normal px-[26px] py-[17px] mt-4 shadow-md"
          href="mailto:olusolataofeek@gmail.com"
        >
          Contact Me
        </a>
        <a
          className="no-underline bg-primary text-white rounded-full text-[20px] font-normal px-[26px] py-[17px] mt-4 shadow-md"
          href="https://docs.google.com/document/d/1DzEsjVus8ANS4DQksdMz5t3Ee52_CoRbnHUIAYGqJsE/edit?tab=t.0"
        >
          View Resume
        </a>
      </div>

      <img
        className="rounded-full w-[35%] z-[1] animate-floating"
        src={getImageUrl('taofeek.png')}
        alt="image of me"
      />
    </section>
  );
}