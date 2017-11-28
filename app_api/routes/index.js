var express = require('express');
var router = express.Router();
var ctrlMineralData    = require('../controllers/minerals');
var ctrlRockData     = require('../controllers/rocks');

router.get('/minerals', ctrlMineralData.mineralsReadAll);
router.get('/minerals/:type', ctrlMineralData.mineralsReadOne);

router.get('/rocks', ctrlRockData.rocksReadAll);


module.exports = router;
