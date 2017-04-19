import React, { Component } from 'react';

import {  Table } from 'react-materialize';

class Bookuber extends Component {
  

  render() {
    return <div>
            <div className="white card-opacity lighten-4 black-text">
                <Table>
                    <thead>
                        <tr>
                        <th data-field="price">Car</th>
                        <th data-field="price">Date</th>
                        <th data-field="distance">Distance</th>
                        <th data-field="status">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{this.props.display_name}</td>
                        <td>{this.props.start_time}</td>
                        <td>{this.props.distance}</td>
                        <td>{this.props.status}</td>
                        </tr>
                    </tbody>
                </Table>
                </div>
          </div>
  }
}

export default Bookuber;