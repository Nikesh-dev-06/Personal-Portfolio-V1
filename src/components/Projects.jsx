import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
import { FiExternalLink } from '@react-icons/all-files/fi/FiExternalLink';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'ECG Machine with AI Emotion Detection System',
      description: 'Developed an intelligent ECG monitoring system integrated with AI-based emotion detection concepts to analyze human emotional and stress-related patterns.',
      tech: ['ESP32', 'Python', 'AI/ML', 'Sensors', 'Signal Processing'],
      category: 'Embedded AI',
      accent: '#ff0040'
    },
    {
      title: 'AI for Preventive Air Quality Management & Sustainable Crop Residue Utilization',
      description: 'AI-driven environmental monitoring and sustainable smart agriculture system focused on pollution reduction and intelligent environmental analysis.',
      tech: ['Python', 'Random Forest', 'XG Boost', 'AI/ML', 'Data Analytics', 'React.js'],
      category: 'AI & Environment',
      accent: '#22c55e'
    },
    {
      title: 'Student Information System',
      description: 'Full stack student management system with CRUD operations, database integration, attendance handling, and responsive UI.',
      tech: ['PHP', 'CSS', 'MySQL', 'XAMPP'],
      category: 'Full Stack',
      accent: '#00d4ff'
    },
    {
      title: 'Insurance Policy & Claims Management System',
      description: 'Full stack platform for policy handling, customer management, and intelligent claims processing workflows.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'REST API'],
      category: 'Full Stack',
      accent: '#a855f7'
    },
    {
      title: 'Phishing URL Detection Browser Extension',
      description: 'Browser extension for detecting malicious phishing URLs using intelligent detection concepts and URL analysis.',
      tech: ['JavaScript', 'Browser APIs', 'ML Concepts', 'Security'],
      category: 'Cybersecurity',
      accent: '#f59e0b'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title"><span>Featured Projects</span></h2>
          <div className="section-line"></div>
          <p className="section-subtitle">A selection of my recent engineering, AI, and full-stack endeavors.</p>
        </motion.div>

        <div className="projects-container">
          {projects.map((project, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                className="project-card glass interactive"
                style={{ '--project-accent': project.accent }}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="project-index">0{index + 1}</div>
                
                <div className="project-content">
                  <div className="project-header">
                    <span className="project-category">{project.category}</span>
                    <div className="project-links">
                      <a href="https://github.com/Nikesh-dev-06" target="_blank" rel="noopener noreferrer" className="project-link interactive"><FiGithub /></a>
                    </div>
                  </div>
                  
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-actions">
                    <a href="https://drive.google.com/drive/folders/1eDgkjEhO374qKr7g_2glqtqjUYmM2_yl?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-primary interactive" style={{ background: `linear-gradient(135deg, ${project.accent}, #222)`}}>
                      Live Demo
                    </a>
                  </div>
                </div>
                
                <div className="project-circuit-overlay"></div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="more-projects-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}
        >
          <a href="https://github.com/Nikesh-dev-06" target="_blank" rel="noopener noreferrer" className="btn-secondary interactive">
            More Projects <FiGithub style={{ marginLeft: '8px' }} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
