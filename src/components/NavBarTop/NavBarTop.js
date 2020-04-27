import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';
import TallyContext from '../../TallyContext';
import './NavBarTop.css';
import Scroll, { Link } from 'react-scroll';

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
      <div className='nav-show-logout-links nav-top-links'>
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
          tabIndex='0'
          onKeyDown={() => Scroll.animateScroll.scrollTo(700)}
        >
          Sign Up
        </Link>
        <Link
          to='login'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          tabIndex='0'
          onKeyDown={() => Scroll.animateScroll.scrollTo(1900)}
        >
          Login
        </Link>
      </div>
    );
  }

  render() {
    return (
      <nav className='nav-top'>
        <p className='app-name'>
          <span role='img' aria-label='Pencil writing on paper memo emoji'>📝</span>tally<span>it</span>
        </p>
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