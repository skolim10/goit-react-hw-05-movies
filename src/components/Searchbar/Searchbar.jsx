import { moviesSearch } from '../../utils/Api/Api';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Searchbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const handleSubmit = e => {
    setSearchParams({ query: e.target[0].value });
    e.preventDefault();
    return;
  };

  useEffect(() => {
    const movTitle = searchParams.get('query');
    if (movTitle) {
      moviesSearch(movTitle).then(ret => setMovies(ret));
    }
  }, [searchParams]);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: '20px',
        }}
      >
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </div>
  );
};
