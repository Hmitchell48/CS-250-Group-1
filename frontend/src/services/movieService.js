// frontend/src/services/movieService.js

import api from './api'; // Import our pre-configured api client

// Function to get a list of all currently playing movies
export const getMovies = () => {
  // .get('/movies/') will make a GET request to 'http://127.0.0.1:8000/api/movies/'
  return api.get('/movies/');
};

// Function to get the details for a single movie (e.g., by its ID)
export const getMovieById = (id) => {
  return api.get(`/movies/${id}/`);
};

// Function to get showtimes for a specific movie
export const getShowtimes = (movieId) => {
  return api.get(`/movies/${movieId}/showtimes/`);
};

// You can add all other movie-related API calls here