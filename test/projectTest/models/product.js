const mongoose = require('mongoose');


const product = new mongoose.Schema({
    name: String,
    category: String,
    price: String
}, {timestamps: true});

module.exports = mongoose.model('products', product);