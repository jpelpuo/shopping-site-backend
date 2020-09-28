const Product = require('../../models/product');

module.exports = getProducts = async () => {
    try {
        const products = await Product.find();

        return products;
    } catch (error) {
        throw error;
    }
}