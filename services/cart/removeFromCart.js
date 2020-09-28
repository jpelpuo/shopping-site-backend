const User = require('../../models/user');
const CartItem = require('../../models/cartItem');
const createError = require('http-errors');

module.exports = removeFromCart = async (productId, userId) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            throw createError.NotFound("User not found");
        }

        const cartItems = await CartItem.find();

        const [foundItem] = cartItems.filter(item => {
            return item.itemId.toString() === productId.toString();
        });

        let deletedItem;

        if (foundItem) {
            const tempCartItems = [...user.cart];
            tempCartItems.splice(tempCartItems.indexOf(foundItem), 1);
            user.cart = [...tempCartItems];

            deletedItem = await CartItem.findByIdAndDelete(foundItem._id);
            await user.save();
        }

        return deletedItem;
    } catch (error) {
        throw error;
    }
}