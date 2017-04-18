import React, { Component } from 'react';
import Title from './Title';
import Navbar from './Navbar';
import { Row, Col, Table } from 'react-materialize';
import Foot from './Foot';

class How extends Component {
  

  render() {
    return <div>
            <Navbar />
            <Title/>
                <Row>
                    <Col s={12} m={5}>
                        <div className="white card-opacity lighten-4 black-text">
                            <h5 className="center-align">Follow the steps below to get started using Commuter and start saving!</h5>
                            <Table>
                                <tbody>
                                    <br/>
                                    <tr>
                                    <td><img className="img-size" src="one.png" alt="number one"/></td>
                                    <td>Click the "Sign In" button and follow the prompts to sign in to both your Uber and Lyft accounts.</td>
                                    </tr>
                                    <br/>
                                    <tr>
                                    <td><img className="img-size" src="two.png" alt="number two"/></td>
                                    <td>Enter your starting and ending locations.</td>
                                    </tr>
                                    <br/>
                                    <tr>
                                    <td><img className="img-size" src="three.png" alt="number three"/></td>
                                    <td>Commute! Use the provided data to compare pricing and distance, and book your ride, directly through our app!</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
                <Foot/>
          </div>
  }
}

export default How;