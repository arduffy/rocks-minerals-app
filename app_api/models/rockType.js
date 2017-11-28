var mongoose = require('mongoose');

var RockTypeSchema = new mongoose.Schema({
    type: String
})

mongoose.model('RockTypeData', RockTypeSchema, 'RockTypeData');