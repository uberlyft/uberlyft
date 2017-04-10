import React, { Component } from 'react';
import Navbar from './Navbar';
import { Collapsible, CollapsibleItem, Modal, Button} from 'react-materialize';
import { browserHistory } from 'react-router'

class Dashboard extends Component {
  
  render() {
    return <div>
                <Navbar/>
                <h2 className="center-align">Dashboard</h2>
                <canvas id="myChart" width="200" height="200">
                    
                </canvas>
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
                    <CollapsibleItem header='Commute!' icon='swap_vert'>
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem>
                </Collapsible>
                </div>
          </div>
  }
}

export default Dashboard;