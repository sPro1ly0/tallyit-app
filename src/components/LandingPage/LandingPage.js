import React, { Component } from 'react';
import './LandingPage.css';
import SignUpForm from '../SignUpForm/SignUpForm';
import LoginForm from '../LoginForm/LoginForm';
import Spinner from '../Spinner/Spinner';
import { Element } from 'react-scroll';
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

        <header className='banner' role='banner'>
          <h1>Tally it!</h1>
          <h2>Keep your scores and stats in one place</h2>
        </header>
   
        <section className='features'>
          <h3>Easy Sign Up and Login ✓</h3>
          <h3>Perfect for Game Nights  ✓</h3>
          <h3>Save and View Your Results  ✓</h3>
        </section>
        
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