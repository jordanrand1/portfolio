import React from 'react';
import './css/project_view.css';
import bo4 from './images/projects/bo4.png';
import bo4Mobile from './images/projects/bo4companion_mobile.jpg';
import yieldHome from './images/projects/yield_home.png';
import yieldUsers from './images/projects/yield_users.png';
import yieldEdit from './images/projects/yield_edit.png';
import movie from './images/projects/movie.png';
import movie_view from './images/projects/movie_view.png';
import flashcardHome from './images/projects/flashcard_home.png';
import flashcardView from './images/projects/flashcard_view.png';
import { Link } from 'react-router-dom';

class ProjectView extends React.Component {
  
  state = {
    projectName: '',
    description: '',
    images: [],
    imgNum: 0,
  }

  componentDidMount () {
    var innerImage = ''
    var description = ''
    var projectName = ''
    var images = []
    const url = this.props.match.url.split('/')[1]
    switch (url) {
      case 'bo4companion':
        projectName = 'Black Ops 4 Companion'
        images = [bo4]
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
        description = 'A one day project to see what I could accomplish with a couple of friends. We used TheMovieDB API to build this simple application to view the most popular movies, tv shows and actors.'
        break
      case 'flashcard':
        projectName = 'Flashcard App'
        images = [flashcardHome, flashcardView]
        description = 'A passion project that will utilize machine learning to maximize learning proficiency.'
        break
      default: 
        innerImage = 'none'
        description = 'none'
    }
    this.setState({
      projectName,
      description,
      images,
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
            <img src={this.state.images[this.state.imgNum]} className="inner-image"/>
          </div>
        </div>
        <div className="container">
          <h1 className="title-text">{this.state.projectName}</h1>
          <h3 className="body-text">Stack: </h3>
          <h3 className="body-text">Description: <br/> {this.state.description}</h3>
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