import React, { Component } from 'react';
import Signinbutton from './Signinbutton';
import Title from './Title';
import { browserHistory } from 'react-router'

class Homepage extends Component {

  render() {
    return <div>
              <Title/>
              <Signinbutton/>




          </div>
  }
}

export default Homepage;