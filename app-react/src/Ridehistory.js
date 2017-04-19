import React, { Component } from 'react';
import moment from 'moment';

class RideHistory extends Component {

  render() {
    return <tr>
                <td>{this.props.start_city.display_name}</td>
                <td>{moment(this.props.start_time).format('mm/dd/YYYY')}</td>
                <td>{Math.round(this.props.distance)} miles</td>
                <td>{this.props.status}</td>
            </tr>
  }
}

export default RideHistory;