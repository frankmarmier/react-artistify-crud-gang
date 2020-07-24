import React from 'react';
// custom tools
import CardArtist from '../components/card/CardArtist';
import artistApi from '../api/artistApi';

// styles
import '../styles/card.css';

class Artists extends React.Component {
  state = {
    artists: [],
  };

  componentDidMount() {
    artistApi
      .getAllArtists()
      .then((apiRes) => {
        console.log(apiRes.data);
        this.setState({ artists: apiRes.data });
      })
      .catch((err) => console.log(err));
  }

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
