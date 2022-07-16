const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const flights = mongoose.connection;

flights.on('connected', function() {
    console.log(`Connected to ${flights.name} MongoDB at ${flights.host}:${flights.port}.`)
})