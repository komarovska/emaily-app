const express = require('express');
const mongoose = require('mongoose');

const Movie = mongoose.model('movies');

const apiRouter = express.Router();

apiRouter.post('/sendMovie', (req, res) => {
    console.log('api', req.body);
    let myMovie = new Movie ({ _id: new mongoose.Types.ObjectId(), ...req.body });
    myMovie.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

module.exports = apiRouter;
