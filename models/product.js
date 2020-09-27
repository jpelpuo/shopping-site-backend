const { model, Schema } = require('mongoose');

const productSchema = Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true
});

module.exports = model('Product', productSchema);