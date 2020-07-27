import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// custom tools
import IconAvatar from '../components/icon/IconAvatar';

class Signup extends Component {
  state = {};
    
  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {};

  handleImage = (event) => {};

  render() {
    const { email, password, username, tmpAvatar } = this.state;
    return (
      <React.Fragment>
        <form className="form" onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <h1 className="title">Signup</h1>
          <label className="label" htmlFor="email">
            email
          </label>
          <input className="input" id="email" type="email" name="email" defaultValue={email} />
          <label className="label" htmlFor="username">
            username
          </label>
          <input
            className="input"
            id="username"
            type="text"
            name="username"
            defaultValue={username}
          />
          <label className="label" htmlFor="avatar">
            avatar
          </label>
          <IconAvatar avatar={tmpAvatar} clbk={this.handleImage} />
          <label className="label" htmlFor="password">
            password
          </label>
          <input
            className="input"
            id="password"
            type="password"
            name="password"
            defaultValue={password}
          />
          <button className="btn">ok</button>
        </form>
        <p className="parag">
          Already a member ? please{' '}
          <Link to="/signin" className="link">
            signin
          </Link>
        </p>
      </React.Fragment>
    );
  }
}

export default Signup;
