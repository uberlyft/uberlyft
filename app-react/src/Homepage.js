import React, { Component } from 'react';
import Uberbutton from './Uberbutton';
import Lyftbutton from './Lyftbutton';
import { browserHistory } from 'react-router'

class Homepage extends Component {

  render() {
    return <div>
              <div className="container">
                 <div className="row">
                 <h1 className="center-align title">Commuter</h1>
                <div className="col s12">
                  <video id="background-video" loop autoPlay>
                    <source src="video.mov"/>
                  </video>     
                </div>
              </div>
              </div>
              <Uberbutton/>
              <Lyftbutton/>




          </div>
  }
}

export default Homepage;