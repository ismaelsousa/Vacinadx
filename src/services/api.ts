import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6293735a7aa3e6af1a0b8d85.mockapi.io/api',
});

export default api;
