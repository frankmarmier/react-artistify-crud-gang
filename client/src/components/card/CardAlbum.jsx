import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './../../styles/icon-color.css';
import './../../styles/icon-favorite.css';

function CardAlbum(props) {
  return (
    <Link to={`/albums/toto`}>
      <h3 className="title">Album title</h3>
      <img
        className="cover"
        src="https://s1.qwant.com/thumbr/0x380/3/e/38241f096fcbc253212fd57ad2acbab0a7fdf0eab51d8e9790ab3f01027e75/default.jpeg?u=https%3A%2F%2Flargeasse.fr%2Fwp-content%2Fuploads%2F2015%2F05%2Fdefault.jpeg&q=0&b=1&p=0&a=1"
        alt=""
      />
    </Link>
  );
}

export default CardAlbum;
