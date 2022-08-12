const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    Size: {
        type: Number,
        required: true
    },
    Price: {
        type: Number,
        required: true
    }, 
    DiscountedPrice: {
        type: Number,
        required: true
    }, 
    inStock: {
        type: Number,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Products', productSchema);