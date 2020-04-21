import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { group_name } = e.target;
    this.setState({ error: null });
  }

  render() {
    const { error } = this.state;

    return (
      <section className='login'>
        <header>
          <h3>Login</h3>
        </header>
        <form 
          autoComplete='on'
          className='login-form'
          onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='group_name'>Enter Your Group Name: </label>
            <input  
              type='text' 
              id='group_name' 
              name='group_name'
              aria-label='Enter your group name to login. Use the name you signed up with.'
              aria-required='true' 
              placeholder='bestfam123'
              required/>
          </div>
          <button type='submit'>Login</button>
          <div className='login-error' role="alert">
            {error && <p className="red-error">{error}</p>}
          </div>
        </form>
      </section>
    );
  }
}

export default LoginForm;