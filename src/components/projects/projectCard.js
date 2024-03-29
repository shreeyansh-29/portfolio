import React, {useEffect} from "react";
import {
  LeftSection,
  LeftSectionButton,
  LeftSectionH1,
  LeftSectionLink,
  LeftSectionP,
  LeftSectionTechStack,
  ProjectContainer,
  RightSection,
  RightSectionImg,
} from "./projectSection";
import {useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

const contentVariants = {
  visible: {x: 0, opacity: 1},
  hidden: {opacity: 0, scale: 0},
};

const projectVariants = {
  visible: {y: 0, opacity: 1},
  hidden: {opacity: 0, scale: 0},
};

const ProjectCard = (props) => {
  let {projectName, description, liveLink, githubLink, techStack, img} = props;
  const controls = useAnimation();

  const [ref, viewRef] = useInView();

  useEffect(() => {
    if (viewRef) {
      controls.start("visible");
    }
  }, [controls, viewRef]);

  return (
    <ProjectContainer>
      <LeftSection
        ref={ref}
        initial={{x: -220, opacity: 0.2}}
        animate={controls}
        variants={contentVariants}
        transition={{opacity: {duration: 0.6}, duration: 0.4}}
      >
        <LeftSectionH1>{projectName}</LeftSectionH1>
        <LeftSectionTechStack>{techStack}</LeftSectionTechStack>
        <LeftSectionP>{description}</LeftSectionP>
        <LeftSectionButton>
          <LeftSectionLink
            primary="true"
            dark="true"
            to={githubLink}
            target="blank"
          >
            Source Code
          </LeftSectionLink>
          <LeftSectionLink
            primary="true"
            dark="true"
            to={liveLink}
            target="blank"
          >
            Live
          </LeftSectionLink>
        </LeftSectionButton>
      </LeftSection>
      <RightSection
        ref={ref}
        initial={{y: 120, opacity: 0.2}}
        animate={controls}
        variants={projectVariants}
        transition={{opacity: {duration: 0.6}, duration: 0.4}}
      >
        <RightSectionImg src={img} alt={img} />
      </RightSection>
    </ProjectContainer>
  );
};

export default ProjectCard;
