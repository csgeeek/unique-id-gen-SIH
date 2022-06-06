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
    try{
        const institutionId = req.params.id;
        const institution = await Institution.find().where('institutionId').equals(institutionId);
        console.log(institution);
        res.json(institution);
    }
    catch(err){
        console.log('error');
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    const institution = new Institution({
        institutionId: req.body.institutionId,
        students: req.body.students
    });
    console.log(institution);
    try{
        await institution.save();
        res.json(institution);
    }
    catch(err){
        res.json({ message: err });
    };
});

module.exports = router;