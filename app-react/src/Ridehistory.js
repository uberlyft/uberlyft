import React, { Component } from 'react';

class RideHistory extends Component {
  

  render() {
    return <tr>
                <td>{this.props.display_name}</td>
                <td>{this.props.start_time}</td>
                <td>{this.props.distance}</td>
                <td>{this.props.status}</td>
            </tr>
  }
}

export default RideHistory;