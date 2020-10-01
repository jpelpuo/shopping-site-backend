const HistoryItem = require('../models/history');
const createError = require('http-errors');
const User = require('../models/user');


module.exports = checkout = async (userId, totalAmount, cardDetails) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            throw createError.NotFound("User not found.")
        }

        const cart = [...user.cart];

        const newHistoryItem = new HistoryItem({
            user: userId,
            productsPurchased: cart,
            totalAmount,
            cardDetails
        });

        await newHistoryItem.save();
        user.cart = [];
        user.history = [newHistoryItem.id, ...user.history];
        await user.save();

        return newHistoryItem;
    } catch (error) {
        throw error;
    }
}