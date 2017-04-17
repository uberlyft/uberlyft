import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import Title from './Title';
import Navbar from './Navbar';
import { Row, Col, CardPanel, Table } from 'react-materialize';

class How extends Component {
  

  render() {
    return <div>
            <Navbar />
            <Title/>
                <Row>
                    <Col s={12} m={5}>
                        <CardPanel className="white card-opacity lighten-4 black-text">
                            <Table>
                                <tbody>
                                    <tr>
                                    <td><img src="number-one-in-a-circle.png"/></td>
                                    <td>Eclair</td>
                                    </tr>
                                    <tr>
                                    <td>Alan</td>
                                    <td>Jellybean</td>
                                    </tr>
                                    <tr>
                                    <td>Jonathan</td>
                                    <td>Lollipop</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardPanel>
                    </Col>
                </Row>
          </div>
  }
}

export default How;