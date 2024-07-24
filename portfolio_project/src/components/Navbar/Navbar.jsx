import React, {useState} from 'react'
import styles from './Navbar.module.css'
import getImageUrl from '../../utils'

export default function Navbar(){
    const [openMenu, setOpenMenu] = useState(false);
    return <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
        <img 
                className={styles.menuBtn} 
                src={openMenu ? getImageUrl("closedmenu.png") : getImageUrl("menuicon.png")} 
                alt="menu-button" 
                onClick={() => setOpenMenu(!openMenu)} 
        />
            <ul className={`${styles.menuItems} ${openMenu && styles.openMenu}`}
        onClick={() => setOpenMenu(false)}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#project">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
}