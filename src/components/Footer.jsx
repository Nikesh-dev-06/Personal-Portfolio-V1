import { motion } from 'framer-motion';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin';
import { FiMail } from '@react-icons/all-files/fi/FiMail';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer glass">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">
              Albedrix_<span className="logo-dot">.</span>
            </h3>
            <p className="footer-tagline">Building intelligent futuristic technologies.</p>
          </div>
          
          <div className="footer-socials">
            <a href="https://github.com/Nikesh-dev-06" target="_blank" rel="noopener noreferrer" className="social-link interactive">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/nikesh-babu-s-3862a72a5/" target="_blank" rel="noopener noreferrer" className="social-link interactive">
              <FiLinkedin />
            </a>
            <a href="mailto:nikes.dev.06@gmail.com" className="social-link interactive">
              <FiMail />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Nikesh Babu S. All rights reserved.</p>
          <div className="footer-circuit-line"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
