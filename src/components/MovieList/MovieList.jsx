import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li
          key={movie.id}
          to={`/movies/:${movie.id}`}
          state={{ from: Location }}
        >
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
