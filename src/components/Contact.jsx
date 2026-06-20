import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail } from '@react-icons/all-files/fi/FiMail';
import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
import { FiSend } from '@react-icons/all-files/fi/FiSend';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-bg-grid"></div>
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title"><span>Get In Touch</span></h2>
          <div className="section-line"></div>
          <p className="section-subtitle">Interested in collaborating or have a question? Let's connect and build something amazing.</p>
        </motion.div>

        <div className="contact-container" ref={ref}>
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="mailto:nikes.dev.06@gmail.com" className="contact-card glass interactive">
              <div className="contact-icon"><FiMail /></div>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <span className="contact-value">nikes.dev.06@gmail.com</span>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/nikesh-babu-s-3862a72a5/" target="_blank" rel="noopener noreferrer" className="contact-card glass interactive">
              <div className="contact-icon"><FiLinkedin /></div>
              <div className="contact-details">
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">linkedin.com/in/nikesh-babu-s-3862a72a5</span>
              </div>
            </a>
            
            <a href="https://github.com/Nikesh-dev-06" target="_blank" rel="noopener noreferrer" className="contact-card glass interactive">
              <div className="contact-icon"><FiGithub /></div>
              <div className="contact-details">
                <span className="contact-label">GitHub</span>
                <span className="contact-value">github.com/Nikesh-dev-06</span>
              </div>
            </a>
          </motion.div>

          <motion.div 
            className="contact-form-wrapper glass"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <h3 className="form-title">Send a Message</h3>
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className="form-input interactive" placeholder="Enter your name" required />
                <div className="input-focus-border"></div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-input interactive" placeholder="Enter your email" required />
                <div className="input-focus-border"></div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" rows="4" className="form-textarea interactive" placeholder="Type your message here..." required></textarea>
                <div className="input-focus-border"></div>
              </div>
              
              <button type="submit" className="btn-primary form-submit interactive">
                Send Message <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
