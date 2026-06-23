import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // -10 to 10
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1]
      }
    })
  };

  const nameChars = "Nikesh Babu S".split("");

  return (
    <section id="home" className="hero-section">
      <div className="hero-background-grid"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            className="hero-status"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="status-dot"></div>
            <span className="status-text">Available for collaboration</span>
          </motion.div>
          {/* collaboration  */}

          <h1 className="hero-name">
            {nameChars.map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={nameVariants}
                style={{ display: 'inline-block' }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
          
          <motion.div 
            className="hero-title-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <TypeAnimation
              sequence={[
                'Embedded Systems Enthusiast',
                2000,
                'Edge AI Innovator',
                2000,
                'Intelligent Systems Builder',
                2000,
                'Full Stack Developer',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="hero-title"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            Building intelligent real-world technologies through Embedded Systems, AI, Full Stack Development, and Research & Development.
          </motion.p>

          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <a href="#projects" className="btn-primary interactive">
              View Projects
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn-secondary interactive">Contact Me</a>
          </motion.div>
        </div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
          }}
        >
          <div className="visual-core">
            <div className="core-inner"></div>
            <div className="core-pulse"></div>
            
            <div className="orbit orbit-1"></div>
            <div className="orbit orbit-2"></div>
            
            <div className="tech-nodes">
              <div className="tech-node node-1"><span>ESP32</span></div>
              <div className="tech-node node-2"><span>Arduino</span></div>
              <div className="tech-node node-3"><span>Edge AI</span></div>
              <div className="tech-node node-4"><span>RPi</span></div>
              <div className="tech-node node-5"><span>Neural</span></div>
            </div>

            <div className="circuit-lines">
              <svg viewBox="0 0 400 400" className="circuit-svg">
                <path d="M200,50 L200,100 M350,200 L300,200 M200,350 L200,300 M50,200 L100,200 M100,100 L130,130 M300,100 L270,130 M300,300 L270,270 M100,300 L130,270" stroke="rgba(255,0,64,0.5)" strokeWidth="2" strokeDasharray="10, 5" fill="none" />
                <path d="M150,150 L250,150 L250,250 L150,250 Z" stroke="rgba(0,212,255,0.4)" strokeWidth="1" fill="none" />
                <circle cx="200" cy="50" r="4" fill="#ff0040" />
                <circle cx="350" cy="200" r="4" fill="#ff0040" />
                <circle cx="200" cy="350" r="4" fill="#ff0040" />
                <circle cx="50" cy="200" r="4" fill="#ff0040" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="hero-scroll-indicator">
        <motion.div 
          className="mouse"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <div className="wheel"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
