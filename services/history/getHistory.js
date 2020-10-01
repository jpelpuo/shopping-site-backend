const createError = require('http-errors');
const User = require('../../models/user');

module.exports = getHistory = async (userId) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            throw createError.NotFound("User not found.")
        }

        await user
            .populate({
                path: 'history',
                populate: {
                    path: 'productsPurchased',
                    populate: {
                        path: 'item belongsTo',
                        select: '_id name price description stock category'
                    }
                }
            })
            .execPopulate()

        const history = [...user.history];

        return history;
    } catch (error) {
        throw error;
    }
}