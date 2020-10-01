const login = require('./user/login');
const register = require('./user/register');
const clearField = require('./clearField');
const getItems = require('./getItems');
const getProducts = require('./product/getProducts');
const addToCart = require('./cart/addToCart');
const removeFromCart = require('./cart/removeFromCart');
const updateCartItem = require('./cart/updateCartItem');
const addToWishlist = require('./wishlist/addToWishlist');
const removeFromWishlist = require('./wishlist/removeFromWishlist');
const checkout = require('./checkout');
const getHistory = require('./history/getHistory')

module.exports = {
    login,
    register,
    clearField,
    getItems,
    getProducts,
    addToCart,
    removeFromCart,
    updateCartItem,
    addToWishlist,
    removeFromWishlist,
    getHistory,
    checkout
}