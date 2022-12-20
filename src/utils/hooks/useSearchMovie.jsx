import { moviesSearch } from '../Api/Api';
import { useState, useEffect } from 'react';

export const useSearchMovies = input => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesSearch(input).then(ret => setMovies(ret));
  }, [input]);
  return { movies };
};
