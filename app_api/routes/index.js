var express = require('express');
var router = express.Router();
var ctrlMineralData    = require('../controllers/minerals');
var ctrlRockData     = require('../controllers/rocks');

router.get('/minerals', ctrlMineralData.mineralsReadAll);
//router.get('/minerals/:type', ctrlMineralData.mineralsReadOne);
router.get('/mineraltypes', ctrlMineralData.mineralTypesReadAll);


router.get('/rocks', ctrlRockData.rocksReadAll);
router.get('/rocktypes', ctrlRockData.rockTypesReadAll);


module.exports = router;
