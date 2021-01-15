import React from 'react';
import MovieIcon from '../icons/Movie';

const NavBar = () => (
  <header className="headerr">
    <div className="logo">
      IMDB
      <MovieIcon />
    </div>
    <nav className="menu">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/About">Movies</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
