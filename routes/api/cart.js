const express = require('express');
const { body, validationResult } = require('express-validator');
const createError = require('http-errors');
const { removeFrom, clearField, addTo } = require('../../services');
const { checkAuthorization } = require('../../helpers/authHelper');


const router = express.Router();

const SUCCESS = 'success';
const FAILURE = 'failure';

// Call service functions
const addToCart = addTo('Cart');
const removeFromCart = removeFrom('Cart');
const clearCart = clearField('Cart');


// @route GET /api/cart/add
// @description Add item to cart
router.get('/add/:productId', async (request, response, next) => {
    try {
        checkAuthorization(request);

        const { productId } = request.params;

        console.log(productId)

        const itemAdded = await addToCart(productId, request.userId);

        if (!itemAdded) {
            return response.send(FAILURE)
        }

        return response.send(SUCCESS);
    } catch (error) {
        next(error);
    }
})

// @route DELETE /api/cart/remove
// @description Remove item from cart
router.delete('/remove/:productId', async (request, response, next) => {
    try {
        checkAuthorization(request);

        const { productId } = request.params;

        const itemRemoved = await removeFromCart(productId, request.userId);

        if (!itemRemoved) {
            return response.send(FAILURE);
        }
        return response.send(SUCCESS);
    } catch (error) {
        next(error);
    }
})

// @route GET /api/cart/clear
// @description Clear cart items
router.get('/clear', async (request, response, next) => {
    try {
        checkAuthorization(request);

        const itemsCleared = await clearCart(request.userId);

        if (!itemsCleared) {
            return response.send(FAILURE)
        }

        return response.send(SUCCESS);
    } catch (error) {
        next(error);
    }
})

// // @route GET /api/cart
// // @description Get cart items
// router.post('/', async (request, response, next) => {

// })


module.exports = router;
