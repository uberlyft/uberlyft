import React, { Component } from 'react';
import Navbar from './Navbar';
import { Collapsible, CollapsibleItem, Modal, Button} from 'react-materialize';
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
                        <Modal header='Modal Header' trigger={<Button waves='light'>MODAL</Button>}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </Modal>
                    </CollapsibleItem>
                    <CollapsibleItem header='Sign in/out of Lyft' icon='swap_calls'>
                        <Modal header='Modal Header' trigger={<Button waves='light'>MODAL</Button>}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </Modal>
                    </CollapsibleItem>
                    <CollapsibleItem header='Ride History' icon='restore'>
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem>
                    <CollapsibleItem header='Commute!'icon='navigation'>
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem>
                </Collapsible>
                </div>
          </div>
  }
}

export default Dashboard;