/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; // helps pass history object to nested components
import TallyContext from '../../TallyContext';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';
import TallyitApiService from '../../services/tallyit-api-service';

class LoginForm extends Component {

  static contextType = TallyContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  handleLoginSuccess = () => {
    this.props.history.push('/dashboard');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { group_name } = e.target;
    this.setState({ error: null });

    this.props.onLoading(true);

    AuthApiService.postLogin({
      group_name: group_name.value
    })
      .then(res => {
        group_name.value = '';
        TokenService.saveAuthToken(res.authToken);
        IdleService.registerIdleTimerResets();
        TokenService.queueCallbackBeforeExpiry(() => {
          AuthApiService.postRefreshToken();
        });
        this.handleLoginSuccess();
        this.context.setLoginStatus(true);
        TallyitApiService.getGroupName()
          .then(this.context.setGroupName)
          .catch(this.context.setError);
      })
      .catch(res => {
        this.props.onLoading(false);
        this.setState({ error: res.error });
      });

  }

  render() {
    const { error } = this.state;

    return (
      <section className='login'>
        <header className='login-header'>
          <h3>Login</h3>
          <p>Enter &apos;Demo&apos; to view demo account.</p>
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
              placeholder='Demo'
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

export default withRouter(LoginForm);