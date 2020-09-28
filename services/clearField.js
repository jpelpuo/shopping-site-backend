const createError = require('http-errors');
const CartItem = require('../models/cartItem');
const User = require('../models/user');

module.exports = addTo = (targetField) => {
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
                default:
                    user.wishlist = [];
                    break;
            }

            await user.save();

            return operationInfo;

        } catch (error) {
            throw error;
        }
    }
}