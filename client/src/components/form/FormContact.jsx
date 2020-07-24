import React, { Component } from 'react';

// styles
import '../../styles/form.css';

class FormContact extends Component {
  render() {
    return (
      <form className="form">
        <h1 className="title">What's up?!</h1>
        <label className="label" htmlFor="from">
          email
        </label>
        <input className="input" id="from" type="text" name="from" />
        <label className="label" htmlFor="subject">
          subject
        </label>
        <input className="input" id="subject" type="text" name="subject" />
        <label className="label" htmlFor="message">
          message
        </label>
        <textarea className="input" name="message" id="message" cols="30" rows="10"></textarea>
        <button className="btn">ok</button>
      </form>
    );
  }
}

export default FormContact;
