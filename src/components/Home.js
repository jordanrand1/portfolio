import React from 'react';
import { Styled } from 'styled-components';
import Hero from './Hero';
import Projects from './Projects';


class Home extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <Projects /> 
      </>
    )
  }
}

export default Home;