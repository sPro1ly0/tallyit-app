import React, { Component } from 'react';
import './LandingPage.css';
import SignUpForm from '../SignUpForm/SignUpForm';
import LoginForm from '../LoginForm/LoginForm';
import Spinner from '../Spinner/Spinner';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../Footer/Footer';

class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  setLoadingStatus = status => {
    this.setState({
      isLoading: status
    });
  }

  render() {
    return (
      <>
        {
          this.state.isLoading
            ? <Spinner />
            : false
        }
        <div>
          <header className='banner' role='banner'>
            <h1>Keep your game scores and stats in one place <FontAwesomeIcon icon='dice-one' size='1x' /></h1>
          </header>
   
          <section className='features'>
            <h2>Easy Sign Up and Login <FontAwesomeIcon icon='check-circle' size='2x' /></h2>
            <h2>Perfect for Family Game Nights  <FontAwesomeIcon icon='users' size='2x' /></h2>
            <h2>Save and View Your Results <FontAwesomeIcon icon='list-alt' size='2x' /></h2>
          </section>
        </div>

        
        <Element id='signup' name='signup'>
          <SignUpForm onLoading={this.setLoadingStatus} />
        </Element>
        
        <Element id='login' name='login'>
          <LoginForm onLoading={this.setLoadingStatus} />
        </Element>
        
        <Footer />
      </>
    );
  }
}

export default LandingPage;