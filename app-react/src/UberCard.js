import React, { Component } from 'react';
import moment from 'moment';
import Bookuber from './Bookuber';
import { Col, Table} from 'react-materialize';

class UberCard extends Component {

  render() {

    return <div>
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
                            {this.state.uber_price_estimate}
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Col s={12} className="center-align">
                <Bookuber/>
            </Col>
            </div>
  }
}

export default UberCard;