import React from "react";
import { useState } from "react";
import SearchExpense from "./components/SearchExpense";

export default function ExpenseForm() {
    const [expense, setExpense] = useState("");
    const [expenseDescription, setExpenseDescription] = useState("");
    const [expenseCategory, setExpenseCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    
    const [expenses, setExpenses] = useState([]);

    function handleSubmission(e) {
        e.preventDefault();

        console.log('expense:', expense);
        console.log('expenseDescription:', expenseDescription);
        console.log('expenseCategory:', expenseCategory);
        console.log('amount:', amount);
        console.log('date:', date);

        const newExpense = {
            expense: expense, 
            expenseDescription: expenseDescription, 
            expenseCategory: expenseCategory, 
            amount: amount, 
            date: date
        };

        console.log('newExpense Object:', newExpense)
        
        // Update expenses with the newExpense object when the form is submitted. 'Spread out' or copy existing expenses first.
        setExpenses([...expenses, newExpense]);

        // Clear input fields
        setExpense("");
        setExpenseDescription("")
        setExpenseCategory("")
        setAmount("")
        setDate("")
    }

    // Sort expenses alphabetically by category or description.
    function sortExpenses(columnToSort) {
        console.log('columnToSort IN SEARCH EXPENSEFORM----:', columnToSort)
        const sortedExpenses = [...expenses].sort((a,b) => a[columnToSort].localeCompare(b[columnToSort]))
        setExpenses(sortedExpenses)
        console.log('sortedExpenses IN EXPENSEFORM IS------:', sortedExpenses)
    }

    // Function to delete expense.    
    const deleteExpense = (index) => {
        setExpenses(expenses.filter((_, ind) => ind !== index));
    };

    return (
    <div id="expenseTracker" className="flex flex-col gap-1 mt-2 ml-2 mr-2">
        <div className="mb-8">
            <div className="font-bold text-4xl mb-4">Expense Tracker</div>
            <div>Start taking control of your finances and Life, Record, </div>
            <div>categorize and analyze your spending </div>
        </div>
        <div id="formSearchTable" className="flex flex-row w-full">
            <div className="border-2 border-grey mr-4 rounded-lg p-3 flex flex-col w-1/5">
                <div className="font-bold text-[1.1em]">Add Expense</div>
                <p>Enter your expense details below</p>
                <form onSubmit={handleSubmission} className="expense-form flex flex-col gap-1 mt-2 mb-2">
                    <input onChange={(e) => setExpense(e.target.value)} type="text" value={expense} placeholder="Enter expense name"></input>
                    <input onChange={(e) => setExpenseDescription(e.target.value)} type="text" value={expenseDescription} placeholder="Enter expense description"></input>
                    <select onChange={(e) => setExpenseCategory(e.target.value)} value={expenseCategory} id="expenseCategory" className="bg-gray-50 border border-[grey] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option defaultValue={''} className="text-[grey]">Enter expence category</option>
                        <option value={"housing"}>Housing / Rent / Mortgage</option>
                        <option value={"transportation"}>Transportation</option>
                        <option value={"food"}>Food & Groceries</option>
                        <option value={"health"}>Health & Medical</option>
                        <option value={"entertainment"}>Entertainment & Leisure</option>
                        <option value={"education"}>Education</option>
                        <option value={"personal"}>Personal Care</option>
                    </select>
                    <input onChange={(e) => setAmount(e.target.value)} type="number" value={amount} placeholder="Enter amount"></input>
                    <input onChange={(e) => setDate(e.target.value)} type="date" value={date}></input>
                    <button type="submit" className="bg-black border rounded-md text-white p-2">Submit</button>
                </form>
            </div>

            <div className="w-4/5 flex flex-col gap-1">
                <SearchExpense expenses={expenses} sortExpensesFunc={sortExpenses} deleteExpenseFunc={deleteExpense}/>
            </div>
        </div>
    </div>
    );
}