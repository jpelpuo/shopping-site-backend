const User = require('../../models/user');
const createError = require('http-errors');

module.exports = addToCart = async (productId, userId) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            throw createError.NotFound("User not found.")
        }

        user.cart = [productId, ...user.cart];
        await user.save();
        return {
            ...user._doc,
            password: null
        }
    } catch (error) {
        throw error;
    }
}