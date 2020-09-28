const login = require('./user/login');
const register = require('./user/register');
const addTo = require('./addTo');
const removeFrom = require('./removeFrom');
const clearField = require('./clearField');
const getItems = require('./getItems');
const getProducts = require('./product/getProducts');
const addToCart = require('./cart/addToCart');
const removeFromCart = require('./cart/removeFromCart');
const clearCart = require('./cart/clearCart');

module.exports = {
    login,
    register,
    clearField,
    getItems,
    getProducts,
    addToCart,
    removeFromCart,
    clearCart
}