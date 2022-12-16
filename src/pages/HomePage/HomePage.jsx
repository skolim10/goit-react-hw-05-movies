import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
// import { useEffect } from 'react';
import { getMoviesTrending } from 'utils/Api/Api';
import { useTrendList } from '../utils/hooks/useTrendList';

export const HomePage = () => {
  const { trendMovies } = useTrendList();

  return (
    <div>
      <MoviesList movies={trendMovies} />
    </div>
  );
};

// export default HomePage();
