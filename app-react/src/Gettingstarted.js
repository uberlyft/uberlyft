import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import Navbar from './Navbar';

class Gettingstarted extends Component {
  
  render() {
    return <div>
            <Navbar/>
            <h2 className="center-align">Getting Started</h2>
            <div className="row">
                <div className="col s12">
                    <div className="progress">
                <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: '10' + '%'}}>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <h5 className="center-align">Step 1: Sign in to Uber</h5>
                </div>
            </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                        <div className="card">
                            <div className="card-image">
                                <img className="uber" src="uberlogo.png" alt="uber logo"/>
                            </div>
                            <div className="card-content">
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
                                        </form>
                                    </div>
                                </div>
                            <div className="card-action center-align">
                                <a className="waves-effect waves-light btn black" onClick={() => browserHistory.push('/steptwo')}>Submit</a>
                        </div>
                    </div>
                </div>
            </div>

          </div>
  }
}

export default Gettingstarted;