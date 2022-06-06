const mongoose = require('mongoose');

const InstitutionSchema = mongoose.Schema({
    uniqId: {
        type: String,
        required: true
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
});

const Institution = mongoose.model('Institution', InstitutionSchema);
module.exports = Institution;