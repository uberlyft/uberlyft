import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class Signupbutton extends Component {
  
  render() {
    return <div>
            <div className="row">
                <div className="col s4 push-s4 button-style" onClick={() => browserHistory.push('/signin')}>
                    <a className="waves-effect waves-light btn">SIGN UP</a>
              </div>
            </div>
          </div>
  }
}

export default Signupbutton;