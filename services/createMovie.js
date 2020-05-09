const mongoose = require('mongoose');

const Movie = mongoose.model('movies');

var testMovie = new Movie({
    _id: new mongoose.Types.ObjectId(), name: 'name'
});

testMovie.save(function(err) {
    if (err) throw err;
    console.log('movie successfully saved.');
    // new Movie ({ _id: new mongoose.Types.ObjectId(), name: 'name', director: 'lol' });
});

/*
newMovie.save(function(err) {
    if (err) throw err;

    console.log('Author successfully saved.');

    var mvcBook = new Movie {
            _id: new mongoose.Types.ObjectId(),
            title: 'ASP.NET MVC 5 with Bootstrap and Knockout.js',
            author: jamieAuthor._id,
            ratings:[{
                summary: 'Great read'
            }]
    };
* */
