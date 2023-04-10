const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const order_detail = new Schema({
    quantity: {type: Number, required: true, default: 0},
    delivery_fee: {type: Number, required: true, default: 0.00},
    product: {type: Schema.Types.ObjectId, refs: 'products', required: true},
    order: {type: Schema.Types.ObjectId, refs: 'orders', required: true},
});

module.exports = mongoose.model('order_details', order_detail);
