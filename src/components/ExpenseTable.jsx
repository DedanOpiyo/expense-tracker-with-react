import React from 'react';
import { useEffect } from 'react';

export default function ExpenseTable({expenses, onlyFoundExpenses, sortExpenses, deleteExpense}) { // All props except onlyFoundExpenses are passed from ExpenseForm.jsx

  const validOnlyFoundExpenses = onlyFoundExpenses.length > 0 && onlyFoundExpenses.some(expense => expense && Object.keys(expense).length > 0); // Validate values from search input.

  let displayExpenses = validOnlyFoundExpenses ? onlyFoundExpenses : expenses; // Declare a variable displayExpenses, prioritizing prop resulting from user search.

  useEffect(() => {
    displayExpenses = validOnlyFoundExpenses;
  }, [expenses]); // If value of expenses state change, update displayExpenses which determines what is shown in the table.

  return (
      <div className="w-full">
        <table className="table-cells w-full mt-1 rounded-t-lg overflow-hidden">
          <thead className="bg-black text-white text-sm">
            <tr>
              <th>Expense</th>
              <th onClick={()=> sortExpenses('expenseDescription')}>Description</th>
              <th onClick={()=> sortExpenses('expenseCategory')}>Category</th>
              <th>Amount (Ksh)</th>
              <th>Date</th>
              {displayExpenses.length > 0 ?<th>Delete</th>: <th style={{display: 'none'}}>Delete</th>}
            </tr>
          </thead>
          <tbody>
          {displayExpenses.length > 0 ? (displayExpenses.map((expense, index) => (    
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>    
                <td>{expense.expense}</td>
                <td>{expense.expenseDescription}</td>
                <td>{expense.expenseCategory}</td>
                <td>Ksh. {expense.amount}</td>
                <td>{expense.date}</td>
                <td><button onClick={()=> deleteExpense(index)} className="px-1 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Delete</button></td>
              </tr>)
            )
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500 dark:text-gray-400">
                No expenses found.
              </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
  )
}
