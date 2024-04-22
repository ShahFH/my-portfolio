import About from "./components/About";
import Header from "./components/Header"
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <Header />
    <Hero />
    <About id="About" />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
