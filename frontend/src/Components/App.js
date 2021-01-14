import React from "react";
import ReactDom from "react-dom";
import MovieForm from "./MovieForm";

const App = () => <MovieForm />;

ReactDom.render(<App />, document.getElementById("root"));
