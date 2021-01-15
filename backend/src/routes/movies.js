const router = require('express').Router();
const MovieModel = require('../models/movie');



router.get('/', (req, res) => {
    res.send("Hello!");
    //res.send("Hello world! I'm a containerized app!!");
})

/*const createMovie = (res, req) =>{
    const movie = req.body;

    const newMovie = new MovieModel(movie);

    try {
        newMovie.save();

        res.status(201).json(newMovie);


    } catch (error) {
        res.status(409).json({ message: error.message});
    }
};*/


module.exports = router;

