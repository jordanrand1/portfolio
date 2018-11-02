import React from 'react';
import { Styled } from 'styled-components';
import Hero from './Hero';
import Projects from './Projects';
import HomeAbout from './HomeAbout';


class Home extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <Projects history={this.props.history}/>
        <HomeAbout />
      </>
    )
  }
}

export default Home;