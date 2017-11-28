var mongoose = require('mongoose');

var MineralSchema = new mongoose.Schema({
    type: String,
    name: String,
    hardness: String,
    streak: String,
    luster: String
})

mongoose.model('MineralData', MineralSchema, 'MineralData');