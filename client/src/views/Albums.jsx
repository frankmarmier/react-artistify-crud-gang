import React from 'react';
import CardAlbum from '../components/card/CardAlbum';

// styles
import '../styles/card.css';

class Albums extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="title">All albums</h1>
        <hr></hr>
        <ul className="cards">
          <li className="card album">
            <CardAlbum />
          </li>
          <li className="card album">
            <CardAlbum />
          </li>
          <li className="card album">
            <CardAlbum />
          </li>
          <li className="card album">
            <CardAlbum />
          </li>
          <li className="card album">
            <CardAlbum />
          </li>
          <li className="card album">
            <CardAlbum />
          </li>
          <li className="card album">
            <CardAlbum />
          </li>
          <li className="card album">
            <CardAlbum />
          </li>
          <li className="card album">
            <CardAlbum />
          </li>
          <li className="card album">
            <CardAlbum />
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Albums;
