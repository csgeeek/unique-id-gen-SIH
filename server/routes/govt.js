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
    const institutionsList = await Institution.find();
    const institution = new Institution({
        institutionId: req.body.institutionId,
        institutionName: req.body.institutionName,
        students: req.body.students
    });
    function nextLetter(s){
        return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function(a){
            var c= a.charCodeAt(0);
            switch(c){
                case 90: return 'A';
                case 122: return 'a';
                default: return String.fromCharCode(++c);
            }
        });
    }
    try{
        if(institutionsList.length === 0){
            institution.institutionId = 'AAAA';
        }
        else{
            const lastInstitution = institutionsList[institutionsList.length - 1];
            let lastInstitutionId = lastInstitution.institutionId;

            if(lastInstitutionId === 'ZZZZ'){
                res.json({ message: 'Maximum number of institutions reached' });
            }

            let newId = '', i = 3;
            for(i = 3; i >= 0 ; i--){
                if(lastInstitutionId[i] === 'Z'){
                    newId += 'A';
                }
                else{
                    newId += (nextLetter(lastInstitutionId[i]));
                    i--;
                    break;
                }
            }

            for(let j = i; j >= 0; j--){
                newId += lastInstitutionId[j];
            }

            // reverse the string 
            newId = newId.split('').reverse().join('');
            institution.institutionId = newId;
        }
        await institution.save();
        res.json(institution);
    }
    catch(err){
        res.json({ message: err });
    };
});

module.exports = router;