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

const Student =  mongoose.model('Student', StudentSchema);
module.exports = Student;