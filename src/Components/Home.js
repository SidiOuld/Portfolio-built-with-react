import React from "react";

import styled from "styled-components";
import PorjectBtn from "./Buttons/ProjectBtn";
import ContactBtn from "./Buttons/ContactBtn";

const Container = styled.section`
  .home__sectionOne {
    justify-content: center;
    justify-items: center;
    text-align: center;
    margin: 0 0 2% 0;
    margin-top: 5%;
    .home__sectionOne--h1 {
      font-size: 5em;
      .inline {
        display: inline;
      }
    }
    .home__sectionOne--h3 {
      font-size: 2em;
    }
  }
  .home__sectionTwo {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-top: 2px solid black;
    border-bottom: 1px solid black;
    padding: 15px;
    margin: 5% 0;
    font-size: 1.1em;
    .fab {
      color: black;
    }
  }
  .fab:hover {
    color: rgb(0, 174, 255);
  }
`;

function Home() {
  return (
    <>
      <Container>
        <div className="home__sectionOne">
          <h1 className="home__sectionOne--h1 animated heartBeat delay-2s">
            👋🏼 I'm Sidi!
          </h1>

          <h2 className="home__sectionOne--h3">
            I build things for the web! Feel free to take a look around.
          </h2>
        </div>
        <div className="home__sectionTwo">
          <a
            href="https://github.com/SidiOuld?tab=repositories"
            target="_blank"
          >
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
          <a href="https://codesandbox.io/dashboard/recent" target="_blank">
            <i class="fab fa-codepen"></i>
          </a>
        </div>
      </Container>
      <PorjectBtn />
      <ContactBtn />
    </>
  );
}

export default Home;
