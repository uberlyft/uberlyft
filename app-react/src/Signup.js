import React, { Component } from 'react';
import Navbar from './Navbar';
import { browserHistory } from 'react-router'

class Signup extends Component {
  
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
                        <div className="card-panel pink accent-4 z-depth-5 add-opacity">
                            <h4 className="center-align white-text">SIGN UP</h4>
                            <span className="white-text">
                                <div className="row">
                                        <form className="col s12">
                                            <div className="row">
                                                <div className="input-field col s12">
                                                <h6>Full Name</h6>
                                                    <input id="full_name" type="text" className="validate"/>
                                                    <label htmlFor="fullname"></label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <h6>Street Address</h6>
                                                    <input id="street" type="text" className="validate"/>
                                                    <label htmlFor="streetaddress"></label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                    <div className="input-field inline">
                                                        <h6>City</h6>
                                                        <input id="city" type="text" className="validate"/>
                                                        <label htmlFor="city" data-error="wrong" data-success="right"></label>
                                                    </div> 
                                                    <div className="input-field inline">
                                                        <h6>State</h6>
                                                        <input id="state" type="text" className="validate"/>
                                                        <label htmlFor="state" data-error="wrong" data-success="right"></label>
                                                    </div>
                                                </div> 
                                            <div className="row">
                                                    <div className="input-field inline">
                                                        <h6>Zip Code</h6>
                                                        <input id="zip" type="text" className="validate"/>
                                                        <label htmlFor="zip" data-error="wrong" data-success="right"></label>
                                                    </div>
                                                </div>                                                                                                      <div className="row">
                                                    <div className="input-field col s12">
                                                        <h6>Create a Username</h6>
                                                        <input id="username" type="text" className="validate"/>
                                                        <label htmlFor="username"></label>
                                                    </div>
                                                </div> 
                                                <div className="row">
                                                    <div className="input-field col s12">
                                                        <h6>Create a Password</h6>
                                                        <input id="password" type="password" className="validate"/>
                                                        <label htmlFor="password"></label>
                                                    </div>
                                                </div>  
                                            <div className="row">
                                                <div className="col center-align">
                                                    <a className="btn-floating btn-large waves-effect waves-light blue" type="button" onClick={() => browserHistory.push('/gettingstarted')}><i className="material-icons">add</i></a>
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

export default Signup;