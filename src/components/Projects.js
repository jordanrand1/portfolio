import React from 'react';
import styled from 'styled-components';
import bo4home from '../images/bo4home.jpg';
import yeildhome from '../images/yieldhome.png';
import { Link } from 'react-router-dom';

const Container = styled.div`
background-color: #3c1f4d;
display: flex;
justify-content: space-evenly;
height: 350px;
`

const Bo4 = styled.div`
width: 50%;
background-image: url(${bo4home});
`

const Yield = styled.div`
background-image: url(${yeildhome});
background-repeat: no-repeat;
background-position: center top; 
background-color: #3c1f4d;
width: 50%;
`

const Text = styled(Link)`
display: block;
width: 100%;
height: 100%;
text-align: center;
text-decoration: none;
color: rgba(0,0,0,0);
line-height: 350px;
font-size: 30px;
background-color: rgba(0,0,0,0.0);
transition: 1s ease-in-out;

&:hover {
  color: white;
  background-color: rgba(0,0,0,0.7);
}
`

const Projects = () => (
  <Container>
    <Bo4><Text to="/">Black Ops 4 Companion</Text></Bo4>
    <Yield><Text to="/">Yield</Text></Yield>
  </Container>
)

export default Projects;