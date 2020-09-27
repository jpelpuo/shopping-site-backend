const User = require('../models/user');
const createError = require('http-errors');

module.exports = removeFrom = targetField => {
    return async (...args) => {
        try {
            const [productId, userId] = args;

            const user = await User.findById(userId);

            if (!user) {
                throw createError.NotFound("User not found.")
            }

            switch (targetField) {
                case 'Cart':
                    const cartItems = [...user.cart];
                    cartItems.splice(cartItems.indexOf(productId), 1);
                    user.cart = [...cartItems];
                    break;
                default:
                    const wishlist = [...user.wishlist];
                    wishlist.splice(wishlist.indexOf(productId), 1);
                    user.wishlist = [...wishlist];
                    break;
            }

            await user.save();

            return {
                ...user._doc,
                password: null
            }
        } catch (error) {
            throw error;
        }
    }
}