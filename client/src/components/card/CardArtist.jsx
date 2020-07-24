import React from 'react';
import { Link } from 'react-router-dom';
// styles
import './../../styles/icon-color.css';

function CardArtist({artist}) {

  return (
    <Link className="link" to={`/artists/${artist._id}`}>
      <div className="color" style={{ background: 'red' }}></div>
      <h3 className="title">{artist.name}</h3>
    </Link>
  );
}

export default CardArtist;
