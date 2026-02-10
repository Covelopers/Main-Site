import './App.css';

import  { Navbar } from "./components/Navbar/Navbar";
import  { Hero }  from "./components/Hero/Hero";
import  { Workflow }  from "./components/Workflow/Workflow";
import  { Stack }  from "./components/Stack/Stack";
import  { FAQ } from "./components/FAQ/FAQ";
import  { Contact } from "./components/Contact/Contact";
import  { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="workflow" className="workflow">
          <Workflow />
        </section>

        <section id="stack" className="stack">
          <Stack />
        </section>

        <section id="faq" className="faq">
          <FAQ />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
