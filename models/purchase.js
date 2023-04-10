const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const purchase = new Schema({
    purchase_date: {type: Date, required: true, default: () = Date.now()},
    total_amount: {type: Number, required: true}, // quantity * item prices
    customer: {type: Schema.Types.ObjectId, ref: 'customers', required: true}
});

module.exports = mongoose.model('purchase', purchase);
