import './Navbar.css'
import logo from "../../assets/Covelopers.png";

export function Navbar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    const yOffset = -80; // navbar height
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="nav-left">
          <img src={logo} alt="Covelopers Logo" className="logo-img" />
        </div>
        <div className="nav-links">
          <button onClick={() => scrollToSection("workflow")}>
            The Workflow
          </button>
          <button onClick={() => scrollToSection("stack")}>
            Tech Stack
          </button>
          <button onClick={() => scrollToSection("faq")}>
            FAQ
          </button>
        </div>
        <div className="nav-right">
          <a
            href="https://discord.gg/your-discord-link"
            target="_blank"
            rel="noopener noreferrer"
            className="git-push-btn"
          >
            git push
          </a>
        </div>
      </div>
    </nav>
  );
}