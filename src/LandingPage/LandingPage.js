import React, { Component } from 'react';
import './LandingPage.css';
import Footer from '../Footer/Footer';

class LandingPage extends Component {

  render() {
    return (
      <>
        <header className='banner' role='banner'>
          <h1>Tally it!</h1>
          <h2>Keep your scores and stats in one place</h2>
        </header>

        <section>
          <header>
            <h3>
                New user? Just enter a name for your group to sign up and login
            </h3>
          </header>
          <form className="signup-form">
            <div>
              <label htmlFor="group-name">Add Group Name: </label>
              <input placeholder=' bestfam123' type="text" name='group-name' id='group-name' required/>
            </div>
            <button type='submit'>Sign Up</button>
          </form>
        </section>

        <section>
          <header>
            <h3>Returning users</h3>
          </header>
          <form className='login-form'>
            <div>
              <label htmlFor="group-name">Enter Your Group Name: </label>
              <input placeholder=' bestfam123' type="text" name='group-name' id='group-name' required/>
            </div>
            <button type='submit'>Login</button>
          </form>
        </section>

        <section>
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