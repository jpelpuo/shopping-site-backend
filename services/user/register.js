const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const createError = require('http-errors');

const SALT_ROUNDS = 12;

module.exports = register = async ({ firstName, lastName, email, password }) => {
    try {
        const user = await User.findOne({ email });

        if (user) {
            throw new createError.Conflict("User already exists");
        }

        const salt = await bcrypt.genSalt(SALT_ROUNDS);

        const hash = await bcrypt.hash(password, salt);

        password = hash;

        const newUser = User({
            firstName,
            lastName,
            email,
            password
        });

        await newUser.save();

        return newUser;

    } catch (error) {
        throw error;
    }
}