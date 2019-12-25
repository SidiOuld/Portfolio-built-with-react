import React from "react";
import "./App.css";
import { NavLink, Route } from "react-router-dom";

import styled from "styled-components";
import Home from "./Components/Home";
import About from "./Components/About";

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
`;

function App() {
  return (
    <div className="App">
      <NavigationContainer className="header__nav">
        <NavLink className="header__nav--li" to="/">
          Home
        </NavLink>

        <NavLink className="header__nav--li" to="/about">
          About
        </NavLink>

        <NavLink className="header__nav--li" to="/projects">
          Projects
        </NavLink>

        <NavLink className="header__nav--li" to="/blog">
          Blogs
        </NavLink>

        <NavLink className="header__nav--li" to="/contact">
          Contact
        </NavLink>
      </NavigationContainer>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/sign-in" component={SignInPage} />
        <Route exact path="/sign-up" component={SignUpPage} /> */}
      </div>
    </div>
  );
}

export default App;
