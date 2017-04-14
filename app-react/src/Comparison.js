import React, { Component } from 'react';
import Navbar from './Navbar';
import { Table } from 'react-materialize';
import { browserHistory } from 'react-router'
import { Row, Input } from 'react-materialize';
import PlacesAutocomplete from 'react-places-autocomplete'
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete'

class Comparison extends Component {

  constructor(props) {
    super(props)
    this.state = { 
        address: ''
    }
    this.onChange = (to, from) => this.setState({ to, from })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    const { address } = this.state

    geocodeByAddress(address,  (err, { lat, lng }) => {
      if (err) { console.log('Oh no!', err) }

      console.log(`Yay! got latitude and longitude for ${address}`, { lat, lng })
    })}
  
  render() {
    return <div>
            <Navbar/>
            <Row>
            <PlacesAutocomplete value={this.state.address} onChange={this.onChange}/>
                <Input s={6} label="From" />
                <Input s={6} label="To" />
            </Row>

                <div className="container">
                    <Table>
                        <thead>
                            <tr>
                            <th data-field="id"></th>
                            <th data-field="name">Distance Away</th>
                            <th data-field="price">Ride Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Uber</td>
                            <td>3.2 mi</td>
                            <td>$13.50</td>
                            </tr>
                            <tr>
                            <td>Lyft</td>
                            <td>0.24 mi</td>
                            <td>$10.75</td>
                            </tr>
                        </tbody>
                        </Table>
                    </div>
          </div>
  }
}

export default Comparison;