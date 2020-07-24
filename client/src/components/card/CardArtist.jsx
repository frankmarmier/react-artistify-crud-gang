import React from 'react';
import { Link } from 'react-router-dom';
// styles
import './../../styles/icon-color.css';

function CardArtist(props) {
  return (
    <Link className="link" to={`/artists/foo`}>
      <div className="color" style={{ background: 'red' }}></div>
      <h3 className="title">Foo bar</h3>
    </Link>
  );
}

export default CardArtist;
