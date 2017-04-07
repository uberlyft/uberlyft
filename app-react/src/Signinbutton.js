import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class Signinbutton extends Component {
  
  render() {
    return <div>
            <div className="container">
              <div className="row">
                <div className="col s4 push-s4 button-margin button-style" onClick={() => browserHistory.push('/signin')}>
                    <a className="waves-effect waves-light btn">SIGN IN</a>
                </div>
              </div>
            </div>

          </div>
  }
}

export default Signinbutton;