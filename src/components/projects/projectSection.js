import {Link} from "react-router-dom";
import styled from "styled-components";
import {motion} from "framer-motion";

export const ProjectSection = styled.div`
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const ProjectsH1 = styled.h1`
  margin: 2rem auto;
  color: #fff;
  font-size: 2.2rem;
  font-weight: 900;
`;

export const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  padding: 40px 3rem;

  @media only screen and (max-width: 1040px) {
    padding: 40px 2rem;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
  }
`;

export const LeftSection = styled(motion.div)`
  width: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  ${'' /* background-color: red; */}

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 40px 0;
  }
`;

export const LeftSectionH1 = styled.h1`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 900;
  ${"" /* margin: 30px 0; */}
  text-align: center;
`;

export const LeftSectionTechStack = styled.h2`
  font-size: 1.4rem;
  color: #01bf71;
  margin: 12px 0;
`;

export const LeftSectionP = styled.p`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 20px 0;
  max-width: 600px;
`;

export const LeftSectionButton = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const LeftSectionLink = styled(Link)`
  border-radius: 2px;
  background: ${({primary}) => (primary ? "#01BF71" : "#010606")};
  white-space: nowrap;
  padding: ${({big}) => (big ? "14px 48px" : "12px 30px")};
  color: ${({dark}) => (dark ? "#fff" : "#fff")};
  font-size: ${({fontBig}) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 2px solid #01bf71;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? "#fff" : "#01BF71")};
    color: #01bf71;
    border: 2px solid #01bf71;
  }
`;

export const RightSection = styled(motion.div)`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  object-fit: contain;
  width: 50%;
  ${'' /* background: blue; */}
  height: 400px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    overflow: visible;
  }
`;

export const RightSectionImg = styled.img`
  width: 80%;

  @media only screen and (max-width: 600px) {
    /* width: 50%; */
    /* width: 100%; */
    flex: 1;
    width: 100%;
    height: 80%;
  }
`;
