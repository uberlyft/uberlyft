import React, { Component } from 'react';
import Navbar from './Navbar';
import Title from './Title';
import UberCard from './UberCard';
import LyftCard from './LyftCard';
// import Bargraph from './Bargraph';
import { Row, Col, Input, Button, Table, CardPanel } from 'react-materialize';
import Foot from './Foot';

class Comparison extends Component {

    constructor(props) {
        super(props)
        this.price_estimate = this.price_estimate.bind(this)

        this.state = {
        //     uber_price_estimate: '',
        //     uber_time_estimate: '',
        //     lyft_price_min_estimate: '',
        //     lyft_price_max_estimate: '',
        //     lyft_time_estimate: '',
            address: []
        }
    }
    
    price_estimate() {
        if(this.state.to !== '') {
            navigator.geolocation.getCurrentPosition((position) => {
                fetch(window.apiHost + '/users/price_estimate?latitude=' + position.coords.latitude + '&longitude=' + position.coords.longitude + '&address=' + this.state.address, {
                    credentials: 'include',
                })
                .then(response => response.json())
                .then(response => {
                    console.log(response);

                    const uberPrice = response[0][0].estimate
                    const uberTime = response[2][0].estimate / 60
                    const lyftPriceMin = response[1].cost_estimates[1].estimated_cost_cents_min / 100
                    const lyftPriceMax = response[1].cost_estimates[1].estimated_cost_cents_max / 100
                    const lyftTime = response[3].eta_estimates[0].eta_seconds / 60

                    this.setState({
                        address: '',
                        uber_price_estimate: uberPrice,
                        uber_time_estimate: uberTime,
                        lyft_price_min_estimate: lyftPriceMin,
                        lyft_price_max_estimate: lyftPriceMax,
                        lyft_time_estimate: lyftTime
                    })
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
                            <Input value={this.state.address} onChange={(e) => this.setState({address: e.target.value})} className='color' s={12} label="To" />
                            <div className="center-align"><Button waves='light'onClick={() => this.price_estimate()}>Go!</Button></div>
                        </Col>
                    </Row>
                </div>
            <div className="container">
                <Row>
                    <Col s={12}>
                        <CardPanel className="white lighten-4 black-text">
                        <UberCard uber_price={this.state.uber_price_estimate} uber_time={this.state.uber_time_estimate}/>
                        </CardPanel>
                    </Col>
                </Row>
                    <Row>
                    <Col s={12}>
                        <CardPanel className="white lighten-4 black-text">
                        <LyftCard lyft_min_price={this.state.lyft_price_min_estimate} lyft_max_price={this.state.lyft_price_max_estimate} lyft_time={this.state.lyft_time_estimate} />
                        </CardPanel>_
                    </Col>
                </Row>
            </div>
            <Foot/>

        </div>
    }
}

export default Comparison;