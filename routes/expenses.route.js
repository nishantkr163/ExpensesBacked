const express = require('express');
const { addExpenses } = require('../controller/controller.expenses');
const router= express.Router();

const expensesController = require("../controller/controller.expenses");

// Route for getting expenses
router.get("/get", expensesController.getExpenses);

// Route for adding expenses
router.post("/add", expensesController.addExpenses);

// Route for editing expenses
router.patch("/:id/edit", expensesController.editExpense);

// Route for deleting expenses
router.delete("/:id/delete", expensesController.deleteExpense);

module.exports = router;