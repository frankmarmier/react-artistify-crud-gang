import React from 'react';
import { Link } from 'react-router-dom';

class Signin extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
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

export default Signin;
