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
        res.json(institution);
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

router.post('/', async (req, res) => {
    const institution = new Institution({
        institutionId: req.body.institutionId,
        students: req.body.students
    });
    try{
        await institution.save();
        res.json(institution);
    }
    catch(err){
        res.json({ message: err });
    };
});

module.exports = router;