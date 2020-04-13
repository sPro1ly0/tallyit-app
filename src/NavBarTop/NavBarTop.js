import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBarTop.css';

class NavBarTop extends Component {

  render() {
    return (
      <nav className='nav-top'>
        <Link to="/" className='app-name'>Tally it!</Link>
        <Link to="/dashboard">Demo Dashboard</Link>
      </nav>
    );
  }
}

export default NavBarTop;