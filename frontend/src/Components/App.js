import React from 'react';
import ReactDom from 'react-dom';
import MovieForm from './MovieForm';
import NavBar from './NavBar';

const App = () => (
  <>
    <NavBar />
    <MovieForm />
  </>
);

ReactDom.render(<App />, document.getElementById('root'));
