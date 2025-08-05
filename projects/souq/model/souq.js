const mongoose = require('mongoose');

const souqSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
}, {timestamps: true});

const souq = mongoose.model('souq', souqSchema);

module.exports = souq;