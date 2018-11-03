import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color: #181818;
display: flex;
justify-content: space-evenly;
height: 350px;
`

const Picture = styled.div`
width: 50%;
background-image: url();
`

const List = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
width: 50%;
height: 100%;
color: #D4AF37;
text-align: center;
font-size: 25px;
list-style-type: none;
`

const ListItem = styled.div`
color: #D4AF37;
text-align: center;
height: 33%;
border: 2px solid white;
width: 32%;
font-size: 20px;
list-style-type: none;
transition: 2s ease-in-out;

&:hover{
  width: 100%;
  height: 100%;
}
`

const HomeAbout = () => (
  <Container>
    <Picture></Picture>
    <List>
      <ListItem>Spikeball</ListItem>
      <ListItem>Coding</ListItem>
      <ListItem>Video Games</ListItem>
      <ListItem>Ultimate Frisbee</ListItem>
      <ListItem>Watching Movies</ListItem>
      <ListItem>Videography</ListItem>
      <ListItem>Eating</ListItem>
      <ListItem>Racquetball</ListItem>
      <ListItem>YouTube</ListItem>
    </List>
  </Container>
)

export default HomeAbout;