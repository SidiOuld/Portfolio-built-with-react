import React from "react";
import "../App.css";
import box1Img from "../Images/plante.png";
import box2Img from "../Images/electric.png";
import box3Img from "../Images/todo.png";
import box4Img from "../Images/nasa.png";

import styled from "styled-components";
import ContactBtn from "./Buttons/ContactBtn";

const Container = styled.div`
  .projects__container--box1 {
    height: 200px;
    width: 300px;
    display: flex;
    // background-image: url({box1Img});
    // background-position: center;
    // background-size: 100% 100%;
    // background-repeat: no-repeat;
    margin: 10px;
    -webkit-box-shadow: -1px 1px 13px 3px rgba(0, 0, 0, 0.66);
    box-shadow: -1px 1px 13px 3px rgba(0, 0, 0, 0.66);
  }
`;

const Box1Style = {
  backgroundImage: `url({box1Img})`,
  border: "2px solid red"
};

function Project() {
  return (
    <Container>
      <section class="projects__container">
        <div class="box ">
          <a href="https://watermyplants-s.netlify.com/" target="_blank">
            {/* <div class="projects__container--box1 zoom"></div> */}
            <img
              src={box1Img}
              className="projects__container--box1 zoom "
            ></img>
          </a>
          <div>
            <a href="https://github.com/SidiOuld/water" target="_blank">
              <i class="fab fa-github zoom-icon"></i>
            </a>
          </div>
        </div>
        <div class="box">
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
        <div class="box">
          <a href="https://my-todo-s.netlify.com/" target="_blank">
            <img
              src={box3Img}
              className="projects__container--box3 zoom "
            ></img>
          </a>
          <div>
            <a href="https://github.com/SidiOuld/my" target="_blank">
              <i class="fab fa-github zoom-icon"></i>
            </a>
          </div>
        </div>
        <div class="box">
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
              <i class="fab fa-github zoom-icon"></i>
            </a>
          </div>
        </div>
      </section>
      <ContactBtn />
    </Container>
  );
}

export default Project;
