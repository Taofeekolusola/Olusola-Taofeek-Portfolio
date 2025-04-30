import './App.module.css'
import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Experience from './components/Experience/Experience.jsx'
import Project from './components/Projects/Project.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx'

export default function App() {

  return (
      <div className={styles.App}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      </div>
      )
}
