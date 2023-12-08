const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String, // what datatype this is expecting
        required: true, // default to false.
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true // duplicate emails will throw an error response.
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);