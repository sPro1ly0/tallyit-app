/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class TallyError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    });
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2 className="error-boundary">Could not display App. There is something wrong, please try again later.</h2>
      );
    }
    return this.props.children;
  }
}

export default TallyError;