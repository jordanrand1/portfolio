import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
  height: 80vh;
  background-color: #282828;
  margin-top: 10vh;
  padding-top: 30px;
  background-image: src('../images/hero.gif')
`

const Hero = () => (
  <Image>
    Test
  </Image>
)

export default Hero;