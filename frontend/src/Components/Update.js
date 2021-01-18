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

export default class MovieFormUpdate extends React.Component {
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

  update = () => {
    const data = {
      title: 'titanic 3',
      description:
        'fue un transatlántico británico, el mayor barco de pasajeros del mundo al finalizar su construcción, que se hundió durante la noche del 14 y la madrugada del 15 de abril de 1912 durante su viaje inaugural desde Southampton a Nueva York. En el hundimiento del Titanic murieron 1496 personas de las 2208 que iban a bordo, lo que convierte a esta catástrofe en uno de los mayores naufragios de la historia ocurridos en tiempos de paz. Siendo construido entre 1909 y 1912 en los astilleros de Harland & Wolff de Belfast, el Titanic constituía el segundo buque de un trío de grandes transatlánticos (siendo el primero el RMS Olympic y el tercero el HMHS Britannic), los cuales eran propiedad de la compañía naviera White Star Line, conocidos como la clase Olympic.,',
      movieReleaseDate: 2011,
      cast: ['Leonardo Di Caprio', 'Rose'],
      genre: ['action', ' romance'],
      languages: ['español', ' ingles'],
    };
    axios
      .put('http://localhost:3001/movies/edit/600613d4fde07717881f3232', data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const {
      title, description, cast, languages, postedDate,
    } = this.state;
    return (
      <div className="form">
        <form onSubmit={this.update}>
          <h1>Edit Movie</h1>
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
