var mongoose = require('mongoose');
var MineralData = mongoose.model('MineralData');

//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
}

/* GET all mineral data records */
module.exports.mineralsReadAll = function(req, res)
{
  console.log("Finding all Mineral Data Records", req);
  
  MineralData
    .find({})
    .exec(function(err, minerals){
      if(err){
        console.log(err);
        sendJSONresponse(res, 404, err);
      }
      console.log(minerals);
      sendJSONresponse(res, 200, minerals);
    });
}


module.exports.mineralsReadOne = function(req, res) {
    console.log('Finding Minerals Record', req.params);
    if (req.params && req.params.type) {
        MineralData
            .find({
                type: req.params.type
            })
            .exec(function(err, mineralData) {
                if (!mineralData) {
                    sendJSONresponse(res, 404, {
                        "message": "type not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(mineralData);
                sendJSONresponse(res, 200, mineralData);
            });
    }
    else {
        console.log('No type specified');
        sendJSONresponse(res, 404, {
            "message": "No type in request"
        });
    }
};
