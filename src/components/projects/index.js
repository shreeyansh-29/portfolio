import React, {useEffect} from "react";
import {ProjectSection, ProjectsH1} from "./projectSection";
import {data} from "./constant";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import ProjectCard from "./projectCard";

const squareVariants = {
  visible: {y: 0, opacity: 1},
  hidden: {opacity: 0, scale: 0},
};

const projectCardsVariants = {
  visible: {y: 0, opacity: 1},
  hidden: {opacity: 0, scale: 0},
};

const Projects = () => {
  const controls = useAnimation();
  const controls1 = useAnimation();

  const [ref, viewRef] = useInView();
  const [cardRef, viewCardRef] = useInView();

  useEffect(() => {
    if (viewRef) {
      controls.start("visible");
    }
  }, [controls, viewRef]);

  useEffect(() => {
    if (viewCardRef) {
      controls1.start("visible");
    }
  }, [controls1, viewCardRef]);

  return (
    <ProjectSection id="projects">
      <motion.div
        ref={ref}
        initial={{y: 120, opacity: 0.2}}
        animate={controls}
        variants={squareVariants}
        transition={{opacity: {duration: 1}, duration: 0.6}}
      >
        <ProjectsH1>Projects.</ProjectsH1>
      </motion.div>
      <motion.div
        ref={cardRef}
        animate={controls}
        initial={{y: 180, opacity: 0.2}}
        variants={projectCardsVariants}
        transition={{opacity: {duration: 1}, duration: 2}}
      >
        {data.map((ele, index) => {
          return (
            <ProjectCard
              key={index}
              projectName={ele.projectName}
              description={ele.description}
              link={ele.link}
              techStack={ele.techStack}
            />
          );
        })}
      </motion.div>
    </ProjectSection>
  );
};

export default Projects;
