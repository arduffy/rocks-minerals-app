var express = require('express');
var router = express.Router();
var ctrlMineralData    = require('../controllers/minerals');
var ctrlRockData     = require('../controllers/rocks');
var search = require('../controllers/search');

router.get('/minerals', ctrlMineralData.mineralsReadAll);
//router.get('/minerals/:type', ctrlMineralData.mineralsReadOne);
router.get('/mineraltypes', ctrlMineralData.mineralTypesReadAll);


router.get('/rocks', ctrlRockData.rocksReadAll);
router.get('/rocktypes', ctrlRockData.rockTypesReadAll);

router.get('/mineraltypes/:type', ctrlMineralData.specificMineralType);
router.get('/mineraltypes', ctrlMineralData.specificMineralType );

router.get('/rocktypes/:type', ctrlRockData.specificRockType);
router.get('/rocktypes', ctrlRockData.specificRockType );

router.get('/customsearch/:search_term');

module.exports = router;
