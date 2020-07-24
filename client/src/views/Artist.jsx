import React, { Component } from 'react';

// styles
import './../styles/artist.css';
import './../styles/comment.css';
import './../styles/star.css';

class Artist extends Component {
  state = {};

  render() {
    return (
      <div className="page artist">
        <h1 className="title">Artist name</h1>

        <div className="description">
          <p>music style: foo</p>
          <p>artist descriptipn</p>
        </div>

        <h1>Discography</h1>
      </div>
    );
  }
}

export default Artist;
