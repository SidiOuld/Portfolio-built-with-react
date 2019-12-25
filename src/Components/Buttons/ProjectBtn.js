import React from "react";

import styled from "styled-components";

const Button = styled.button`
  border: 1px solid rgb(180, 178, 178);
  padding: 20px 30px;
  margin: 10px;
  border-radius: 5px;
  color: rgb(0, 174, 255);
  text-align: center;
  :hover {
    background: rgb(0, 174, 255);
    color: white;
  }
`;

function ProjectBtn() {
  return <Button className="animated slideInUp ">My projects</Button>;
}

export default ProjectBtn;
