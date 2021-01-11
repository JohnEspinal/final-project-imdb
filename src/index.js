const express = require("express");
const app = express();


const getMovies = require('./routes/getMovies');

app.get('/', getMovies);

app.listen(3001, () => console.log('Listening on port 3001'));

