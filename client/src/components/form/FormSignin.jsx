import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withUser from '../Auth/withUser';

class FormSignin extends Component {
  state = {
    email: '',
    password: '',
  };

  // TODO Implementer le signin
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    console.log(this.props, 'in form signin');
    const { email, password } = this.state;
    return (
      <React.Fragment>
        <form className="form" onSubmit={this.handleSubmit}>
          <h1 className="title">Signin</h1>
          <label className="label" htmlFor="email">
            email
          </label>
          <input
            className="input"
            id="email"
            type="email"
            value={email}
            onChange={this.handleChange}
          />
          <label className="label" htmlFor="password">
            password
          </label>
          <input
            className="input"
            id="password"
            type="password"
            value={password}
            onChange={this.handleChange}
          />
          <button className="btn">ok</button>
        </form>
        <p className="parag">
          No account yet ? please{' '}
          <Link to="/signup" className="link">
            signup
          </Link>
        </p>
      </React.Fragment>
    );
  }
}

export default withUser(FormSignin);
