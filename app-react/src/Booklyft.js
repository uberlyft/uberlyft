import React, { Component } from 'react';
import {  Button } from 'react-materialize';

class Booklyft extends Component {

   constructor(props) {
        super(props)
        this.booklyft = this.booklyft.bind(this)
        this.state = {
            latitude: '',
            longitude: '',
            address: '',
        }
    }

  booklyft() {
        if(this.state.latitude !== '' && this.state.longitude !== '' && this.state.address !== '') {
        
        fetch(window.apiHost + '/users/time_estimate', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               from: this.state.longitude,
               to: this.state.latitude,
               to: this.state.address
            })
        })
        .then(response => response.json())
      }    
  }

  render() {
    return <div>
            <Button waves='light' className="pink accent-4" onClick={() => location.href='lyft://'}>Book with Lyft</Button>
          </div>
  }
}

export default Booklyft;