import React, { Component } from 'react';
import {  Button } from 'react-materialize';

class Bookuber extends Component {
  

  render() {
    return <div>
            <Button waves='light' className="black" onClick={() => location.href='uber://'}>Book with Uber</Button>

          </div>
  }
}

export default Bookuber;