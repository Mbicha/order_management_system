const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const product = new Schema({
    product_name: {type: String, required: true},
    product_category: {type: String, required: true},
    product_description: {type: String},
    product_price: {type: Number, required: true, get: getPrice, set: setPrice},
    number_in_stock: {type: Number, required: true},
    product_image: {type: String, required: true},
    product_color: {type: String}
});

function getPrice(num) {
    return (num / 100).toFixed(2);
}
  
function setPrice(num) {
    return num * 100;
}

module.exports = mongoose.model('products', product);
