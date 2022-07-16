const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
    }
})

module.exports = mongoose.model('Flight', flightSchema);