import React, { Component } from 'react';
import Navbar from './Navbar';
import { Row, Col, Table } from 'react-materialize';

class History extends Component {

    constructor(props) {
        super(props)
        this.ridehistory = this.ridehistory.bind(this)
        this.state = {
            history: ''
        }
    }
    ridehistory(history) {
        if (this.state.history !== '') {

            fetch('https://538ab3ab.ngrok.io/users/history')
                .then(function (response) {
                    return response.json();
                })
                .then(response => console.log(response))
        }
    }
    render() {

    let pastrides = this.props.History.map((history, key) => <History key={key} {...history}  />)

    if (pastrides.length === 0) {
        pastrides = <div className="alert alert-success text-center">Start by adding a task above.</div>
    }

        return <div>
            <Navbar />
            <div className="container">
                <Row>
                    <Col className="s12">
                        <Table>
                            <tr>
                                <td>
                                {pastrides}
                                </td>
                            </tr>
                        </Table>
                    </Col>
                </Row>
            </div>


        </div>
    }
}

export default History;