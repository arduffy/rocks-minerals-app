var request = require('request');

var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(JSON.parse(content));
}

module.exports.getImage = function(req, res)
{
    console.log("Retrieving Key Store Values");
    
    var searchTerm = req.params.searchTerm;
    
    var googleurl='https://www.googleapis.com/customsearch/v1' +
    process.env.GOOGLE_KEY + '&cx=' + '&searchType=image&q=' + encodeURIComponent(searchTerm);
    
    request(googleurl, function(error, response, body){
        sendJSONresponse(res, "200", body);
    });
}