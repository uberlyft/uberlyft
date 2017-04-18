import React, { Component } from 'react';
import Navbar from './Navbar';
import { Row, Col, Table } from 'react-materialize';
import Foot from './Foot';

class History extends Component {

    constructor(props) {
        super(props)
        this.ridehistory = this.ridehistory.bind(this)
        this.state = {
            history: ''
        }
    }
    ridehistory() {
        if (this.state.history !== '') {

            fetch('https://538ab3ab.ngrok.io/users/history')
                .then((response) => {
                    return response.json();
                })
                .then(response => console.log(response))
        }
    }
    render() {

   history = history.map((history, key) => <History key={key} {...history}/>)

    if (history.length === 0) {
        history = <div className="alert alert-success text-center">Start by adding a task above.</div>
    }

        return <div>
            <Navbar />
            <div className="container">
                <Row>
                    <Col className="s12">
                        <Table>
                            <tr>
                                <td>
                                {history}
                                </td>
                            </tr>
                        </Table>
                    </Col>
                </Row>
            </div>
            <Foot/>

        </div>
    }
}

export default History;