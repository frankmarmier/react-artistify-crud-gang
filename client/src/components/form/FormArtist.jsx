import React, { Component } from 'react';
import stylesApi from './../../api/stylesApi';

// styles
import './../../styles/form.css';

class FormArtist extends Component {
  state = { styles: [] };

  componentDidMount() {
    console.log(this.props);
    stylesApi
      .getAllStyles()
      .then((dbRes) => {
        //console.log(dbRes)
        this.setState({ styles: dbRes.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleChange = (event) => {
    let key = event.target.name;
    let value;
    if (event.target.type === 'radio') {
      value = event.target.value === 'yes' ? true : false;
      //console.log("value is", value)
    } else {
      value = event.target.value;
    }
    this.setState({ [key]: value });
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
          {this.state.styles.map((style) => {
            return <option>{style.name}</option>;
          })}
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
