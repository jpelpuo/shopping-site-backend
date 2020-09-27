const User = require('../models/user');
const createError = require('http-errors');

module.exports = addTo = (targetField) => {
    return async (...args) => {
        try {
            const [userId] = args;

            const user = await User.findById(userId);

            if (!user) {
                throw createError.NotFound("User not found.")
            }

            switch (targetField) {
                case 'Cart':
                    user.cart = [];
                    break;
                default:
                    user.wishlist = [];
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