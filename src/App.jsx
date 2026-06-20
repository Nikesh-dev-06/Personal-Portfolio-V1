import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Vision from './components/Vision'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import ParticleBackground from './components/ParticleBackground'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            className="loading-screen"
            key="loader"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="loader-content">
              <motion.div
                className="loader-logo"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <span className="loader-logo-text">Albedrix_</span>
                <div className="loader-ring"></div>
                <div className="loader-ring loader-ring-2"></div>
              </motion.div>
              <motion.div
                className="loader-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <span className="loader-label">INITIALIZING SYSTEMS</span>
                <div className="loader-bar">
                  <div className="loader-bar-fill"></div>
                </div>
              </motion.div>
            </div>
            <div className="loader-grid"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CustomCursor />
          <ScrollProgress />
          <ParticleBackground />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Vision />
            <Timeline />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  )
}

export default App
