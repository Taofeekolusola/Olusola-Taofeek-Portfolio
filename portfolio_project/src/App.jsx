import './App.module.css'
import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Experience from './components/Experience/Experience.jsx'
import Project from './components/Projects/Project.jsx'
import Contacts from './components/Contacts/Contacts.jsx'

export default function App() {

  return (
      <div className={styles.App}>
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        <Project/>
        <Contacts/>
      </div>
      )
}
