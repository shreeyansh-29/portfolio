import React, {useEffect} from "react";
import "./contact.css";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import Form from "./Form";

const headingVariants = {
  visible: {y: 0, opacity: 1},
  hidden: {opacity: 0, scale: 0},
};

const ContactSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <motion.div
            className="form-header"
            ref={ref}
            initial={{y: 120, opacity: 0.2}}
            animate={controls}
            variants={headingVariants}
            transition={{opacity: {duration: 1}, duration: 0.6}}
          >
            <h2 className="head-text">Contact.</h2>
            <h2 className="text-secondary">Get In Touch </h2>
            <p>
              Want to connect with me or collaborate on projects together, You
              can send me a message and I'll reply as soon as I can.. Thank You.
            </p>
          </motion.div>
          <Form />
        </div>
      </section>
    </>
  );
};

export default ContactSection;
