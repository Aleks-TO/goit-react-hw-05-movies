import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { getTrandingMovies } from 'API/API';
import MovieList from 'components/MovieList/MovieList';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    getTrandingMovies()
      .then(data => setTrendingMovies(data))
      .finally(showLoader(false));
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
