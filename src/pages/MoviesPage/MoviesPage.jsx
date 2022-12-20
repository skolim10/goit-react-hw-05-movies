import { Searchbar } from 'components/Searchbar/Searchbar';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  return (
    <div className={css.searchForm}>
      <Searchbar />
    </div>
  );
};

export default MoviesPage;
