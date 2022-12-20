import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import styled from 'styled-components';
import css from './Navbar.module.css';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;

export const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
          <StyledLink className={css.link} to="/" end>
            Home
          </StyledLink>
          <StyledLink className={css.link} to="/movies">
            Movies
          </StyledLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
