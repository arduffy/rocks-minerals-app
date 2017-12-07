var mongoose = require('mongoose');
var RockData = mongoose.model('RockData');
var RockType = mongoose.model('RockTypeData')

//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
}

/* GET all rock data records */
module.exports.rocksReadAll = function(req, res)
{
  console.log("Finding all Rock Data Records", req);
  
  RockData
    .find({})
    .exec(function(err, rocks){
      if(err){
        console.log(err);
        sendJSONresponse(res, 404, err);
      }
      console.log(rocks);
      sendJSONresponse(res, 200, rocks);
    });
}

//get all rock type data records
module.exports.rockTypesReadAll = function(req, res)
{
  console.log("Finding all Rock Type Data Records", req);
  
  RockType
    .find({})
    .exec(function(err, rockTypes){
      if(err){
        console.log(err);
        sendJSONresponse(res, 404, err);
      }
      console.log(rockTypes);
      sendJSONresponse(res, 200, rockTypes);
    });
}

//get specific rock data by type
module.exports.specificRockType = function(req, res)
{
  console.log("Finding rocks by type", req.params);
  if(req.params && req.params.type){
  
  RockData
    .find({type: req.params.type})
    .exec(function(err, rockdatabytype){
      if(err){
        console.log(err);
        sendJSONresponse(res, 404, err);
        return;
      }
      console.log(rockdatabytype);
      sendJSONresponse(res, 200, rockdatabytype);
    });
  }
}
