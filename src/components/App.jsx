import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar.jsx';
import { HomePage } from '../pages/HomePage/HomePage.jsx';
// import MovieDetailsPage from '../pages/MovieDetailsPage';
import { MoviesPage } from '../pages/MoviesPage/MoviesPage.jsx';
// import NotFound from '../pages/NotFound';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'Left',
        alignItems: 'Left',
        // fontSize: 40,
        color: 'black',
      }}
    >
      <Navbar />
      {/* <HomePage /> */}
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  );
};
