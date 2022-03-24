const { urlencoded } = require('express');
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
    try{
        const regId = req.params.id;
        const student = await Student.find().where('regId').equals(regId);
        res.json(student);
        // console.log(student);
    }
    catch(err){
        res.json({ message: err });
    }
});

module.exports = router;