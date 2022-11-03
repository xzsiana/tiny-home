import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <h1>About Pge</h1>
        <h3>
          Oops.. It looks like the page you're looking for does not exist.
        </h3>
        <Link to="/" className="btn">
          Back to home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default AboutPage;
