import React, { Component } from 'react';
import UserContext from './Auth/UserContext';
import CompA from './CompA';

class ShowingContext extends Component {
  static contextType = UserContext;

  componentDidMount() {
    
  }

  render() {
    return <CompA />;
  }
}

export default ShowingContext;
