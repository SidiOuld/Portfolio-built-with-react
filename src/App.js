import React from "react";
import "./App.css";
import { NavLink, Route } from "react-router-dom";

import styled from "styled-components";

const NavigationContainer = styled.nav`
  height: 8em;
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
        <NavLink className="header__nav--li" to="/about-us">
          Home
        </NavLink>

        <NavLink className="header__nav--li" to="/about-us">
          About
        </NavLink>

        <NavLink className="header__nav--li" to="/about-us">
          Projects
        </NavLink>

        <NavLink className="header__nav--li" to="/about-us">
          Blogs
        </NavLink>

        <NavLink className="header__nav--li" to="/about-us">
          Contact
        </NavLink>
      </NavigationContainer>
    </div>
  );
}

export default App;
