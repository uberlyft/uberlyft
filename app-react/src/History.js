import React, { Component } from 'react';
import Navbar from './Navbar';
import Title from './Title';
import Ridehistory from './Ridehistory';
import { Row, Col } from 'react-materialize';
import Foot from './Foot';

class History extends Component {

    constructor(props) {
        super(props)
        this.ridehistory = this.ridehistory.bind(this)
        this.state = {
            status: '',
            distance:'',
            start_time:'',
            display_name:''
        }
    }
    componentDidMount(){
        this.ridehistory()
    }
    ridehistory() {
        if (this.state.status !== '' && this.state.distance !== '' && this.state.start_time !== '' && this.state.display_name !== '') {

            fetch('https://538ab3ab.ngrok.io/users/history')
                .then((response) => {
                    return response.json();
                })
                .then(response => console.log(response))
        }
    }

    render() {

//    let rides = this.props.rides.map((ride, key) => <Ridehistory key={key} {...ride} />);

        return <div>
            <Navbar />
            <Title/>
            <div className="container">
                <Row>
                    <Col className="s12">
                     <Ridehistory/>
                    </Col>
                </Row>
            </div>
            <Foot/>

        </div>
    }
}

export default History;