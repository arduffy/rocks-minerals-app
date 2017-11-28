var mongoose = require('mongoose');

var MineralTypeSchema = new mongoose.Schema({
    type: String
})

mongoose.model('MineralTypeData', MineralTypeSchema, 'MineralTypeData');