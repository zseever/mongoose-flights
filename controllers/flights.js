const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
}


function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.sort((a,b) => Number(a.arrival) - Number(b.arrival));
        res.render(`flights/show`, { flight })
    });
}

function index(req, res) {    
    Flight.find({})
        .sort('departs')
        .exec(function(err, flights) {
            if (err) return res.redirect('/');
            res.render('flights/index', { flights });
        });
}

function newFlight(req, res) {
    const newFlight = new Flight();
    const dt = newFlight.departs;
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('flights/new', { departsDate });
}

function create(req, res) {
    console.log(req.body);
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new');
        res.redirect('/flights/new');
    })
}