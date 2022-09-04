const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    SKU: {
        type: Number,
        required: true
    },
    ProductName: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    }, 
    DiscountedPrice: {
        type: Number,
        required: false
    }, 
    stock: {
        type: Number,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
    Sizes: {
        sevenHalf: {type: Number, required: true},
        eight: {type: Number, required: true},
        eightHalf: {type: Number, required: true}
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('products', productSchema);