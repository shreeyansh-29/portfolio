import React, {useState} from "react";
import SideBar from "../components/sidebar";
import Navbar from "../components/navbar";
import HeroSection from "../components/heroSection";
import AboutSection from "../components/about";
import FooterSection from "../components/footer";
import Skills from "../components/skills";
import Projects from "../components/projects";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <FooterSection />
    </>
  );
};

export default Homepage;
