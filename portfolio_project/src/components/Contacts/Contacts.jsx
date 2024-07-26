import getImageUrl from '../../utils'
import styles from './Contacts.module.css'
export default function Contact() {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out</p>
            </div>
            <ul className={styles.links}>
                <li key="email" className={styles.link}><img src={getImageUrl("contact/email.png")} alt="Email icon" />
                <a href="mailto:olusolataofeek@gmail.com">olusolataofeek@gmail.com</a>
                </li>
                <li key="github" className={styles.link}><img src={getImageUrl("contact/github.png")} alt="Github icon" />
                <a href="https://github.com/Taofeekolusola">Github.com//Taofeekolusola</a>
                </li>
                <li key="linkedin" className={styles.link}><img src={getImageUrl("contact/linkedin.png")} alt="Linkedin icon" />
                <a href="https://www.linkedin.com/in/adeshina123/">Linkedin.com//Taofeekolusola</a>
                </li>
                <li key="x" className={styles.link}><img src={getImageUrl("contact/X.png")} alt="X icon" />
                <a href="https://x.com/TaofeekOlusola1/">X.com//Taofeekolusola</a>
                </li>
                <li key="tel" className={styles.link}><img src={getImageUrl("contact/tel.png")} alt="telephone icon" />
                <a href="09063659635">Tel - 09063659635</a>
                </li>
                
            </ul>
        </footer>
    )
}