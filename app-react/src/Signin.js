import React, { Component } from 'react';
import Navbar from './Navbar';

class Signin extends Component {
  
  render() {
    return <div>
                <Navbar/>
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
                    <div className="col s12 m5">
                        <div className="card-panel blue light-blue accent-4 z-depth-5 add-opacity">
                            <h4 className="center-align white-text">SIGN IN</h4>
                            <span className="white-text">
                                <div className="row">
                                        <form className="col s12">
                                            <div className="row">
                                                <div className="input-field col s12">
                                                <h6>Username</h6>
                                                    <input id="last_name" type="text" className="validate"/>
                                                    <label htmlFor="username"></label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <h6>Password</h6>
                                                    <input id="password" type="password" className="validate"/>
                                                    <label htmlFor="password"></label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col center-align">
                                                    <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>



          </div>
  }
}

export default Signin;