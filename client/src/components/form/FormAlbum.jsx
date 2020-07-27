import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// styles
import './../../styles/form.css';
import './../../styles/icon-avatar.css';

class FormAlbum extends Component {
  state = {};

  render() {
    return (
      <form className="form">
        <label htmlFor="title" className="label">
          Title
        </label>
        <input id="title" type="text" className="input" />
        <label htmlFor="artist" className="label">
          Artist
        </label>
        <select className="input" name="artist" id="artist">
          <option value="">PUT THE ARTISTS HERE : )</option>
        </select>
        <label htmlFor="style" className="label">
          Style
        </label>
        <select className="input" name="style" id="style">
          <option value="">PUT THE STYLES HERE : )</option>
        </select>
        <label htmlFor="releaseDate" className="label">
          Release Date
        </label>
        <input type="date" id="releaseDate" className="input" name="releaseDate" />
        <label htmlFor="" className="label">
          Cover
        </label>
        <h4>
          We'll deal with the cover later, lets profit from the default value set by the model in
          the DB
        </h4>
        <label htmlFor="description" className="label">
          Description
        </label>
        <textarea name="description" id="" cols="30" rows="10" className="input"></textarea>
        <button className="btn">ok</button>
      </form>
    );
  }
}

export default FormAlbum;
