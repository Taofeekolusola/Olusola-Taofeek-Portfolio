import getImageUrl from '../../utils';

export default function ProjectCard({
  project: { imageSrc, title, description, demo, source, skills }
}) {
  return (
    <div className="flex flex-col bg-gradient-to-b from-[#576cbc] to-[#132a53] shadow-[0_16px_14px_0_#04152d] rounded-[10%] p-[18px_24px] max-w-[300px] mb-[10%] text-white">
      <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className="mb-[26px]" />
      <h3 className="text-[25px] font-bold">{title}</h3>
      <p className="mt-[6px] text-[25px] font-normal">{description}</p>

      <ul className="flex flex-wrap gap-[6px] mt-[14px] list-none">
        {skills.map((skill, skillId) => (
          <li
            key={skillId}
            className="text-[20px] font-normal rounded-full bg-[#0f172a] px-[20px] py-[2px]"
          >
            {skill}
          </li>
        ))}
      </ul>

      <div className="w-full mt-[26px] flex justify-around">
        <a
          href={demo}
          className="text-[20px] font-semibold rounded-full px-[22px] py-[1px] bg-[#576cbc] text-white no-underline"
        >
          Demo
        </a>
        <a
          href={source}
          className="text-[20px] font-semibold rounded-full px-[22px] py-[1px] bg-[#576cbc] text-white no-underline"
        >
          Source
        </a>
      </div>
    </div>
  );
}