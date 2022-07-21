const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    // create,
    addTicket
}

function newTicket(req, res) {
    Flight.findOne({_id: req.params.id}, function(err, flight) {
        res.render(`flights/tickets/new`, { flight });
    })
}

// function create(req, res) {
    
// }

function addTicket(req, res) {
    const ticket = req.body;
    ticket.flight = req.params.id;
    Ticket.create(ticket, function(err, t) {
        console.log(ticket);
        res.redirect(`/flights/${req.params.id}`);
    })
}