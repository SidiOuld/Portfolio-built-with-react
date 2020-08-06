import React from "react";
import "./App.css";
import { NavLink, Route } from "react-router-dom";

import styled from "styled-components";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";

const NavigationContainer = styled.nav`
  height: 6em;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  .header__nav--li {
    list-style: none;
    text-decoration: none;
  }
  /* Sweep To Right */
  .hvr-sweep-to-right {
    color: black;
    padding: 10px;
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
  .hvr-sweep-to-right:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(0, 174, 255);
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-sweep-to-right:hover,
  .hvr-sweep-to-right:focus,
  .hvr-sweep-to-right:active {
    color: white;
  }
  .hvr-sweep-to-right:hover:before,
  .hvr-sweep-to-right:focus:before,
  .hvr-sweep-to-right:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`;

function App() {
  return (
    <div className="App">
      <NavigationContainer className="header__nav">
        <NavLink className="header__nav--li hvr-sweep-to-right" to="/">
          Home
        </NavLink>

        <NavLink className="header__nav--li hvr-sweep-to-right" to="/about">
          About
        </NavLink>

        <NavLink className="header__nav--li hvr-sweep-to-right" to="/projects">
          Projects
        </NavLink>

        <NavLink className="header__nav--li hvr-sweep-to-right" to="/blog">
          Blogs
        </NavLink>

        <NavLink className="header__nav--li hvr-sweep-to-right" to="/contact">
          Contact
        </NavLink>
      </NavigationContainer>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
        {/* <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/sign-in" component={SignInPage} />
        <Route exact path="/sign-up" component={SignUpPage} /> */}
      </div>
    </div>
  );
}

export default App;
