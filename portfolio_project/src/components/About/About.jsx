import React from 'react'
import getImageUrl from '../../utils'
import styles from './About.module.css'

export default function About() {
    return <section className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl("about4.png")} alt="A loptop for coding" />
        </div>
        < ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <div className={styles.aboutItemsText}>
                    <h3>Frontend Developer</h3>
                    <p>I'm am a frontend developer with experience in building responsive and optimized sites</p>
                    <p>As a frontend developer, I specialize in creating responsive, user-friendly web applications using a modern framework such as React, ensuring seamless performance across various devices. With a keen eye for design and a strong foundation in HTML, CSS, and JavaScript, I am dedicated to delivering visually appealing and highly functional digital experiences.</p>
                </div>
            </li>
        </ul>
    </section>
}