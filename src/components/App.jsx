import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header/Header';
import Cast from './Cast/Cast';
import Layout from './Layout/Layout';
import MovieInfo from './MovieInfo/MovieInfo';
import MovieList from './MovieList/MovieList';
import Reviews from './Reviews/Reviews';
import SearchMovies from './SearchMovies/SearchMovies';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};
