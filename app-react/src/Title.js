import React, { Component } from 'react';
import Signinbutton from './Signinbutton';
import { browserHistory } from 'react-router'

class Title extends Component {

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





          </div>
  }
}

export default Title;