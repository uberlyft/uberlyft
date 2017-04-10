import React, { Component } from 'react';
import Navbar from './Navbar';
import Homepage from './Homepage';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Homepage/>
      </div>
    );
  }
}

export default App;
