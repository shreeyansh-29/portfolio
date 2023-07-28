import React, {useEffect} from "react";
import {SiMui} from "react-icons/si";
import {
  Card,
  Experience,
  LeftSection,
  LeftSectionDiv,
  LeftSectionH1,
  LeftSectionHeading,
  LeftSectionP,
  ParentContainer,
  RightSection,
  RightSectionGrid,
  RightSectionH3,
  RightSectionP,
  IconContainer,
  SkillsContainer,
  HeadContainer,
} from "./skillsElements";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import "./index.css";

const squareVariants = {
  visible: {x: 0, opacity: 1},
  hidden: {opacity: 0, scale: 0},
};

const rightVariants = {
  visible: {y: 0, opacity: 1},
  hidden: {opacity: 0, scale: 0},
};

const skillsVariants = {
  visible: {x: 0, opacity: 1},
  hidden: {opacity: 0, scale: 0},
};

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inView1) {
      controls.start("visible");
    }
  }, [controls, inView1]);

  useEffect(() => {
    if (inView2) {
      controls.start("visible");
    }
  }, [controls, inView2]);
  return (
    <Experience id="skills">
      <HeadContainer>
        <ParentContainer>
          <LeftSection>
            <motion.div
              ref={ref}
              initial={{x: -220, opacity: 0.2}}
              animate={controls}
              variants={squareVariants}
              transition={{opacity: {duration: 1}, duration: 0.6}}
            >
              <LeftSectionDiv>
                <LeftSectionHeading>BENEFITS</LeftSectionHeading>
                <LeftSectionH1>Why should you hire me?</LeftSectionH1>
                <LeftSectionP>
                  When buidling or cloning web projects, I strongly adhere to
                  these principles which make my websites both unique and
                  scaleable.
                </LeftSectionP>
              </LeftSectionDiv>
            </motion.div>
          </LeftSection>
          <RightSection>
            <motion.div
              ref={ref1}
              initial={{y: 200, opacity: 0.2}}
              animate={controls}
              variants={rightVariants}
              transition={{opacity: {duration: 1}, duration: 0.6}}
            >
              <RightSectionGrid>
                <Card>
                  <span
                    className="fas fa-mobile-alt"
                    style={{color: "#8a2be2"}}
                  ></span>
                  <RightSectionH3>Responsive Design</RightSectionH3>
                  <RightSectionP>
                    I am passionate about responsiveness and making the websites
                    I build look good on different devices, browsers and cross
                    platforms using both "mobile first" approach and desktop
                    "media queries"
                  </RightSectionP>
                </Card>
                <Card>
                  <span
                    className="fas fa-code"
                    style={{color: "#0277bd"}}
                  ></span>
                  <RightSectionH3>Reusable & Minimal code</RightSectionH3>
                  <RightSectionP>
                    I try my best to write as minimal code as possible by using
                    tools like CSS Variables and writing custom utility classes.
                  </RightSectionP>
                </Card>
                <Card>
                  <span
                    className="fas fa-palette"
                    style={{color: "#ffd600"}}
                  ></span>
                  <RightSectionH3>Great UI/UX & Accessibility</RightSectionH3>
                  <RightSectionP>
                    I have a strong eye for designs, which allows me to
                    transform templates into pixel-perfect code while making it
                    accessible to all users. Principles I picked up from solving
                    various
                  </RightSectionP>
                </Card>
                <Card>
                  <span
                    className="fas fa-search"
                    style={{color: "#e65100"}}
                  ></span>
                  <RightSectionH3>
                    SEO(Search Engine Optimization)
                  </RightSectionH3>
                  <RightSectionP>
                    I employ best SEO practices like "Semantic HTML" and more on
                    websites and projects I work on to improve the site
                    visibility and rankings on Google.
                  </RightSectionP>
                </Card>
              </RightSectionGrid>
            </motion.div>
          </RightSection>
        </ParentContainer>
        <SkillsContainer>
          <motion.div
            ref={ref2}
            // initial={{x: "100%"}}
            // animate={{x: "0%"}}
            initial={{opacity: 0.2, x: 0}}
            animate={controls}
            transition={{delay: 0.4, ease: "easeIn", duration: 1}}
            variants={skillsVariants}
          >
            <IconContainer>
              <span
                className="fab fa-html5 icon"
                title="HTML5"
                style={{fontSize: "1.7rem"}}
              />
              <span
                className="fab fa-css3-alt icon"
                title="CSS3"
                style={{fontSize: "1.7rem"}}
              />
              <span
                className="fab fa-js icon"
                title="JavaScript"
                style={{fontSize: "1.5rem"}}
              />
              <span
                className="fab fa-bootstrap icon"
                title="Bootstrap"
                style={{fontSize: "1.6rem"}}
              />
              <span
                className="fab fa-react icon"
                title="React"
                style={{fontSize: "1.5rem"}}
              />
              <SiMui
                className="icon"
                style={{fontSize: "1.6rem"}}
                title="Material-UI"
              />
            </IconContainer>
          </motion.div>
        </SkillsContainer>
      </HeadContainer>
    </Experience>
  );
};

export default Skills;
