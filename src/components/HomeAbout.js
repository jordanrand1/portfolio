import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color: #282828;
display: flex;
justify-content: space-evenly;
height: 350px;
`

const Picture = styled.div`
width: 50%;
background-image: url();
`

const Text = styled.div`
width: 50%;
height: 100%;
color: #D4AF37;
`

const HomeAbout = () => (
  <Container>
    <Picture></Picture>
    <Text>Hobbies</Text>
  </Container>
)

export default HomeAbout;