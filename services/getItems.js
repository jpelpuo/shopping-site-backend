const User = require('../models/user');
const createError = require('http-errors');

module.exports = getItems = targetField => {
    return async (...args) => {
        try {
            const [userId] = args;

            const user = await User.findById(userId);

            if (!user) {
                throw createError.NotFound("User not found.");
            }

            let items;

            switch (targetField) {
                case 'Cart':
                    await user
                        .populate({
                            path: 'cart',
                            populate: {
                                path: 'item belongsTo',
                                select: '_id name firstName lastName price description stock category'
                            },
                        })
                        .execPopulate()

                    items = [...user.cart];
                    break;
                default:
                    await user
                        .populate('wishlist')
                        .execPopulate();
                    items = [...user.wishlist]
                    break;
            }

            return items;
        } catch (error) {
            throw error;
        }
    }
}