const { model, Schema } = require('mongoose');

const historySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    productsPurchased: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product',
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