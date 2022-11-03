import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const WelcomePage = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <h1>Tiny Home</h1>
        <h3>
        We Provide Excellent and On-Trend Products at Affordable Cost. 
        </h3>
        <Link to="/Products" className="btn">
          Shop Now
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

export default WelcomePage;
