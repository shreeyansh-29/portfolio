import React from "react";
import {
  FooterContainer,
  Footer,
  LeftContainer,
  Location,
  LocationP,
  RightContainer,
  RightContainerH4,
  Social,
  LeftContainerH4,
  Phone,
  Email,
  FaFb,
  FaInsta,
  FaGit,
  FaLink,
  FaTwit,
} from "./footerElements";
import {FaMailBulk, FaPhone} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";
import {Link} from "react-router-dom";

const FooterSection = () => {
  return (
    <Footer>
      <FooterContainer>
        <LeftContainer>
          <Location>
            <FaLocationDot
              size={22}
              style={{color: "#fff", marginRight: "1.6rem", marginTop: "10px"}}
            />
            <div>
              <LocationP>Bangalore, Karnataka</LocationP>
              <LocationP>India</LocationP>
            </div>
          </Location>
          <Phone>
            <LeftContainerH4>
              <FaPhone size={20} style={{color: "#fff", marginRight: "1.6rem"}} />
              9695072068
            </LeftContainerH4>
          </Phone>
          <Email>
            <LeftContainerH4>
              <FaMailBulk
                size={20}
                style={{color: "#fff", marginRight: "1.6rem"}}
              />
              shreeyansh.rawat@gmail.com
            </LeftContainerH4>
          </Email>
        </LeftContainer>
        <RightContainer>
          <RightContainerH4>
            &copy; Shreeyansh 2023, All Rights Reserved
          </RightContainerH4>
          {/* <RightContainerP>
            Drop me an email if you want to connect, or can connect me via
            social handle.
          </RightContainerP> */}
          <Social>
            <Link
              to="https://www.facebook.com/shreeyansh.rawat.1"
              target="_blank"
            >
              <FaFb className="fa-facebook" />
            </Link>
            <Link
              to="https://www.instagram.com/aka.shreeyansh/"
              target="_blank"
            >
              <FaInsta />
            </Link>
            <Link to="https://github.com/shreeyansh-29" target="_blank">
              <FaGit />
            </Link>
            <Link
              to="https://www.linkedin.com/in/shreeyansh-singh-735364210/"
              target="_blank"
            >
              <FaLink />
            </Link>
            <Link to="https://twitter.com/shreeyanshrawat" target="_blank">
              <FaTwit />
            </Link>
          </Social>
        </RightContainer>
      </FooterContainer>
    </Footer>
  );
};

export default FooterSection;
