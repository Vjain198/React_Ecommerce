import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "../Navbar";

const Header = () => {
  const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .logo {
      height: 25rem;
      width: 25rem;
    }
  `;
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" alt="logo" className="logo" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

export default Header;
