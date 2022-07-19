const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS','DFW','DEN','LAX','SAN']
    },
    arrival: {
        type: Date,
    }
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American','Southwest','United']
    },
    airport: {
        type: String,
        enum: ['AUS','DFW','DEN','LAX','SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min:10,
        max:9999
    },
    departs: {
        type: Date,
        default: function() {
            let d = new Date();
            let year = d.getFullYear();
            let month = d.getMonth();
            let day = d.getDate();
            let newD = new Date(year + 1, month, day);
            return newD;
        }
    },
    destinations: [destinationSchema]
})

module.exports = mongoose.model('Flight', flightSchema);