import React from "react";
import "../App.css";
import box1Img from "../Images/plante.png";
import box2Img from "../Images/electric.png";
import box3Img from "../Images/todo.png";
import box4Img from "../Images/nasa.png";
import box5Img from "../Images/github-api.png";

import styled from "styled-components";
import ContactBtn from "./Buttons/ContactBtn";

const Container = styled.div``;

function Project() {
  return (
    <Container>
      <section className="projects__container">
        <div className="box ">
          <a href="https://watermyplants-s.netlify.com/" target="_blank">
            <img src={box1Img} className="projects__container--box1 zoom"></img>
          </a>
          <div>
            <a href="https://github.com/SidiOuld/water" target="_blank">
              <i class="fab fa-github zoom-icon"></i>
            </a>
          </div>
        </div>
        <div className="box">
          <a href="https://electric-s.netlify.com/" target="_blank">
            <img
              src={box2Img}
              className="projects__container--box2 zoom "
            ></img>
          </a>
          <div>
            <a href="">
              <i class="fab fa-github zoom-icon" target="_blank"></i>
            </a>
          </div>
        </div>
        <div className="box">
          <a href="https://my-todo-s.netlify.com/" target="_blank">
            <img
              src={box3Img}
              className="projects__container--box3 zoom "
            ></img>
          </a>
          <div>
            <a href="https://github.com/SidiOuld/my" target="_blank">
              <i className="fab fa-github zoom-icon"></i>
            </a>
          </div>
        </div>
        <div className="box">
          <a
            href="https://nasaphoto-s.netlify.com/"
            target="_blank"
            class="box"
          >
            <img
              src={box4Img}
              className="projects__container--box4 zoom "
            ></img>
          </a>
          <div>
            <a href="https://github.com/SidiOuld/nasa-photo" target="_blank">
              <i className="fab fa-github zoom-icon"></i>
            </a>
          </div>
        </div>
        <div className="box">
          <a
            href="https://github-api-s.netlify.com/"
            target="_blank"
            class="box"
          >
            <img
              src={box5Img}
              className="projects__container--box4 zoom "
            ></img>
          </a>
          <div>
            <a href="https://github.com/SidiOuld/GitHub-api" target="_blank">
              <i className="fab fa-github zoom-icon"></i>
            </a>
          </div>
        </div>
      </section>
      <ContactBtn />
    </Container>
  );
}

export default Project;
