var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

// GET index /flights
router.get('/', flightsCtrl.index);
// GET new /flights/new
router.get('/new', flightsCtrl.new);
// POST create /flights
router.post('/', flightsCtrl.create);
// GET show /flights/:id
router.get('/:id', flightsCtrl.show);


module.exports = router;
