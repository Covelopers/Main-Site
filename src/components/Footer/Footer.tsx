import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <span className="logo">
            Covelopers<span>.</span>
          </span>
          <p>
            The engineering accelerator for ambitious developers. Stop validating
            yourself with certificates. Start validating yourself with code.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Platform</h4>
            <a href="#workflow">Workflow</a>
            <a href="#stack">Tech Stack</a>
            <a href="#">Apply</a>
          </div>

          <div>
            <h4>Community</h4>
            <a href="#">Discord</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Covelopers. All rights reserved.</p>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
