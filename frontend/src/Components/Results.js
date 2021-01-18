/* eslint-disable react/no-unused-state */
/* eslint-disable space-before-blocks */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React from 'react';
import { Link } from '@reach/router';
import TrashIcon from '../icons/Trash';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const url = 'http://localhost:3001/movies';
    const resp = await fetch(url);
    const data = await resp.json();
    this.setState({ isLoading: true, movies: data });
  }

  delete(_id) {
    fetch(`http://localhost:3001/movies/delete/${_id}`, {
      method: 'DELETE',
      // headers:{
      //   'content-Type':'application/json'
      // },
    }).then((result) => {
      result.json().then((resp) => {
        alert('movie has been delete');
        this.getData();
      });
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h1>Movies list</h1>
        <div>
          <table cellSpacing="30" border="1 solid black">
            <thead>
              <tr>
                <th>Title</th>
                <th> Description </th>
                <th>Cast</th>
                <th>Languages</th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((item, i) => (
                <tr>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.cast}</td>
                  <td>{item.languages}</td>
                  <td>
                    <Link to={`/movies/edit/id`}>Edit</Link>
                  </td>
                  <span onClick={() => this.delete(item._id)}>
                    <TrashIcon>delete</TrashIcon>
                  </span>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Results;
