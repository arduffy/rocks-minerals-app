// var request = require('request');

// var sendJSONresponse = function(res, status, content)
// {
//     res.status(status);
//     res.json(JSON.parse(content));
// }

// module.exports.getImage = function(req, res)
// {
//     console.log("Retrieving Key Store Values");
    
//     var searchTerm = req.params.searchTerm;
    
//     var googleurl='https://www.googleapis.com/customsearch/v1' +
//     process.env.GOOGLE_KEY + '&cx=001849778089270113199:pzwm2w68mlm' + '&searchType=image&q=' + encodeURIComponent(searchTerm);
    
//     request(googleurl, function(error, response, body){
//         sendJSONresponse(res, "200", body);
//     });
// }

// 'use strict';

var request = require('request');
//require('request').debug = true;

module.exports.getSearchResults = function (req, res) {
    function constructUrl() {
        var host = 'https://www.googleapis.com/customsearch/v1',
            args = {
                'cx' : process.env.GOOGLE_CSE_KEY,
                'key': process.env.GOOGLE_API_KEY,
                'q'  : req.params.search_term,
                'num': req.params.result_count
            },
            params = ('?cx=' + args.cx + '&q=' + args.q + '&num=' + args.num + '&key=' + args.key);

        return host + params;
    }

    request.get(constructUrl(), function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.type('application/javascript');
            res.jsonp({
                'statusCode': 200,
                'items'     : JSON.parse(body).items
            });
        } else {
            console.error(error);
        }
    });
};