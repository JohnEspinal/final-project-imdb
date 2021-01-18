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
          <a href="/movies/add">Home</a>
        </li>
        <li>
          <a href="/">Movies</a>
        </li>
         <li>
          <a href="/movies/edit/id">Edit</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
