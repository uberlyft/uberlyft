import React, { Component } from 'react';
import Navbar from './Navbar';
import { browserHistory } from 'react-router'

class Signin extends Component {

    constructor(props) {
        super(props)
        this.signin = this.signin.bind(this)
        this.state = {
            email: '',
           password: ''
        }
    }

    signin() {
        if(this.state.email !== '' && this.state.password !== '') {
        
        fetch(window.apiHost + '/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               email: this.state.email,
               password: this.state.password 
            })
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);

            if (response.token) {
                sessionStorage.setItem('token', response.token);
                browserHistory.push('/dashboard');
            }
        })
      }    
 } 
  
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
                        <div className="card-panel white z-depth-5 add-opacity">
                            <h4 className="center-align black-text">SIGN IN</h4>
                            <span className="black-text">
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
                                                    <a className="btn-floating btn-large waves-effect waves-light red" onClick={() => this.signin()}><i className="material-icons">add</i></a>
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