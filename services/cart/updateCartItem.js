const User = require('../../models/user');
const CartItem = require('../../models/cartItem');
const createError = require('http-errors');

module.exports = updateCartItem = async (productId, userId, quantity) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            throw createError.NotFound("User not found.")
        }

        // const cartItems = await CartItem.find();

        // const [foundItem] = cartItems.filter(item => {
        //     return item.itemId.toString() === productId.toString();
        // });

        // if(!foundItem){
        //     throw createError.NotFound("Item in cart");
        // }

        const updatedItem = await CartItem.update({ item: productId }, {
            quantity
        })

        return updatedItem.n !== 0 && updatedItem.nModified !== 0;
    } catch (error) {
        throw error;
    }
}