const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const DispensedSchema = new Schema ({
    time: Date,
    distance: Number,
    amount: Number,
}, { collection: 'dispensed' });

const Dispensed = mongoose.model('Dispensed', DispensedSchema);

module.exports = Dispensed;
