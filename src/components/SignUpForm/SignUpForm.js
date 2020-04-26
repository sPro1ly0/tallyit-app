/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import SucessPopUp from '../SuccessPopUp/SucessPopUp';

class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      showPopUp: false,
      group_name: ''
    };
  }

  updateGroupName = (e) => {
    const group_name = e.target.value;
    this.setState({
      group_name
    });
  }

  handleSignUpSuccessPopUp = () => {

    this.setState({
      showPopUp: !this.state.showPopUp
    });
    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const { group_name } = this.state;
    
    this.setState({
      error: null
    });

    this.props.onLoading(true);

    AuthApiService.postGroup({
      group_name: group_name
    })
      .then(() => {
        this.props.onLoading(false);
        this.handleSignUpSuccessPopUp();
      })
      .catch(res => {
        this.props.onLoading(false);

        this.setState({ error: res.error });
      });
  }

  componentWillUnmount() {
    this.setState({
      group_name: ''
    });
  }

  render() {
    const { error, group_name } = this.state;

    return (
      <section className='signup'>
        <header className='signup-header'>
          <h2 className='new-user'>New user?</h2>
          <p className='signup-info'>Sign up with a group name and use it to login</p>         
        </header>
        <form
          autoComplete='on'
          className='signup-form'
          onSubmit={this.handleSubmit}
        >
          <div>
            <label htmlFor='group_name'>Create a Group Name </label>
            <input
              type='text' 
              id='group_name'
              name='group_name'
              aria-label='Enter a group name to sign up and use this group name to login with'
              aria-required='true'
              placeholder='bestfam123' 
              onChange={this.updateGroupName}
              required/>
          </div>
          <button type='submit'>Sign Up</button>
          <div className="signup-error" role="alert">
            {error && <p className="red-error">{error}</p>}
          </div>

          {
            this.state.showPopUp
              ? <SucessPopUp groupName={group_name} closePopUp={this.handleSignUpSuccessPopUp}/>
              : null
          }
        </form>
      </section>
    );
  }
}

export default SignUpForm;