const mongoose = require('mongoose');

const GovernmentSchema = mongoose.Schema({
    institutions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institution'
    }]
});

const Government = mongoose.model('Government', GovernmentSchema);

module.exports = Government;
