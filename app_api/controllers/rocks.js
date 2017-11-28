var mongoose = require('mongoose');
var RockData = mongoose.model('RockData');

//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
}

/* GET all AirportData records */
module.exports.rocksReadAll = function(req, res)
{
  console.log("Finding all Rock Data Records", req);
  
  RockData
    .find({})
    .exec(function(err, rockData){
      if(err){
        console.log(err);
        sendJSONresponse(res, 404, err);
      }
      console.log(RockData);
      sendJSONresponse(res, 200, RockData);
    });
}