import React, { Component } from 'react';

class Signinbutton extends Component {
  

  render() {
    return <div>
            <div className="container">
              <div className="row">
                <div className="col s4 push-s4 button-margin button-style">
                    <a className="waves-effect waves-light btn black" onClick={() => location.href='https://538ab3ab.ngrok.io/auth/uber'}>SIGN IN</a>
                </div>
              </div>
            </div>

          </div>
  }
}

export default Signinbutton;