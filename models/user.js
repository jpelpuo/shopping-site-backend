const { model, Schema } = require('mongoose');


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    wishlist: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    history: [
        {
            type: Schema.Types.ObjectId,
            ref: 'History'
        }
    ],
    cart: [
        {
            type: Schema.Types.ObjectId,
            ref: 'CartItem'
        }
    ]
});

module.exports = model('User', userSchema);