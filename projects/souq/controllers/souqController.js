const express = require('express');
const router = express.Router();
const Souq = require('../model/souq');


router.get('/new', (req,res) => {
    res.render('souq/new.ejs');
});

router.post('/new', async (req,res) => {
    try{
        await Souq.create(req.body);
        res.redirect('/souq');;
    }catch(error){
        console.log(error);
    }
});

router.get('/', async (req,res) => {
    const allSouq = await Souq.find();
    res.render('souq/index.ejs', ({allSouq}));
});

router.get('/:souqId', async (req,res) => {
    const foundSouq = await Souq.findById(req.params.souqId);
    res.render('souq/show.ejs', ({foundSouq}));
})

router.get('/:souqId/edit', async (req,res) => {
    const foundSouq = await Souq.findById(req.params.souqId);
    res.render('souq/edit.ejs', ({foundSouq}));
});

router.put('/:souqId', async (req,res) => {
    await Souq.findByIdAndUpdate(req.params.souqId, req.body);
    res.redirect(`/souq/${req.params.souqId}`);
});

router.delete('/:souqId', async (req,res) => {
    await Souq.findByIdAndDelete(req.params.souqId);
    res.redirect('/souq');
})

module.exports = router;