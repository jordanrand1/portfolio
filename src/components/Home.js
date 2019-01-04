import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import './css/svg_animations.css';
import './css/socialbar.css';
import hero from './images/heroimg.jpg';
import svg from './svg/herodrawing.svg';
import reactlogo from './images/logos/react.png';
import railslogo from './images/logos/rails.png';
import reduxlogo from './images/logos/redux.png';
import jslogo from './images/logos/js.png';
import htmlcsslogo from './images/logos/htmlcss.png';
import gitlogo from './images/logos/git.png';
import djangologo from './images/logos/django.png';


class Home extends React.Component {
render() {
    return (
      <>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Jordan Rand</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" media="screen" href="css/style.css" />
        <link rel="stylesheet" type="text/css" media="screen" href="css/gaming-css.css" />
        <link rel="stylesheet" type="text/css" media="screen" href="css/js-box-thing.css "/>
        <link rel="stylesheet" type="text/css" media="screen" href="css/socialbar.css" />
        <link rel="stylesheet" type="text/css" media="screen" href="svg/sprite_60fps.css" />
        <link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Rock+Salt" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="js/main.js"></script>
        <script id="snapScript" src="../Snap.svg-0.5.1/Snap.svg-0.5.1/dist/snap.svg.js"></script>
    </head>

      <body>

        <header>
            <nav>
                <div className="nav-container">
                    <div className="nav-wrap">
                      <h1 className="nav-logo">The Desert Dev</h1>
                      <a href="https://github.com/jordanrand1" className="github"><i className="fab fa-github-alt"></i></a>
                      <a href="https://twitter.com/thedesertdev" className="twitter"><i className="fab fa-twitter"></i></a>
                      <a href="https://www.linkedin.com/in/jordan-r-a75a85111/" className="linkedin"><i className="fab fa-linkedin"></i></a>
                      <a href="https://www.youtube.com/channel/UCZ6lkfrsS4_vTmVOyHVW9iw" className="youtube"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </nav>
        </header>

        <div>
            <div className="hero-img">
                <img src={hero} alt="bg" width="100%" height="100%" className="hero-bg" style={{position: 'absolute', top: '70', left: '0', zIndex: '-1'}}/>
            </div>
            <img src={svg} alt="Svg" width="100%" height="100%" className="hero-drawing"/>
            <div className="hero-text">
                <h1 style={{fontSize: "26px"}}>Welcome</h1>
                <p style={{fontSize: "24px"}}>My name is Jordan</p>
            </div>
            <div className="hero-triangle">
                <div className="triangle-container">
                    <svg width="100%" height="550">
                        <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 9s 10s infinite linear'}}/>
                        <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 10s 10s infinite linear'}}/>
                        <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 11s 10s infinite linear'}}/>
                        <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 12s 10s infinite linear'}}/>
                        <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 13s 10s infinite linear'}}/>
                        <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 14s 10s infinite linear'}}/>
                        <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 15s 10s infinite linear'}}/>
                        <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 16s 10s infinite linear'}}/>
                        <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 17s 10s infinite linear'}}/>
                        <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 18s 10s infinite linear'}}/>
                        <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 19s 10s reverse infinite linear'}}/>
                        <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 10s 10s reverse infinite linear'}}/>
                        <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 11s 10s reverse infinite linear'}}/>
                        <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 12s 10s reverse infinite linear'}}/>
                        <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 13s 10s reverse infinite linear'}}/>
                        <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 14s 10s reverse infinite linear'}}/>
                        <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 15s 10s reverse infinite linear'}}/>
                        <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 16s 10s reverse infinite linear'}}/>
                        <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 17s 10s reverse infinite linear'}}/>
                        <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 18s 10s reverse infinite linear'}}/>

                        Sorry, your browser does not support inline SVG.
                    </svg>
                </div>
            </div>
        </div>

          <div className="wrapper">
            <h2>Software Developer</h2>
            <p>
                Thanks for checking out my website! I am a software developer in the Salt Lake City area.
                I am currently looking to take on some clients to expand my portfolio so if you have an idea or
                if you or someone you know who is starting a business and needs a website please reach out to me
                via e-mail, twitter, or facebook. 
            </p>

            <h2>Projects</h2>
            <p></p>
          </div>

            <div className="grid2x2">
                <Link to="/bo4companion" className="gbox gbox1"><div>BO4 Companion</div></Link>
                <Link to="/yield" className="gbox gbox2"><div>Yield</div></Link>
                <Link to="/moviedb" className="gbox gbox3"><div>Movie Database App</div></Link>
                <Link to="/flashcard" className="gbox gbox4"><div>Flash Cards (WIP)</div></Link>
            </div>

        <div className="wrapper">

            <h2>Resume</h2>
            <a href={require("./images/JordanRand_Resume.pdf")} download>
              <div className="resume"></div>
            </a>

            <h2>My Skills</h2>
            <div className="skills-container">
                <div className="skill-item">
                    <img src={reactlogo} width="230" height="150"/>
                </div>
                <div className="skill-item">
                    <img src={railslogo} width="300" height="100"/>
                </div>
                <div className="skill-item">
                    <img src={reduxlogo} width="100" height="100"/>
                </div>
                <div className="skill-item">
                    <img src={jslogo} width="100" height="100"/>
                </div>
                <div className="skill-item">
                    <img src={htmlcsslogo} width="250" height="150"/>
                </div>
                <div className="skill-item">
                    <img src={gitlogo} width="100" height="100"/>
                </div>
                <div className="skill-item">
                    <img src={djangologo} width="300" height="200"/>
                </div>
            </div>


          </div>
        </body>
        <footer>
            <div className="footer-container">
                <div className="footer-box">
                    <h2>About</h2>
                    <p style={{color: "#6b6b6b"}}>
                    </p>
                </div>
        
                <div className="footer-box">
                    <h2>Contact</h2>
                    <p style={{color: "#6b6b6b"}}>
                        <a href="mailto:thedesertdev@gmail.com" style={{textDecoration: 'none', color: '#a78240'}}>E-Mail: thedesertdev@gmail.com</a>
                    </p>
                </div>
        
                <div className="footer-box">
                    <h2>Follow Me</h2>
                    <div className="footer-icon-bar">
                      <a href="https://github.com/jordanrand1" className="github"><i className="fab fa-github-alt"></i></a>
                      <a href="https://twitter.com/thedesertdev" className="twitter"><i className="fab fa-twitter"></i></a>
                      <a href="https://www.linkedin.com/in/jordan-r-a75a85111/" className="linkedin"><i className="fab fa-linkedin"></i></a>
                      <a href="https://www.youtube.com/channel/UCZ6lkfrsS4_vTmVOyHVW9iw" className="youtube"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </footer>

      </>
    )
  }
}

export default Home;