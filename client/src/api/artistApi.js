import axios from 'axios';

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + '/artists',
});

export default {
  service,
  getAllArtists() {
    return service.get('/');
  },
  getOneArtist(id) {
    return service.get(`/${id}`);
  },
  createOneArtist(data) {
    return service.post('/', data);
  },
  updateOneArtist(id, data) {
    return service.patch(`/${id}`, data);
  },
  deleteOneArtist(id) {
    return service.delete(`/${id}`);
  },
};
