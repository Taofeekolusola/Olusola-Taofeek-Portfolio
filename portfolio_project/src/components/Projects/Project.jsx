import projects from '../../data/projects.json'
import ProjectCard from './ProjectCard.jsx'
import styles from './Project.module.css'
export default function Project() {
    return <section className={styles.container} id="project">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
  {
    projects.map((project, id) => (
        <div>
            <ProjectCard key={id} project={project}/>
        </div>
    ))
  }
</div>
    </section>
}