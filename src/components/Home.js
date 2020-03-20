import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import './css/svg_animations.css';
import './css/socialbar.css';

function Home (props) {

    const [displayGoldNav, setDisplayGoldNav] = useState(true) 

    const isScrolledIntoView = (el) => {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
    
        // Only completely visible elements return true:
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        // Partially visible elements return true:
        //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        return isVisible;
    }

    useEffect(() => {
        const skills = [
            {width: '90%', element: window.document.getElementById('html-progress')},
            {width: '80%', element: window.document.getElementById('javascript-progress')},
            {width: '80%', element: window.document.getElementById('react-progress')},
            {width: '60%', element: window.document.getElementById('django-progress')},
            {width: '50%', element: window.document.getElementById('sql-progress')},
            {width: '70%', element: window.document.getElementById('electron-progress')},
            {width: '75%', element: window.document.getElementById('redux-progress')},
            {width: '80%', element: window.document.getElementById('apis-progress')},

        ]
        window.addEventListener('scroll', event => {
            setDisplayGoldNav(window.scrollY < 2300)
            skills.map((skill) => {
                isScrolledIntoView(skill.element) ? skill.element.style = `width: ${skill.width}` : skill.element.style = 'width: 0%'
            })
        })
        return () => {
            window.removeEventListener("scroll", event => {});
          };
    })

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
                    <div className={ displayGoldNav ? `nav-wrap` : 'nav-wrap blue'}>
                    <h1 className={ displayGoldNav ? `nav-logo` : 'nav-logo blue'}>The Desert Dev</h1>
                    <a href="https://github.com/jordanrand1" className="github"><i className="fab fa-github-alt"></i></a>
                    <a href="https://twitter.com/thedesertdev" className="twitter"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/jordan-r-a75a85111/" className="linkedin"><i className="fab fa-linkedin"></i></a>
                    <a href="https://www.youtube.com/channel/UCZ6lkfrsS4_vTmVOyHVW9iw" className="youtube"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </nav>    
        </header>

        <div className="parallax">
            <div className="hero-text">
                <h1 style={{fontSize: "26px"}}>Welcome</h1>
                <p style={{fontSize: "24px"}}>My name is Jordan</p>
            </div>
        </div>

        <div className="hero-triangle">
            <div className="triangle-container">
                <svg width="100%" height="550">
                    <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 5s 0s infinite linear'}}/>
                    <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 6s 0s infinite linear'}}/>
                    <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 7s 0s infinite linear'}}/>
                    <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 8s 0s infinite linear'}}/>
                    <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 9s 0s infinite linear'}}/>
                    <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 10s 0s infinite linear'}}/>
                    <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 11s 0s infinite linear'}}/>
                    <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 12s 0s infinite linear'}}/>
                    <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 13s 0s infinite linear'}}/>
                    <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 14s 0s infinite linear'}}/>
                    <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 5s 0s reverse infinite linear'}}/>
                    <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 6s 0s reverse infinite linear'}}/>
                    <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 7s 0s reverse infinite linear'}}/>
                    <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 8s 0s reverse infinite linear'}}/>
                    <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 9s 0s reverse infinite linear'}}/>
                    <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 10s 0s reverse infinite linear'}}/>
                    <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 11s 0s reverse infinite linear'}}/>
                    <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 12s 0s reverse infinite linear'}}/>
                    <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 13s 0s reverse infinite linear'}}/>
                    <polygon points="250,50 50,400 450,400" className="triangle" style={{animation: 'spin 14s 0s reverse infinite linear'}}/>

                    Sorry, your browser does not support inline SVG.
                </svg>
            </div>
        </div>

        <div className="wrapper">
            <h2>Software Developer</h2>
            <p>
                Thanks for checking out my website! I am a software developer in the Salt Lake City area.
                I am passionate about many things one of which is my work as a developer. I love creating
                awesome interactions between user and application. I love learning new technology, I have
                been able to learn several Javascript frameworks in the last couple years, my favorite being React,
                but always looking to expand my knowledge.
            </p>
        </div>

        <div className="parallax2"></div>

        <div className="wrapper">
            <h2>Projects</h2>
        </div>
            <div className="project-box">
                <div className="project-item">
                    <img src={require('./images/projects/blerp.PNG')} className="project-image"/>
                    <div onClick={() => props.history.push('/blerp')} className="project-text"><p className="project-text-font">Blerp</p></div>
                </div>
                <div as={Link} to="/fabriq" className="project-item">
                    <img src={require('./images/projects/fabriq_home.png')} className="project-image"/>
                    <div onClick={() => props.history.push('/fabriq')} className="project-text"><p className="project-text-font">Fabriq</p></div>
                </div>
                <div className="project-item">
                    <img src={require('./images/projects/paydrt_home.png')} className="project-image"/>
                    <div onClick={() => props.history.push('/paydrt')} className="project-text"><p className="project-text-font">Paydrt</p></div>
                </div>
                {/* <div className="project-item">
                    <img src={require('./images/projects/movie.png')} className="project-image"/>
                    <div onClick={() => props.history.push('/moviedb')} className="project-text"><p className="project-text-font">Movie DB App</p></div>
                </div> */}
            </div>

        <div className="wrapper">

            <h2 style={{color: '#29f3c3'}}>Resume</h2>
        </div>

        <a href={require("./images/JordanRand_Resume.pdf")} download>
            <div style={{width: '100%'}}>
                <div className="resume"></div>
            </div>
        </a>

        <div className="wrapper">
            <h2 style={{color: '#29f3c3'}}>My Skills</h2>
            <h3>HTML/CSS</h3>
            <div className='skill-progress'>
                <div id='html-progress' className='skill-progress-filled'></div>
            </div>
            <h3>Javascript</h3>
            <div className='skill-progress'>
                <div id='javascript-progress' className='skill-progress-filled'></div>
            </div>
            <h3>React</h3>
            <div className='skill-progress'>
                <div id='react-progress' className='skill-progress-filled'></div>
            </div>
            <h3>Django</h3>
            <div className='skill-progress'>
                <div id='django-progress' className='skill-progress-filled'></div>
            </div>
            <h3>SQL</h3>
            <div className='skill-progress'>
                <div id='sql-progress' className='skill-progress-filled'></div>
            </div>
            <h3>Electron</h3>
            <div className='skill-progress'>
                <div id='electron-progress' className='skill-progress-filled'></div>
            </div>
            <h3>Redux</h3>
            <div className='skill-progress'>
                <div id='redux-progress' className='skill-progress-filled'></div>
            </div>
            <h3>APIs</h3>
            <div className='skill-progress'>
                <div id='apis-progress' className='skill-progress-filled'></div>
            </div>

          </div>
        </body>
        <footer>
            <div className="footer-container">
                <div className="footer-box" >
                    <h2 style={{color: '#29f3c3'}}>About</h2>
                    <p style={{color: '#29f3c3'}}>
                    </p>
                </div>
        
                <div className="footer-box">
                    <h2 style={{color: '#29f3c3'}}>Contact</h2>
                    <p style={{color: '#29f3c3'}}>
                        <a href="mailto:jorrand@gmail.com" style={{textDecoration: 'none', color: '#29f3c3'}}>E-Mail: jorrand@gmail.com</a>
                    </p>
                </div>
        
                <div className="footer-box">
                    <h2 style={{color: '#29f3c3'}}>Follow Me</h2>
                    <div className="footer-icon-bar">
                      <a href="https://github.com/jordanrand1" className="github"><i className="fab fa-github-alt" style={{color: '#29f3c3'}}></i></a>
                      <a href="https://twitter.com/thedesertdev" className="twitter"><i className="fab fa-twitter" style={{color: '#29f3c3'}}></i></a>
                      <a href="https://www.linkedin.com/in/jordan-r-a75a85111/" className="linkedin"><i className="fab fa-linkedin" style={{color: '#29f3c3'}}></i></a>
                      <a href="https://www.youtube.com/channel/UCZ6lkfrsS4_vTmVOyHVW9iw" className="youtube"><i className="fab fa-youtube" style={{color: '#29f3c3'}}></i></a>
                    </div>
                </div>
            </div>
        </footer>

      </>
    )
}

export default Home;