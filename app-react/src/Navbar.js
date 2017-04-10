import React, { Component } from 'react';
import { SideNav, SideNavItem, Button } from 'react-materialize';
import { browserHistory } from 'react-router'

class Navbar extends Component {

    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
    }

logout() {
    localStorage.clear();
    location.href = '/?logout=yes';
    localStorage.removeItem('token');
    alert('you have signed out.');
}

  render() {
    return <div>
                  <SideNav trigger={<Button>Menu</Button>} options={{ closeOnClick: true }}>
                    <SideNavItem userView
                      user={{
                        background: 'streetmapbackground.jpg',
                        picture: 'user.png',
                        first_name: 'John Doe',
                        email: 'jdandturk@gmail.com'
                      }}
                    />
                    <SideNavItem onClick={() => browserHistory.push('/')}><i className="fa fa-home fa-2x" aria-hidden="true"></i>Home</SideNavItem>
                    <SideNavItem href='#!second' icon='settings'>How It Works</SideNavItem>
                    <SideNavItem waves href='#!third'><i className="fa fa-question-circle-o fa-2x" aria-hidden="true"></i>FAQ</SideNavItem>
                    <SideNavItem onClick={this.logout}><i className="fa fa-sign-in fa-2x" aria-hidden="true"></i>SIGN OUT</SideNavItem>
                  </SideNav>
      </div>
  }
}

export default Navbar;