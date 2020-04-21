import React, { Component } from 'react';

class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      showPopUp: false
    };
  }

  handleSignUpSuccessPopUp = () => {
    this.setState({
      showPopUp: !this.state.showPopUp
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { group_name } = e.target;
    this.setState({ error: null });
  }

  render() {
    const { error } = this.state;

    return (
      <section className='signup'>
        <header>
          <h3>
            New user? Sign up with a group name use it to login
          </h3>
        </header>
        <form
          autoComplete='on'
          className='signup-form'
          onSubmit={this.handleSubmit}
        >
          <div>
            <label htmlFor='group_name'>Enter Group Name: </label>
            <input
              type='text' 
              id='group_name'
              name='group_name'
              aria-label='Enter a group name to sign up and use this group name to login with'
              aria-required='true'
              placeholder='bestfam123' 
              required/>
          </div>
          <button type='submit'>Sign Up</button>
          <div className="signup-error" role="alert">
            {error && <p className="red-error">{error}</p>}
          </div>
        </form>
      </section>
    );
  }
}

export default SignUpForm;