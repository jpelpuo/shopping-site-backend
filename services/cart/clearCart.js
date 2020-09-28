const User = require('../../models/user');
const CartItem = require('../../models/cartItem');
const createError = require('http-errors');

module.exports = clearCart = async (userId) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            throw createError.NotFound("User not found");
        }

        user.cart = [];
        const deletedItems = await CartItem.deleteMany({ belongsTo: userId });
        console.log(deletedItems)
        // await user.save();

        return {
            ...user._doc,
            password: null
        }
    } catch (error) {
        throw error;
    }
}