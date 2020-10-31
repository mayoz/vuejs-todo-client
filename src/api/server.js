import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_API_HOST;

export default {
  fetch() {
    return axios
      .get('/v1/todos')
      .then(({ data }) => data);
  },
  store(text) {
    return axios
      .post('/v1/todos', { text })
      .then(({ data }) => data);
  },
  toggle(id) {
    return axios
      .post(`/v1/todos/${id}/toggle`)
      .then(({ data }) => data);
  },
  destroy(id) {
    return axios
      .delete(`/v1/todos/${id}`)
      .then(({ data }) => data);
  },
};
