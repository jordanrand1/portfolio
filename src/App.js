import React from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';

class App extends React.Component {

  render() {
    return(
      <>
        <NavBar />
        <Home />
      </>
    )
  }
}

export default App;