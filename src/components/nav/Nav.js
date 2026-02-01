import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './nav.scss';



export const Nav = ({stateLogIn}) => {
  return (
    <nav className="nav">
        <NavLink to="/" className="nav__link">ToDo</NavLink>
        <NavLink to="/singIn" className="nav__link">{stateLogIn ? "Profile" : "Sing In"} </NavLink>
        <NavLink to="/tetris" className="nav__link">Tetris</NavLink>
    </nav>
  );
}