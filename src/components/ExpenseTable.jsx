import React from 'react';

export default function ExpenseTable({expenses, onlyFoundExpenses}) {

  const validOnlyFoundExpenses = onlyFoundExpenses.length > 0 && onlyFoundExpenses.some(expense => expense && Object.keys(expense).length > 0);
  console.log('validOnlyFoundExpenses:', validOnlyFoundExpenses)

  const displayedExpenses = validOnlyFoundExpenses ? onlyFoundExpenses : expenses;
  console.log('DISPLAYEDEXPENSES', displayedExpenses[0])

  return (
      <div className="w-full">
        <table className="table-cells w-full mt-1 rounded-t-lg overflow-hidden">
          <thead className="bg-black text-white text-sm">
            <tr>
              <th>Expense</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount (Ksh)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
          {displayedExpenses.length > 0 ? (displayedExpenses.map((expense, index) => (    
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>    
                <td>{expense.expense}</td>
                <td>{expense.expenseDescription}</td>
                <td>{expense.expenseCategory}</td>
                <td>Ksh. {expense.amount}</td>
                <td>{expense.date}</td>
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
