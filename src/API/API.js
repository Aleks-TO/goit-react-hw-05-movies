import axios from 'axios';

const API_KEY = '765fa75ee0972c26c0b9ad6817839aee';
const BASE_URL = 'https://api.themoviedb.org/3/';
const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjVmYTc1ZWUwOTcyYzI2YzBiOWFkNjgxNzgzOWFlZSIsInN1YiI6IjY0YTQ2ZjIyNWE5OTE1MDEzYTIyNGU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kTzImYoi0NH-VcBnMYcagAm7QgPMyRBJdgFocCvXL9U',
  },
};

const getTrandingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?language=en-US`,
    OPTIONS
  );
  const data = response.data;
  return data;
};

const getSearchMovieByName = async queryName => {
  const response = await axios.get(
    `${BASE_URL}search/movie?query=${queryName}&page=1`,
    OPTIONS
  );
  const data = response.data;
  return data;
};

const getMovieDetails = async movieId => {
  const response = await axios.get(`${BASE_URL}movie/${movieId}`, OPTIONS);
  const data = response.data;
  return data;
};

const getMovieCast = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/credits`,
    OPTIONS
  );
  const data = response.data;
  return data;
};

const getMovieReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews`,
    OPTIONS
  );
  const data = response.data;
  return data;
};

export {
  getTrandingMovies,
  getSearchMovieByName,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
};
