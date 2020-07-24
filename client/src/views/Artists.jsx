import React from 'react';
// custom tools
import CardArtist from '../components/card/CardArtist';

// styles
import '../styles/card.css';

class Artists extends React.Component {
  state = {
    artists: [],
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="title">All artists</h1>

        <ul className="cards">
          <li className="card artist">
            <CardArtist />
          </li>

          <li className="card artist">
            <CardArtist />
          </li>

          <li className="card artist">
            <CardArtist />
          </li>

          <li className="card artist">
            <CardArtist />
          </li>

          <li className="card artist">
            <CardArtist />
          </li>

          <li className="card artist">
            <CardArtist />
          </li>

          <li className="card artist">
            <CardArtist />
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Artists;
