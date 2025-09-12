import './App.css';
import Background  from './components/background/background'
import Navbar from './components/navbar/navbar'
import Contact from './components/contact/contact'

function App() {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
        <h1 className="title">covelopers</h1>
        <p className="description">
          A startup company made up of university graduates
          utilising AI in various projects to help other graduates.
        </p>
        <button className="contact-btn" onClick={() => scrollToSection("contact")}>
            Contact Us
        </button>
      </div>
      <Background />
      <Contact />
  </div>
  )
}

export default App
