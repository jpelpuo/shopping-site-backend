const User = require('../../models/user');
const createError = require('http-errors');

module.exports = removeFromCart = async (productId, userId) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            throw createError.NotFound("User not found");
        }

        const cartItems = [...user.cart];
        cartItems.splice(cartItems.indexOf(productId), 1);
        user.cart = [...cartItems];
        await user.save();

        return {
            ...user._doc,
            password: null
        }
    } catch (error) {
        throw error;
    }
}