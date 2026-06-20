import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const interests = [
    { name: 'Embedded Systems', icon: '🔌', color: 'var(--neon-red)' },
    { name: 'Edge AI', icon: '🧠', color: 'var(--electric-blue)' },
    { name: 'Full Stack', icon: '💻', color: 'var(--purple)' },
    { name: 'R&D', icon: '🔬', color: 'var(--green)' },
    { name: 'IoT', icon: '📡', color: 'var(--amber)' },
    { name: 'Innovation', icon: '🚀', color: 'var(--neon-red)' },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title"><span>About Me</span></h2>
          <div className="section-line"></div>
          
          <div className="about-content">
            <div className="about-visual">
              <div className="hologram-card glass">
                <div className="card-corners">
                  <span></span><span></span><span></span><span></span>
                </div>
                <div className="terminal-header">
                  <div className="dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="terminal-title">profile.exe</span>
                </div>
                <div className="terminal-body">
                  <p><span className="prompt">&gt;</span> <span className="typing">Loading profile data...</span></p>
                  <p className="delay-1"><span className="prompt">&gt;</span> STATUS: <span className="highlight-green">ONLINE</span></p>
                  <p className="delay-2"><span className="prompt">&gt;</span> SYSTEM: <span className="highlight-blue">OPTIMIZED</span></p>
                  <p className="delay-3"><span className="prompt">&gt;</span> MISSION: <span className="highlight-red">INNOVATE</span></p>
                  <div className="terminal-cursor"></div>
                </div>
                <div className="scanner-line"></div>
              </div>
            </div>
            
            <div className="about-text-container">
              <div className="about-bio">
                <p>
                  I am a Computer Science and Design Engineering Undergraduate passionate about <span className="highlight">Embedded Systems</span>, <span className="highlight">IoT</span>, <span className="highlight">Edge AI</span>, intelligent systems, and futuristic technology innovation.
                </p>
                <p>
                  I enjoy building practical hardware and software solutions using ESP32, Arduino, Raspberry Pi, modern full stack technologies, and AI-integrated systems.
                </p>
                <p>
                  My interests focus on intelligent real-world applications, embedded technologies, AI-driven systems, human-centered innovation, and startup-oriented engineering.
                </p>
              </div>
              
              <div className="interests-grid">
                {interests.map((interest, index) => (
                  <motion.div 
                    key={interest.name}
                    className="interest-card glass-light interactive"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, borderColor: interest.color, boxShadow: `0 0 15px ${interest.color}40` }}
                  >
                    <span className="interest-icon" style={{ textShadow: `0 0 10px ${interest.color}` }}>
                      {interest.icon}
                    </span>
                    <span className="interest-name">{interest.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
