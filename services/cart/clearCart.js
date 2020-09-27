const User = require('../../models/user');
const createError = require('http-errors');

module.exports = clearCart = async (userId) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            throw createError.NotFound("User not found");
        }

        user.cart = [];
        await user.save();

        return {
            ...user._doc,
            password: null
        }
    } catch (error) {
        throw error;
    }
}