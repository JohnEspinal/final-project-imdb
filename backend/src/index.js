const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const movieRouter = require('./routes/movies.js');

app.use(bodyparser.json({ extended: false}));

app.use('/posts', movieRouter);

//const movie = require('./routes/movies.js');

//app.get('/', movie.getMovies());


const PORT = process.env.PORT || 3001;
const CONNECTION_URL = 'mongodb+srv://finalprojectuser:finalprojectuser@cluster0.q90d4.mongodb.net/<dbname>?retryWrites=true&w=majorityCopy';

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);