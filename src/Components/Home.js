import React from "react";
import { NavLink, Route } from "react-router-dom";

import styled from "styled-components";
import PorjectBtn from "./Buttons/ProjectBtn";
import ContactBtn from "./Buttons/ContactBtn";

const Container = styled.section`
  .home__section--one {
    display: flex;
    justify-content: center;
    justify-items: center;
    text-align: center;
    font-size: 3em;
    background: red;
    margin: 7% 0;
    color: red;
  }
  .home__section--two {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-top: 2px solid black;
    border-bottom: 1px solid black;
    padding: 15px;
    font-size: 1.1em;
  }
  .home__section--two {
    color: rgb(0, 174, 255);
  }
`;

function Home() {
  return (
    <>
      <Container className="home__section--one">
        <h1>Hi I'm Sid..</h1>
        <h3>I'm passionate about clean and minimalism design!!</h3>
      </Container>
      <Container className="home__section--two">
        <a href="https://github.com/SidiOuld?tab=repositories" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/sidi-ould-9b142665/"
          target="="
          _blank
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/sidiould01" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fab fa-codepen"></i>
        </a>
      </Container>
      <PorjectBtn />
      <ContactBtn />
    </>
  );
}

export default Home;
