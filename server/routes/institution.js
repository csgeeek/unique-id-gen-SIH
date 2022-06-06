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