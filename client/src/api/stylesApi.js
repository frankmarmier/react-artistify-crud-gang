import axios from 'axios';

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + '/styles',
  withCredentials: true, // Pour envoyer le cookie au backend lors d'une requete.
});

export default {
  service,
  getAllStyles() {
    return service.get('/');
  },
};
