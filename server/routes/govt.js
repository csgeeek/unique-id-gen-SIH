const express = require('express');
const Student = require('../models/Student');

const router = express.Router();

// access

router.get('/', async (req, res) => {
    try{
        const student = await Student.find();
        res.json(student);   
    }
    catch(err){
        res.json({ message: err });
    }
})

router.get('/:id', async (req, res) => {
    // console.log(req.params.id);
    try{
        const regId = req.params.id;
        const student = await Student.find().where('regId').equals(regId);
        console.log(student);
        res.json(student);
    }
    catch(err){
        console.log('error');
        res.json({ message: err });
    }
});

module.exports = router;