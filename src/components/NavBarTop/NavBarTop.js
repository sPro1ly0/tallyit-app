import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';
import TallyContext from '../../TallyContext';
import './NavBarTop.css';
import { Link } from 'react-scroll';

class NavBarTop extends Component {

  static contextType = TallyContext;

  handleLogoutLink = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.context.setLoginStatus(false);
    this.context.clearData();
  }

  renderDashAndLogoutLink() {
    return (
      <div className='nav-show-logout-link nav-top-links'>
        <NavLink
          to='/dashboard'
          activeClassName='dashboard-link'
        >
          Dashboard
        </NavLink>
        <NavLink
          onClick={this.handleLogoutLink}
          to='/'
        >
         Logout
        </NavLink>
      </div>
    );
  }

  renderLoginLinks() {
    return (
      <div className='nav-show-login-links nav-top-links'>
        <Link
          to='signup'
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
        >
          Sign Up
        </Link>
        <Link
          to='login'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Login
        </Link>
      </div>
    );
  }

  render() {
    return (
      <nav className='nav-top'>
        <p className='app-name'>Tally it!</p>
        {
          TokenService.hasAuthToken()
            ? this.renderDashAndLogoutLink()
            : this.renderLoginLinks()
        }
      </nav>
    );
  }
}

export default NavBarTop;