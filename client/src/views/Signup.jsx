import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// custom tools
// IconAvatar est un widget qui permet de maquiller l'affichage par défaut d'un input type file.
import IconAvatar from '../components/icon/IconAvatar';

import UserContext from '../components/Auth/UserContext';
import authAPI from '../api/authApi';

class Signup extends Component {
  // Ici on souscrit au contexte, on a accès à toutes les valeurs
  // exposées par le context via this.context
  static contextType = UserContext;

  state = {
    avatar: '',
    tmpAvatar: '',
    email: '',
    password: '',
    username: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Pour pouvoir envoyer des fichiers il faut transformer,
    // la donnée qu'on envoie en FormData avant gerée pour nous avec
    //  enctype= multipart/form-data

    // https://developer.mozilla.org/en-US/docs/Web/API/FormData
    const fd = new FormData();
    // La form data vient avec un methode qui prend en premier parametre une clé,
    //  et en 2e parametre la valeur qu'on veut attribuer à cette clé.

    // Pour eviter de marquer .append sur chacun de nos states, on peut boucler autour
    // du state du composant et append chaque clé avec sa valeur
    // for(let key in this.state){
    //   fd.append(key,this.state[key])
    // }

    fd.append('email', this.state.email);
    fd.append('avatar', this.state.avatar);
    fd.append('password', this.state.password);
    fd.append('username', this.state.username);
    authAPI
      .signup(fd)
      .then((apiRes) => {
        this.context.setUser(apiRes.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({
      [key]: value,
    });
  };

  handleImage = (event) => {
    this.setState({
      avatar: event.target.files[0],
      // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
      // Nous permet de créer une URL temporaire qu'on peut inserer dans une balise <img  src={urlTemporaire}/>
      // Pour pouvoir avoir une preview de l'image avant de soumettre le <form> au backend.
      tmpAvatar: URL.createObjectURL(event.target.files[0]),
    });
  };

  render() {
    const { email, password, username, tmpAvatar } = this.state;
    return (
      <React.Fragment>
        <form className="form" onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <h1 className="title">Signup</h1>
          <label className="label" htmlFor="email">
            email
          </label>
          <input className="input" id="email" type="email" name="email" defaultValue={email} />
          <label className="label" htmlFor="username">
            username
          </label>
          <input
            clasissName="input"
            id="username"
            type="text"
            name="username            "
            defaultValue={username}
          />
          <label className="label" htmlFor="avatar">
            avatar
          </label>

          <IconAvatar avatar={tmpAvatar} clbk={this.handleImage} />

          <label className="label" htmlFor="password">
            password
          </label>
          <input
            className="input"
            id="password"
            type="password"
            name="password"
            defaultValue={password}
          />
          <button className="btn">ok</button>
        </form>
        <p className="parag">
          Already a member ? please{' '}
          <Link to="/signin" className="link">
            signin
          </Link>
        </p>
      </React.Fragment>
    );
  }
}

export default Signup;
