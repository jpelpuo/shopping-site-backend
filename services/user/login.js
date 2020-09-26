const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const { createAccessToken, createRefreshToken } = require('../../helpers/jwtHelper');
const createError = require('http-errors');

module.exports = login = async ({ email, password }) => {
    try {
        const user = await User.findOne({ email });

        if (!user) {
            throw new createError.NotFound("User not found");
        }

        const isEqual = await bcrypt.compare(password, user.password);

        if (!isEqual) {
            throw new createError.BadRequest("Invalid email/password!")
        }

        const accessToken = createAccessToken(user.id, user.email);
        const refreshToken = createRefreshToken(user.id, user.email);

        return {
            accessToken,
            refreshToken,
            userId: user.id,
            firstName: user.firstName,
            lastName: user.lastName
        }

    } catch (error) {
        throw error;
    }
}