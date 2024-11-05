import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "../components/About";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Welcome from "../components/Welcome";
import Contact from "../components/Contact";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror:true,
    });
  }, []);
  return (
    <main className="h-auto">
      <Header />
      <Welcome />
      <div className="flex flex-col justify-between h-auto md:flex-row md:justify-around items-center mt-12">
        <About
          title="About Me:"
          text="Hello, my name is Bianca, and I am an enthusiastic front-end student! 
            I come from Romania but have been living in the Netherlands for the past 10 years with my family. During my first years in the Netherlands, I focused on my family, especially my children. Now,  as I continue my education studies, I am concentrating on my professional development. I chose the front-end track because I find the combination of technical skills and creativity both fascinating and challenging."
        />
        <Skills />
      </div>
      <Contact />
    </main>
  );
};

export default Home;
