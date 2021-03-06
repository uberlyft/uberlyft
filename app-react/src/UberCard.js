import React, { Component } from 'react';
import moment from 'moment';
import Bookuber from './Bookuber';
import { Col, Table} from 'react-materialize';

class UberCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            uber_price_estimate: '',
            uber_time_estimate: '',
        }
    }

  render() {

    return <div>
            <Table className='font'>
                <tbody>
                    <tr>
                        <td>
                            Arrival in:
                        </td>
                        <td className="table-row">
                            {this.props.uber_time} minutes
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Cost: 
                        </td>
                        <td className="table-row">
                            {this.props.uber_price}
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