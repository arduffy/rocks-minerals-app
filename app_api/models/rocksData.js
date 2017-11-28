var mongoose = require('mongoose');

var rockSchema = new mongoose.Schema({
    type: String,
    name: String,
    major: String,
    minor: String,
    color: String
});

mongoose.model('RockData', rockSchema, 'rocks');