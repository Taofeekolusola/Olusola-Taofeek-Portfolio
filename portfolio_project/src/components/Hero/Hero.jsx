import getImageUrl from '../../utils'
import styles from './Hero.module.css'
export default function Hero() {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Taofeek</h1>
            <p className={styles.decription}>I'm a Frontend Developer with two years of experience using React and Node.js. 
                Reach out if you'd like to learn more about me.</p>
            <a className={styles.contact} href="mailto:olusolataofeek@gmail.com">Contact Me</a>
        </div>
        <img className={styles.imgclass} src={getImageUrl("taofeek.png")} alt="image of me" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>

    </section>
}