import React, {useState, useEffect} from "react";
import SideBar from "../components/sidebar";
import Navbar from "../components/navbar";
import HeroSection from "../components/heroSection";
import AboutSection from "../components/about";
import FooterSection from "../components/footer";
import Skills from "../components/skills";
import Projects from "../components/projects";
import ContactSection from "../components/contact";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default Homepage;
