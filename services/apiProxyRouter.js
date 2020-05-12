const express = require('express');
const mongoose = require('mongoose');

const Movie = mongoose.model('movies');

const apiRouter = express.Router();

// apiRouter.post('/sendMovie', (req, res) => {
//     console.log('api', req.body);
//     let myMovie = new Movie ({ _id: new mongoose.Types.ObjectId(), ...req.body });
//     myMovie.save()
//         .then(item => {
//             res.send("Name saved to database");
//         })
//         .catch(err => {
//             res.status(400).send("Unable to save to database");
//         });
// });
//
// apiRouter.get('/moviesList', async (req, res) => {
//
//     const movies = await Movie.find({});
//
//     const movieMap = {};
//     movies.forEach((movie) => {
//         movieMap[movie._id] = movie;
//     });
//
//     res.send(movieMap);
//
// });

// apiRouter.get('/getMovies', (req, res) => {
//     backendApi.getSchema()
//         .then((r) => {
//             res.send(r.data);
//         })
//         .catch(
//             (e) => {
//                 res.status(e.response.status || 500).send(e.response.data);
//             },
//         );
// });

module.exports = apiRouter;
