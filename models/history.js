const { model, Schema } = require('mongoose');

const historySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: new Date()
    },
    productsPurchased: [
        {
            type: Schema.Types.ObjectId,
            ref: 'CartItem',
            required: true
        }
    ],
    totalAmount: {
        type: Number,
        required: true
    },
    cardDetails: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
);

module.exports = model('History', historySchema);