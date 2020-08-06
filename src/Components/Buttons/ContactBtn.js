import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import animate from "animate.css";

const Button = styled.button`
  border: 1px solid rgb(180, 178, 178);
  padding: 20px 30px;
  margin: 10px;
  border-radius: 5px;
  background: rgb(0, 174, 255);
  color: white;
  font-size: 100%;
  :hover {
    cursor: pointer;
    background: white;
    color: rgb(0, 174, 255);
    animation: btn-two 2s ease;
  }
`;

function ContactBtn() {
  return (
    <NavLink to="/contact">
      <Button className="btn-two " type="submit">
        Get in touch!
      </Button>
    </NavLink>
  );
}

export default ContactBtn;
