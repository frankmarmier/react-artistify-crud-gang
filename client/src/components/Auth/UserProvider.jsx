import React from 'react';
import UserContext from './UserContext';
import authApi from '../../api/authApi';

class UserProvider extends React.Component {
  state = {
    user: null,
    isLoading: true,
  };

  componentDidMount() {
    // Quand l'application est initialisée, (quand on rentre sur la page) ou quand on rafraichit la page.
    // Le state du user est null, pour savoir si un utilisateur est connecté, on peut se servir de la session
    // dans le backend.
    // Si un utilisateur se trouve dans la session, on renvoit l'objet de l'utilsateur qu'on insere dans le state.

    /**
    *  => Route backend 
     router.get('/is-loggedin', (req, res, next) => {
       if (req.session.currentUser) {
         res.status(200).json(req.session.currentUser);
       } else {
         res.status(401).json({ message: 'Unauthorized' });
       }
     });
    */
    authApi
      .isLoggedIn()
      .then((apiRes) => {
        this.setState({
          user: apiRes.data,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
        });
      });
  }

  setUser = (user) => {
    this.setState({ user });
  };

  removeUser = () => {
    authApi
      .signout()
      .then(() => {
        this.setState({ user: null });
      })
      .catch((error) => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    // Objet qu'on passe à la prop value qui expose le state à tous les components qui y souscrivent.
    // Soit avec <UserContext.Consumer>
    // Soit avec static contextType = UserContext
    const authValues = {
      user: this.state.user,
      setUser: this.setUser,
      isLoading: this.state.isLoading,
      removeUser: this.removeUser,
    };
                                  // Le nom de la prop est value, et pas autre chose
    return <UserContext.Provider value={authValues}>{this.props.children}</UserContext.Provider>;
  }
}

export default UserProvider;
