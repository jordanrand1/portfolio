import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {

  render() {
    return(
      <Router>
        <>
        <Route path="/" exact component={Home} />
        </>
      </Router>
    )
  }
}

export default App;