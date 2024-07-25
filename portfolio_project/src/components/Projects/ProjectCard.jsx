import getImageUrl from '../../utils'
import styles from './ProjectCard.module.css'
export default function ProjectCard({project: {imageSrc, title, description, demo, source, skills}}) {
    return (
        <div className={styles.container}>
        <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, skillId) => (
             <li className={styles.skill} key={skillId}>{skill}</li>
          ))}
        </ul>
        <div className={styles.links}>
            <a className={styles.link} href={demo}>Demo</a>
            <a className={styles.link} href={source}>Source</a>
        </div>
      </div>
    )
}