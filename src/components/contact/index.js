import React, {useReducer, useState, useEffect} from "react";
import "./contact.css";
import {send} from "emailjs-com";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

const headingVariants = {
  visible: {y: 0, opacity: 1},
  hidden: {opacity: 0, scale: 0},
};

const svgVariants = {
  visible: {x: 0, opacity: 1},
  hidden: {opacity: 0, scale: 0},
};

const formVariants = {
  visible: {y: 0, opacity: 1},
  hidden: {opacity: 0, scale: 0},
};

let initialMailState = {
  from_name: "",
  to_name: "Shreeyansh",
  message: "",
  reply_to: "",
};

let initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REQUEST":
      return {...state, isLoading: true};
    case "SUCCESS":
      return {...state, data: action.response.status, isLoading: false};
    case "ERROR":
      return {
        ...state,
        data: null,
        isLoading: false,
        error: action.response.status,
      };
    case "RESET":
      return {...state, data: null, isLoading: false, error: null};
    default:
      return state;
  }
};

const ContactSection = () => {
  const [toSend, setToSend] = useState(initialMailState);
  const [status, dispatch] = useReducer(reducer, initialState);
  const controller = new AbortController();
  let signal = controller.signal;

  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [svgRef, svgInView] = useInView();
  const [formRef, formInView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (svgInView) {
      controls.start("visible");
    }
  }, [controls, svgInView]);

  useEffect(() => {
    if (formInView) {
      controls.start("visible");
    }
  }, [controls, formInView]);

  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    controller.abort();
    let serviceId = process.env.REACT_APP_SERVICE_ID;
    let templateId = process.env.REACT_APP_TEMPLATE_ID;
    let key = process.env.REACT_APP_PUBLIC_KEY;
    let timerId = null;
    e.preventDefault();
    dispatch({type: "REQUEST"});

    send(serviceId, templateId, toSend, key, {signal})
      .then((response) => {
        clearTimeout(timerId);
        dispatch({type: "SUCCESS", response: response});
        setToSend(initialMailState);
        setTimeout(() => {
          dispatch({type: "RESET"});
        }, 3000);
      })
      .catch((err) => {
        clearTimeout(timerId)
        dispatch({type: "ERROR", response: {status: 400}});
        setToSend(initialMailState);
        setTimeout(() => {
          dispatch({type: "RESET"});
        }, 3000);
      });
    timerId = setTimeout(() => {
      controller.abort();
      setToSend(initialMailState);
    }, 5000);
  };

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
          <div className="form-container">
            <motion.div
              ref={svgRef}
              initial={{x: -220, opacity: 0.2}}
              animate={controls}
              variants={svgVariants}
              transition={{opacity: {duration: 0.6}, duration: 0.4}}
              className="form-image"
            ></motion.div>
            <motion.div
              className="form-page"
              ref={formRef}
              initial={{y: 120, opacity: 0.2}}
              animate={controls}
              variants={formVariants}
              transition={{opacity: {duration: 0.6}, duration: 0.4}}
            >
              <form
                action="thankyou.html"
                data-netlify="true"
                className="form"
                onSubmit={handleSubmit}
              >
                <div className="form-group group-bg">
                  <input
                    type="text"
                    id="Name"
                    placeholder="Enter Name"
                    required
                    autoComplete="off"
                    value={toSend.from_name}
                    onChange={handleChange}
                    name="from_name"
                  />
                </div>
                <div className="form-group group-bg">
                  <input
                    type="text"
                    id="Subject"
                    placeholder="Enter Email"
                    required
                    autoComplete="off"
                    value={toSend.reply_to}
                    onChange={handleChange}
                    name="reply_to"
                  />
                </div>
                <div className="form-group group-bg">
                  <textarea
                    name="message"
                    id="Message"
                    placeholder="Message"
                    autoComplete="off"
                    value={toSend.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    value="submit"
                    className="btn"
                    disabled={status.isLoading}
                  >
                    Submit
                  </button>
                </div>
                {status.data === 200 && (
                  <div className="success-message">Mail Sent Successfully</div>
                )}
                {status.error === 400 && (
                  <div className="error-message">
                    Something went wrong, please try again
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
