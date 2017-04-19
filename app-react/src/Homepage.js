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
                    <div className="welcome-font center-align black-text">Welcome to Commuter, an app that compares Uber and Lyft to get you the quickest and most affordable rides!</div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="getstarted-font center-align pink-text text-accent-4">Get started by clicking sign in below:</div>
                  </Col>
                </Row>
              </div>
              <Signinbutton/>



              <Foot/>
          </div>
  }
}

export default Homepage;