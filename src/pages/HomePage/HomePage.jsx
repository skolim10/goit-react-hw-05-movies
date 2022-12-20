import { MoviesList } from 'components/MoviesList/MoviesList';
import { useTrendList } from 'utils/hooks/useTrendList';

const HomePage = () => {
  const { trendMovies } = useTrendList();

  return (
    <div>
      <h2>Trending today</h2>
      <MoviesList movies={trendMovies} />
    </div>
  );
};

export default HomePage;
