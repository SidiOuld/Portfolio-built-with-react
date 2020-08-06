import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const Button = styled.button`
  border: 1px solid rgb(180, 178, 178);
  padding: 20px 30px;
  margin: 10px;
  border-radius: 5px;
  color: rgb(0, 174, 255);
  font-size: 100%;
  background: white;
  :hover {
    cursor: pointer;
    background: rgb(0, 174, 255);
    color: white;
    animation: btn-one 2s ease;
  }
`;

function ProjectBtn() {
  return (
    // <NavLink to="/projects">
    //   <Button className="btn-one ">My projects</Button>
    // </NavLink>
    <a href="/projects">
      <Button className="btn-one ">My projects</Button>
    </a>
  );
}

export default ProjectBtn;
