import React from 'react';
import styled from 'styled-components';
import hero from '../images/hero.gif';

const Image = styled.div`
  height: 80vh;
  background-image: url(${hero});
  background-color: #282828;
  margin-top: 10vh;
  padding-top: 30px;
`

const Hero = () => (
  <Image>
    Test
  </Image>
)

export default Hero;