const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    ClientName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
   
});

module.exports = mongoose.model('Clients', clientSchema);