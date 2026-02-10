import "./Footer.css";

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
              <a href="#workflow">Workflow</a>
              <a href="#stack">Tech Stack</a>
              <a href="#contact">Apply</a>
            </div>

            <div className="footer-column">
              <h4>Community</h4>
              <a href="#">Discord</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
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