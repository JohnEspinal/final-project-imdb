import React from "react";
import { Link, Router } from "@reach/router";
import ReactDom from "react-dom";
import MovieForm from "./MovieForm";
import NavBar from "./NavBar";
import Results from "./Results";

const App = () => (
  <>
    <NavBar />
    <Router>
      <MovieForm path="/movies/add" />
      <Results path="/" />
    </Router>
  </>
);

ReactDom.render(<App />, document.getElementById("root"));
