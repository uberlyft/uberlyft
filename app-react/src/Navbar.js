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
                  <SideNav trigger={<Button className={'black'}>Menu</Button>} options={{ closeOnClick: true }}>
                    <SideNavItem userView
                      user={{
                        background: 'streetmapbackground.jpg',
                        picture: 'user.png',
                        first_name: 'John Doe',
                        email: 'jdandturk@gmail.com'
                      }}
                    />
                    <SideNavItem onClick={() => browserHistory.push('/')}><i className="fa fa-home fa-2x" aria-hidden="true"></i>HOME</SideNavItem>
                    <SideNavItem onClick={() => browserHistory.push('/how')}><i className="fa fa-wrench fa-2x" aria-hidden="true"></i>HOW IT WORKS</SideNavItem>
                    <SideNavItem onClick={() => browserHistory.push('/history')}><i className="fa fa-history fa-2x" aria-hidden="true"></i>RIDE HISTORY</SideNavItem>
                    <SideNavItem onClick={this.logout}><i className="fa fa-sign-in fa-2x" aria-hidden="true"></i>SIGN OUT</SideNavItem>
                  </SideNav>
      </div>
  }
}

export default Navbar;