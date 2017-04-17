import React, { Component } from 'react';
import Navbar from './Navbar';
import { browserHistory } from 'react-router'
import { Row, Col, Input, Card, CardTitle, Button, Table } from 'react-materialize';

class Comparison extends Component {

    constructor(props) {
        super(props)
        this.time = this.time.bind(this)
        this.cost = this.cost.bind(this)
        this.fromto = this.fromto.bind(this)
        this.state = {
            price_estimate: '',
            uber_time_estimate: '',
            lyft_time_estimate: '',
            from:'',
            to: ''
        }
    }

    time() {
        if (this.state.uber_time_estimate !== '' && this.state.lyft_time_estimate !== '') {
            fetch('https://538ab3ab.ngrok.io/users/time_estimate')
                .then((response) => {
                    return response.json();
                })
                .then((response) => {
                    const uber = response[0][0].estimate / 60
                    const lyft = response[1].eta_estimates[0].eta_seconds / 60

                    this.setState({
                        uber_time_estimate: uber,
                        lyft_time_estimate: lyft
                    })
                })
        }
    }
    cost() {
        if (this.state.price_estimate !== '') {

            fetch('https://538ab3ab.ngrok.io/users/price_estimate')
                .then((response) => {
                    return response.json();
                })
                .then(function (response) {
                    console.log(response);
                })
        }
    }
    fromto() {
        if(this.state.from !== '' && this.state.to !== '') {
        
        fetch(window.apiHost + '/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               from: this.state.from,
               to: this.state.to
            })
        })
        .then(response => response.json())
        .then(history => {
            this.setState({
                from: '',
                to: '',
            })
        })
      }    
 } 

    render() {
        return <div>
            <Navbar />
                <video id="background-video" loop autoPlay>
                    <source src="video.mov"/>
                </video>  
            <Row>
                <Input value={this.state.from} onChange={(e) => this.setState({from: e.target.value})} className='color' s={6} label="From" />
                <Input value={this.state.to} onChange={(e) => this.setState({to: e.target.value})} className='color' s={6} label="To" />
                <div className="container">
                    <Row>
                        <Col className='s12 center-align'>
                            <Button waves='light'onClick={() => this.fromto()}>Go!</Button>
                        </Col>
                    </Row>
                </div>
            </Row>

            <div className="container">
                <Row>
                    <Card className='small' header={<CardTitle image='uberlogo.png'></CardTitle>}>
                        <Table className='font'>
                            <tbody>
                                <tr>
                                    <td>
                                        Time until Arrival
                                        </td>
                                    <td className="table-row">
                                        {this.state.uber_time_estimate} minutes
                                        </td>
                                </tr>
                                <tr>
                                    <td>
                                        Cost
                                        </td>
                                    <td className="table-row">
                                        {this.state.price_estimate}
                                        </td>
                                </tr>
                            </tbody>
                            <tr>
                                <Row>
                                    <Col className="s12 center-align center-button">
                                        <Button waves='light'>Book with Uber</Button>
                                    </Col>
                                </Row>
                            </tr>
                        </Table>
                    </Card>
                    <Card className='small' header={<CardTitle image='lyftlogo.png'></CardTitle>} actions={[<a href='#'>This is a Link</a>]}>
                        I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                        </Card>
                </Row>
            </div>
        </div>
    }
}

export default Comparison;