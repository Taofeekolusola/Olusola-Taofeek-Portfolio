import projects from '../../data/projects.json';
import ProjectCard from './ProjectCard.jsx';

export default function Project() {
  return (
    <section id="project" className="mt-[50px] text-white mx-[5%] md:mx-[10%]">
      <h2 className="text-[35px] flex justify-center font-bold tracking-[1.75px] uppercase text-center md:text-left">
        Projects
      </h2>

      <div className="mt-5 flex flex-wrap justify-evenly items-center gap-2 w-full">
        {projects.map((project, id) => (
          <div key={id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}