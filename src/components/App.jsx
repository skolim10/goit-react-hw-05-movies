import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Navbar } from './Navbar/Navbar.jsx';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     // display: 'flex',
    //     justifyContent: 'Left',
    //     alignItems: 'Left',
    //     marginBottom: '20px',
    //     // fontSize: 40,
    //     color: 'black',
    //   }}
    // >
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    /* </div> */
  );
};
