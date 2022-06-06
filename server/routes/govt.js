const express = require('express');
const Institution = require('../models/Institution');

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const institution = await Institution.find();
        res.json(institution);   
    }
    catch(err){
        res.json({ message: err });
    }
})

router.get('/:id', async (req, res) => {
    // console.log(req.params.id);
    try{
        const uniqId = req.params.id;
        const institution = await Institution.find().where('uniqId').equals(uniqId);
        console.log(institution);
        res.json(institution);
    }
    catch(err){
        console.log('error');
        res.json({ message: err });
    }
});

module.exports = router;