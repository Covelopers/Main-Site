import "./Footer.css";
import { FaDiscord, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo">
              Covelopers<span>.</span>
            </span>
            <p>
              The engineering accelerator for ambitious developers. Stop
              validating yourself with certificates. Start validating yourself
              with code.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Platform</h4>
              <a href="#hero">home</a>
              <a href="#workflow">Workflow</a>
              <a href="#stack">Tech Stack</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">contact</a>
            </div>

            <div className="footer-column">
              <h4>Community</h4>
              <a href="https://discord.gg/62vkfP7W5A" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="social-icon" /> Discord
              </a>
              <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" /> Twitter
              </a>
              <a href="https://www.linkedin.com/company/covelopers/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" /> LinkedIn
              </a>
              <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" /> Instagram
              </a>

              <a href="https://github.com/Covelopers" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" /> GitHub
              </a>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <a href="mailto:hello@covelopers.com">
                <MdEmail className="social-icon" /> Email Us
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Covelopers. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}