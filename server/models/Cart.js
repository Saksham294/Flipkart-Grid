const mongoose = require('mongoose');


const CartSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    items: [{
        productId: {
            type: String,
        },
        name: String,
        boughtBy: [String],
        brand: [String],
        subCategory: [String],
    }]
        
});

module.exports = Cart = mongoose.model('cart',CartSchema);