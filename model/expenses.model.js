const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expensesSchema = new Schema({
    spentOn : String,
    amount : Number,
    reason : String,
    createdAt: { type: Date, default: Date.now }
})

const Expenses = mongoose.model("Expenses", expensesSchema);
module.exports = Expenses;