import React from 'react';
import { Link, Router } from '@reach/router';
import ReactDom from 'react-dom';
import MovieForm from './MovieForm';
import NavBar from './NavBar';
import Results from './Results';
import Delete from './Results';
import MovieFormUpdate from './Update';

const App = () => (
  <>
    <NavBar />
    <Router>
      <MovieForm path="/movies/add" />
      <Results path="/" />
      <MovieFormUpdate path="/movies/edit/id" />
      <Delete path="/movies/delete/id" />
    </Router>
  </>
);

ReactDom.render(<App />, document.getElementById('root'));
