import React, { Component } from 'react';
import Navbar from './Navbar';
import { browserHistory } from 'react-router'

class Signup extends Component {

    constructor(props) {
        super(props)
        this.signup = this.signup.bind(this)
        this.state = {
           name: '',
           email: '',
           password: ''
        }
    }

    signup() {
        if(this.state.name !== '' && this.state.email !== ''&& this.state.password !== '') {
        
        fetch(window.apiHost + '/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               name: this.state.name,
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
                localStorage.setItem('token', response.token);
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
                                                        <h6>Email</h6>
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
                                                    <a className="btn-floating btn-large waves-effect waves-light green" type="button" onClick={() => this.signup()}><i className="material-icons">add</i></a>
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