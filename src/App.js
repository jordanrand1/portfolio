import React from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {

  render() {
    return(
      <Router>
        <>
        <NavBar />
        <Route path="/" exact component={Home} />
        </>
      </Router>
    )
  }
}

export default App;