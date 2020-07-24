import axios from 'axios';

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + '/styles',
});

export default {
  service,
  getAllStyles() {
    return service.get('/');
  }
};
