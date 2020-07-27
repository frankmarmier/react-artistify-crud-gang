import React from 'react';
import FormSignin from '../components/form/FormSignin';

class Signin extends React.Component {
  render() {
    console.log(this.props, 'in Signin component');
    return <FormSignin />;
  }
}

export default Signin;
