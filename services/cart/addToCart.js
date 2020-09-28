const User = require('../../models/user');
const CartItem = require('../../models/cartItem');
const createError = require('http-errors');

module.exports = addToCart = async (productId, userId) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            throw createError.NotFound("User not found.")
        }

        const cartItems = await CartItem.find();

        const [foundItem] = cartItems.filter(item => {
            return item.itemId.toString() === productId.toString();
        });

        if (!foundItem) {
            const newCartItem = new CartItem({
                item: productId,
                quantity: 1,
                belongsTo: userId
            })

            user.cart = [newCartItem.id, ...user.cart];
            await newCartItem.save();
            await user.save();
            return newCartItem;
        }

        const cartItem = await CartItem.findById(foundItem);

        cartItem.quantity = ++cartItem.quantity;
        await cartItem.save();

        return cartItem;
    } catch (error) {
        throw error;
    }
}