import { NavLink } from 'react-router-dom';
import './nav.scss';

export const Nav = () => {
  return (
    <nav className="nav">
        <NavLink to="/" className="nav__link">ToDo</NavLink>
        <NavLink to="/singIn" className="nav__link">Sing In</NavLink>
        <NavLink to="/tetris" className="nav__link">Tetris</NavLink>
    </nav>
  );
}