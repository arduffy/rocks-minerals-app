var request = require('request');

var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(JSON.parse(content));
}

module.exports.getImage = function(req, res)
{
    console.log("Retrieving Key Store Values");
    
    var searchTerm = req.params.name;
    
    var flickrurl='https://api.flickr.com/search/' + process.env.FLICKR_KEY + '/' + searchTerm;
    
    request(flickrurl, function(error, response, body){
        sendJSONresponse(res, "200", body);
    });
}