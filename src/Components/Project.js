import React from "react";
import "../App.css";
import styled from "styled-components";

//components
import ContactBtn from "./Buttons/ContactBtn";

//bg imgs
import box1Img from "../Images/plante.png";
import box2Img from "../Images/electric.png";
// import box3Img from "../Images/support.png";
import box4Img from "../Images/nasa.png";
import box5Img from "../Images/github-api.png";
import box6Img from "../Images/todo-app-context.png";
import box7Img from "../Images/quote.png";

const Container = styled.div`
  .box {
    height: 350px;
    // border: 2px solid black;
    margin: 5px;

    border-radius: 5px;
    margin: auto;
    margin-bottom: 15px;
    background: #fff;
    padding: 25px 25px;
    border: 1px solid #f0f1f4;
    // div {
    //   height: 50%;
    // }
    .one {
      // background: red;
      // width: 100%;
      // height: 50%;
      // margin-top: -60px;
      // margin-bottom: 60px;
    }
    .two {
      // border: 2px solid black;
      // background: blue;
    }
    .two-one {
      width: 300px;
      // background: red;
      margin-top: 20px;
    }
  }
`;

function Project() {
  return (
    <Container>
      <section className="projects__container">
        <div className="box">
          <div className="one">
            <a href="https://electric-s.netlify.com/" target="_blank">
              <img
                src={box2Img}
                alt=""
                className="projects__container--box1 zoom "
              ></img>
            </a>
          </div>

          <div className="two">
            <a href="https://github.com/SidiOuld/electric" target="_blank">
              <i class="fab fa-github zoom-icon"></i>
            </a>
            <div className="two-one">
              <p>
                A simple website built to practice web responsive principles.
                <br /> <b>Tools used:</b> HTML, CSS, JavaScript.
              </p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="one">
            <a href="https://random-quote-gen-s.netlify.app/" target="_blank">
              <img
                src={box7Img}
                alt=""
                className="projects__container--box2 zoom "
              ></img>
            </a>
          </div>
          <div className="two">
            <a
              href="https://github.com/SidiOuld/Random-Quote-Generator"
              target="_blank"
            >
              <i class="fab fa-github zoom-icon" target="_blank"></i>
            </a>
            <div className="two-one">
              <p>
                This web App fetches random quotes from quotabe's API.
                <br /> <b>Tools used:</b> Axios, React, JSX.
              </p>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="one">
            <a href="https://nasaphoto-s.netlify.com/" target="_blank">
              <img
                src={box4Img}
                alt=""
                className="projects__container--box4 zoom "
              ></img>
            </a>
          </div>
          <div className="two">
            <a href="https://github.com/SidiOuld/nasa-photo" target="_blank">
              <i className="fab fa-github zoom-icon"></i>
            </a>
            <div className="two-one">
              <p>
                This Web App performs a GET request using axios to render the
                Nasa photo of the day.
                <br /> <b>Tools used:</b> React, JSX, Axios Nasa API.
              </p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="one">
            <a href="https://github-api-s.netlify.com/" target="_blank">
              <img
                src={box5Img}
                alt=""
                className="projects__container--box4 zoom "
              ></img>
            </a>
          </div>
          <div className="two">
            <a href="https://github.com/SidiOuld/GitHub-api" target="_blank">
              <i className="fab fa-github zoom-icon"></i>
            </a>
            <div className="two-one">
              <p>
                This Web App performs a GET request using axios to render a
                github user's profile.
                <br /> <b>Tools used:</b> React, JSX, Axios, GitHub's API.
              </p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="one">
            <a href="https://todo-app-usecontext.netlify.com/" target="_blank">
              <img
                src={box6Img}
                alt=""
                className="projects__container--box4 zoom "
              ></img>
            </a>
          </div>
          <div className="two">
            <a
              href="https://github.com/SidiOuld/Todo-App-useContext"
              target="_blank"
            >
              <i className="fab fa-github zoom-icon"></i>
            </a>
            <div className="two-one">
              <p>
                A simple note-taking web app where you can create, edit, and
                delete notes.
                <br /> <b>Tools used:</b> HTML, CSS, React, JSX.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactBtn />
    </Container>
  );
}

export default Project;
