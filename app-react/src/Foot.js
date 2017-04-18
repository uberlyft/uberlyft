import React, { Component } from 'react';
import Title from './Title';
import Navbar from './Navbar';
import { Footer } from 'react-materialize';

class Foot extends Component {
  

  render() {
    return <div>
        <Footer copyrights="&copy; 2017" moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>} className='foot black'></Footer>
          </div>
  }
}

export default Foot;