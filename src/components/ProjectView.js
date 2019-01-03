import React from 'react';
import './css/project_view.css';
import bo4 from './images/projects/bo4.png';
import yieldImg from './images/projects/yield_home.png';
import movie from './images/projects/movie.png';
import flashCard from './images/projects/flashcard_home.png';
import { Link } from 'react-router-dom';

class ProjectView extends React.Component {
  
  state = {
    projectName: '',
    description: '',
    innerImage: '',
  }

  componentDidMount () {
    var innerImage = ''
    var description = ''
    var projectName = ''
    const url = this.props.match.url.split('/')[1]
    switch (url) {
      case 'bo4companion':
        projectName = 'Black Ops 4 Companion'
        innerImage = bo4
        description = 'A passion project that allows users to enter in their GamerTag and view their in-game stats. I created a React and React Native application for this project.'
        break
      case 'yield':
        projectName = 'Yield'
        innerImage = yieldImg
        description = 'A time/money management application for DevPoint Labs. Users can select the projects they are working on and clock in and out. Admins can add projects, users, update users and their timecards as well as view data based on timecard information.'
        break
      case 'moviedb':
        projectName = 'Movie DB App'
        innerImage = movie
        description = 'A one day project to see what I could accomplish with a couple of friends. We used TheMovieDB API to build this simple application to view the most popular movies, tv shows and actors.'
        break
      case 'flashcard':
        projectName = 'Flashcard App'
        innerImage = flashCard
        description = 'A passion project that will utilize machine learning to maximize learning proficiency.'
        break
      default: 
        innerImage = 'none'
        description = 'none'
    }
    this.setState({
      projectName,
      description,
      innerImage,
    })
  }

  render () {
    return (
      <>
        <Link to="/" className="back-button">Back</Link>
        <div className="devices">
          <div className="mac">
            <img src={this.state.innerImage} className="inner-image"/>
          </div>
        </div>
        <div className="container">
          <h1 className="title-text">{this.state.projectName}</h1>
          <h3 className="body-text">Stack: </h3>
          <h3 className="body-text">Description: <br/> {this.state.description}</h3>
        </div>
      </>
    )
  }
}

export default ProjectView;