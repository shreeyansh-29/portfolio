import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./sidebarElements";

const SideBar = ({isOpen, toggle}) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to="skills" onClick={toggle}>
              Skills
            </SidebarLink>
            <SidebarLink to="projects" onClick={toggle}>
              Projects
            </SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>
              Contact
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default SideBar;
