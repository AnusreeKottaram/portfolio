import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About";
export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <About/>
   <Skills/>
   <Projects/>
   <Contact/>
   <Footer/>
   </>
  );
}
