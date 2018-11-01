import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 25px;
  background-color: black;
  color: white;
  top: 0;
  position: fixed;
  justify-content: space-evenly;
`

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    color: #D4AF37;
  }
`

const Img = styled.div`
  width: 50%;
`

const NavBar = () => (
  <Container>
    <Img></Img>
    <NavItem to="/">Home</NavItem>
    <NavItem to="/about/">About</NavItem>
    <NavItem to="/users/">Users</NavItem>
  </Container>
)

export default NavBar;