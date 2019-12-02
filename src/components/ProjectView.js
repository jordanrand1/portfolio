import React from 'react';
import './css/project_view.css';
import bo4 from './images/projects/bo4.png';
import yieldHome from './images/projects/yield_home.png';
import yieldUsers from './images/projects/yield_users.png';
import yieldEdit from './images/projects/yield_edit.png';
import movie from './images/projects/movie.png';
import movie_view from './images/projects/movie_view.png';
import flashcardHome from './images/projects/flashcard_home.png';
import flashcardView from './images/projects/flashcard_view.png';
import paydrtHome from './images/projects/paydrt_home.png';
import fabriqHome from './images/projects/fabriq_home.png';
import { Link } from 'react-router-dom';

class ProjectView extends React.Component {
  
  state = {
    projectName: '',
    description: '',
    images: [],
    imgNum: 0,
    stack: '',
  }

  componentDidMount () {
    var description = ''
    var projectName = ''
    let stack = ''
    var images = []
    let link = ''
    let learning = ''
    const url = this.props.match.url.split('/')[1]
    switch (url) {
      case 'bo4companion':
        projectName = 'Black Ops 4 Companion'
        images = [bo4]
        link = 'https://bo4companion.netlify.com/'
        description = 'A passion project that allows users to enter in their GamerTag and view their in-game stats. I created a React and React Native application for this project.'
        break
      case 'yield':
        projectName = 'Yield'
        images = [yieldHome, yieldUsers, yieldEdit]
        description = 'A time/money management application for DevPoint Labs. Users can select the projects they are working on and clock in and out. Admins can add projects, users, update users and their timecards as well as view data based on timecard information.'
        break
      case 'moviedb':
        projectName = 'Movie DB App'
        images = [movie, movie_view]
        link = 'https://movie-database-app.netlify.com/'
        learning = 'I learned the basics of using external APIs and improved my front-end React skills by creating more dynamic components.'
        description = 'A one day project to see what I could accomplish with a couple of friends. We used TheMovieDB API to build this simple application to view the most popular movies, tv shows and actors.'
        break
      case 'flashcard':
        projectName = 'Flashcard App'
        images = [flashcardHome, flashcardView]
        description = 'A passion project that will utilize machine learning to maximize learning proficiency.'
        break
      case 'paydrt':
        projectName = 'Paydrt'
        stack = 'Bubble.io, API, Django, Selenium, Javascript'
        images = [paydrtHome]
        link = 'https://paydrt.com'
        learning = 'In this role I learned how to effectively use and read API docs. To make the data useful to the product I was able to learn basic SQL and Django to only use the data that was useful to the product. '
        description = 'A data consolidation tool for bloggers.'
        break
      case 'fabriq':
        projectName = 'FabrIQ'
        stack = 'React, Electron, Django, Redux'
        images = [fabriqHome]
        link = 'https://github.com/jordanrand1/fabriq/releases'
        learning = 'In this role I learned the Electron.js framework. I also took a personal oath to improve my code by writing cleaner, readable code. I also learned of the great benefits of unit testing and how it can result in a more stable product. I spent a large amount of time debugging and researching solutions to technical problems.'
        description = 'A tool to improve the workflow of freelancers and content creators.'
        break
      default: 
        images = []
        description = 'none'
    }
    this.setState({
      projectName,
      description,
      images,
      stack,
      link,
      learning,
    })
  }

  displayControls = () => {
    return(
        <>
          { this.state.imgNum === this.state.images.length - 1 ? 
            <i class="fas fa-angle-left" onClick={ () => this.setState({imgNum: this.state.imgNum - 1}) }></i>
            :
            <>
              { this.state.imgNum === 0 ? 
              <i class="fas fa-angle-right" onClick={ () => this.setState({imgNum: this.state.imgNum + 1}) }></i>
              :
              <>
                <i class="fas fa-angle-left" onClick={ () => this.setState({imgNum: this.state.imgNum - 1}) }></i>
                <i class="fas fa-angle-right" onClick={ () => this.setState({imgNum: this.state.imgNum + 1}) }></i>
              </>
              }
            </>
          }
        </>
    )
  }

  render () {
    return (
      <>
        <Link to="/" className="back-button">Back</Link>
        <div className="devices">
        { this.state.images.length > 1 ? this.displayControls() : <></>}
          <div className="mac">
            <div className="inner-image" style={{backgroundImage: `url(${this.state.images[this.state.imgNum]})`}} ></div>
          </div>
        </div>
        <div className="container">
          <h1 className="title-text">{this.state.projectName} <a href={this.state.link} target="_blank" style={{float: 'right', textDecoration: 'none', color: '#29f3c3'}}>Link to project</a></h1>
          <h3 className="body-text">Stack: {this.state.stack}</h3>
          <h3 className="body-text">Description: <br/> {this.state.description}</h3>
          <h3 className="body-text">New things I learned: <br/> {this.state.learning}</h3>
        </div>
        { this.state.projectName === 'Black Ops 4 Companion' ? 
          <div className="devices">
            <div className="phone">
            </div>
          </div>
          :
          <>
          </>
        }
      </>
    )
  }
}

export default ProjectView;