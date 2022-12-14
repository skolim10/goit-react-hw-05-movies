import { NavLink } from 'react-router-dom';
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
  );
};
