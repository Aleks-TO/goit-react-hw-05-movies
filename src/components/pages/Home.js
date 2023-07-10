import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { getTrandingMovies } from 'API/API';
import MovieList from 'components/MovieList/MovieList';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    const loadMovies = async () => {
      try {
        const data = await getTrandingMovies();
        setTrendingMovies(data.results);

        setShowLoader(false);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };
    loadMovies();
    // console.log(trendingMovies);
  }, []);

  return (
    <div>
      {showLoader && <Loader />}
      <h2>Trending Movies</h2>
      <MovieList movies={trendingMovies} />
    </div>
  );
}
export default Home;
