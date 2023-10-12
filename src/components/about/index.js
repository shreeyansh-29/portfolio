import React, {useEffect} from "react";
import "./aboutSection.css";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import User from "../../images/user.jpg";

const squareVariants = {
  visible: {y: 0, opacity: 1},
  hidden: {opacity: 0, scale: 0},
};
const descriptionVariants = {
  visible: {x: 0, opacity: 1},
  hidden: {opacity: 0, scale: 0},
};
const rightVariants = {
  visible: {y: 0, opacity: 1},
  hidden: {opacity: 0, scale: 0},
};
const downVariants = {
  visible: {y: 0, opacity: 1},
  hidden: {opacity: 0, scale: 0},
};

const AboutSection = () => {
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
    <>
      <div className="about-section" id="about">
        <div className="container">
          <div className="heading">
            <motion.div
              ref={ref}
              initial={{y: 120, opacity: 0.2}}
              animate={controls}
              variants={squareVariants}
              transition={{opacity: {duration: 1}, duration: 0.6}}
            >
              <h1>About Me.</h1>
            </motion.div>
          </div>
          <div className="about-container">
            <div className="sub-container">
              <motion.div
                ref={ref1}
                initial={{x: -220, opacity: 0.2}}
                animate={controls}
                variants={descriptionVariants}
                transition={{opacity: {duration: 1}, duration: 0.6}}
                className="leftSection"
              >
                <img src={User} alt="true" className="image" />
              </motion.div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                className="rightSection"
              >
                <motion.div
                  ref={ref1}
                  initial={{y: 120, opacity: 0.1}}
                  animate={controls}
                  variants={rightVariants}
                  transition={{opacity: {duration: 1}, duration: 0.6}}
                >
                  <div
                  // style={{backgroundColor: "lightgreen"}}
                  >
                    <p>
                      {/* I'm a passionate frontend developer living in Bangalore,
                      India, specializing in web development and mobile
                      development. */}
                      I'm Shreeyansh Singh from Bengaluru, a driven and
                      motivated individual with a passion for technology and
                      software development. Currently employed as a Software
                      Developer at Nineleaps Pvt. Ltd.
                    </p>
                    {/* <p>
                    A passionate frontend developer having hands on experience
                    in React Js and React Native.
                  </p> */}
                    {/* <p>
                      
                    </p> */}
                    <p>
                      {/* I am proficient in CSS have built some other projects with
                      JavaScript. I am currently working on improving my
                      JavaScript skills by building various projects to enhance
                      my abilities. */}
                      My skills encompass a diverse range of programming
                      languages, including C/C++, JavaScript, HTMl and CSS. I am
                      adept to utilizing variouss tools and platforms such as
                      Github,Git and VS code to optimize my development
                      workflow. Additionally, I have hands-on experience with
                      prominent frameworks and libraries like React.js, React
                      Native, Bootstrap and Material-UI, enabling me to craft
                      dynamic and responsive web applications.
                    </p>

                    <p>
                      Technologies and tools I'm currently exploring and
                      interested about.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  ref={ref2}
                  initial={{y: 200, opacity: 0}}
                  animate={controls}
                  variants={downVariants}
                  transition={{
                    opacity: {duration: 0.5},
                    duration: 0.5,
                    delay: 0.6,
                  }}
                  style={{display: "flex"}}
                >
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React</li>
                  </ul>
                  <ul className="tech-list">
                    <li>Redux</li>
                    <li>React Native</li>
                    <li>Bootstrap</li>
                    <li>Material-UI</li>
                  </ul>
                  <ul className="tech-list">
                    <li>Git</li>
                    <li>Webpack</li>
                    <li>C++</li>
                    <li>Node</li>
                  </ul>
                </motion.div>
              </div>
              {/* <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "50%",
                }}
              >
                <div class="content-image">
                  <div class="overlay-icons"></div>
                  <img
                    src="https://avatars.githubusercontent.com/u/62628408?v=4"
                    alt="A portrait of Victor Eke"
                  />
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
