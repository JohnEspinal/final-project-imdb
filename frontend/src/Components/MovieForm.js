/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import 'regenerator-runtime/runtime';

export default class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      movieReleaseDate: '',
      cast: [],
      genre:[],
      languages: [],
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async (e) => {
    const data = {
      title: 'avengers',
      description: '23 días después de que Thanos usara el Guantelete del Infinito para desintegrar la mitad de la vida en el universo, Carol Danvers rescata a Tony Stark y Nebula del espacio profundo y los devuelve a la Tierra, donde se reúnen con los Vengadores restantes: Bruce Banner, Steve Rogers, Thor, Natasha Romanoff, James Rhodes, y Rocket. Al ubicar a Thanos en un planeta deshabitado, planean usar las Gemas del Infinito para revertir "el chasquido", pero Thanos revela que destruyó las Gemas para evitar un uso posterior. Enfurecido, Thor decapita a Thanos.',
      movieReleaseDate: 2012,
      cast: ['Chris Evans', 'Robert Downey Jr.'],
      genres: ['action'],
      languages: ['espanol ', ' ingles'],
    };
    e.preventDefault();
    try {
      await axios
        .post('http://localhost:3001/movies/add', data)
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const {
      title, description, cast, languages, postedDate,
    } = this.state;
    return (
      <div className="form">
        <form onSubmit={this.submitHandler}>
          <h1>Create Movie</h1>
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
            <p>Date</p>
            <input
              type="date"
              name="date"
              value={postedDate}
              onChange={this.changeHandler}
            />
          </div>
          <div>
          <div>
            <p>Cast</p>
            <input
              type="text"
              name="cast"
              value={cast}
            />
          </div>
          <div>
            <p>Genre</p>
            <select>
              <option value="romance">Romance</option>
              <option value="accion">Accion</option>
              <option value="terror">Terror</option>
              <option value="horror">horror</option>
            </select>
          </div>
          <div>
            <p>Languages</p>
            <select>
              <option value="espanol">Español</option>
              <option value="ingles">Ingles</option>
            </select>
          </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
