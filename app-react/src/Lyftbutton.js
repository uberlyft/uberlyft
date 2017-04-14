import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class Lyftbutton extends Component {

constructor(props) {
        super(props)
        this.lyftSignIn = this.lyftSignIn.bind(this)
        this.state = {
           access_token: ''
        }
    }

  lyftSignIn() {
        if(this.state.access_token !== '') {
        
        fetch('api.lyft.com/v1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               access_token: this.state.access_token,
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
            <div className="row">
                <div className="col s4 push-s4 button-style" onClick={() => location.href=''}>
                    <a className="waves-effect waves-light btn pink accent-4">Lyft</a>
              </div>
            </div>
          </div>
  }
}

export default Lyftbutton;