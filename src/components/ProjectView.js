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
  }

  render () {
    var innerImage = ''
    const url = this.props.match.url.split('/')[1]
    switch (url) {
      case 'bo4companion':
        innerImage = bo4
        break
      case 'yield':
        innerImage = yieldImg
        break
      case 'moviedb':
        innerImage = movie
        break
      case 'flashcard':
        innerImage = flashCard
        break
      default: 
        innerImage = 'none'
    }
    console.log(innerImage)
    return (
      <>
        <Link to="/" className="back-button">Back</Link>
        <div className="devices">
          <div className="mac">
            <img src={innerImage} className="inner-image"/>
            <h1>{this.state.projectName}</h1>
            <h1>Stack: </h1>
            <h1>About</h1>
          </div>
        </div>
      </>
    )
  }
}

export default ProjectView;