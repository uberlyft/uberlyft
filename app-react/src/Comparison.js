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
        this.fromto = this.fromto.bind(this)

        this.state = {
            uber_price_estimate: '',
            uber_time_estimate: '',
            lyft_price_estimate: '',
            lyft_time_estimate: '',
            to: ''
        }
    }
    
    fromto() {
        if(this.state.to !== '') {
            navigator.geolocation.getCurrentPosition((position) => {
                fetch(window.apiHost + '/users/price_estimate', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        address: this.state.to
                    })
                })
                .then(response => response.json())
                .then(response => {
                    console.log(response);

                    // const uberPrice = response[0][0].estimate / 60
                    // const uberTime = response[0][0].estimate / 60
                    // const lyftPrice = response[1].eta_estimates[0].eta_seconds / 60
                    // const lyftTime = response[1].eta_estimates[0].eta_seconds / 60

                    // this.setState({
                    //     to: '',
                    //     uber_price_estimate: uberPrice,
                    //     uber_time_estimate: uberTime,
                    //     lyft_price_estimate: lyftPrice,
                    //     lyft_time_estimate: lyftTime
                    // })
                })
            })
      }    
 } 

    render() {
        return <div>
            <Navbar />
            <Title/>
                <div className="container">
                    <Row>
                        <Col s={12} className="center-align">
                            <Modal header='Directions' trigger={<Button waves='light'>Enter Your Location Here</Button>}>
                                {/*<Input value={this.state.from} onChange={(e) => this.setState({from: e.target.value})} className='color' s={6} label="From" />*/}
                                <Input value={this.state.to} onChange={(e) => this.setState({to: e.target.value})} className='color' s={12} label="To" />
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