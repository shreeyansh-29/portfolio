import styled from "styled-components";

export const Experience = styled.div`
  height: 800px;
  background-color: #000;
  ${
    "" /* display: flex;
  flex-direction: column; */
  }
  @media screen and (max-width: 1040px) {
    height: 900px;
  }
  @media screen and (max-width: 992px) {
    height: 800px;
  }
  @media screen and (max-width: 890px) {
    height: 740px;
  }
  @media screen and (max-width: 790px) {
    height: 800px;
  }
  ${
    "" /* @media screen and (max-width: 694px) {
    height: 820px;
  } */
  }
  @media screen and (max-width: 640px) {
    height: 1000px;
  }

  @media screen and (max-width: 480px) {
    height: 1050px;
  }
  @media screen and (max-width: 400px){
    height: 1100px;
  }
`;

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* background-color: red; */}
  width: 100%;
  height: 100%;
  padding: 40px 3rem;
  @media screen and (max-width: 1040px) {
    padding: 40px 2rem;
  }
`;

export const ParentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    height: 80%;
  }
  ${"" /* background-color: lightblue; */}
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  ${'' /* background-color: yellow; */}

  @media screen and (max-width: 1000px) {
    height: 30%;
    align-items: flex-start;
  }

  @media screen and (max-width: 768px) {
    height: 30%;
    align-items: flex-start;
  }

  @media screen and (max-width: 640px) {
    height: 30%;
    align-items: flex-start;
  }

  @media screen and (max-width: 480px) {
    height: 20%;
    align-items: flex-start;
  }
`;

export const LeftSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeftSectionHeading = styled.h1`
  color: #fff;
  font-size: 1.1rem;

  @media screen and (max-width:640px) {
    font-size: 1rem; 
  }
`;

export const LeftSectionH1 = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 14px 0;

  @media screen and (max-width:640px) {
    font-size: 1.4rem; 
  }

  @media screen and (max-width: 480px){
    margin: 10px 0;
    font-size: 1.3rem; 
  }
`;

export const LeftSectionP = styled.p`
  color: #fff;
  max-width: 500px;

  @media screen and (max-width: 890px) {
    max-width: 100%;
  }
  @media screen and (max-width: 480px){
    font-size: 0.8rem;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  ${'' /* background: lightgreen; */}

  @media screen and (max-width: 890px) {
    height: 70%;
    ${"" /* justify-content: flex-start; */}
  }

  @media screen and (max-width: 768px) {
    height: 70%;
    ${"" /* justify-content: flex-start; */}
  }

  @media screen and (max-width: 640px) {
    height: 80%;
    ${"" /* justify-content: flex-start; */}
  }
`;

export const RightSectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  justify-self: center;

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  transition: all 0.3s ease-in-out;
  background: #f2f2f2;
  border-radius: 3px;
  position: relative;
  border: 1px solid #f2f2f2;

  &:hover {
    border: 1px solid #f2f2f2;
    background: #fff;
    box-shadow: 0px 10px 20px #01bf71;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const RightSectionH3 = styled.h3`
  font-size: 1rem;
  padding: 8px 0;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const RightSectionP = styled.p`
  font-size: 1rem;

  @media screen and (max-width: 992px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const SkillsContainer = styled.div`
  ${"" /* margin: 0 auto; */}
  ${"" /* max-width: 1200px; */}
  ${'' /* background-color: blue; */}
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 640px){
    height: 20%; 
  }
`;
export const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 80px);
  ${'' /* background-color: pink; */}
  justify-items: center;
  align-items: center;

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(4, 80px);
  }
`;
