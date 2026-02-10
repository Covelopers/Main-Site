import './Navbar.css'
import logo from "../../assets/Covelopers.png";

export function Navbar() {

  // const scrollTo = (id: string) => {
  //   document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  // };

  // <button onClick={() => scrollTo("faq")}>FAQ</button>
  return (
      //   <nav className="navbar">
      // <div className="navbar-content">
    <nav className="glass-nav">
      <div className="nav-container">
        <div className="nav-left">
          <img src={logo} alt="Covelopers Logo" className="logo-img" />
        </div>

        <div className="nav-center">
          <a href="#workflow">The Workflow</a>
          <a href="#stack">Tech Stack</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="nav-right">
          {/* className="get-started-btn" */}
          <a href="#" className="apply-btn" >
            Get-started
          </a>
        </div>
      </div>
    </nav>

  );
};

