const { model, Schema } = require('mongoose');

const cartItemSchema = new Schema({
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number
    },
    belongsTo: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

module.exports = model('CartItem', cartItemSchema);