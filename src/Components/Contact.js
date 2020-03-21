import React from "react";

import styled from "styled-components";
import ContactBtn from "./Buttons/ContactBtn";

const Container = styled.div`
  .contact-sect1 {
    min-width: 100px;
    max-width: 500px;
    margin: 5% auto;
    text-align: left;
  }
  .contact-sect1 hr {
    width: 63px;
  }
  input {
    border: none;
    margin-top: 5%;
  }

  form button {
    padding: 5px 15px;
    border-radius: 5px;
    border: 1px solid black;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  textarea:focus,
  input:focus {
    outline: none;
    width: 100%;
  }

  textarea {
    margin-top: 5%;
    border: 1px solid rgb(184, 173, 173);
    width: 100%;
  }

  form hr {
    min-width: 100%;
  }

  button {
    border: 1px solid rgb(180, 178, 178);
    padding: 20px 30px;
    margin: 10px;
    border-radius: 5px;
    background: rgb(0, 174, 255);
    color: white;
    font-size: 100%;
    :hover {
      background: white;
      color: rgb(0, 174, 255);
    }
  }
  h3 {
    text-align: left;
  }
`;

function Contact() {
  return (
    <Container>
      <section class="contact-sect1">
        <h1 className="animated slideInLeft">Send me a message ..</h1>
        <hr class="hr-small" />

        <form name="contact" method="POST" data-netlify="true">
          <input type="text" placeholder="Full name" />
          <hr />
          <input type="text" placeholder="Email address" />
          <hr />
          <textarea
            name="Message"
            placeholder="Message:"
            id=""
            rows="10"
          ></textarea>
          <br />
        </form>
      </section>
      <ContactBtn />
      <h3>
        This page is under <i class="fas fa-wrench"></i>
      </h3>
    </Container>
  );
}

export default Contact;
