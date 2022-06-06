const express = require('express');
const Institution = require('../models/Institution');
const Student = require('../models/Student');
const router = express.Router();

router.get('/:id', async (req, res) => {
    try{
        const institution = await Institution.find().where('institutionId').equals(req.params.id);
        res.json(institution[0].students);
    }
    catch(err){
        res.json({ message: err });
    }
});

router.get('/:id1/:id2', async (req, res) => {
    try{
        const institution = await Institution.find().where('institutionId').equals(req.params.id1);
        let result = [];
        institution[0].students.map(student => {
            if(student.regId === req.params.id2){
                result = student;
            }
        });
        if(result.length === 0){
            res.json({ message: 'Student not found' });
        }
        else res.json(result);
    }
    catch(err){
        res.json({ message: err });
    }
});

router.patch('/:id', async (req, res) => {

    const student = new Student({
        regId: req.body.regId,
        studentName: req.body.studentName,
        otherDetails: req.body.otherDetails
    });
    try{
        const institution = await Institution.find().where('institutionId').equals(req.params.id);
        const institutionId = institution[0]._id;

        const doc = await Institution.findByIdAndUpdate(institutionId, {"$addToSet": {students: student}}, { new: true, runValidators: false,});

        res.json(doc);
    }
    catch(err){
        res.json({ message: err});
    }
});

module.exports = router; 