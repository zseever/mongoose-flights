const express = require('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/tickets');

router.get('/tickets/new', ticketsCtrl.new);

router.get('/tickets', ticketsCtrl.create);

router.post('/flights/:id/tickets', ticketsCtrl.addTicket);

module.exports = router;