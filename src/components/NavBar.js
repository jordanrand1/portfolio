import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 30px;
  background-color: black;
  color: white;
  top: 0;
  position: fixed;
`

const Img = styled.div`
  flex-grow: 4;
  flex: 1;
`

const NavBar = () => (
  <Container>
    Test
  </Container>
)

export default NavBar;