import React, { Component } from 'react';
import UserContext from './Auth/UserContext';

class CompA extends Component {
  static contextType = UserContext;

  componentDidMount() {
    
  }

  render() {
    return <div>{this.context.message}</div>;
  }
}

export default CompA;
