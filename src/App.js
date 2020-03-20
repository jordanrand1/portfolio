import React from 'react';
import Home from './components/Home';
import ProjectView from './components/ProjectView';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {

  render() {
    return(
      <Router>
        <>
        <Route path="/" exact component={Home} />
        <Route path="/bo4companion" exact component={ProjectView} />
        <Route path="/yield" exact component={ProjectView} />
        <Route path="/moviedb" exact component={ProjectView} />
        <Route path="/flashcard" exact component={ProjectView} />
        <Route path="/paydrt" exact component={ProjectView} />
        <Route path="/fabriq" exact component={ProjectView} />
        <Route path="/blerp" exact component={ProjectView} />
        </>
      </Router>
    )
  }
}

export default App;