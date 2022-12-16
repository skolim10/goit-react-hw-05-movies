import { getMoviesTrending } from '../../utils/Api/Api';
import { useState, useEffect } from 'react';

export const useTrendList = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    getMoviesTrending().then(ret => setTrendMovies(ret));
  }, []);

  return { trendMovies };
};
