import React from "react";

import styled from "styled-components";
import PorjectBtn from "./Buttons/ProjectBtn";
import ContactBtn from "./Buttons/ContactBtn";

const Section = styled.section`
  max-width: 50%;
  margin: 2% auto;
  text-align: left;
  line-height: 1.5em;
  font-size: 1em;
  hr {
    width: 65px;
    margin-bottom: 5%;
  }

  .about__section--animation1 {
    animation-duration: 0.5s;
  }
  .about__section--animation2 {
    animation-duration: 1s;
  }
  .about__section--animation3 {
    animation-duration: 1.5s;
  }
  .about__section--animation4 {
    animation-duration: 2s;
  }
`;

function About() {
  return (
    <>
      <Section className="animated slideInLeft about__section--animation1">
        <h1>About Me</h1>
        <hr class="hr-small" />
        <p className=" animated slideInLeft about__section--animation2">
          By day I'm an energetic support specialist at Fetch Rewards. And by
          night...well, I enjoy working on side projects to explore new design
          styles and coding opportunities.
        </p>
        <br />
        <p className=" animated slideInLeft about__section--animation2">
          Why tech? I 💙 to learn new things and to solve problems. Naturally,
          tech is the perfect place for that. Things are always changing, so
          you'll never run out of opportunities to learn something new!
        </p>
        <br />
        <h3 className=" animated slideInLeft about__section--animation3">
          Skills:
        </h3>
        <p className=" animated slideInLeft about__section--animation3">
          HTML, CSS, CSS-Animations, Flex-Box, CSS-Grid, SASS,
          Styled-components, JavaScript, React, Testing-library/react and
          Jest(unit testing).
        </p>
        <br />
        <h4 className=" animated slideInLeft about__section--animation4">
          Technologies that I'm currently exploring:
        </h4>
        <p className=" animated slideInLeft about__section--animation4">
          Node.js and Python{" "}
        </p>
      </Section>
      <PorjectBtn />
      <ContactBtn />
    </>
  );
}

export default About;
