import React from 'react';

// styles
import './../../styles/form.css';
import './../../styles/icon-avatar.css';

class FormLabel extends React.Component {
  render() {
    return (
      <form className="form">
        <label className="label" htmlFor="name">
          name
        </label>

        <input className="input" id="name" type="text" />

        <label className="label" htmlFor="logo">
          logo
        </label>
        <h4>We will deal with the logo when we will learn about image uploading</h4>

        <label className="label" htmlFor="country">
          country
        </label>
        <input className="input" id="country" type="text" />

        <label className="label" htmlFor="city">
          city
        </label>
        <input className="input" id="city" type="text" />

        <label className="label" htmlFor="street">
          street
        </label>
        <input className="input" id="street" type="text" />

        <label className="label" htmlFor="streetNb">
          street nb
        </label>
        <input className="input" id="streetNb" type="number" />

        <button className="btn">ok</button>
      </form>
    );
  }
}
export default FormLabel;
