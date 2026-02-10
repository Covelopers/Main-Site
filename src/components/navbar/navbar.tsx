import './Navbar.css'
import logo from "../../assets/Covelopers.png";

export function Navbar() {

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src={logo} alt="Covelopers Logo" className="logo-img" />
        <button className="get-started-btn">
          Get Started
        </button>
      </div>
    </nav>
  );
};

