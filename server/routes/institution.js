const express = require('express');
const Student = require('../models/Student');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const student = await Student.find();
        res.json(student);
        // console.log(res);
    }
    catch(err){
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {

    const student = new Student({
        regId: req.body.regId,
        studentName: req.body.studentName,
        otherDetails: req.body.otherDetails
    });
    try{
        await student.save();
        res.json(student);
    }
    catch(err){
        res.json({ message: err});
    }
    console.log(req.body);
    // res.send('Student data sending');

    // console.log('In institution');
});

module.exports = router; 