import React, { Component } from 'react';
import Navbar from './Navbar';
import Title from './Title';
import Booklyft from './Booklyft';
import Bookuber from './Bookuber';
// import Bargraph from './Bargraph';
import { Row, Col, Input, Button, Table, CardPanel, Modal } from 'react-materialize';
import Foot from './Foot';

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
            fetch('/users/time_estimate')
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

            fetch('/users/price_estimate')
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
        
        fetch('/users/time_estimate', {
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
            <Title/>
                <video id="background-video" loop autoPlay>
                    <source src="video.mov"/>
                </video>
                <div className="container">
                    <Row>
                        <Col s={12} className="center-align">
                            <Modal header='Directions' trigger={<Button waves='light'>Enter Your Location Here</Button>}>
                                <Input value={this.state.from} onChange={(e) => this.setState({from: e.target.value})} className='color' s={6} label="From" />
                                <Input value={this.state.to} onChange={(e) => this.setState({to: e.target.value})} className='color' s={6} label="To" />
                                <div className="center-align"><Button waves='light'onClick={() => this.fromto()}>Go!</Button></div>
                            </Modal>  
                        </Col>
                    </Row>
                </div>
            <div className="container">
                    <Row>
                        <Col s={12}>
                            <CardPanel className="white lighten-4 black-text">
                                <Table className='font'>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Arrival in:
                                            </td>
                                            <td className="table-row">
                                                {this.state.uber_time_estimate} minutes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Cost: 
                                            </td>
                                            <td className="table-row">
                                                {this.state.price_estimate}
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Col s={12} className="center-align">
                                    <Bookuber/>
                                </Col>
                            </CardPanel>
                        </Col>
                    </Row>
                     <Row>
                        <Col s={12}>
                            <CardPanel className="white lighten-4 black-text">
                                <Table className='font'>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Arrival in:
                                            </td>
                                            <td className="table-row">
                                                {this.state.lyft_time_estimate} minutes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Cost: 
                                            </td>
                                            <td className="table-row">
                                                {this.state.price_estimate}
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Col s={12} className="center-align">
                                    <Booklyft/>
                                </Col>
                            </CardPanel>
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12}>
                            Bargraph goes here
                        </Col>
                    </Row>
            </div>
            <Foot/>

        </div>
    }
}

export default Comparison;