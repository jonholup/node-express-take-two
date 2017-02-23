var express = require('express'); // we're going to need express for router
var router = express.Router(); // grab a bunch of routes and package them up
var fishiesList = [{name: 'walleye'}, {name: 'shrimp'}, {name: 'muskellunge'}]


router.get('/', function(req, res) {
    console.log('req: ', req);
    res.send(fishiesList);
});
// handle the request for the first fish
router.get('/first', function(req, res) {
    res.send(fishiesList[0]);
});
// handle request for the name of the first fish
router.get('/first/name', function(req, res) {
    res.send(fishiesList[0].name);
});

// handle request for last fish
router.get('/last', function(req, res) {
    var lastIndex = fishiesList.length - 1;
    res.send(fishiesList[lastIndex]);
});
// handle request for the name of the last fish
router.get('/last/name', function(req, res) {
    var lastIndex = fishiesList.length - 1;
    res.send(fishiesList[lastIndex].name);
});

router.post('/new', function(req, res) {
    var newFish = req.body; // see line 8 (also from data from client.js line 30)
    fishiesList.push(newFish);
    res.sendStatus(200);
});

module.exports = router;
