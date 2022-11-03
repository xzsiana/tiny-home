import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/"><img src="https://cdn-icons-png.flaticon.com/512/3351/3351414.png" alt="tiny-home"/></Link>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Products">Products</Link>
          <Link to="/AddCart">Add New Items</Link>
          <Link to="/Products"><img src="https://cdn-icons-png.flaticon.com/512/3523/3523865.png" alt="cart" /></Link>
          <button type="button" className="nav-toggle">
          </button>
        </div>

      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #534340;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 80px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: #c5d8a4;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: #c6d9a6;
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
