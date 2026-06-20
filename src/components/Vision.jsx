import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './Vision.css';

const Vision = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);

  const floatingKeywords = [
    'AI', 'IoT', 'Edge Computing', 'Neural Networks', 'Embedded', 'Innovation', 'Automation', 'Robotics'
  ];

  return (
    <section id="vision" className="vision-section" ref={ref}>
      <motion.div 
        className="vision-bg-parallax"
        style={{ y: yBackground }}
      >
        <div className="neural-net-bg"></div>
      </motion.div>

      <div className="vision-overlay"></div>

      <div className="container vision-container">
        <motion.div 
          className="vision-content"
          style={{ opacity: opacityText, scale: scaleText }}
        >
          <div className="vision-graphic">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
            <div className="vision-core"></div>
          </div>

          <h2 className="vision-title">Building the Future</h2>
          
          <p className="vision-text">
            I aim to build futuristic intelligent technologies combining <span className="highlight-red">Embedded Systems</span>, <span className="highlight-blue">AI</span>, <span className="highlight-green">Edge Computing</span>, Full Stack Development, and Research & Development to solve real-world problems and create impactful innovation.
          </p>
        </motion.div>
      </div>

      <div className="floating-keywords">
        {floatingKeywords.map((word, index) => (
          <div key={index} className={`float-word fw-${index + 1}`}>
            {word}
          </div>
        ))}
      </div>
      
      <div className="glowing-divider-top"></div>
      <div className="glowing-divider-bottom"></div>
    </section>
  );
};

export default Vision;
