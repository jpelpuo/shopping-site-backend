const User = require('../../models/user');
const createError = require('http-errors');

module.exports = removeFromWishlist = async (productId, userId) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            throw createError.NotFound("User not found.")
        }

        if(user.wishlist.length === 0){
            throw createError.BadRequest("No items in wishlist")
        }
        
        const wishlist = [...user.wishlist];
        wishlist.splice(wishlist.indexOf(productId), 1);
        user.wishlist = [...wishlist];

        await user.save();

        return !user.wishlist.includes(productId);
    } catch (error) {
        throw error;
    }
}