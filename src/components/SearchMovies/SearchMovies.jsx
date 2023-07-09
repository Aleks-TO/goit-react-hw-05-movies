import { useState } from 'react';
import css from '../SearchMovies/SearchMovies.module.css';

const SearchMovies = ({ onSubmit, value }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      return <div>Please input name for searching movies</div>;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={css.input}
        value={query}
        onChange={handleChange}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />

      <button className={css.button} type="submit">
        search
      </button>
    </form>
  );
};

export default SearchMovies;
