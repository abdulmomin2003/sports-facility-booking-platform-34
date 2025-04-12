
import axios from 'axios';

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Default port for Node.js apps, adjust if your server runs on a different port
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the token in requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add a response interceptor to handle common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
