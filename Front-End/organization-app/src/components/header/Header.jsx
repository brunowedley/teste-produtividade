import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Brand className='appName' >
            <div>
            <FontAwesomeIcon icon='sitemap' size='lg' /> Organization-App
            </div>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Header;