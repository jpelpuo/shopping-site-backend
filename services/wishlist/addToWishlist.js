const User = require('../../models/user');
const createError = require('http-errors');

module.exports = addToWishlist = async (productId, userId) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            throw createError.NotFound("User not found.")
        }

        const itemInWishlist = user.wishlist.includes(productId);

        if (itemInWishlist) {
            throw createError.Conflict("Item already in wishlist");
        }

        user.wishlist = [productId, ...user.wishlist];

        await user.save();

        return {
            ...user._doc,
            password: null
        }

    } catch (error) {
        throw error;
    }
}