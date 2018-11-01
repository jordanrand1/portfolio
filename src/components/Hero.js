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

const Text = styled.div`
  height: 100%;
  line-height: 400px;
  text-align: center;
  font-size: 40px;
  color: white;
`

const Hero = () => (
  <Image>
    <Text>Welcome</Text>
  </Image>
)

export default Hero;