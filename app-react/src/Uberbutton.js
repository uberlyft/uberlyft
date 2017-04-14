import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class Uberbutton extends Component {
  
constructor(props) {
        super(props)
        this.uberSignIn = this.uberSignIn.bind(this)
        this.state = {
           access_token: ''
        }
    }

    uberSignIn() {
        if(this.state.access_token !== '') {
        
        fetch('https://api.uber.com/v1.2', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               access_token: this.state.access_token
            })
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);

            if (response.access_token) {
                localStorage.setItem('token', response.access_token);
                browserHistory.push('/');
            }
        })
      }    
 } 

  render() {
    return <div>
            <div className="container">
              <div className="row">
                <div className="col s4 push-s4 button-margin button-style">
                    <a className="waves-effect waves-light btn black" onClick={() => location.href='https://538ab3ab.ngrok.io/auth/uber'}>Uber</a>
                </div>
              </div>
            </div>

          </div>
  }
}

export default Uberbutton;