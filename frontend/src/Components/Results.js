/* eslint-disable no-underscore-dangle */
import axios from "axios";
import React from "react";
import { Link } from "@reach/router";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: false,
    };
  }

  async componentDidMount() {
    const url = "http://localhost:3001/movies";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    this.setState({ isLoading: true, movies: data });
  }

  render() {
    const { movies } = this.state;
    return (
      <Link to="/">
        <div>
          {movies.map((item) => (
            <>
              <h1 className="titles" key={item._id}>
                {item.title}
              </h1>
              <p className="description" key={item._id}>
                {item.description}
              </p>
            </>
          ))}
        </div>
      </Link>
    );
  }
}

export default Results;
