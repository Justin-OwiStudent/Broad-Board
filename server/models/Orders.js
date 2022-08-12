const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    ClientName: {
        type: String,
        required: true
    },
    Product: {
        type: String,
        required: true
    },
    OrderNumber: {
        type: Number,
        required: true
    },
    OrderDate: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Orders', orderSchema);