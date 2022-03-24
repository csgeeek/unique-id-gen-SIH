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

module.exports = mongoose.model('Student', StudentSchema);