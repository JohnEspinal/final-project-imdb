const MovieModel = require('../models/movie');

const getMovies = (req, res) => {
    
    res.send("Hello world! I'm a containerized app!!");
};

const createMovie = (res, req) =>{
    const movie = req.body;

    try {
        const newMovie = new MovieModel(movie)
    } catch (error) {
        
    }
};


module.exports = getMovies;

