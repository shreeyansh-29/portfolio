import styled from "styled-components";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export const Footer = styled.div`
  width: 100%;
  padding: 6rem 0;
  background-color: #000;
  ${'' /* height: 800px; */}
`;

export const FooterContainer = styled.div`
  max-width: 1140px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 40px;
  }
`;

export const LeftContainer = styled.div`
  height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const LeftContainerH4 = styled.h4`
  font-size: 1.3rem;
  padding-bottom: 0.7rem;
  color: #fff;

  @media only screen and (max-width: 840px){
  }

  @media only screen and (max-width: 400px){
    font-size: 1rem;
  }
`;

export const Location = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
`;

export const Phone = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
`;

export const Email = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
`;

export const LocationP = styled.p`
  line-height: 30px;
  color: #fff;
  font-size: 1.3rem;
  
  @media only screen and (max-width: 400px){
    font-size: 1rem;
  }
`;

export const RightContainer = styled.div`
  height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Social = styled.div`
  margin-top: 1rem;
`;

export const RightContainerH4 = styled.h4`
  font-size: 1.3rem;
  padding-bottom: 0.7rem;
  color: #fff;
`;

export const RightContainerP = styled.p`
  font-size: 1.2rem;
  color: #fff;
`;

export const FaFb = styled(FaFacebook)`
  font-size: 30px;
  color: #3b5998;
  margin-right: 1rem;

  &:hover {
    transition: 0.4s;
    transform: translatey(-5px);
  }
`;

export const FaInsta = styled(FaInstagram)`
  font-size: 30px;
  color: #c13584;
  margin-right: 1rem;

  &:hover {
    transition: 0.4s;
    transform: translatey(-5px);
  }
`;

export const FaGit = styled(FaGithub)`
  font-size: 30px;
  color: #fff;
  margin-right: 1rem;

  &:hover {
    transition: 0.4s;
    transform: translatey(-5px);
  }
`;

export const FaLink = styled(FaLinkedin)`
  font-size: 30px;
  color: #0A66C2;
  margin-right: 1rem;

  &:hover {
    transition: 0.4s;
    transform: translatey(-5px);
  }
`;

export const FaTwit = styled(FaTwitter)`
  font-size: 30px;
  color: #1da1f2;
  margin-right: 1rem;

  &:hover {
    transition: 0.4s;
    transform: translatey(-5px);
  }
`;
