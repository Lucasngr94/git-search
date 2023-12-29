import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sua-api.com',
});

export default api;