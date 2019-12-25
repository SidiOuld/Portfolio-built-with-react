import React from "react";

import styled from "styled-components";
import animate from "animate.css";

const Button = styled.button`
  border: 1px solid rgb(180, 178, 178);
  padding: 20px 30px;
  margin: 10px;
  border-radius: 5px;
  background: rgb(0, 174, 255);
  color: white;
  :hover {
    background: white;
    color: rgb(0, 174, 255);
  }
`;

function ContactBtn() {
  return <Button className="animated slideInUp">Get in touch!</Button>;
}

export default ContactBtn;
