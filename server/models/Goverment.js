const mongoose = require('mongoose');

const GovernmentSchema = mongoose.Schema({
    institutions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institution'
    }]
});

const Government = mongoose.model('Governmet', GovernmentSchema);

module.exports = Government;
