import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Embedded Systems',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 3H15M3 9V15M21 9V15M9 21H15M7 7H17V17H7V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
          <path d="M10 7V5M14 7V5M10 17V19M14 17V19M7 10H5M7 14H5M17 10H19M17 14H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: 'var(--neon-red)',
      skills: ['ESP32', 'Arduino', 'Raspberry Pi', 'Embedded C', 'UART', 'SPI', 'I2C', 'Sensor Integration']
    },
    {
      title: 'Programming',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 17L10 11L4 5M12 19H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: 'var(--electric-blue)',
      skills: ['C', 'C++', 'Python', 'JavaScript', 'PHP']
    },
    {
      title: 'Full Stack',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 17L12 22L22 17M2 12L12 17L22 12M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: 'var(--purple)',
      skills: ['React.js', 'Node.js', 'MySQL', 'HTML', 'CSS', 'CRUD Operations']
    },
    {
      title: 'AI & Future Tech',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4C14.2091 4 16 5.79086 16 8C16 9.84589 14.7505 11.4011 13.0189 11.8702L12 16L10.9811 11.8702C9.24949 11.4011 8 9.84589 8 8C8 5.79086 9.79086 4 12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16V20M12 20H9M12 20H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 10L3 11M18 10L21 11M8 5L5 3M16 5L19 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: 'var(--green)',
      skills: ['Edge AI', 'Intelligent Systems', 'IoT', 'Computer Vision', 'AI Research']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="skills-background"></div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title"><span>Technical Arsenal</span></h2>
          <div className="section-line"></div>
          <p className="section-subtitle">A comprehensive toolkit of hardware, software, and intelligent systems technologies.</p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title} 
              className="skill-card glass interactive"
              variants={itemVariants}
              style={{ '--accent-color': category.color }}
            >
              <div className="skill-card-inner">
                <div className="skill-icon-wrapper">
                  <div className="skill-icon">{category.icon}</div>
                  <div className="skill-icon-glow"></div>
                </div>
                
                <h3 className="skill-title">{category.title}</h3>
                
                <div className="skill-pills">
                  {category.skills.map((skill, i) => (
                    <motion.span 
                      key={skill} 
                      className="skill-pill"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.5 + (index * 0.1) + (i * 0.05), duration: 0.4 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
                
                <div className="card-border-gradient"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
