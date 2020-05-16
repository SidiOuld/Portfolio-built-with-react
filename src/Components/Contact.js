import React from "react";

import styled from "styled-components";
import ContactBtn from "./Buttons/ContactBtn";

const Container = styled.div`
  .contact-sect1 {
    min-width: 100px;
    max-width: 50%;
    margin: 3% auto;
    margin-bottom: 1%;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 19pt;
    font-weight: 300;
    line-height: 1.75em;
  }

  // form
  form {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  /* input,
  textarea {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
  } */

  /* Basic */

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  input,
  textarea {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 19pt;
    font-weight: 300;
    line-height: 1.75em;
    color: #888;
  }

  /* Row */

  .row {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    align-items: stretch;
  }

  .row > * {
    box-sizing: border-box;
  }

  .row > .col-6 {
    width: 50%;
  }

  .row > .col-12 {
    width: 100%;
  }

  .row {
    margin-top: -40px;
    margin-left: -40px;
  }

  .row > * {
    padding: 40px 0 0 40px;
  }

  @media screen and (min-width: 961px) and (max-width: 1880px) {
    .row {
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      align-items: stretch;
    }

    .row > * {
      box-sizing: border-box;
    }

    .row > .col-6-wide {
      width: 50%;
    }

    .row > .col-12-wide {
      width: 100%;
    }

    .row {
      margin-top: -40px;
      margin-left: -40px;
    }

    .row > * {
      padding: 40px 0 0 40px;
    }
  }

  @media screen and (min-width: 961px) and (max-width: 1620px) {
    .row {
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      align-items: stretch;
    }

    .row > * {
      box-sizing: border-box;
    }

    .row > .col-6-normal {
      width: 50%;
    }

    .row > .col-12-normal {
      width: 100%;
    }

    .row {
      margin-top: -40px;
      margin-left: -40px;
    }

    .row > * {
      padding: 40px 0 0 40px;
    }
  }

  @media screen and (min-width: 961px) and (max-width: 1320px) {
    .row {
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      align-items: stretch;
    }

    .row > * {
      box-sizing: border-box;
    }

    .row > .col-1-narrow {
      width: 8.33333%;
    }

    .row > .col-6-narrow {
      width: 50%;
    }

    .row > .col-12-narrow {
      width: 100%;
    }

    .row {
      margin-top: -20px;
      margin-left: -20px;
    }

    .row > * {
      padding: 20px 0 0 20px;
    }
  }

  @media screen and (max-width: 960px) {
    .row {
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      align-items: stretch;
    }

    .row > * {
      box-sizing: border-box;
    }

    .row > .col-1-narrower {
      width: 8.33333%;
    }

    .row > .col-6-narrower {
      width: 50%;
    }

    .row > .col-12-narrower {
      width: 100%;
    }

    .row {
      margin-top: -20px;
      margin-left: -20px;
    }

    .row > * {
      padding: 20px 0 0 20px;
    }
  }

  @media screen and (max-width: 736px) {
    .row {
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      align-items: stretch;
    }

    .row > * {
      box-sizing: border-box;
    }

    .row > .col-6-mobile {
      width: 50%;
    }

    .row > .col-12-mobile {
      width: 100%;
    }

    .row {
      margin-top: -20px;
      margin-left: -20px;
    }

    .row > * {
      padding: 20px 0 0 20px;
    }
  }

  /* Form */

  form label {
    display: block;
    text-align: left;
    margin-bottom: 0.5em;
  }

  form input[type="text"],
  form input[type="email"],
  form input[type="password"],
  form select,
  form textarea {
    position: relative;
    -webkit-appearance: none;
    display: block;
    border: 0;
    outline: 0;
    background: #fff;
    background: rgba(255, 255, 255, 0.75);
    width: 100%;
    border-radius: 0.35em;
    padding: 0.75em 1em 0.75em 1em;
    box-shadow: inset 0 0.1em 0.1em 0 rgba(0, 0, 0, 0.05);
    border: solid 1px rgba(0, 0, 0, 0.15);
    -moz-transition: all 0.35s ease-in-out;
    -webkit-transition: all 0.35s ease-in-out;
    -ms-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
  }

  form input[type="text"]:focus,
  form input[type="email"]:focus,
  form input[type="password"]:focus,
  form select:focus,
  form textarea:focus {
    box-shadow: 0 0 2px 1px #8ebebc;
    background: #fff;
  }

  form input[type="text"],
  form input[type="email"],
  form input[type="password"],
  form select {
    line-height: 1.25em;
  }

  form textarea {
    min-height: 14em;
  }

  form ::-webkit-input-placeholder {
    color: #555 !important;
  }

  form :-moz-placeholder {
    color: #555 !important;
  }

  form ::-moz-placeholder {
    color: #555 !important;
  }

  form :-ms-input-placeholder {
    color: #555 !important;
  }

  form ::-moz-focus-inner {
    border: 0;
  }

  /* Wide */

  @media screen and (min-width: 961px) and (max-width: 1880px) {
    /* Basic */
    input,
    textarea {
      font-size: 17pt;
    }
  }

  /* Nor

  /* Narrow */

  @media screen and (min-width: 961px) and (max-width: 1320px) {
    /* Basic */
    input,
    textarea {
      font-size: 16pt;
    }
  }

  @media screen and (max-width: 960px) {
    /* Basic */

    input,
    textarea {
      font-size: 16pt;
    }

    /* Mobile */

    @media screen and (max-width: 736px) {
      /* Basic */

      input,
      textarea {
        font-size: 14pt;
      }
    }
  }
`;

function Contact() {
  return (
    <Container>
      <section class="contact-sect1">
        <form method="post" action="#">
          <div class="row">
            <div class="col-6 col-12-mobile">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div class="col-6 col-12-mobile">
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div class="col-12">
              <textarea name="message" placeholder="Message" />
            </div>
            <div class="col-12">
              <ContactBtn />
            </div>
          </div>
        </form>
      </section>
      <h3>
        This page is under <i class="fas fa-wrench"></i>
      </h3>
    </Container>
  );
}

export default Contact;
