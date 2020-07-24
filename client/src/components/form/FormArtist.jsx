import React, { Component } from 'react';

// styles
import './../../styles/form.css';

class FormArtist extends Component {
  state = {};

  handleChange = (event) => {
    let key = event.target.name;

    if (event.target.type === 'radio') {
    } else {
      let value = event.target.value;
    }
  };

  handleSubmit = (event) => {};

  render() {
    return (
      <form className="form artist" onSubmit={this.handleSubmit}>
        <label className="label" htmlFor="name">
          Name
        </label>
        <input onChange={this.handleChange} className="input" id="name" name="name" type="text" />
        <label className="label" htmlFor="description">
          Description
        </label>
        <textarea
          className="input"
          name="description"
          id="description"
          cols="30"
          rows="10"
          onChange={this.handleChange}
        ></textarea>
        <label className="label" htmlFor="style">
          Style
        </label>

        <select name="style" id="style">
          <option>DISPLAY STYLES HERE</option>
        </select>
        <label className="label">Is band ?</label>
        <div className="row is-band">
          <label className="label" htmlFor="isBand">
            yes
          </label>
          <input
            onChange={this.handleChange}
            className="input"
            type="radio"
            id="isBand"
            value="yes"
            name="isBand"
          />
          <label className="label" htmlFor="isNotBand">
            no
          </label>
          <input
            onChange={this.handleChange}
            className="input"
            type="radio"
            id="isNotBand"
            value="no"
            name="isBand"
          />
        </div>
        <button className="btn">ok</button>
      </form>
    );
  }
}

export default FormArtist;
