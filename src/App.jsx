import "./app.scss" ;
// import {motion} from "framer-motion";
import Navbar from "./components/navbar/nav";
import Hero from "./components/hero/hero";
import Parallax from "./components/parallax/parallax";
import Services from "./components/services/services";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import Projects from "./components/projects/projects";

const App = () => {
  return <div>
    <section id="Home">
     <Navbar/>
     <Hero/>
    </section>
    <section id="About"><About/></section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Projects"><Parallax type="projects"/></section>
    <section><Projects/></section>
    <section id="Contact"><Contact/></section>
    
  </div>;
};

export default App;
