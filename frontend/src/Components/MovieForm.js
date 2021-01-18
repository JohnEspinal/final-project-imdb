/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import "regenerator-runtime/runtime";

export default class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      cast: [],
      languages: [],
      Date: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSelect = (e) => {
    const LOl = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < e.length; i++) {
      LOl.push(e[i].value);
    }
    this.setState.languages(LOl);
  };

  submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:3001/movies/add", this.state)
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { title, description, cast, languages, postedDate } = this.state;
    return (
      <div className="form">
        <form onSubmit={this.submitHandler}>
          <div>
            <p>Title</p>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <p>Description</p>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div />
          <div>
            <p>Date</p>
            <input
              type="date"
              name="date"
              value={postedDate}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
