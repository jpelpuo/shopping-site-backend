const express = require('express');
const { body, validationResult } = require('express-validator');
const createError = require('http-errors');
const { register } = require('../../services/index')

const router = express.Router();

// @router GET api/users
// @desc Get All Users
router.post('/register', [
    body('email', 'Invalid email!').isEmail()
], async (request, response, next) => {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            const [error] = errors.array();
            throw createError.BadRequest(error.msg);
        }

        const newUser = await register(request.body);
        return response.json({
            ...newUser._doc,
            password: null
        });
    } catch (error) {
        next(error);
    }
})

router.post('/auth', [
    body('email', 'Invalid email!').isEmail()
], async (request, response, next) => {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            const [error] = errors.array();
            throw createError.BadRequest(error.msg);
        }
    } catch (error) {
        next(error)
    }
})

module.exports = router;