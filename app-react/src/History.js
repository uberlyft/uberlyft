import React, { Component } from 'react';
import Navbar from './Navbar';
import Title from './Title';
import RideHistory from './RideHistory';
import { Row, Col } from 'react-materialize';
import Foot from './Foot';
import {  Table } from 'react-materialize';

class History extends Component {
    constructor(props) {
        super(props)
        this.rideHistory = this.rideHistory.bind(this)

        this.state = {
            history: []
            // status: '',
            // distance: '',
            // start_time: '',
            // display_name: ''
        }
    }

    componentDidMount() {
        this.rideHistory()
    }

    rideHistory() {
        fetch(window.apiHost + '/users/history', {
            credentials: 'include'
        })
            .then(response => response.json())
            .then(response => this.setState({history: response[0].histories}))
    }

    render() {
        let rides = this.state.history.map((ride, key) => <RideHistory key={key} {...ride} />);

        return <div>
            <Navbar />
            <Title />
            <div className="container">
                <Row>
                    <Col className="s12">
                        <div className="white card-opacity lighten-4 black-text">
                            <Table>
                                <thead>
                                    <tr className="center-align">
                                    <th data-field="price">Car</th>
                                    <th data-field="price">Date</th>
                                    <th data-field="distance">Distance</th>
                                    <th data-field="status">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rides}
                                </tbody>
                            </Table>
                            </div>
                    </Col>
                </Row>
            </div>
            <Foot />

        </div>
    }
}

export default History;