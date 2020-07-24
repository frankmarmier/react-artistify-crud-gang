import React from 'react';

import './../../styles/form.css';

class FormStyle extends React.Component {
  render() {
    return (
      <form className="form">
        <label className="label" htmlFor="name">
          name
        </label>
        <input className="input" id="name" type="text" />

        <label className="label" htmlFor="wikiURL">
          wiki URL
        </label>
        <input className="input" id="wikiURL" type="text" />

        <label className="label" htmlFor="color">
          color
        </label>
        <input className="input color is-clickable" id="color" type="color" />

        <button className="btn">ok</button>
      </form>
    );
  }
}

export default FormStyle;
