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
        // this.fromto = this.fromto.bind(this)
        this.price_estimate = this.price_estimate.bind(this)

        this.state = {
            uber_price_estimate: '',
            uber_time_estimate: '',
            lyft_price_estimate: '',
            lyft_time_estimate: '',
            address: []
        }
    }
    
    //  fromto() {
    //     fetch(window.apiHost + '/users/price_estimate', {
    //         credentials: 'include'
    //     })
    //         .then(response => response.json())
    //         .then(response => this.setState({
    //             address: response,
    //             lyft: response.cost_estimates
    //         }))
    //         .then(blah => console.log(this.state.address))
    // }   

    price_estimate() {
        if(this.state.to !== '') {
            navigator.geolocation.getCurrentPosition((position) => {
                fetch(window.apiHost + '/users/price_estimate?latitude=' + position.coords.latitude + '&longitude=' + position.coords.longitude + '&address=' + this.state.address, {
                    credentials: 'include',
                })
                .then(response => response.json())
                .then(response => {
                    console.log(response);

                    const uberPrice = response[0][0].estimate / 60
                    const uberTime = response[0][0].estimate / 60
                    const lyftPriceMin = response[1].cost_estimates[1].estimated_cost_cents_min / 100
                    const lyftPriceMax = response[1].cost_estimates[1].estimated_cost_cents_min / 100
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
                .then(blah => this.fromto)
            })
      }    
 } 

    render() {
 let uber_time_estimates = this.props.uber_time_estimate.map((estimate, key) => <UberCard key={key} {...estimate} />);
 let uber_price_estimates = this.props.uber_price_estimate.map((estimate, key) => <UberCard key={key} {...estimate} />);
 let lyft_time_estimates = this.props.lyft_time_estimate.map((estimate, key) => <LyftCard key={key} {...estimate} />);
 let lyft_price_estimates = this.props.lyft_price_estimate.map((estimate, key) => <LyftCard key={key} {...estimate} />);

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
                        {uber_time_estimates}
                        {uber_price_estimates}
                        </CardPanel>
                    </Col>
                </Row>
                    <Row>
                    <Col s={12}>
                        <CardPanel className="white lighten-4 black-text">
                            {lyft_time_estimates}
                            {lyft_price_estimates}
                        </CardPanel>
                    </Col>
                </Row>
            </div>
            <Foot/>

        </div>
    }
}

export default Comparison;