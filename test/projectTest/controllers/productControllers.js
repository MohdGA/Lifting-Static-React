const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', (req,res) => {
    res.render('products/index.ejs')
});

router.get('/new', (req,res) => {
    res.render('products/new.ejs')
});

router.post('/new', async (req,res) => {
    
})


module.exports = router