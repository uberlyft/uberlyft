import React, { Component } from 'react';
import Signinbutton from './Signinbutton';
import Title from './Title';
import Foot from './Foot';
import { Row, Col, } from 'react-materialize';

class Homepage extends Component {

  render() {
    return <div>
              <Title/>
              <div className="container">
                <Row>
                  <Col s={12}>
                    <h6 className="welcome-font center-align black-text">Welcome to Commuter&copy;, an app that compares Uber and Lyft to get you the quickest and most affordable rides!</h6>
                    <br/>
                    <h6 className="welcome-font center-align white-text">Get started by clicking sign in below:</h6>
                  </Col>
                </Row>
              </div>
              <Signinbutton/>



              <Foot/>
          </div>
  }
}

export default Homepage;