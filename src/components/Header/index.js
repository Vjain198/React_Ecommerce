import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from '../Navbar'

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
      height: 5rem;
    }
  `
  return (
    <MainHeader>
      <NavLink to='/'>
        <img src='./images/logo.png' alt='logo' />
      </NavLink>
      <NavBar />
    </MainHeader>
  )
}

export default Header
