import React, { Component } from 'react';
import Navbar from './Navbar';
import { Collapsible, CollapsibleItem, Modal, Button, Icon, Row, Input} from 'react-materialize';
import { Chart } from 'react-google-charts';
import { browserHistory } from 'react-router'

class Dashboard extends Component {

constructor(props) {
    super(props);
    this.state = {
      options: {
        title: 'Age vs. Weight comparison',
        hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
        vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
        legend: 'none',
      },
      data: [
        ['Age', 'Weight'],
        [8, 12],
        [4, 5.5],
        [11, 14],
        [4, 5],
        [3, 3.5],
        [6.5, 7],
      ],
    };
  }
  
  render() {
    return <div>
                <Navbar/>
                         <div className={'my-pretty-chart-container'}>
                            <Chart
                            chartTitle="DonutChart"
                            data={[['Age', 'Weight'], [8, 12], [4, 5.5]]}
                            options={{}}
                            graph_id="DonutChart"
                            width="60%"
                            height="200px"
                            legend_toggle
                            />
                        </div>
                <div className="center-align">
                  <Collapsible popout>
                    <CollapsibleItem header='Sign in/out of Uber' icon='call_merge'>
                        <Button waves='light' className='red'>Sign Out<Icon left>cloud</Icon></Button>
                    </CollapsibleItem>
                    <CollapsibleItem header='Sign in/out of Lyft' icon='swap_calls'>
                        <Button waves='light' className='red'>Sign Out<Icon left>cloud</Icon></Button>
                    </CollapsibleItem>
                    <CollapsibleItem header='Ride History' icon='restore'>
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem>
                    <CollapsibleItem header='Commute!'icon='navigation'>
                        <Row>
                            <Input s={12} label="From" />
                            <Input s={12} label="To" />
                             <Button waves='light' className='green' onClick={() => browserHistory.push('/comparison')}>COMMUTE!<Icon left>navigation</Icon></Button>
                        </Row>
                    </CollapsibleItem>
                </Collapsible>
                </div>
          </div>
  }
}

export default Dashboard;