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
        console.log('node', req.body);
        let myMovie = new Movie ({ _id: new mongoose.Types.ObjectId(), ...req.body });
        myMovie.save()
            .then(item => {
                res.send("Name saved to database");
            })
            .catch(err => {
                res.status(400).send("Unable to save to database");
            });
    })
};
