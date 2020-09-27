const login = require('./user/login');
const register = require('./user/register');
const addToCart = require('./cart/addToCart');
const removeFromCart = require('./cart/removeFromCart');
const clearCart = require('./cart/clearCart');

module.exports = {
    login,
    register,
    addToCart,
    removeFromCart,
    clearCart
}