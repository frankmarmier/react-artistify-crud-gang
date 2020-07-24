import axios from 'axios';

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + '/albums',
});

export default {
  service,
  getAllAlbums() {
    return service.get('/');
  },
  getOneAlbum(id) {
    return service.get(`/${id}`);
  },
  createOneAlbum(data) {
    return service.post('/', data);
  },
  updateOneAlbum(id, data) {
    return service.patch(`/${id}`, data);
  },
  deleteOneAlbum(id) {
    return service.delete(`/${id}`);
  },
};
