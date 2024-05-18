const Expenses = require('../model/expenses.model');

exports.getExpenses = async (req, res) => {
    try {
        const allExpenses = await Expenses.find();
        res.status(200).json({ expenses: allExpenses });
    } catch (error) {
        console.error('Error retrieving expenses:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.addExpenses = async (req, res) => {
    try {
        const { spentOn, amount, reason } = req.body;
        const newExpense = new Expenses({
            spentOn,
            amount,
            reason,
            createdAt: new Date()
        });
        await newExpense.save();

        res.status(200).json({ message: 'Expense added successfully', expense: newExpense });
    } catch (error) {
        console.error('Error adding expense:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.editExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const { spentOn, amount, reason } = req.body;
        console.log(req.body, "req, ;body")
        const expense = await Expenses.findById(id);
        console.log(expense, 'expense')
        if (!expense) {
            return res.status(404).json({ error: 'Expense not found' });
        }

        expense.spentOn = spentOn;
        expense.amount = amount;
        expense.reason = reason
        await expense.save();

        res.status(200).json({ message: 'Expense updated successfully', expense });
    } catch (error) {
        console.error('Error updating expense:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedExpense = await Expenses.findByIdAndDelete(id);
        if (!deletedExpense) {
            return res.status(404).json({ error: 'Expense not found' });
        }

        res.status(200).json({ message: 'Expense deleted successfully', expense: deletedExpense });
    } catch (error) {
        console.error('Error deleting expense:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};