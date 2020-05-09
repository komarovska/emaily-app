const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
    id: Number,
    title: String,
    director: String,
});

mongoose.model('movies', movieSchema);
