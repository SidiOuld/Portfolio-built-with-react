import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15%;
  h1 {
    font-size: 3rem;
  }
`;

function Blog() {
  return (
    <Section class="blog-sect1">
      <h1>Coming Soon!!</h1>
    </Section>
  );
}

export default Blog;
