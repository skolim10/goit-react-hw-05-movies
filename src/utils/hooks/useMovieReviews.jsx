import { getMovieReviews } from '../Api/Api';
import { useState, useEffect } from 'react';

export const useMovieReviews = movieId => {
  const [movieReviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(ret => setReviews(ret));
  }, [movieId]);
  return { movieReviews };
};
