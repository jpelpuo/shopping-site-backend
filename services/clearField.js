const createError = require('http-errors');
const CartItem = require('../models/cartItem');
const History = require('../models/history');
const User = require('../models/user');

module.exports = clearField = (targetField) => {
    return async (...args) => {
        try {
            const [userId] = args;

            const user = await User.findById(userId);

            if (!user) {
                throw createError.NotFound("User not found.")
            }

            let operationInfo;
            switch (targetField) {
                case 'Cart':
                    user.cart = [];
                    operationInfo = await CartItem.deleteMany({ belongsTo: userId });
                    break;
                case 'History':
                    user.history = [];
                    operationInfo = await History.deleteMany({ user: userId });
                    break;
                default:
                    user.wishlist = [];
                    operationInfo = await user.save();
                    break;
            }

            await user.save();

            return operationInfo;

        } catch (error) {
            throw error;
        }
    }
}