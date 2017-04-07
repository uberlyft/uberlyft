import React, { Component } from 'react';


class Signup extends Component {
  
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
                  <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="card-image">
                                <img src="images/sample-1.jpg"/>
                                <span className="card-title">Card Title</span>
                                <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                </div>



          </div>
  }
}

export default Signup;