import React, { Component } from 'react';
// custom tools

import FormatDate from '../components/FormatDate';
// styles
import '../styles/album.css';
import '../styles/comment.css';
import '../styles/star.css';

class Album extends Component {
  state = {
    album: null,
  };

  render() {
    return (
      <div className="page album">
        <h1 className="title">Album title</h1>
        <div className="all-stars"></div>
        <img src="" alt="" className="cover" />
        <p className="description">Album description</p>
        <p className="publishing">
          Album by <strong>Artist name</strong> published the <FormatDate /> by{' '}
          <strong>Albul label name</strong>
        </p>
      </div>
    );
  }
}

export default Album;
