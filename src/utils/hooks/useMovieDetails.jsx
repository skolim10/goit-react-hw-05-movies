import { getMovieDetails } from '../Api/Api';
import { useState, useEffect } from 'react';

export const useMovieDetails = movieId => {
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    getMovieDetails(movieId).then(movieData => setMovieDetails(movieData));
  }, [movieId]);

  return { movieDetails };
};
