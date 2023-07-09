import { Route, Routes, Navigate } from 'react-router-dom';
import React, { lazy } from 'react';

import Movies from './pages/Movies';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
// // const PageNotFound = lazy(() => import('./pages/pageNotFound'));
// const Movies = lazy(() => import('./pages/Movies'));
// const Layout = lazy(() => import('./Layout/Layout'));
// const Home = lazy(() => import('./pages/Home'));
// const MovieDetails = lazy(() => import('./pages/MovieDetails'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
      {/* <Route path="*" element={<PageNotFound} /> */}
    </Routes>
  );
};
