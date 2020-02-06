const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: Number,
    name: String
});

mongoose.model('users', userSchema);
