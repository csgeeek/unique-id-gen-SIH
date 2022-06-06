const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    regId: {
        type: String,
        required: true
    },
    studentName: {
        type: String,
    },
    otherDetails: {
        type: String
    }
});
const InstitutionSchema = mongoose.Schema({
    institutionId: {
        type: String,
        required: true
    },
    students: [
        StudentSchema
    ]
});

const Institution = mongoose.model('Institution', InstitutionSchema);
module.exports = Institution;