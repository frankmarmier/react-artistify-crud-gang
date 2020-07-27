import axios from 'axios';

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + '/auth',
  withCredentials: true, // Pour envoyer le cookie au backend lors d'une requete.
});

export default {
  service,
  signin(data) {
    return service.post('/signin', data);
  },

  signup(data) {
    return service.post('/signup', data);
  },

  isLoggedIn() {
    return service.get('/is-loggedin');
  },
  signout(){
      return service.get("/signout")
  }
};
