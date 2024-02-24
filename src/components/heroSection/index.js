import React, {useState} from "react";
import {
  ArrowForward,
  ArrowRight,
  Button,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./heroSectionElements";
import {easeIn, motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import Video from "../../images/gifs/video.gif";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => setHover(!hover);

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} alt={'hero-section-video'}/>
      </HeroBg>
      <HeroContent>
        <motion.div
          initial={{x: "-100%", opacity: 0}}
          animate={{x: "0%", opacity: 1}}
          // transition={{duration: 1}}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: easeIn,
          }}
          // whileHover={{scale: 1.2}}
        >
          <HeroH1 className="content-h1">Hi, I'm Shreeyansh,</HeroH1>
        </motion.div>
        <motion.div
          // initial={{x: "100%"}}
          // animate={{x: "0%"}}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 1.2}}
          // whileHover={{scale: 1.2}}
        >
          {/* <h1 className="content-p">The FrontEnd Developer.</h1> */}
          <HeroP>
            <Typewriter
              options={{
                strings: [
                  "A Software Developer.",
                  "A Web Developer.",
                  "A Native Developer.",
                  "A Frontend Developer.",
                  // "Freelancer",
                  "A MERN Stack Developer",
                  // "Open Source Contributor",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </HeroP>
        </motion.div>
        <HeroBtnWrapper>
          <motion.button
            initial={{
              opacity: 0,
              y: 100,
              background: "transparent",
              borderStyle: "none",
            }}
            animate={{opacity: 1, y: 0}}
            transition={{
              delay: 1.4,
              damping: 10,
              stiffness: 100,
              type: "spring",
            }}
          >
            <Button
              target="_blank"
              primary="true"
              dark="true"
              to="https://drive.google.com/file/d/1jXAGNTGz9TT0P-2diKNxNmMurX8qjsDk/view?usp=sharing"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Resume {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </motion.button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
