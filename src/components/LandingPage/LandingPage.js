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
        <div className='banner-and-features'>
          <header className='banner' role='banner'>
            <h1>Keep your game scores and stats in one place <FontAwesomeIcon className='dice' icon='dice-one' size='1x' /></h1>
          </header>
   
          <section className='features'>
            <h2>Easy Sign Up and Login <FontAwesomeIcon className='green' icon='check-circle' size='3x' /></h2>
            <h2>Perfect for Game Nights  <FontAwesomeIcon className='green' icon='users' size='3x' /></h2>
            <h2>Save and View Your Results <FontAwesomeIcon className='green' icon='list-alt' size='3x' /></h2>
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