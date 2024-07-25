import skills from '../../data/skills.json'
import getImageUrl from '../../utils'
import history from '../../data/history.json'
import styles from './Experience.module.css'

export default function Experience() {
    return <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
  <div className={styles.skills}>
    {skills.map((skill, id) => (
      <div className={styles.skill} key={id}>
        <div className={styles.skillImageContainer}>
          <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
        </div>
        <p>{skill.title}</p>
      </div>
    ))}
  </div>
  <ul className={styles.history}>
  {
    history.map((historyItem, id) => (
        <li className={styles.historyItem} key={id}>
            <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.role} Logo`} />
            <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
            </div>
        </li>
    ))
}
  </ul>
</div>
    </section>
}