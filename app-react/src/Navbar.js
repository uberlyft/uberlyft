import React, { Component } from 'react';
import { SideNav, SideNavItem, Button } from 'react-materialize';
import { browserHistory } from 'react-router'

class Navbar extends Component {
  render() {
    return <div>
                  <SideNav trigger={<Button>Menu</Button>} options={{ closeOnClick: true }}>
                    <SideNavItem userView
                      user={{
                        background: 'streetmapbackground.jpg',
                        image: 'user.png',
                        name: 'John Doe',
                        email: 'jdandturk@gmail.com'
                      }}
                    />
                    <SideNavItem onClick={() => browserHistory.push('/')}><i className="fa fa-home fa-2x" aria-hidden="true"></i>Home</SideNavItem>
                    <SideNavItem href='#!second' icon='settings'>How It Works</SideNavItem>
                    <SideNavItem waves href='#!third'><i className="fa fa-question-circle-o fa-2x" aria-hidden="true"></i>FAQ</SideNavItem>
                    <SideNavItem waves href='#!third'><i className="fa fa-sign-in fa-2x" aria-hidden="true"></i>LOG OUT</SideNavItem>
                  </SideNav>
      </div>
  }
}

export default Navbar;