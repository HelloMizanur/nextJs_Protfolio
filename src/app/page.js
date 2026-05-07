import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { About, Skills, Education, Experience } from "../components/Sections";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}
