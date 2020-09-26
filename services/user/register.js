const User = require('../../models/user');

module.exports = register = async ({ name, email, password }) => {
    try {
        const user = await User.findOne({ email });

        if(user){
            throw new Error("User already exists")
        }
    } catch (error) {
        throw error;
    }
}