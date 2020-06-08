const passport = require('passport');
const mongoose = require('mongoose');

const Movie = mongoose.model('movies');

module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/movies');
        }
    );

    app.get(
        '/api/current_user', (req, res) => {
          res.send(req.user);
        }
    );

    app.get(
        '/api/logout', (req, res) => {
          req.logout();
          res.send(req.user);
        }
    );

    app.get(
        '/', (req, res) => {
            res.send({'well': 'hello'});
        }
    );

    app.get(
        '/createMovie', (req, res) => {
            res.send({'title': 'Back to the Future'});
        }
    );

    app.post('/api/sendMovie', function(req, res) {
        console.log('MOVIE', req.body.data);
        let myMovie = new Movie ({ _id: new mongoose.Types.ObjectId(), ...req.body.data });
        myMovie.save()
            .then(item => {
                res.send("Name saved to database");
            })
            .catch(err => {
                res.status(400).send("Unable to save to database");
            });
    });

    // app.get('/api/moviesList', function(req, res) {
        //     Movie.find({}, function(err, movies) {
        //         let movieMap = {};
        //
        //         movies.forEach(function(movie) {
        //             if (movie.title) {
        //                 movieMap[movie._id] = movie;
        //             }
        //         })
        //             .then(item => {
        //             res.send(movieMap);
        //         })
        //             .catch(err => {
        //                 res.status(400).send("Unable to get from database")
        //             })
        //     });
        // });

    app.get('/api/moviesList', async (req, res) => {

        const movies = await Movie.find({});

        const movieMap = {};
        movies.forEach((movie) => {
            if (movie.title) {
               movieMap[movie._id] = movie;
            }
        });

        res.send(movieMap);

    });
};
