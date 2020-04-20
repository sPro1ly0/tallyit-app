import React, { Component } from 'react';
import './LandingPage.css';
import SignUpForm from '../SignUpForm/SignUpForm';
import LoginForm from '../LoginForm/LoginForm';
import Footer from '../Footer/Footer';

class LandingPage extends Component {

  render() {
    return (
      <>
        <header className='banner' role='banner'>
          <h1>Tally it!</h1>
          <h2>Keep your scores and stats in one place</h2>
        </header>

        <SignUpForm />

        <LoginForm />

        <section className='features'>
          <h3>Easy Sign Up and Login ✓</h3>
          <h3>Perfect for Game Nights  ✓</h3>
          <h3>Save and View Your Results  ✓</h3>
        </section>
        <Footer />
      </>
    );
  }
}

export default LandingPage;