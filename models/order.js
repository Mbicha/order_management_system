const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const order = new Schema({
    order_date: {type: Date, required: true, default: () => Date.now()},
    shipment_method: {type: String, required: true},
    due_date: {type: Date, default: () => Date.now() + 7 * 24 * 60 * 60 * 1000},
    customer: {type: Schema.Types.ObjectId, ref: 'customers', required: true}
});

module.exports = mongoose.model('orders', order);
