import React, { Component } from 'react';
import artistApi from '../api/artistApi';

// styles
import './../styles/artist.css';
import './../styles/comment.css';
import './../styles/star.css';

class Artist extends Component {
  state = {};

  componentDidMount() {
    const artistId = this.props.match.params.id;
    artistApi
      .getOneArtist(artistId)
      .then((debRes) => {
        console.log(debRes);
        this.setState({ artist: debRes.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.artist) {
      return (
        <div className="page artist">
          <h1 className="title">{this.state.artist.name}</h1>

          <div className="description">
            <p>music style: foo</p>
            <p>artist descriptipn</p>
          </div>

          <h1>Discography</h1>
        </div>
      );
    } else {
      return 'loading';
    }
  }
}

export default Artist;
