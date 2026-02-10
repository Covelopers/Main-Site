import './App.css';

import  { Navbar } from "./components/Navbar/Navbar";
import  { Hero }  from "./components/Hero/Hero";
import  { Workflow }  from "./components/Workflow/Workflow";
import  { Stack }  from "./components/Stack/Stack";
import  { FAQ } from "./components/FAQ/FAQ";
import  { Contact } from "./components/Contact/Contact";
import  { Footer } from "./components/Footer/Footer";

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

      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="workflow">
          <Workflow />
        </section>

        <section id="stack">
          <Stack />
        </section>
        <Contact />
        <section id="faq">
          <FAQ />
        </section>
      </main>

      <Footer />
      <Navbar />
      {/* <div className="content-container">
        <h1 className="title">covelopers</h1>
        <p className="description">
          A startup company made up of university graduates
          utilising AI in various projects to help other graduates.
        </p>
        <button className="contact-btn" onClick={() => scrollToSection("contact")}>
            Contact Us
        </button>
      </div>
      <Background /> */}
      
  </div>
  )
}

export default App
