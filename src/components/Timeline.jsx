import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode } from '@react-icons/all-files/fi/FiCode';
import { FiCpu } from '@react-icons/all-files/fi/FiCpu';
import { FiMonitor } from '@react-icons/all-files/fi/FiMonitor';
import { FiLayers } from '@react-icons/all-files/fi/FiLayers';
import { FiBookOpen } from '@react-icons/all-files/fi/FiBookOpen';
import { FiZap } from '@react-icons/all-files/fi/FiZap';
import './Timeline.css';

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const milestones = [
    {
      title: 'Research & Development',
      description: 'Exploring cutting-edge technologies and contributing to innovative solutions in embedded systems and AI.',
      icon: <FiZap />,
      color: 'var(--neon-red)'
    },
    {
      title: 'Embedded Systems Projects',
      description: 'Building real-world hardware solutions with ESP32, Arduino, Raspberry Pi, and sensor integration.',
      icon: <FiCpu />,
      color: 'var(--electric-blue)'
    },
    {
      title: 'AI Research Interests',
      description: 'Diving deep into Edge AI, Computer Vision, and intelligent system design for practical applications.',
      icon: <FiMonitor />,
      color: 'var(--purple)'
    },
    {
      title: 'Full Stack Development',
      description: 'Creating modern web applications with React.js, Node.js, and database-driven architectures.',
      icon: <FiLayers />,
      color: 'var(--green)'
    },
    {
      title: 'Technical Learning Journey',
      description: 'Continuously expanding expertise across embedded systems, programming languages, and modern frameworks.',
      icon: <FiBookOpen />,
      color: 'var(--amber)'
    },
    {
      title: 'Innovation & Experimentation',
      description: 'Prototyping futuristic solutions and exploring startup-oriented engineering approaches.',
      icon: <FiCode />,
      color: 'var(--neon-red)'
    }
  ];

  return (
    <section id="timeline" className="section timeline-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title"><span>Journey & Milestones</span></h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="timeline-container" ref={ref}>
          <div className="timeline-center-line"></div>

          {milestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;
            return (
              <TimelineItem 
                key={index} 
                milestone={milestone} 
                index={index} 
                isLeft={isLeft} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ milestone, index, isLeft }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className={`timeline-row ${isLeft ? 'row-left' : 'row-right'}`}>
      <div className="timeline-spacer desktop-only"></div>
      
      <motion.div 
        className="timeline-node-container"
        ref={ref}
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <div className="timeline-node" style={{ backgroundColor: milestone.color, boxShadow: `0 0 15px ${milestone.color}` }}>
          {index + 1}
        </div>
      </motion.div>
      
      <motion.div 
        className="timeline-card-wrapper"
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? 50 : -50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div 
          className="timeline-card glass interactive"
          style={{ '--accent': milestone.color }}
        >
          <div className="timeline-icon" style={{ color: milestone.color }}>
            {milestone.icon}
          </div>
          <h3 className="timeline-title">{milestone.title}</h3>
          <p className="timeline-description">{milestone.description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Timeline;
