import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useMovieDetails } from 'utils/hooks/useMovieDetails';
import css from './MovieDetailPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { movieDetails } = useMovieDetails(movieId);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <div className={css.movieOverview}>
      <div className={css.overviewLeft}>
        <Link className={css.link} to={backLinkHref}>
          {' '}
          <button type="button">Go back</button>
        </Link>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt="{movieDetails.original_title}"
          className={css.movieImg}
        />
      </div>
      <div className={css.movieDetails}>
        <h2 className={css.movieTitle}>
          {movieDetails.title} ({' '}
          {movieDetails.release_date
            ? movieDetails.release_date.substring(0, 4)
            : ''}{' '}
          )
        </h2>
        <p className={css.movieScore}>
          User Score:{' '}
          {movieDetails.vote_average
            ? Math.fround(movieDetails.vote_average * 10).toFixed(0)
            : ''}
          %
        </p>
        <h3 className={css.reviewHeader}>Overview</h3>
        <p className={css.reviewText}>{movieDetails.overview}</p>
        <h3 className={css.genresHeader}>Genres</h3>
        <ul className={css.genresList}>
          {movieDetails.genres?.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <p>Additional information</p>

        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
