var mongoose = require('mongoose');

var RockSchema = new mongoose.Schema({
    type: String,
    name: String,
    major: String,
    minor: String,
    color: String
});

mongoose.model('RockData', RockSchema, 'RockData');